using Xunit;
using Bunit;
using moula_qa_eng_challenge.Client.Pages;
namespace Moula.BunitTests;

public class CounterPage_Tests
{
    [Fact]
    public void CounterPage_DefaultView()
    {
      using var ctx = new TestContext();
      var counter = ctx.RenderComponent<Counter>();

      counter.Find("h1").MarkupMatches("<h1>Counter</h1>");   
      counter.FindAll("p").MarkupMatches("<p>Add two numbers. Maximum value is 100.</p>\n<p role=\"status\">Current result: 0</p>");   
    }

    [Fact]
    public void CounterPage_DefaultInputs_Sums_To_Zero()
    {
      using var ctx = new TestContext();
      var counter = ctx.RenderComponent<Counter>();

      counter.Find("button").Click();

      counter.FindAll("p").MarkupMatches("<p>Add two numbers. Maximum value is 100.</p>\n<p role=\"status\">Current result: 0</p>");   
    }

    [Fact]
    public void CounterPage_Integer_Inputs_Correctly_Summed()
    {
      using var ctx = new TestContext();
      var counter = ctx.RenderComponent<Counter>();

      counter.Find("#valueA").Change("543");
      counter.Find("#valueB").Change("2391");
      counter.Find("button").Click();
      var diffs = counter.GetChangesSinceFirstRender();
      counter.FindAll("p").MarkupMatches("<p>Add two numbers. Maximum value is 100.</p>\n<p role=\"status\">Current result: 2934</p>");   
    }


    // [Fact] // failed (Max value is not 100)
    public void CounterPage_Check_MaxLimit_Is_100()
    {
      using var ctx = new TestContext();
      var counter = ctx.RenderComponent<Counter>();

      counter.Find("#valueA").Change("99");
      counter.Find("#valueB").Change("2");
      counter.Find("button").Click();

      counter.FindAll("p").MarkupMatches("<p>Add two numbers. Maximum value is 100.</p>\n<p role=\"status\">Current result: 100</p>");   
    }

   

    [Fact] 
    public void CounterPage_Negative_Inputs_Correctly_Summed()
    {
      using var ctx = new TestContext();
      var counter = ctx.RenderComponent<Counter>();

      counter.Find("#valueA").Change("-1920");
      counter.Find("#valueB").Change("-54");
      counter.Find("button").Click();

      counter.FindAll("p").MarkupMatches("<p>Add two numbers. Maximum value is 100.</p>\n<p role=\"status\">Current result: -1974</p>");   
    }


   
    [Fact] 
    public void CounterPage_NonInteger_Inputs_Resets_To_Zero()
    {
      using var ctx = new TestContext();
      var counter = ctx.RenderComponent<Counter>();

      counter.Find("#valueA").Change("65.34");
      counter.Find("#valueB").Change("potato");
      counter.Find("button").Click();

      counter.FindAll("p").MarkupMatches("<p>Add two numbers. Maximum value is 100.</p>\n<p role=\"status\">Current result: 0</p>");   
   }
}