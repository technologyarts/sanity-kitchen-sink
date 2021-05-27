export default {
  widgets: [
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
                  buildHookId: '60af376e4ce80094e4f237f9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rci77m21',
                  apiId: 'eed94cc3-6e42-4869-94cf-018303303351'
                },
                {
                  buildHookId: '60af376e2d17538463435a6e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iwx7r1qd',
                  apiId: '529bd226-11b9-43f7-8dda-63a4c8a6a450'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/technologyarts/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iwx7r1qd.netlify.app', category: 'apps'}
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
