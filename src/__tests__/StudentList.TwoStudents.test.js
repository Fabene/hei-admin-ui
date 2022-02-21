import { render, screen } from '@testing-library/react'
import { TestContext } from 'ra-test'
import { DataProviderContext } from 'ra-core'
import { ThemeProvider } from '@material-ui/styles'

jest.doMock('aws-amplify')
const StudentList = require('../operations/students/StudentList').default

jest.doMock('../providers/api', () => ({
  usersApi: {
    getStudents: () =>
      Promise.resolve({
        data: [
          { id: 'student1', ref: 'ref1', first_name: 'first1', last_name: 'last1' },
          { id: 'student2', ref: 'ref2', first_name: 'first2', last_name: 'last2' }
        ]
      })
  }
}))
const dataProvider = require('../providers/dataProvider').default

describe('StudentList', () => {
  it.skip('shows one page if two students', async () => {
    render(
      <DataProviderContext.Provider value={dataProvider}>
        <TestContext enableReducers>
          <ThemeProvider theme={require('../haTheme').mainTheme}>
            <StudentList resource='students' basePath='dummy' />
          </ThemeProvider>
        </TestContext>
      </DataProviderContext.Provider>
    )

    screen.getByText(/Page :\s+1/)
    screen.getByText(/Taille :\s+2/)
    expect(screen.queryByText('Précédent')).toBeNull()
  })
})