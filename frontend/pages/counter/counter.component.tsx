import { Button, Group, Stack, Text } from "@mantine/core"
import { useAppDispatch, useAppSelector } from "../../store"
import { decrement, increment, incrementByAmount, reset } from "../../store/counter.slice"
import { useState } from "react"

function Counter() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  const [amount, setAmount] = useState<number>(0)


  return(
    <Stack>
      <Group>
          <Button onClick={() => setAmount(amount - 1)}>-</Button>
          <Text>{amount}</Text>
          <Button onClick={() => setAmount(amount + 1)}>+</Button>
          <Button onClick={() => setAmount(0)}>reset</Button>
          </Group>
          <Group>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <Text>{count}</Text>
          <Button onClick={() => dispatch(increment())}>+</Button>
          <Button onClick={() => dispatch(reset())}>reset</Button>
          <Button onClick={() => dispatch(incrementByAmount(amount))}>incremebt by: {amount}</Button>
      </Group>
    </Stack>
  )
}

export default Counter;
