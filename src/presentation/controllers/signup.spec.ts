import {SignUpController} from './signup'
describe('SignUp Controller', () => {
  test('Should return 400 if no name is provider', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body:{    
        email: 'any_email@mail.com',
        password: 'any_passoword',
        passwordConfirmation: 'any_passoword'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })   
})