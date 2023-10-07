import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        console.log(
            "Hello World, from a StimulusJS controller. "
            + "Replace my functionality with something useful. "
            + "I'm living at EXT:pagedoctor_starter/Resources/Public/JavaScript/controllers/hello_controller.js"
        )
    }
}