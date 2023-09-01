import { People } from '@/data/people'
import { useAppDispatch } from '@/redux/hooks'
import { addPeople } from '@/redux/states/people'
import { useEffect } from 'react'
import { PeopleTable } from './components/PeopleTable'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addPeople(People))
  }, [])
                                                                                                                                                            
  return (
    <PeopleTable />
  )
}

export default Home