// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery

// materialize-sprockets is causing js errors in rspec only. seams to be an issue with waves.
// This happens regardless of if I use a gem, or bring them in manually.
//=# require materialize-sprockets
//= require materialize/jquery.easing.1.3
//= require materialize/animation
//= require materialize/velocity.min
//= require materialize/leanModal
//= require materialize/hammer.min
//= require materialize/jquery.hammer
//= require materialize/global
//= require materialize/collapsible
//= require materialize/dropdown
//= require materialize/leanModal
//= require materialize/materialbox
//= require materialize/parallax
//= require materialize/tabs
//= require materialize/tooltip
//=# require materialize/waves # :(
//= require materialize/toasts
//= require materialize/sideNav
//= require materialize/scrollspy
//= require materialize/forms
//= require materialize/slider
//= require materialize/cards
//= require materialize/pushpin
//= require materialize/buttons
//= require materialize/transitions
//= require materialize/scrollFire
//= require materialize/date_picker/picker
//= require materialize/date_picker/picker.date
//= require materialize/character_counter

//= require jquery_ujs
//= require turbolinks
//= require angular
//= require mutant-transition
//= require_tree .
