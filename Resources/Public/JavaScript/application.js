// Turbo is a tool to have the speed of a single-page without
// having to write any JavaScript:
// https://turbo.hotwired.dev
import * as Turbo from '@hotwired/turbo'

// With StimulusJS you add sprinkles of JavaScript to your page to make it shine:
// https://stimulus.hotwired.dev
import { Application } from '@hotwired/stimulus'
import Alpine from 'alpinejs'
import HelloController from 'controllers/hello_controller'

window.Stimulus = Application.start()

// Register stimulus controllers here. Read the documentation how stimulus works:
// https://stimulus.hotwired.dev/reference/controllers
Stimulus.register('hello', HelloController)

// Register alpinejs plugins here. For example the collapse plugin:
// https://alpinejs.dev/plugins/collapse
window.Alpine = Alpine
Alpine.start()