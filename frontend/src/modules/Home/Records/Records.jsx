import React from 'react'
import CountUp from 'react-countup';

function Records() {
  return (
    <div>

        <section class="stats" id="stats">
            <h2>Records</h2>
                <div class="container-stats">
                    <div class="box">
                        {/* <i class="far fa-user fa-2x fa-fw"></i> */}
                        <span class="number" data-goal="150"><CountUp end={500} duration={9} /></span>
                        <span class="text">Patients</span>
                    </div>
                    <div class="box">
                        {/* <i class="fas fa-code fa-2x fa-fw"></i> */}
                        <span class="number" data-goal="135"><CountUp end={350} duration={9} /></span>
                        <span class="text">Medical Beds</span>
                    </div>
                    <div class="box">
                        {/* <i class="fas fa-globe-asia fa-2x fa-fw"></i> */}
                        <span class="number" data-goal="50"><CountUp end={40} duration={9}/></span>
                        <span class="text">Doctors</span>
                    </div>
                    <div class="box">
                        {/* <i class="far fa-money-bill-alt fa-2x fa-fw"></i> */}
                        <span class="number" data-goal="500"><CountUp end={20} duration={9}/></span>
                        <span class="text">Winning Awards</span>
                    </div>
                </div>
        </section>

    </div>
  )
}

export default Records