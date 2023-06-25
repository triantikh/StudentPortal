import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tfoot,
  Select, Button, Box
} from '@chakra-ui/react'

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterFaculty, setFilterFaculty] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/student");
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleFilterChange = (e) => {
    setFilterFaculty(e.target.value);
  };

  const filteredStudents =
    filterFaculty !== "All"
      ? students.filter((student) => student.faculty === filterFaculty)
      : students;

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <>
        <Box m={12}>
          <Select
            value={filterFaculty}
            onChange={handleFilterChange}
            data-testid="filter"
            variant='filled'
            spacing={3}
          >
            <option value="All">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </Select>
          </Box>
          <Box m={12}>
          <TableContainer>
            <Table id="table-student" variant='striped' size='md'>
              <TableCaption>All Students Data</TableCaption>
              <Thead backgroundColor="#6a89cc" >
                <Tr>
                  <Th color="white" alignItems="center" >No</Th>
                  <Th color="white">Full Name</Th>
                  <Th color="white" alignItems="center">Faculty</Th>
                  <Th color="white">Program Study</Th>
                  <Th color="white" alignContent="center">Option</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr className="student-data-row">

                </Tr>
                {filteredStudents.map((student, index) => (
                  <Tr key={student.id} className="student-data-row">
                    <Td>{index + 1}</Td>
                    <Td>
                      <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                    </Td>
                    <Td>{student.faculty}</Td>
                    <Td>{student.programStudy}</Td>
                    <Td>
                      <Button
                        onClick={() => handleDelete(student.id)}
                        data-testid={`delete-${student.id}`}
                        colorScheme='blackAlpha' variant='outline'
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
              </Tfoot>
            </Table>
          </TableContainer>
          </Box>
        </>
      )}
    </>
  );
};

export default Student;