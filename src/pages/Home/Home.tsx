import React, { useMemo, useState } from 'react'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { People } from '@/data/people'
import { Checkbox } from '@mui/material'
import { Person } from '@/models'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const findPerson = useMemo(() => (person: Person) => Boolean(selectedPeople.find(people => people.id === person.id)), [selectedPeople])

  const handleChangeSelectedPeople = (person: Person) => {
    setSelectedPeople(prev => findPerson(person) ? prev.filter(p => p.id !== person.id) : [...prev, person])
  }

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>
        <Checkbox 
          size="small" 
          checked={findPerson(params.row)}
          onChange={() => handleChangeSelectedPeople(params.row)}
        />
      </>
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'level Of Happiness',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ]
                                                                                                                                                            
  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableDensitySelector
      disableSelectionOnClick
      autoHeight
      pageSize={5}
      rowsPerPageOptions={[5]}
      getRowId={(row) => row.id}
    />
  )
}

export default Home