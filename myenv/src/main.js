import jQuery from 'jquery';
import {Hello} from './sub';

const message = 'Hello World';

const instance = new Hello();
instance.say(message);


const $ = jQuery;

const text = $('#myText').text();
$('#myText')
  .empty()
  .show();

const arr = text.split(''); 
const elements = [];

arr.map((str, index) => {
  elements[index] = $(`<span>${str}</span>`);
  $('#myText').append(elements[index]);
});

elements.map((element, index) => {
  element
    .delay(80 * index)
    .queue(function () {
      $(this).addClass('motion');
    });
});