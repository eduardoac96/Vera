using Newtonsoft.Json;
using System.IO;
using System.Reflection;
using System.Runtime.Serialization.Json;
using VeraMobile.ViewModels.Catalog;
using Xamarin.Forms.Internals;

namespace VeraMobile.DataService
{
    /// <summary>
    /// Data service to load the data from json file.
    /// </summary>
    [Preserve(AllMembers = true)]
    public class CatalogDataService
    {
        #region fields

        private static CatalogDataService instance;

        private CatalogPageViewModel catalogPageViewModel;

        #endregion

        #region Constructor

        /// <summary>
        /// Creates an instance for the <see cref="CatalogDataService"/> class.
        /// </summary>
        private CatalogDataService()
        {
        }

        #endregion

        #region Properties

        /// <summary>
        /// Gets an instance of the <see cref="CatalogDataService"/>.
        /// </summary>
        public static CatalogDataService Instance => instance ?? (instance = new CatalogDataService());

        /// <summary>
        /// Gets or sets the value of catalog page view model.
        /// </summary>
        public CatalogPageViewModel CatalogPageViewModel =>
            this.catalogPageViewModel ??
            (this.catalogPageViewModel = PopulateData<CatalogPageViewModel>("ecommerce.json"));

        #endregion

        #region Methods

        /// <summary>
        /// Populates the data for view model from json file.
        /// </summary>
        /// <typeparam name="T">Type of view model.</typeparam>
        /// <param name="fileName">Json file to fetch data.</param>
        /// <returns>Returns the view model object.</returns>
        private static T PopulateData<T>(string fileName)
        { 
            T obj;

            var assembly = typeof(App).GetTypeInfo().Assembly;
            Stream stream = assembly.GetManifestResourceStream($"{assembly.GetName().Name}.Data.{fileName}");
            using (var reader = new System.IO.StreamReader(stream))
            {
                var jsonString = reader.ReadToEnd();

                //Converting JSON Array Objects into generic list    
                obj = JsonConvert.DeserializeObject<T>(jsonString);
            }

            return obj;
        }

        #endregion
    }
}