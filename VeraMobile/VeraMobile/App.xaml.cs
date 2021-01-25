using System;
using VeraMobile.Services;
using VeraMobile.Views;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace VeraMobile
{
    public partial class App : Application
    {
        public static string BaseImageUrl { get; } = "https://cdn.syncfusion.com/essential-ui-kit-for-xamarin.forms/common/uikitimages/";

        public App()
        {
            InitializeComponent();

            DependencyService.Register<MockDataStore>();
            MainPage = new VeraMobile.Views.Catalog.CatalogListPage();
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
