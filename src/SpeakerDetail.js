import imageToggleOnMouseOver from './ImageToggleOnScroll';

const SpeakerDetail = React.memo(
  ({id, firstName, lastName, favorite, bio, onHeartFavoriteHandler}) => {
    return (
      <div className="card col-4 cardmin">
        <imageToggleOnMouseOver
          className="card-img-top"
          primaryImage={`/static/speakers/b2/Speaker-${id}.jpg`}
          secondaryImage={`/static/speakers/Speaker-${id}.jpg`}
          alt="{firstName} {lastName}"
        />
        <div className="card-body">
          <h4 className="card-title">
            <button
              data-sessionid={id}
              className={favorite ? "heartredbutton" : "heartdarkbutton"}
              onClick={e => {
                onHeartFavoriteHandler(e, !favorite);
              }}
            />
            <span>
              {firstName} {lastName}
            </span>
          </h4>
          <span>{bio}</span>
        </div>
      </div>
    );
  }
);