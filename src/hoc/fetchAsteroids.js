import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const fetchAsteroids = graphql(gql`
  query {
    getNeos(first: 6) {
      _id,
      name,
      absolute_magnitude_h,
      image,
      is_potentially_hazardous_asteroid,
      close_approach_data {
        relative_velocity {
          kilometers_per_hour
        }
      }
      estimated_diameter {
        kilometers {
          estimated_diameter_min,
          estimated_diameter_max
        }
      }
      orbital_data {
        first_observation_date,
        last_observation_date,
        orbital_period,
        perihelion_distance
      }
    }
  }
`)

export default fetchAsteroids