import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import AppButton from '../../components/Buttons/defaultButton';

const TrackedGeoDataTable = ({geoData}) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const features = geoData.features || [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const handleViewDetail = (index) => {
    const [lng, lat] = features[index].geometry.coordinates[0][0];
    navigate('/construction/trackerDetails/changePoint', { state: { lng, lat } });
    console.log(lng, lat);
  }

  const rows = geoData.features && Array.isArray(geoData.features) ? geoData.features : [];
  const filteredRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <th>Type</th>
              <th>Geometry Type</th>
              <th>Coordinates</th>
              <th>Detailed View</th>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((feature, index) => (
              <TableRow key={index}>
                <TableCell>{feature.type || 'N/A'}</TableCell>
                <TableCell>{feature.geometry && feature.geometry.type || 'N/A'}</TableCell>
                <TableCell>
                  {feature.geometry && feature.geometry.coordinates
                    ? JSON.stringify(feature.geometry.coordinates)
                    : 'N/A'}
                </TableCell>
                <TableCell>
                  <AppButton variant={'text'} text={'view'} onClick={() => handleViewDetail(index)}></AppButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TrackedGeoDataTable;
