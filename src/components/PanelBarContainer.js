import React from 'react';
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { panelBarData } from '../data/usersData';

const imageUrl = (imageName) => ('img/'+ imageName +'.jpeg');

export const PanelBarContainer = () => (
  <PanelBar >
    <PanelBarItem expanded={true} title="Usuarios Frecuentes">
      <div>
        {panelBarData.teammates.map((item, idx) => (
          <div className={idx === 0 ? 'teammate k-state-selected' : 'teammate'} id={item.firstName + ' ' + item.lastName} key={idx}>
            <img src={imageUrl(item.firstName)} alt={item.firstName + ' ' + item.lastName} />
            <span className="mate-info">
              <h2>{item.firstName + ' ' + item.lastName}</h2>
              <p>{item.mail}</p>
            </span>
          </div>
        ))}
      </div>
    </PanelBarItem>
    <PanelBarItem title={'Ultimas Compras'} >
      <PanelBarItem title={'Reportes por usuario'} >
        {panelBarData.salesReports.map((item, idx) => (
          <PanelBarItem title={item.title} key={idx} />
        ))}
      </PanelBarItem >
    </PanelBarItem>

  </PanelBar>
)