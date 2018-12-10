import React from 'react'
import Helmet from 'react-helmet'

import Header from '../../components/header'
import Layout from '../../components/layout'


class PunchInPage extends React.Component {
  
  render (){
    return (
      <Layout>
        <Helmet
          title={"Punch In FAQ"}
          meta={[
            { name: 'description', 
             content: 'Punch In is a simple and efficient worktimer made to help you keep track of your work. Runs smoothly in the background while you focus on what you do best.' },
            { property: 'og:title', 
             content: 'Punch In FAQ' },
            { property: 'og:url', 
             content: 'http://www.wearekidpilot.com/punchin/faq' },
            { property: 'og:description', 
             content: 'Punch In is a simple and efficient worktimer made to help you keep track of your work. Runs smoothly in the background while you focus on what you do best.' },
          ]}
        >
          <html lang="en" />

        </Helmet>
        <div className="help">
          <Header />
          <div className="custom-container">
            <h3>Punch In FAQ</h3>
            
            <h5 className="bold heading">Can I manually add or remove time from a project?</h5>
            <h5>Absolutely! Whilst in project view, simply double click/tap a project's time under the 'Total Time' column and put in your desired time.</h5>
            
            <h5 className="bold heading">Can I view all of a project's start/stop entries?</h5>
            <h5>Yes, by opening the log. 'View > Session Log' (CMD+L).</h5>
            
            <h5 className="bold heading">Is it possible to view combined times and earnings for multiple projects?</h5>
            <h5>Yes, this can easily be achieved by CMD/SHIFT selecting the projects you wish to view. The combined times and earnings will then be shown in the window header.</h5>
            
            <h5 className="bold heading">Can I import my projects' data into Excel or Numbers?</h5>
            <h5>Yes. Select the project/s you wish to export and choose 'File > Export' (CMD+E). If you would like to have sessions included then be sure to check the 'Include sessions' option located at the bottom of the export dialog window.</h5>
            
            <h5 className="bold heading">I'm worried about my data, is it possible to backup Punch In?</h5>
            <h5>Yes. Simply choose 'File > Backup Database' (CMD+B) and save to your preferred location.</h5>
            
            <h5 className="bold heading">How do I restore a backup?</h5>
            <h5>File > Restore Backup' (CMD+R), then locate your backup file.</h5>
            
            <h5 className="bold heading">How do I print?</h5>
            <h5>Unfortunately it is not currently possible to print from within Punch In. We suggest that if you need to print then the best way would be to export your data and open in a program such as Excel or Numbers and print from there.</h5>
            
            <h5 className="bold heading">Can I edit sessions?</h5>
            <h5>A session can be deleted but start and stop points cannot be edited at this time. Notes in sessions can be edited.</h5>
            
            <h5 className="bold heading">How do I add a note?</h5>
            <h5>Simply double click on the ‘Notes’ column on the project line where you want to add a note.</h5>
            
            <h5 className="bold heading">How do I setup Dropbox syncing?</h5>
            <h5>You can set this up through the Punch In Preferences and Punch In Settings on Mac and iOS, respectively. To use Dropbox and sync your Punch In data, follow these directions: <br/><br/>
              <ol>
                <li>
                  Ensure that the Dropbox app is installed and running on your computer. If you do not yet have the Dropbox app, download and install it.
                </li>
                <li>
                  Open Punch In’s preferences (CMD+,) on your Mac, settings on your iOS device, and click the ‘Link’ button. Your default web browser will take you to the Dropbox website asking you to connect Punch In with your Dropbox account.
                </li>
                <li>
                  Click ‘Allow’ and you are done!
                </li>
              </ol>
            </h5>
            
            <h5 className="bold heading">Can I start a project without adding a Client?</h5>
            <h5>Sure! After adding a new project simply click cancel when the client option appears.</h5>
            
            <h5 className="bold heading">Still need help?</h5>
            <h5>If you are unable to find an answer to your question here, please feel free to <a className="bold" href="mailto:tower@wearekidpilot.com">contact us</a> or ping us <span className="bold">@wearekidpilot</span> on Twitter. We'll get back to you as soon as possible.</h5>
          </div>
        </div>
        
      </Layout>
    )
  }
}


export default PunchInPage
