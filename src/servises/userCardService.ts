

export class UserCardService {

  public static async getsubcribed(): Promise<{
    success: boolean;
    data?: { results: [] };
  }> {
    
    const ep = `https://api.themoviedb.org/3/trending/all/day?api_key=f5baf8c74c7d5f00a242c165979d0913`;

    try {
        const subcribedUsers = await fetch(ep);

        const jsonsubcribedUsers = await subcribedUsers.json();
       
        return { success: true, data: jsonsubcribedUsers };
      } catch (error) {
        return { success: false };
      }
    }
  

  public static async getAllDocers(): Promise<{
    success: boolean;
    data?: { results: [] };
  }> {
    
    const ep = `https://api.themoviedb.org/3/movie/upcoming?api_key=f5baf8c74c7d5f00a242c165979d0913`;

    try {
        const subcribedUsers = await fetch(ep);

        const jsonsubcribedUsers = await subcribedUsers.json();
       
        return { success: true, data: jsonsubcribedUsers };
      } catch (error) {
        return { success: false };
      }
    }
    
  }




