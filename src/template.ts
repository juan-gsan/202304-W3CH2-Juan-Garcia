// Import { AllCharacters } from './types/allCharacters';

// const renderDifferentClass = (character: AllCharacters) => {
//   if ('rulingYears' in character) {
//     return `
//   <li>Años de reinado: ${character.rulingYears.toLocaleString()}</li>`;
//   }

//   if ('weapon' in character) {
//     return `
//   <li>Arma: ${character.weapon}</li>
//   <li>Destreza: ${character.skills.toLocaleString()}</li>`;
//   }

//   if ('characterAdvised' in character) {
//     return `
//   <li>Asesora a: ${character.characterAdvised}</li>`;
//   }

//   if ('knight' in character) {
//     return `
//   <li>Sirve a: ${character.knight}</li>
//   <li>Peloteo: ${character.pelotismo.toLocaleString()}</li>`;
//   }

//   let _never: never;
//   _never = character;
// };

// export const createTemplate = (
//   character: AllCharacters
// ) => `<li class="character col">
//         <div class="card character__card">
//           <img src="./img/${character.name.toLowerCase()}.jpg" alt="${
//   character.name
// } ${character.house}" class="character__picture card-img-top" />
//           <div class="card-body">
//             <h2 class="character__name card-title h4">${character.name} ${
//   character.house
// }</h2>
//             <div class="character__info">
//               <ul class="list-unstyled">
//                 <li>Edad: ${character.age}</li>
//                 <li>
//                   Estado:
//                   <i class="fas fa-thumbs-up"></i>
//                 </li>
//               </ul>
//             </div>
//             <div class="character__overlay">
//               <ul class="list-unstyled">
//                 ${renderDifferentClass(character)}

//               </ul>
//               <div class="character__actions">
//                 <button data-id="${
//                   character.name
//                 }" class="character__action btn speak">habla</button>
//                 <button data-id="${
//                   character.name
//                 }" class="character__action btn die">muere</button>
//               </div>
//             </div>
//           </div>
//           <i class="${character.emoji}"></i>
//         </div>
//       </li>`;
