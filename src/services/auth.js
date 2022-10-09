/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
export default httpClient => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post("/auth/login", {
      email,
      password,
    })
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      }
    }

    return {
      data: response.data,
      errors,
    }
  }
})
