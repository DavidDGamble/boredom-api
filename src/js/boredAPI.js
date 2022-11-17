export default class BoredService {
  static async getUnBored(type, participants) {
    try {
      const response = await fetch(`http://www.boredapi.com/api/activity?type=${type}&participants=${participants}`);
      const jsonifiedResponse = await response.json();
      if(!response.ok){
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }

  static async randomUnBored() {
    try {
      const response = await fetch(`http://www.boredapi.com/api/activity/`);
      const jsonifiedResponse = await response.json();
      if(!response.ok){
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}