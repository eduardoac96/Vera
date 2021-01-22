using System;
using System.Collections.Generic;
using System.ComponentModel;
using VeraMobile.Models;
using VeraMobile.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace VeraMobile.Views
{
    public partial class NewItemPage : ContentPage
    {
        public Item Item { get; set; }

        public NewItemPage()
        {
            InitializeComponent();
            BindingContext = new NewItemViewModel();
        }
    }
}