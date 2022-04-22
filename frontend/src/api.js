import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  
  static token;

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);
    
  

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getAllCompanies() {
    let res = await this.request('companies');
   
    return res.companies;
  }

  static async getAllJobs() {
    let res = await this.request('jobs');
    return res.jobs;
  }

  static async getCompanies(name) {
    let res = await this.request('companies', {name});
    return res.companies;
  }

  static async register(data) {
    let res = await this.request('auth/register' , data , 'post');
    this.token = res.token;
    console.log(res.token);
    return res.token;
  }

  static async login(data) {
    let res = await this.request('auth/token', data , 'post')
    this.token = res.token;
    return res.token
  }

  static async editProfile(username , data) {
    let res = await this.request(`users/${username}` , data , 'patch');
    console.log(res)
    return res
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`)
    return res.user;
  }

  static async applyToJob(username , jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}` , {} , 'post');
    return res
  }


}


export default JoblyApi;

