import axios from "axios"
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCUHVHd2xWaXhPY05yQU8xekJjY0N4Z1NoMGVjc05IT3VHa2t0TE9pRTFlMmd3ekhoNyIsImp0aSI6ImVmZjYxYjAxODllMDI5NDUyN2Q3ZThhMmQzZmJhOGRmM2NjZDJhZDM5ZTI0MDQ1N2YxNTZiZDlkOTU1NmJhNTVkYzY4MDI5MTE5YmExZjhmIiwiaWF0IjoxNjU3MjE5NTU2LCJuYmYiOjE2NTcyMTk1NTYsImV4cCI6MTY1NzIyMzE1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZF9UOOqIlPZ1qezC-LP5nprYX5DzopGuLqZ80FMMJW1X9Vtuog3FeqfcdJk2_1XYLRqaUYYxeoLNjyVjVoqXGS8dlSnqsiHYE97o1JoZOg43HKIUNeBUJ_3b65fLsOijXsfFSs_EyxyuRdS6LyLLi3pxIgv5PzfBOZMefRSFM7UoS5uEntlqqUu5aI-DwG-W6TRoBbhh38kEX2kme2kyG49Mc-euS4OkcFKH31edRfpHvMFyVxILz3AFrCplk1Io7Vr10MIwW1EI21Wue10KKmGfic29mwVWqp53Ii4CtrqpRUiI4Lk2_VOd_uNIvmSLni_o-n4s2ruJ61KM5PVw4w'

export const fetchAnimals = async () => {

	const response = await axios.get('https://api.petfinder.com/v2/animals', {
			headers: { Authorization: `Bearer ${token}` }
	})

	return response.data
}




// let token, tokenType, expires


// // Get OAuth token
// const getOAuth = function() {
//     return fetch('https://api.petfinder.com/v2/oauth2/token', {
//         method: 'POST',
//         body: 'grant_type=client_credentials&client_id=' + "" + '&client_secret=' + "",
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     }).then(function(resp) {
//         return resp.json();
//     }).then(function(data) {
//         // Store token data
//         token = data.access_token;
//         tokenType = data.token_type;
//         expires = new Date().getTime() + (data.expires_in * 1000);
//     });
// };

// // Make call if token expired
// export const fetchAll = async () => {
//     // If current token is invalid, get a new one
//     if (!expires || expires - new Date().getTime() < 1) {
//        await getOAuth()
// 	   fetchAnimals()
//     }
// };