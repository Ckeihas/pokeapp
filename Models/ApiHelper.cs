using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace pokeapitesti.Models
{
    public static class PokeApi
    {
        const string url = "https://api.pokemontcg.io/v2/cards/";

        public static async Task<Rootobject> GetRandomJoke(string category)
        {
            string fullUrl = url + "/" + category;
            Rootobject response = await ApiHelper.RunAsync<Rootobject>(fullUrl, "");
            return response;
        }
    }


    public static class ApiHelper
    {
        // create HTTP client
        private static HttpClient GetHttpClient(string url)
        {
            var client = new HttpClient { BaseAddress = new Uri(url) };
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return client;
        }

        public static async Task<T> RunAsync<T>(string url, string urlParams)
        {
            try
            {
                using (var client = GetHttpClient(url))
                {
                    // send GET request
                    HttpResponseMessage response = await client.GetAsync(urlParams);

                    if (response.StatusCode == HttpStatusCode.OK)
                    {
                        var json = await response.Content.ReadAsStringAsync();

                        // JSON to an object
                        var result = JsonSerializer.Deserialize<T>(json);
                        return result;
                    }

                    return default(T);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return default(T);
            }
        }
    }
}
