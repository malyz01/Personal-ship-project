
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          ship_name: "Symphony of the Seas",
          img: ,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448,
          Draft: 9.322,
          Height: 72.1,
          Loaded_Displacement: 120000,
          Deadweight: 18095,
          Review: '' 
        },
        {
          id: 2,
          ship_name: 'Marella Celebration' ,
          img: ,
          Gross_Tonnage: ,
          Passenger_Full_Capacity: ,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448,
          Draft: 9.322,
          Height: 72.1,
          Loaded_Displacement: 120000,
          Deadweight: 18095,
          Review: ''
        },
        {
          id: 3,
          ship_name: 'Queen Mary 2',
          img:   ,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: ''
        },
        {
          id: 4,
          ship_name: Symphony of the Seas,
          img:   ,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: ''
        },
        {
          id: 5,
          ship_name: Symphony of the Seas,
          img:   ,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '' 
        },
        {
          id: 6,
          ship_name: Symphony of the Seas,
          img:   ,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: ''       
        },
        {
          id: 7,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: ''    
        },
        {
          id: 8,
          ship_name: Symphony of the Seas,
          img:    ,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '' 
        },
        {
          id: 9,
          ship_name: Symphony of the Seas,
          img:    ,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '' 
        },
        {
          id: 10,
          ship_name: Symphony of the Seas,
          img:    ,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '' 
        },
        {
          id: 11,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '' 
        },
        {
          id: 12,
          ship_name: ,
          img: ''
          Gross_Tonnage: ,
          Passenger_Full_Capacity: ,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '' 
        },
        {
          id: 13,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '', 
        },
        {
          id: 14,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '', 
        },
        {
          id: 15,
          ship_name: 'Symphony of the Seas',
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '', 
        },
        {
          id: 16,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '', 
        },
        {
          id: 17,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '', 
        },
        {
          id: 18,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '', 
        },
        {
          id: 19,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '', 
        },
        {
          id: 20,
          ship_name: Symphony of the Seas,
          img: '',
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448
          Draft: 9.322
          Height: 72.1
          Loaded_Displacement: 120,000
          Deadweight: 18095
          Review: '', 
        }
      ]);
    });
  };
