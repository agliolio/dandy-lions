using Xunit;
using Bunit;
using moula_qa_eng_challenge.Client.Pages;
namespace Moula.BunitTests;

public class HomePage_Tests
{
    [Fact]
    public void HomePage_DefaultView()
    {
      using var ctx = new TestContext();
      var home = ctx.RenderComponent<Index>();

      home.Find("h1").MarkupMatches("<h1>Hello, world!</h1>");   
    }
}