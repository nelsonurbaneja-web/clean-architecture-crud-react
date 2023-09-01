import { Person } from '@/models';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeFavorite } from '@/redux/states/favorites';
import { IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export interface FavoriteTableInterface {}

const FavoriteTable : React.FC<FavoriteTableInterface> = () => {
	const dispatch = useAppDispatch()
  const favorites = useAppSelector(state => state.favorites)
	
  const handleChangeSelectedPeople = (person: Person) => {
    dispatch(removeFavorite(person))
  }

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>
			 	<IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleChangeSelectedPeople(params.row)}>
          <DeleteIcon />
        </IconButton>
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
			rows={favorites}
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

export default FavoriteTable;
