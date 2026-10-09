import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // 1. Auto-assign public permissions for dictionary entries
    try {
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const actions = ['api::entry.entry.find', 'api::entry.entry.findOne'];
        const existingPerms = await strapi.db.query('plugin::users-permissions.permission').findMany({
          where: {
            role: publicRole.id,
            action: { $in: actions },
          },
        });

        for (const action of actions) {
          if (!existingPerms.some((p: any) => p.action === action)) {
            await strapi.db.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: publicRole.id,
              },
            });
            strapi.log.info(`[Dictionary] Granted public permission for ${action}`);
          }
        }
      }
    } catch (err) {
      strapi.log.warn('[Dictionary] Could not auto-assign public permissions:', err);
    }

    // 2. Seed initial academic Igbo dictionary entries if database is empty
    try {
      const count = await strapi.documents('api::entry.entry').count({});
      if (count === 0) {
        strapi.log.info('[Dictionary] Seeding initial Igbo academic dictionary entries...');

        const seedEntries = [
          {
            headword: 'mmīri',
            simplified: 'mmiri',
            partOfSpeech: 'ahà (noun)',
            phonetic: '[m̀.míː.ɾì]',
            dialect: 'Igbo Izugbe (General Igbo)',
            definitions: [
              {
                id: 1,
                meaning: 'Ife na-erū erū ǹkè ife dị̄ ndụ̀ niīle nà-àñụ mà tosị màkà ikwàdò ndụ̀.',
                meaning_en: 'A clear liquid substance essential for all forms of living things; water.',
                examples: [
                  {
                    igbo: 'Mmīri bụ̀ mkpụrụ ndụ̀.',
                    english: 'Water is life.'
                  },
                  {
                    igbo: 'Àhụ mmadụ̀ tòsị̀ mmīri ijì lụọ ọlụ̄.',
                    english: 'The human body requires water to function.'
                  }
                ]
              }
            ],
            etymology: 'Okwu ochie sitere n’ala Igbo maka mmiri na-eru eru.',
            crossReferences: 'miri, iyi, mmiri ozuzo',
            notes: 'Academic standard dictionary entry with tone diacritics and academic typography.'
          },
          {
            headword: 'akwụ̄kwọ',
            simplified: 'akwukwo',
            partOfSpeech: 'ahà (noun)',
            phonetic: '[à.kʷʊ́.kʷɔ́]',
            dialect: 'Igbo Izugbe (General Igbo)',
            definitions: [
              {
                id: 1,
                meaning: 'Ihe a kụkọtara ọnụ e ji ede ma ọ bụ agụ ihe; ma ọ bụ akwụkwọ osisi.',
                meaning_en: 'A book, written document, or foliage/leaf of a plant.',
                examples: [
                  {
                    igbo: 'Ọ na-agụ akwụ̄kwọ ụtụtụ na abalị.',
                    english: 'He reads books morning and night.'
                  },
                  {
                    igbo: 'Ụmụakwụkwọ na-aga n’ụlọ akwụ̄kwọ.',
                    english: 'The students are going to school.'
                  }
                ]
              }
            ],
            etymology: 'Sitere n’aha akwụkwọ osisi e ji emebu ihe odide.',
            crossReferences: 'edemede, agụmagụ',
            notes: 'Okwu gụnyere akwụkwọ ọgụgụ na akwụkwọ ndụ.'
          },
          {
            headword: 'asụ̄sụ̀',
            simplified: 'asusu',
            partOfSpeech: 'ahà (noun)',
            phonetic: '[à.sʊ́.sʊ̀]',
            dialect: 'Igbo Izugbe (General Igbo)',
            definitions: [
              {
                id: 1,
                meaning: 'Usoro okwu na ụdaolu nke mmadụ ma ọ bụ agbụrụ na-eji ekwurịta okwu.',
                meaning_en: 'Language; system of communication used by a particular community or country.',
                examples: [
                  {
                    igbo: 'Asụ̄sụ̀ Igbo bụ asụsụ anyị ketara n’aka ndị nna nna anyị.',
                    english: 'The Igbo language is the heritage we received from our ancestors.'
                  }
                ]
              }
            ],
            etymology: 'Sitere na mgbọrọgwụ ngwaa “sụ́” (ikwu okwu).',
            crossReferences: 'okwu, olumba',
            notes: 'Okwu dị mkpa maka ọmụmụ asụsụ Igbo.'
          }
        ];

        for (const entry of seedEntries) {
          await (strapi.documents('api::entry.entry') as any).create({
            data: entry,
            status: 'published'
          });
        }

        strapi.log.info(`[Dictionary] Successfully seeded ${seedEntries.length} initial entries.`);
      }
    } catch (seedErr) {
      strapi.log.warn('[Dictionary] Seeding skipped or error:', seedErr);
    }
  },
};
