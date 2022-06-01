import React from 'react'

function Records() {
  return (
    <div>

        <section class="stats" id="stats">
            <h2>Records</h2>
                <div class="container-stats">
                    <div class="box">
                        {/* <i class="far fa-user fa-2x fa-fw"></i> */}
                        <span class="number" data-goal="150">0</span>
                        <span class="text">Patients</span>
                    </div>
                    <div class="box">
                        {/* <i class="fas fa-code fa-2x fa-fw"></i> */}
                        <span class="number" data-goal="135">0</span>
                        <span class="text">Medical Beds</span>
                    </div>
                    <div class="box">
                        {/* <i class="fas fa-globe-asia fa-2x fa-fw"></i> */}
                        <span class="number" data-goal="50">0</span>
                        <span class="text">Doctors</span>
                    </div>
                    <div class="box">
                        {/* <i class="far fa-money-bill-alt fa-2x fa-fw"></i> */}
                        <span class="number" data-goal="500">0</span>
                        <span class="text">Winning Awards</span>
                    </div>
                </div>
        </section>

    </div>
  )
}

export default Records