import GoMeddo from "@gomeddo/sdk";

const apiKey = 

const universityResourceId = 'a0Zao000000jEEvEAM'
// Id of the Room resource type.
const singleRoomResourceTypeId = 'a0Zao000000jEGXEA2'
const doubleRoomResourceTypeId = 'a0Zao000000jEI9EAM'
const studioApartmentResourceTypeId = 'a0Zao000000jEJlEAM'

const resourceResult = await gm.buildResourceRequest()
    .includeAllResourcesAt(universityResourceId)
    .getResults()
console.log(resourceResult)