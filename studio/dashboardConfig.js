export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6120996fb800f673332196a3',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-r1hikbby',
                  apiId: 'aa15a989-004a-4891-998d-5f2cc891f898'
                },
                {
                  buildHookId: '6120996f3aa06f7848ae32f7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-n6jmxiuq',
                  apiId: '0c0a44d7-797f-410a-b18b-287cd2497018'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sanchithasharma/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-n6jmxiuq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
