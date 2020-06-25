import React from 'react'
import Heading from '../../Components/Heading'
import {IoIosConstruct} from 'react-icons/io'
import {TiGroup} from 'react-icons/ti'
import {GiBookshelf} from 'react-icons/gi'
import {MdTransferWithinAStation} from 'react-icons/md'
import Panel from '../../Components/Panel'

export default function WhoWeServe() {
    return (
<section className="section scrollspy" id="whoweserve">
    <Heading title="Who we serve?" />
    <div className="row   p-10">
        <div className="col l3 s12 m6">
            <Panel title="Construction" text=" From the finances to the finish outs, our custom construction management solutions make it easy to track and manage the many facets of construction projects, including single-family homes, mixed-use condos, large office buildings, and everything in between. ">
                <IoIosConstruct className="display-2 center deep-purple-text"/>            
            </Panel>
            </div>
            <div className="col l3 s12 m6">
            <Panel title="Wholesale and Retail" text=" The CRM systems we have designed and supported handle comprehensive operations for wholesale and retail providers—inventory, invoicing, tracking, shipping, and more. Syberry’s expert engineers can custom-build a system that fits and improves your existing business processes. ">
                <TiGroup className="display-2 center deep-purple-text" />            
            </Panel> 
            </div>
            <div className="col l3 s12 m6">
            <Panel title="Education" text=" We're a little nerdy, so we know a lot about education. From e-learning and training portals to certification software, a custom Edunomics solution will add value for your students and organization. ">
                <GiBookshelf className="display-2 center deep-purple-text"/>            
            </Panel>
            </div>
            <div className="col l3 s12 m6 ">
            <Panel title="Transportation" text=" From dispatching and job assignments to cargo tracking, ordering automation, and performance monitoring, Edunomics custom solutions and applications add considerable value companies, working in the transportation and logistics industry. ">
                <MdTransferWithinAStation className="display-2 deep-purple-text"/>            
            </Panel>
            </div>


    </div>
</section>
    )
}
