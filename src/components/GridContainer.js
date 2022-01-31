import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from '../data/ProductsData';


export const GridContainer = () => (

  <div>
    <Grid style={{ height: '300px' }} data={gridData}>
      <Column field="ProductID" title="Id" width="40px" />
      <Column field="Name" title="Nombre" width="180px" />
      <Column field="Category.CategoryName" title="Categorías" width="150px" />
      <Column field="Price" title="Precio" width="100px" />
      <Column field="Size" title="Tamaño" width= "200px"/>
      <Column field="Discontinued" width="130px"
        cell={(props) => (
          <td>
            <input className="k-checkbox" type="checkbox" disabled defaultChecked={props.dataItem[props.field]} />
            <label className="k-checkbox-label"></label>
          </td>
        )} />
    </Grid>
  </div>
);