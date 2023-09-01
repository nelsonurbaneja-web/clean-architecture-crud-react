import { Person } from '@/models';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addFavorite } from '@/redux/states/favorites';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

export interface PeopleTableInterface {}

const PeopleTable : React.FC<PeopleTableInterface> = () => {
  const dispatch = useAppDispatch()
  const peoples = useAppSelector(state => state.people)
  const favorites = useAppSelector(state => state.favorites)

  const findPerson = (person: Person) => Boolean(favorites.find(people => people.id === person.id))
	const filterPerson = (person: Person) => favorites.filter(p => p.id !== person.id)

  const handleChangeSelectedPeople = (person: Person) => {
    const selected = findPerson(person) ? filterPerson(person) : [...favorites, person]
    dispatch(addFavorite(selected))
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
	
	return  (
		<DataGrid
			rows={peoples}
			columns={columns}
			disableDensitySelector
			disableSelectionOnClick
			autoHeight
			pageSize={5}
			rowsPerPageOptions={[5]}
			getRowId={(row) => row.id}
		/>
	)
};

export default PeopleTable;
