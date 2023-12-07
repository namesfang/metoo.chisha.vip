import { notBlank } from "./constraints/not-blank"

export function validator () {

}

validate.forEach((validator)=> {
  validator.validate()
})

validator(data, [
  {
    name: [
      notBlank,
    ]
  }
])

validator(data)
  .data(data)
  .add('name', [])
  .add('name', [])
  .add('name', ()=> {

  })
  .then(()=> {

  })
  .catch(()=> {
    console.log('er', 'error')
  })

//
const v = async ()=> {
  try {
    await validator(data, [
      {
        name: [
          // BasicConstraints.blank(),
          // BasicConstraints.notBlank(),
        ]
      }
    ])
    
    await validator()
      .data(data)
      .add({
        name: 'name',
        label: '姓名',
        rule: 'blank',
        rules: BasicConstraints.blank,
      })
      .add('name', '姓名', [
        {
          type: 'blank',
          message: '${name}不能为空',
        },
        {
          type: 'mobile',
          message: '',
        }
      ])
      .add('name', [])
      .add('name', ()=> {
    
      })
  } catch (error) {
    
  }
}

