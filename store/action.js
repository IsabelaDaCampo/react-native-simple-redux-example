export const increment = (num = 1) => (
  {
       type: 'INCREMENT',
       payload: num

   }
)

export const decrement = (num = 1) => (
  {
       type: 'DECREMENT',
       payload: num

   }
)