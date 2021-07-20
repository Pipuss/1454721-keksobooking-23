import{numberOfOffers} from './variables.js';
import{getRandomInteger} from './utils.js';
import{similarOffers} from './generate-template-data.js';
import{createSimilarElement} from './generate-similar-offers.js';

createSimilarElement(similarOffers[getRandomInteger(0, numberOfOffers)]);

