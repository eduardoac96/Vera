using System;
using VeraMobile.Services;
using VeraMobile.Views;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace VeraMobile
{
    public partial class App : Application
    {

        public App()
        {
            InitializeComponent();

            DependencyService.Register<MockDataStore>();
            MainPage = new VeraMobile.Views.Forms.LoginPage();
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
