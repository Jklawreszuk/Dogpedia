using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Dogpedia
{
    public class Dog
    {
        public int Id { get; set; }
        [StringLength(280),DisplayName("Opis")]
        public string Description { get; set; }
        [Required,StringLength(50),DisplayName("Nazwa")]
        public string Name { get; set; }
        [Range(0,100),DisplayName("Długość życia")]
        public sbyte Lifespan { get; set; }
        [DataType(DataType.Currency),DisplayName("Cena")]
        public decimal Price { get; set; }
        [DisplayName("Waga")]
        public float Weight { get; set; }
        [StringLength(60),DisplayName("Kraj pochodzenia")]
        public string CountryOfOrigin { get; set; }

    }
}