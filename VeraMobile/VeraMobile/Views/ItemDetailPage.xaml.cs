using System.ComponentModel;
using VeraMobile.ViewModels;
using Xamarin.Forms;

namespace VeraMobile.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}