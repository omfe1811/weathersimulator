/* Challenge Questions:
1.How will you structure your weather data using a class or struct in C#?
storing values as class properties and generating weather with class method
2.How can you ensure the weather values are randomized every time the program runs?
By using rnd.Next(min value, max value)
3.How will you implement the warning for extreme weather conditions?
checking with if function  if (weather.temperature < -9 && weather.condition == "Snow")
 {
    System.Console.WriteLine("Warning: It's extremely cold and snowy. Do not go outside!");
}
 */

using System;

namespace WeatherApp
{


    class Program
    {
        static void Main(string[] args)
        {
            Weather weather = new Weather();
            weather.NewWeather();
            System.Console.WriteLine(@$" 
Today's weather: 
Temperature: {weather.temperature}°C,
Condition: {weather.condition},
Cloudiness: {weather.cloudCoverage}%
");
            if (weather.temperature < -9 && weather.condition == "Snow")
            {
                System.Console.WriteLine("Warning: It's extremely cold and snowy. Do not go outside!");
            }
        }
    }

    public class Weather
    {

        static Random rnd = new Random();
        public int temperature = 0;
        public string condition = "";
        public int cloudCoverage = 0;

        public void NewWeather()
        {
            string[] conditions = ["Clear", "Rain", "Snow"];
            this.temperature = rnd.Next(-10, 41);
            this.condition = conditions[rnd.Next(conditions.Length)];
            this.cloudCoverage = rnd.Next(101);
        }
    }

}




