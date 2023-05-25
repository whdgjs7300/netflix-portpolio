
import Modal from 'react-bootstrap/Modal';

import { useSelector } from 'react-redux';
import YouTube, { YouTubeProps } from 'react-youtube';

const Modals = ({modal,setModal}) => {

    const {videoList, detailList} = useSelector(state=> state.movie)


    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts: YouTubeProps['opts'] = {
        height: '500px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        disablekb: 1,
        iv_load_policy: 3,
        

        
        },
    };

    return (  
        
        
        <Modal
        
        size='xl'
        show={modal}
        onHide={() => setModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title
            style={{margin:"auto"}}
            id="example-custom-modal-styling-title">
                {detailList.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YouTube videoId={videoList && videoList.results[0].key} opts={opts} onReady={onPlayerReady} />
        </Modal.Body>
        </Modal>
                        

    
    );
}

export default Modals;