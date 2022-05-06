using Xunit;
using Bunit;
using moula_qa_eng_challenge.Client.Pages;
namespace Moula.BunitTests;
using System.Collections.Generic;
using System.Text.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
public class FetchData_Tests
{
    [Fact]
    public void FetchDataPage_DefaultView()
    {
      using var ctx = new TestContext();
      var forecast = ctx.RenderComponent<FetchData>();

      forecast.Find("h1").MarkupMatches("<h1>Weather forecast</h1>");   
      forecast.Find("p").MarkupMatches("<p>This component demonstrates fetching data from the server.</p>");   
      forecast.Find("button").MarkupMatches("<button class=\"btn btn-primary\" >Fetch</button>");   
    }


        // [Fact]
    // public void FetchDataPage_Shows_WeatherForecast_Upon_Click()
    // {
    //   using var ctx = new TestContext();
    //   var forecast = ctx.RenderComponent<FetchData>();
    //   // TODO
    //   var mock = ctx.Services.AddMockHttpClient();
    //   mock.When("/weatherforecast").RespondJson(new List<Data>{});
    //   forecast.Find("button").Click();

    //   forecast.Find("thead").MarkupMatches("<h1>Weather forecast</h1>");   
    // }
}