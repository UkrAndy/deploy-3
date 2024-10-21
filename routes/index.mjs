import { Router } from 'express'
const router = Router()

function getMeal(age) {
  let res
  if (age < 7) res = 'Каша'
  else if (age < 18) res = 'Голубці'
  else if (age < 21) res = 'Пиво'
  else res = 'Шовдарь !!!'
  return res
}

router.get('/meals/:age', (req, res) => {
  const age = parseInt(req.params['age'])

  res.render('meals', {
    title: 'Що на вечерю!',
    mealTitle: getMeal(age),
    age,
    wishes: ['ПЕРЕМОГА', 'МИР', 'ЗДОРОВ"Я'],
  })
})

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
    ownerName: 'Petro',
    age: 12,
  })
})
export default router
