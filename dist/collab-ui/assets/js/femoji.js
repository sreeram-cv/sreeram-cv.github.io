/* jshint maxerr: 10000 */
/* jslint unused: true */
/* jshint shadow: true */
/* jshint -W075 */

(function(
  global,
  Femoji
) {
  global.Femoji = Femoji();
})(window, function() {
  // this list must be ordered from largest length of the value array, index 0, to the shortest
  Femoji = function(config) {
    var self = this;
    self.assetPaths = config.assetPaths;
    if (config.setAssetURL) {
      if (typeof config.setAssetURL === 'function') {
        self.setAssetURL = config.setAssetURL;
      }
    }
  };
  Femoji.emojioneList = {
    ':kiss_mm:': {
      uc_base: '1f468-2764-1f48b-1f468',
      uc_output: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468',
      uc_match: '1f468-2764-fe0f-1f48b-1f468',
      uc_greedy: '1f468-2764-1f48b-1f468',
      shortnames: [':couplekiss_mm:'],
      category: 'people'
    },
    ':kiss_woman_man:': {
      uc_base: '1f469-2764-1f48b-1f468',
      uc_output: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468',
      uc_match: '1f469-2764-fe0f-1f48b-1f468',
      uc_greedy: '1f469-2764-1f48b-1f468',
      shortnames: [],
      category: 'people'
    },
    ':kiss_ww:': {
      uc_base: '1f469-2764-1f48b-1f469',
      uc_output: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469',
      uc_match: '1f469-2764-fe0f-1f48b-1f469',
      uc_greedy: '1f469-2764-1f48b-1f469',
      shortnames: [':couplekiss_ww:'],
      category: 'people'
    },
    ':england:': {
      uc_base: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
      uc_output: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
      uc_match: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
      uc_greedy: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
      shortnames: [],
      category: 'flags'
    },
    ':scotland:': {
      uc_base: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
      uc_output: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
      uc_match: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
      uc_greedy: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
      shortnames: [],
      category: 'flags'
    },
    ':wales:': {
      uc_base: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
      uc_output: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
      uc_match: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
      uc_greedy: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
      shortnames: [],
      category: 'flags'
    },
    ':family_mmbb:': {
      uc_base: '1f468-1f468-1f466-1f466',
      uc_output: '1f468-200d-1f468-200d-1f466-200d-1f466',
      uc_match: '1f468-1f468-1f466-1f466',
      uc_greedy: '1f468-1f468-1f466-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_mmgb:': {
      uc_base: '1f468-1f468-1f467-1f466',
      uc_output: '1f468-200d-1f468-200d-1f467-200d-1f466',
      uc_match: '1f468-1f468-1f467-1f466',
      uc_greedy: '1f468-1f468-1f467-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_mmgg:': {
      uc_base: '1f468-1f468-1f467-1f467',
      uc_output: '1f468-200d-1f468-200d-1f467-200d-1f467',
      uc_match: '1f468-1f468-1f467-1f467',
      uc_greedy: '1f468-1f468-1f467-1f467',
      shortnames: [],
      category: 'people'
    },
    ':family_mwbb:': {
      uc_base: '1f468-1f469-1f466-1f466',
      uc_output: '1f468-200d-1f469-200d-1f466-200d-1f466',
      uc_match: '1f468-1f469-1f466-1f466',
      uc_greedy: '1f468-1f469-1f466-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_mwgb:': {
      uc_base: '1f468-1f469-1f467-1f466',
      uc_output: '1f468-200d-1f469-200d-1f467-200d-1f466',
      uc_match: '1f468-1f469-1f467-1f466',
      uc_greedy: '1f468-1f469-1f467-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_mwgg:': {
      uc_base: '1f468-1f469-1f467-1f467',
      uc_output: '1f468-200d-1f469-200d-1f467-200d-1f467',
      uc_match: '1f468-1f469-1f467-1f467',
      uc_greedy: '1f468-1f469-1f467-1f467',
      shortnames: [],
      category: 'people'
    },
    ':family_wwbb:': {
      uc_base: '1f469-1f469-1f466-1f466',
      uc_output: '1f469-200d-1f469-200d-1f466-200d-1f466',
      uc_match: '1f469-1f469-1f466-1f466',
      uc_greedy: '1f469-1f469-1f466-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_wwgb:': {
      uc_base: '1f469-1f469-1f467-1f466',
      uc_output: '1f469-200d-1f469-200d-1f467-200d-1f466',
      uc_match: '1f469-1f469-1f467-1f466',
      uc_greedy: '1f469-1f469-1f467-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_wwgg:': {
      uc_base: '1f469-1f469-1f467-1f467',
      uc_output: '1f469-200d-1f469-200d-1f467-200d-1f467',
      uc_match: '1f469-1f469-1f467-1f467',
      uc_greedy: '1f469-1f469-1f467-1f467',
      shortnames: [],
      category: 'people'
    },
    ':couple_mm:': {
      uc_base: '1f468-2764-1f468',
      uc_output: '1f468-200d-2764-fe0f-200d-1f468',
      uc_match: '1f468-2764-fe0f-1f468',
      uc_greedy: '1f468-2764-1f468',
      shortnames: [':couple_with_heart_mm:'],
      category: 'people'
    },
    ':couple_with_heart_woman_man:': {
      uc_base: '1f469-2764-1f468',
      uc_output: '1f469-200d-2764-fe0f-200d-1f468',
      uc_match: '1f469-2764-fe0f-1f468',
      uc_greedy: '1f469-2764-1f468',
      shortnames: [],
      category: 'people'
    },
    ':couple_ww:': {
      uc_base: '1f469-2764-1f469',
      uc_output: '1f469-200d-2764-fe0f-200d-1f469',
      uc_match: '1f469-2764-fe0f-1f469',
      uc_greedy: '1f469-2764-1f469',
      shortnames: [':couple_with_heart_ww:'],
      category: 'people'
    },
    ':family_man_boy_boy:': {
      uc_base: '1f468-1f466-1f466',
      uc_output: '1f468-200d-1f466-200d-1f466',
      uc_match: '1f468-1f466-1f466',
      uc_greedy: '1f468-1f466-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_man_girl_boy:': {
      uc_base: '1f468-1f467-1f466',
      uc_output: '1f468-200d-1f467-200d-1f466',
      uc_match: '1f468-1f467-1f466',
      uc_greedy: '1f468-1f467-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_man_girl_girl:': {
      uc_base: '1f468-1f467-1f467',
      uc_output: '1f468-200d-1f467-200d-1f467',
      uc_match: '1f468-1f467-1f467',
      uc_greedy: '1f468-1f467-1f467',
      shortnames: [],
      category: 'people'
    },
    ':family_man_woman_boy:': {
      uc_base: '1f468-1f469-1f466',
      uc_output: '1f468-200d-1f469-200d-1f466',
      uc_match: '1f468-1f469-1f466',
      uc_greedy: '1f468-1f469-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_mmb:': {
      uc_base: '1f468-1f468-1f466',
      uc_output: '1f468-200d-1f468-200d-1f466',
      uc_match: '1f468-1f468-1f466',
      uc_greedy: '1f468-1f468-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_mmg:': {
      uc_base: '1f468-1f468-1f467',
      uc_output: '1f468-200d-1f468-200d-1f467',
      uc_match: '1f468-1f468-1f467',
      uc_greedy: '1f468-1f468-1f467',
      shortnames: [],
      category: 'people'
    },
    ':family_mwg:': {
      uc_base: '1f468-1f469-1f467',
      uc_output: '1f468-200d-1f469-200d-1f467',
      uc_match: '1f468-1f469-1f467',
      uc_greedy: '1f468-1f469-1f467',
      shortnames: [],
      category: 'people'
    },
    ':family_woman_boy_boy:': {
      uc_base: '1f469-1f466-1f466',
      uc_output: '1f469-200d-1f466-200d-1f466',
      uc_match: '1f469-1f466-1f466',
      uc_greedy: '1f469-1f466-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_woman_girl_boy:': {
      uc_base: '1f469-1f467-1f466',
      uc_output: '1f469-200d-1f467-200d-1f466',
      uc_match: '1f469-1f467-1f466',
      uc_greedy: '1f469-1f467-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_woman_girl_girl:': {
      uc_base: '1f469-1f467-1f467',
      uc_output: '1f469-200d-1f467-200d-1f467',
      uc_match: '1f469-1f467-1f467',
      uc_greedy: '1f469-1f467-1f467',
      shortnames: [],
      category: 'people'
    },
    ':family_wwb:': {
      uc_base: '1f469-1f469-1f466',
      uc_output: '1f469-200d-1f469-200d-1f466',
      uc_match: '1f469-1f469-1f466',
      uc_greedy: '1f469-1f469-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_wwg:': {
      uc_base: '1f469-1f469-1f467',
      uc_output: '1f469-200d-1f469-200d-1f467',
      uc_match: '1f469-1f469-1f467',
      uc_greedy: '1f469-1f469-1f467',
      shortnames: [],
      category: 'people'
    },
    ':blond-haired_man_tone1:': {
      uc_base: '1f471-1f3fb-2642',
      uc_output: '1f471-1f3fb-200d-2642-fe0f',
      uc_match: '1f471-1f3fb-2642-fe0f',
      uc_greedy: '1f471-1f3fb-2642',
      shortnames: [':blond-haired_man_light_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_man_tone2:': {
      uc_base: '1f471-1f3fc-2642',
      uc_output: '1f471-1f3fc-200d-2642-fe0f',
      uc_match: '1f471-1f3fc-2642-fe0f',
      uc_greedy: '1f471-1f3fc-2642',
      shortnames: [':blond-haired_man_medium_light_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_man_tone3:': {
      uc_base: '1f471-1f3fd-2642',
      uc_output: '1f471-1f3fd-200d-2642-fe0f',
      uc_match: '1f471-1f3fd-2642-fe0f',
      uc_greedy: '1f471-1f3fd-2642',
      shortnames: [':blond-haired_man_medium_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_man_tone4:': {
      uc_base: '1f471-1f3fe-2642',
      uc_output: '1f471-1f3fe-200d-2642-fe0f',
      uc_match: '1f471-1f3fe-2642-fe0f',
      uc_greedy: '1f471-1f3fe-2642',
      shortnames: [':blond-haired_man_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_man_tone5:': {
      uc_base: '1f471-1f3ff-2642',
      uc_output: '1f471-1f3ff-200d-2642-fe0f',
      uc_match: '1f471-1f3ff-2642-fe0f',
      uc_greedy: '1f471-1f3ff-2642',
      shortnames: [':blond-haired_man_dark_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_woman_tone1:': {
      uc_base: '1f471-1f3fb-2640',
      uc_output: '1f471-1f3fb-200d-2640-fe0f',
      uc_match: '1f471-1f3fb-2640-fe0f',
      uc_greedy: '1f471-1f3fb-2640',
      shortnames: [':blond-haired_woman_light_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_woman_tone2:': {
      uc_base: '1f471-1f3fc-2640',
      uc_output: '1f471-1f3fc-200d-2640-fe0f',
      uc_match: '1f471-1f3fc-2640-fe0f',
      uc_greedy: '1f471-1f3fc-2640',
      shortnames: [':blond-haired_woman_medium_light_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_woman_tone3:': {
      uc_base: '1f471-1f3fd-2640',
      uc_output: '1f471-1f3fd-200d-2640-fe0f',
      uc_match: '1f471-1f3fd-2640-fe0f',
      uc_greedy: '1f471-1f3fd-2640',
      shortnames: [':blond-haired_woman_medium_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_woman_tone4:': {
      uc_base: '1f471-1f3fe-2640',
      uc_output: '1f471-1f3fe-200d-2640-fe0f',
      uc_match: '1f471-1f3fe-2640-fe0f',
      uc_greedy: '1f471-1f3fe-2640',
      shortnames: [':blond-haired_woman_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':blond-haired_woman_tone5:': {
      uc_base: '1f471-1f3ff-2640',
      uc_output: '1f471-1f3ff-200d-2640-fe0f',
      uc_match: '1f471-1f3ff-2640-fe0f',
      uc_greedy: '1f471-1f3ff-2640',
      shortnames: [':blond-haired_woman_dark_skin_tone:'],
      category: 'people'
    },
    ':eye_in_speech_bubble:': {
      uc_base: '1f441-1f5e8',
      uc_output: '1f441-fe0f-200d-1f5e8-fe0f',
      uc_match: '1f441-fe0f-200d-1f5e8',
      uc_greedy: '1f441-1f5e8',
      shortnames: [],
      category: 'symbols'
    },
    ':man_biking_tone1:': {
      uc_base: '1f6b4-1f3fb-2642',
      uc_output: '1f6b4-1f3fb-200d-2642-fe0f',
      uc_match: '1f6b4-1f3fb-2642-fe0f',
      uc_greedy: '1f6b4-1f3fb-2642',
      shortnames: [':man_biking_light_skin_tone:'],
      category: 'activity'
    },
    ':man_biking_tone2:': {
      uc_base: '1f6b4-1f3fc-2642',
      uc_output: '1f6b4-1f3fc-200d-2642-fe0f',
      uc_match: '1f6b4-1f3fc-2642-fe0f',
      uc_greedy: '1f6b4-1f3fc-2642',
      shortnames: [':man_biking_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_biking_tone3:': {
      uc_base: '1f6b4-1f3fd-2642',
      uc_output: '1f6b4-1f3fd-200d-2642-fe0f',
      uc_match: '1f6b4-1f3fd-2642-fe0f',
      uc_greedy: '1f6b4-1f3fd-2642',
      shortnames: [':man_biking_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_biking_tone4:': {
      uc_base: '1f6b4-1f3fe-2642',
      uc_output: '1f6b4-1f3fe-200d-2642-fe0f',
      uc_match: '1f6b4-1f3fe-2642-fe0f',
      uc_greedy: '1f6b4-1f3fe-2642',
      shortnames: [':man_biking_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_biking_tone5:': {
      uc_base: '1f6b4-1f3ff-2642',
      uc_output: '1f6b4-1f3ff-200d-2642-fe0f',
      uc_match: '1f6b4-1f3ff-2642-fe0f',
      uc_greedy: '1f6b4-1f3ff-2642',
      shortnames: [':man_biking_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_bowing_tone1:': {
      uc_base: '1f647-1f3fb-2642',
      uc_output: '1f647-1f3fb-200d-2642-fe0f',
      uc_match: '1f647-1f3fb-2642-fe0f',
      uc_greedy: '1f647-1f3fb-2642',
      shortnames: [':man_bowing_light_skin_tone:'],
      category: 'people'
    },
    ':man_bowing_tone2:': {
      uc_base: '1f647-1f3fc-2642',
      uc_output: '1f647-1f3fc-200d-2642-fe0f',
      uc_match: '1f647-1f3fc-2642-fe0f',
      uc_greedy: '1f647-1f3fc-2642',
      shortnames: [':man_bowing_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_bowing_tone3:': {
      uc_base: '1f647-1f3fd-2642',
      uc_output: '1f647-1f3fd-200d-2642-fe0f',
      uc_match: '1f647-1f3fd-2642-fe0f',
      uc_greedy: '1f647-1f3fd-2642',
      shortnames: [':man_bowing_medium_skin_tone:'],
      category: 'people'
    },
    ':man_bowing_tone4:': {
      uc_base: '1f647-1f3fe-2642',
      uc_output: '1f647-1f3fe-200d-2642-fe0f',
      uc_match: '1f647-1f3fe-2642-fe0f',
      uc_greedy: '1f647-1f3fe-2642',
      shortnames: [':man_bowing_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_bowing_tone5:': {
      uc_base: '1f647-1f3ff-2642',
      uc_output: '1f647-1f3ff-200d-2642-fe0f',
      uc_match: '1f647-1f3ff-2642-fe0f',
      uc_greedy: '1f647-1f3ff-2642',
      shortnames: [':man_bowing_dark_skin_tone:'],
      category: 'people'
    },
    ':man_cartwheeling_tone1:': {
      uc_base: '1f938-1f3fb-2642',
      uc_output: '1f938-1f3fb-200d-2642-fe0f',
      uc_match: '1f938-1f3fb-2642-fe0f',
      uc_greedy: '1f938-1f3fb-2642',
      shortnames: [':man_cartwheeling_light_skin_tone:'],
      category: 'activity'
    },
    ':man_cartwheeling_tone2:': {
      uc_base: '1f938-1f3fc-2642',
      uc_output: '1f938-1f3fc-200d-2642-fe0f',
      uc_match: '1f938-1f3fc-2642-fe0f',
      uc_greedy: '1f938-1f3fc-2642',
      shortnames: [':man_cartwheeling_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_cartwheeling_tone3:': {
      uc_base: '1f938-1f3fd-2642',
      uc_output: '1f938-1f3fd-200d-2642-fe0f',
      uc_match: '1f938-1f3fd-2642-fe0f',
      uc_greedy: '1f938-1f3fd-2642',
      shortnames: [':man_cartwheeling_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_cartwheeling_tone4:': {
      uc_base: '1f938-1f3fe-2642',
      uc_output: '1f938-1f3fe-200d-2642-fe0f',
      uc_match: '1f938-1f3fe-2642-fe0f',
      uc_greedy: '1f938-1f3fe-2642',
      shortnames: [':man_cartwheeling_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_cartwheeling_tone5:': {
      uc_base: '1f938-1f3ff-2642',
      uc_output: '1f938-1f3ff-200d-2642-fe0f',
      uc_match: '1f938-1f3ff-2642-fe0f',
      uc_greedy: '1f938-1f3ff-2642',
      shortnames: [':man_cartwheeling_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_climbing_tone1:': {
      uc_base: '1f9d7-1f3fb-2642',
      uc_output: '1f9d7-1f3fb-200d-2642-fe0f',
      uc_match: '1f9d7-1f3fb-2642-fe0f',
      uc_greedy: '1f9d7-1f3fb-2642',
      shortnames: [':man_climbing_light_skin_tone:'],
      category: 'activity'
    },
    ':man_climbing_tone2:': {
      uc_base: '1f9d7-1f3fc-2642',
      uc_output: '1f9d7-1f3fc-200d-2642-fe0f',
      uc_match: '1f9d7-1f3fc-2642-fe0f',
      uc_greedy: '1f9d7-1f3fc-2642',
      shortnames: [':man_climbing_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_climbing_tone3:': {
      uc_base: '1f9d7-1f3fd-2642',
      uc_output: '1f9d7-1f3fd-200d-2642-fe0f',
      uc_match: '1f9d7-1f3fd-2642-fe0f',
      uc_greedy: '1f9d7-1f3fd-2642',
      shortnames: [':man_climbing_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_climbing_tone4:': {
      uc_base: '1f9d7-1f3fe-2642',
      uc_output: '1f9d7-1f3fe-200d-2642-fe0f',
      uc_match: '1f9d7-1f3fe-2642-fe0f',
      uc_greedy: '1f9d7-1f3fe-2642',
      shortnames: [':man_climbing_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_climbing_tone5:': {
      uc_base: '1f9d7-1f3ff-2642',
      uc_output: '1f9d7-1f3ff-200d-2642-fe0f',
      uc_match: '1f9d7-1f3ff-2642-fe0f',
      uc_greedy: '1f9d7-1f3ff-2642',
      shortnames: [':man_climbing_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_construction_worker_tone1:': {
      uc_base: '1f477-1f3fb-2642',
      uc_output: '1f477-1f3fb-200d-2642-fe0f',
      uc_match: '1f477-1f3fb-2642-fe0f',
      uc_greedy: '1f477-1f3fb-2642',
      shortnames: [':man_construction_worker_light_skin_tone:'],
      category: 'people'
    },
    ':man_construction_worker_tone2:': {
      uc_base: '1f477-1f3fc-2642',
      uc_output: '1f477-1f3fc-200d-2642-fe0f',
      uc_match: '1f477-1f3fc-2642-fe0f',
      uc_greedy: '1f477-1f3fc-2642',
      shortnames: [':man_construction_worker_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_construction_worker_tone3:': {
      uc_base: '1f477-1f3fd-2642',
      uc_output: '1f477-1f3fd-200d-2642-fe0f',
      uc_match: '1f477-1f3fd-2642-fe0f',
      uc_greedy: '1f477-1f3fd-2642',
      shortnames: [':man_construction_worker_medium_skin_tone:'],
      category: 'people'
    },
    ':man_construction_worker_tone4:': {
      uc_base: '1f477-1f3fe-2642',
      uc_output: '1f477-1f3fe-200d-2642-fe0f',
      uc_match: '1f477-1f3fe-2642-fe0f',
      uc_greedy: '1f477-1f3fe-2642',
      shortnames: [':man_construction_worker_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_construction_worker_tone5:': {
      uc_base: '1f477-1f3ff-2642',
      uc_output: '1f477-1f3ff-200d-2642-fe0f',
      uc_match: '1f477-1f3ff-2642-fe0f',
      uc_greedy: '1f477-1f3ff-2642',
      shortnames: [':man_construction_worker_dark_skin_tone:'],
      category: 'people'
    },
    ':man_detective_tone1:': {
      uc_base: '1f575-1f3fb-2642',
      uc_output: '1f575-1f3fb-200d-2642-fe0f',
      uc_match: '1f575-fe0f-1f3fb-2642-fe0f',
      uc_greedy: '1f575-1f3fb-2642',
      shortnames: [':man_detective_light_skin_tone:'],
      category: 'people'
    },
    ':man_detective_tone2:': {
      uc_base: '1f575-1f3fc-2642',
      uc_output: '1f575-1f3fc-200d-2642-fe0f',
      uc_match: '1f575-fe0f-1f3fc-2642-fe0f',
      uc_greedy: '1f575-1f3fc-2642',
      shortnames: [':man_detective_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_detective_tone3:': {
      uc_base: '1f575-1f3fd-2642',
      uc_output: '1f575-1f3fd-200d-2642-fe0f',
      uc_match: '1f575-fe0f-1f3fd-2642-fe0f',
      uc_greedy: '1f575-1f3fd-2642',
      shortnames: [':man_detective_medium_skin_tone:'],
      category: 'people'
    },
    ':man_detective_tone4:': {
      uc_base: '1f575-1f3fe-2642',
      uc_output: '1f575-1f3fe-200d-2642-fe0f',
      uc_match: '1f575-fe0f-1f3fe-2642-fe0f',
      uc_greedy: '1f575-1f3fe-2642',
      shortnames: [':man_detective_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_detective_tone5:': {
      uc_base: '1f575-1f3ff-2642',
      uc_output: '1f575-1f3ff-200d-2642-fe0f',
      uc_match: '1f575-fe0f-1f3ff-2642-fe0f',
      uc_greedy: '1f575-1f3ff-2642',
      shortnames: [':man_detective_dark_skin_tone:'],
      category: 'people'
    },
    ':man_elf_tone1:': {
      uc_base: '1f9dd-1f3fb-2642',
      uc_output: '1f9dd-1f3fb-200d-2642-fe0f',
      uc_match: '1f9dd-1f3fb-2642-fe0f',
      uc_greedy: '1f9dd-1f3fb-2642',
      shortnames: [':man_elf_light_skin_tone:'],
      category: 'people'
    },
    ':man_elf_tone2:': {
      uc_base: '1f9dd-1f3fc-2642',
      uc_output: '1f9dd-1f3fc-200d-2642-fe0f',
      uc_match: '1f9dd-1f3fc-2642-fe0f',
      uc_greedy: '1f9dd-1f3fc-2642',
      shortnames: [':man_elf_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_elf_tone3:': {
      uc_base: '1f9dd-1f3fd-2642',
      uc_output: '1f9dd-1f3fd-200d-2642-fe0f',
      uc_match: '1f9dd-1f3fd-2642-fe0f',
      uc_greedy: '1f9dd-1f3fd-2642',
      shortnames: [':man_elf_medium_skin_tone:'],
      category: 'people'
    },
    ':man_elf_tone4:': {
      uc_base: '1f9dd-1f3fe-2642',
      uc_output: '1f9dd-1f3fe-200d-2642-fe0f',
      uc_match: '1f9dd-1f3fe-2642-fe0f',
      uc_greedy: '1f9dd-1f3fe-2642',
      shortnames: [':man_elf_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_elf_tone5:': {
      uc_base: '1f9dd-1f3ff-2642',
      uc_output: '1f9dd-1f3ff-200d-2642-fe0f',
      uc_match: '1f9dd-1f3ff-2642-fe0f',
      uc_greedy: '1f9dd-1f3ff-2642',
      shortnames: [':man_elf_dark_skin_tone:'],
      category: 'people'
    },
    ':man_facepalming_tone1:': {
      uc_base: '1f926-1f3fb-2642',
      uc_output: '1f926-1f3fb-200d-2642-fe0f',
      uc_match: '1f926-1f3fb-2642-fe0f',
      uc_greedy: '1f926-1f3fb-2642',
      shortnames: [':man_facepalming_light_skin_tone:'],
      category: 'people'
    },
    ':man_facepalming_tone2:': {
      uc_base: '1f926-1f3fc-2642',
      uc_output: '1f926-1f3fc-200d-2642-fe0f',
      uc_match: '1f926-1f3fc-2642-fe0f',
      uc_greedy: '1f926-1f3fc-2642',
      shortnames: [':man_facepalming_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_facepalming_tone3:': {
      uc_base: '1f926-1f3fd-2642',
      uc_output: '1f926-1f3fd-200d-2642-fe0f',
      uc_match: '1f926-1f3fd-2642-fe0f',
      uc_greedy: '1f926-1f3fd-2642',
      shortnames: [':man_facepalming_medium_skin_tone:'],
      category: 'people'
    },
    ':man_facepalming_tone4:': {
      uc_base: '1f926-1f3fe-2642',
      uc_output: '1f926-1f3fe-200d-2642-fe0f',
      uc_match: '1f926-1f3fe-2642-fe0f',
      uc_greedy: '1f926-1f3fe-2642',
      shortnames: [':man_facepalming_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_facepalming_tone5:': {
      uc_base: '1f926-1f3ff-2642',
      uc_output: '1f926-1f3ff-200d-2642-fe0f',
      uc_match: '1f926-1f3ff-2642-fe0f',
      uc_greedy: '1f926-1f3ff-2642',
      shortnames: [':man_facepalming_dark_skin_tone:'],
      category: 'people'
    },
    ':man_fairy_tone1:': {
      uc_base: '1f9da-1f3fb-2642',
      uc_output: '1f9da-1f3fb-200d-2642-fe0f',
      uc_match: '1f9da-1f3fb-2642-fe0f',
      uc_greedy: '1f9da-1f3fb-2642',
      shortnames: [':man_fairy_light_skin_tone:'],
      category: 'people'
    },
    ':man_fairy_tone2:': {
      uc_base: '1f9da-1f3fc-2642',
      uc_output: '1f9da-1f3fc-200d-2642-fe0f',
      uc_match: '1f9da-1f3fc-2642-fe0f',
      uc_greedy: '1f9da-1f3fc-2642',
      shortnames: [':man_fairy_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_fairy_tone3:': {
      uc_base: '1f9da-1f3fd-2642',
      uc_output: '1f9da-1f3fd-200d-2642-fe0f',
      uc_match: '1f9da-1f3fd-2642-fe0f',
      uc_greedy: '1f9da-1f3fd-2642',
      shortnames: [':man_fairy_medium_skin_tone:'],
      category: 'people'
    },
    ':man_fairy_tone4:': {
      uc_base: '1f9da-1f3fe-2642',
      uc_output: '1f9da-1f3fe-200d-2642-fe0f',
      uc_match: '1f9da-1f3fe-2642-fe0f',
      uc_greedy: '1f9da-1f3fe-2642',
      shortnames: [':man_fairy_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_fairy_tone5:': {
      uc_base: '1f9da-1f3ff-2642',
      uc_output: '1f9da-1f3ff-200d-2642-fe0f',
      uc_match: '1f9da-1f3ff-2642-fe0f',
      uc_greedy: '1f9da-1f3ff-2642',
      shortnames: [':man_fairy_dark_skin_tone:'],
      category: 'people'
    },
    ':man_frowning_tone1:': {
      uc_base: '1f64d-1f3fb-2642',
      uc_output: '1f64d-1f3fb-200d-2642-fe0f',
      uc_match: '1f64d-1f3fb-2642-fe0f',
      uc_greedy: '1f64d-1f3fb-2642',
      shortnames: [':man_frowning_light_skin_tone:'],
      category: 'people'
    },
    ':man_frowning_tone2:': {
      uc_base: '1f64d-1f3fc-2642',
      uc_output: '1f64d-1f3fc-200d-2642-fe0f',
      uc_match: '1f64d-1f3fc-2642-fe0f',
      uc_greedy: '1f64d-1f3fc-2642',
      shortnames: [':man_frowning_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_frowning_tone3:': {
      uc_base: '1f64d-1f3fd-2642',
      uc_output: '1f64d-1f3fd-200d-2642-fe0f',
      uc_match: '1f64d-1f3fd-2642-fe0f',
      uc_greedy: '1f64d-1f3fd-2642',
      shortnames: [':man_frowning_medium_skin_tone:'],
      category: 'people'
    },
    ':man_frowning_tone4:': {
      uc_base: '1f64d-1f3fe-2642',
      uc_output: '1f64d-1f3fe-200d-2642-fe0f',
      uc_match: '1f64d-1f3fe-2642-fe0f',
      uc_greedy: '1f64d-1f3fe-2642',
      shortnames: [':man_frowning_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_frowning_tone5:': {
      uc_base: '1f64d-1f3ff-2642',
      uc_output: '1f64d-1f3ff-200d-2642-fe0f',
      uc_match: '1f64d-1f3ff-2642-fe0f',
      uc_greedy: '1f64d-1f3ff-2642',
      shortnames: [':man_frowning_dark_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_no_tone1:': {
      uc_base: '1f645-1f3fb-2642',
      uc_output: '1f645-1f3fb-200d-2642-fe0f',
      uc_match: '1f645-1f3fb-2642-fe0f',
      uc_greedy: '1f645-1f3fb-2642',
      shortnames: [':man_gesturing_no_light_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_no_tone2:': {
      uc_base: '1f645-1f3fc-2642',
      uc_output: '1f645-1f3fc-200d-2642-fe0f',
      uc_match: '1f645-1f3fc-2642-fe0f',
      uc_greedy: '1f645-1f3fc-2642',
      shortnames: [':man_gesturing_no_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_no_tone3:': {
      uc_base: '1f645-1f3fd-2642',
      uc_output: '1f645-1f3fd-200d-2642-fe0f',
      uc_match: '1f645-1f3fd-2642-fe0f',
      uc_greedy: '1f645-1f3fd-2642',
      shortnames: [':man_gesturing_no_medium_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_no_tone4:': {
      uc_base: '1f645-1f3fe-2642',
      uc_output: '1f645-1f3fe-200d-2642-fe0f',
      uc_match: '1f645-1f3fe-2642-fe0f',
      uc_greedy: '1f645-1f3fe-2642',
      shortnames: [':man_gesturing_no_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_no_tone5:': {
      uc_base: '1f645-1f3ff-2642',
      uc_output: '1f645-1f3ff-200d-2642-fe0f',
      uc_match: '1f645-1f3ff-2642-fe0f',
      uc_greedy: '1f645-1f3ff-2642',
      shortnames: [':man_gesturing_no_dark_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_ok_tone1:': {
      uc_base: '1f646-1f3fb-2642',
      uc_output: '1f646-1f3fb-200d-2642-fe0f',
      uc_match: '1f646-1f3fb-2642-fe0f',
      uc_greedy: '1f646-1f3fb-2642',
      shortnames: [':man_gesturing_ok_light_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_ok_tone2:': {
      uc_base: '1f646-1f3fc-2642',
      uc_output: '1f646-1f3fc-200d-2642-fe0f',
      uc_match: '1f646-1f3fc-2642-fe0f',
      uc_greedy: '1f646-1f3fc-2642',
      shortnames: [':man_gesturing_ok_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_ok_tone3:': {
      uc_base: '1f646-1f3fd-2642',
      uc_output: '1f646-1f3fd-200d-2642-fe0f',
      uc_match: '1f646-1f3fd-2642-fe0f',
      uc_greedy: '1f646-1f3fd-2642',
      shortnames: [':man_gesturing_ok_medium_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_ok_tone4:': {
      uc_base: '1f646-1f3fe-2642',
      uc_output: '1f646-1f3fe-200d-2642-fe0f',
      uc_match: '1f646-1f3fe-2642-fe0f',
      uc_greedy: '1f646-1f3fe-2642',
      shortnames: [':man_gesturing_ok_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_gesturing_ok_tone5:': {
      uc_base: '1f646-1f3ff-2642',
      uc_output: '1f646-1f3ff-200d-2642-fe0f',
      uc_match: '1f646-1f3ff-2642-fe0f',
      uc_greedy: '1f646-1f3ff-2642',
      shortnames: [':man_gesturing_ok_dark_skin_tone:'],
      category: 'people'
    },
    ':man_getting_face_massage_tone1:': {
      uc_base: '1f486-1f3fb-2642',
      uc_output: '1f486-1f3fb-200d-2642-fe0f',
      uc_match: '1f486-1f3fb-2642-fe0f',
      uc_greedy: '1f486-1f3fb-2642',
      shortnames: [':man_getting_face_massage_light_skin_tone:'],
      category: 'people'
    },
    ':man_getting_face_massage_tone2:': {
      uc_base: '1f486-1f3fc-2642',
      uc_output: '1f486-1f3fc-200d-2642-fe0f',
      uc_match: '1f486-1f3fc-2642-fe0f',
      uc_greedy: '1f486-1f3fc-2642',
      shortnames: [':man_getting_face_massage_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_getting_face_massage_tone3:': {
      uc_base: '1f486-1f3fd-2642',
      uc_output: '1f486-1f3fd-200d-2642-fe0f',
      uc_match: '1f486-1f3fd-2642-fe0f',
      uc_greedy: '1f486-1f3fd-2642',
      shortnames: [':man_getting_face_massage_medium_skin_tone:'],
      category: 'people'
    },
    ':man_getting_face_massage_tone4:': {
      uc_base: '1f486-1f3fe-2642',
      uc_output: '1f486-1f3fe-200d-2642-fe0f',
      uc_match: '1f486-1f3fe-2642-fe0f',
      uc_greedy: '1f486-1f3fe-2642',
      shortnames: [':man_getting_face_massage_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_getting_face_massage_tone5:': {
      uc_base: '1f486-1f3ff-2642',
      uc_output: '1f486-1f3ff-200d-2642-fe0f',
      uc_match: '1f486-1f3ff-2642-fe0f',
      uc_greedy: '1f486-1f3ff-2642',
      shortnames: [':man_getting_face_massage_dark_skin_tone:'],
      category: 'people'
    },
    ':man_getting_haircut_tone1:': {
      uc_base: '1f487-1f3fb-2642',
      uc_output: '1f487-1f3fb-200d-2642-fe0f',
      uc_match: '1f487-1f3fb-2642-fe0f',
      uc_greedy: '1f487-1f3fb-2642',
      shortnames: [':man_getting_haircut_light_skin_tone:'],
      category: 'people'
    },
    ':man_getting_haircut_tone2:': {
      uc_base: '1f487-1f3fc-2642',
      uc_output: '1f487-1f3fc-200d-2642-fe0f',
      uc_match: '1f487-1f3fc-2642-fe0f',
      uc_greedy: '1f487-1f3fc-2642',
      shortnames: [':man_getting_haircut_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_getting_haircut_tone3:': {
      uc_base: '1f487-1f3fd-2642',
      uc_output: '1f487-1f3fd-200d-2642-fe0f',
      uc_match: '1f487-1f3fd-2642-fe0f',
      uc_greedy: '1f487-1f3fd-2642',
      shortnames: [':man_getting_haircut_medium_skin_tone:'],
      category: 'people'
    },
    ':man_getting_haircut_tone4:': {
      uc_base: '1f487-1f3fe-2642',
      uc_output: '1f487-1f3fe-200d-2642-fe0f',
      uc_match: '1f487-1f3fe-2642-fe0f',
      uc_greedy: '1f487-1f3fe-2642',
      shortnames: [':man_getting_haircut_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_getting_haircut_tone5:': {
      uc_base: '1f487-1f3ff-2642',
      uc_output: '1f487-1f3ff-200d-2642-fe0f',
      uc_match: '1f487-1f3ff-2642-fe0f',
      uc_greedy: '1f487-1f3ff-2642',
      shortnames: [':man_getting_haircut_dark_skin_tone:'],
      category: 'people'
    },
    ':man_golfing_tone1:': {
      uc_base: '1f3cc-1f3fb-2642',
      uc_output: '1f3cc-1f3fb-200d-2642-fe0f',
      uc_match: '1f3cc-fe0f-1f3fb-2642-fe0f',
      uc_greedy: '1f3cc-1f3fb-2642',
      shortnames: [':man_golfing_light_skin_tone:'],
      category: 'activity'
    },
    ':man_golfing_tone2:': {
      uc_base: '1f3cc-1f3fc-2642',
      uc_output: '1f3cc-1f3fc-200d-2642-fe0f',
      uc_match: '1f3cc-fe0f-1f3fc-2642-fe0f',
      uc_greedy: '1f3cc-1f3fc-2642',
      shortnames: [':man_golfing_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_golfing_tone3:': {
      uc_base: '1f3cc-1f3fd-2642',
      uc_output: '1f3cc-1f3fd-200d-2642-fe0f',
      uc_match: '1f3cc-fe0f-1f3fd-2642-fe0f',
      uc_greedy: '1f3cc-1f3fd-2642',
      shortnames: [':man_golfing_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_golfing_tone4:': {
      uc_base: '1f3cc-1f3fe-2642',
      uc_output: '1f3cc-1f3fe-200d-2642-fe0f',
      uc_match: '1f3cc-fe0f-1f3fe-2642-fe0f',
      uc_greedy: '1f3cc-1f3fe-2642',
      shortnames: [':man_golfing_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_golfing_tone5:': {
      uc_base: '1f3cc-1f3ff-2642',
      uc_output: '1f3cc-1f3ff-200d-2642-fe0f',
      uc_match: '1f3cc-fe0f-1f3ff-2642-fe0f',
      uc_greedy: '1f3cc-1f3ff-2642',
      shortnames: [':man_golfing_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_guard_tone1:': {
      uc_base: '1f482-1f3fb-2642',
      uc_output: '1f482-1f3fb-200d-2642-fe0f',
      uc_match: '1f482-1f3fb-2642-fe0f',
      uc_greedy: '1f482-1f3fb-2642',
      shortnames: [':man_guard_light_skin_tone:'],
      category: 'people'
    },
    ':man_guard_tone2:': {
      uc_base: '1f482-1f3fc-2642',
      uc_output: '1f482-1f3fc-200d-2642-fe0f',
      uc_match: '1f482-1f3fc-2642-fe0f',
      uc_greedy: '1f482-1f3fc-2642',
      shortnames: [':man_guard_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_guard_tone3:': {
      uc_base: '1f482-1f3fd-2642',
      uc_output: '1f482-1f3fd-200d-2642-fe0f',
      uc_match: '1f482-1f3fd-2642-fe0f',
      uc_greedy: '1f482-1f3fd-2642',
      shortnames: [':man_guard_medium_skin_tone:'],
      category: 'people'
    },
    ':man_guard_tone4:': {
      uc_base: '1f482-1f3fe-2642',
      uc_output: '1f482-1f3fe-200d-2642-fe0f',
      uc_match: '1f482-1f3fe-2642-fe0f',
      uc_greedy: '1f482-1f3fe-2642',
      shortnames: [':man_guard_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_guard_tone5:': {
      uc_base: '1f482-1f3ff-2642',
      uc_output: '1f482-1f3ff-200d-2642-fe0f',
      uc_match: '1f482-1f3ff-2642-fe0f',
      uc_greedy: '1f482-1f3ff-2642',
      shortnames: [':man_guard_dark_skin_tone:'],
      category: 'people'
    },
    ':man_health_worker_tone1:': {
      uc_base: '1f468-1f3fb-2695',
      uc_output: '1f468-1f3fb-200d-2695-fe0f',
      uc_match: '1f468-1f3fb-2695-fe0f',
      uc_greedy: '1f468-1f3fb-2695',
      shortnames: [':man_health_worker_light_skin_tone:'],
      category: 'people'
    },
    ':man_health_worker_tone2:': {
      uc_base: '1f468-1f3fc-2695',
      uc_output: '1f468-1f3fc-200d-2695-fe0f',
      uc_match: '1f468-1f3fc-2695-fe0f',
      uc_greedy: '1f468-1f3fc-2695',
      shortnames: [':man_health_worker_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_health_worker_tone3:': {
      uc_base: '1f468-1f3fd-2695',
      uc_output: '1f468-1f3fd-200d-2695-fe0f',
      uc_match: '1f468-1f3fd-2695-fe0f',
      uc_greedy: '1f468-1f3fd-2695',
      shortnames: [':man_health_worker_medium_skin_tone:'],
      category: 'people'
    },
    ':man_health_worker_tone4:': {
      uc_base: '1f468-1f3fe-2695',
      uc_output: '1f468-1f3fe-200d-2695-fe0f',
      uc_match: '1f468-1f3fe-2695-fe0f',
      uc_greedy: '1f468-1f3fe-2695',
      shortnames: [':man_health_worker_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_health_worker_tone5:': {
      uc_base: '1f468-1f3ff-2695',
      uc_output: '1f468-1f3ff-200d-2695-fe0f',
      uc_match: '1f468-1f3ff-2695-fe0f',
      uc_greedy: '1f468-1f3ff-2695',
      shortnames: [':man_health_worker_dark_skin_tone:'],
      category: 'people'
    },
    ':man_in_lotus_position_tone1:': {
      uc_base: '1f9d8-1f3fb-2642',
      uc_output: '1f9d8-1f3fb-200d-2642-fe0f',
      uc_match: '1f9d8-1f3fb-2642-fe0f',
      uc_greedy: '1f9d8-1f3fb-2642',
      shortnames: [':man_in_lotus_position_light_skin_tone:'],
      category: 'activity'
    },
    ':man_in_lotus_position_tone2:': {
      uc_base: '1f9d8-1f3fc-2642',
      uc_output: '1f9d8-1f3fc-200d-2642-fe0f',
      uc_match: '1f9d8-1f3fc-2642-fe0f',
      uc_greedy: '1f9d8-1f3fc-2642',
      shortnames: [':man_in_lotus_position_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_in_lotus_position_tone3:': {
      uc_base: '1f9d8-1f3fd-2642',
      uc_output: '1f9d8-1f3fd-200d-2642-fe0f',
      uc_match: '1f9d8-1f3fd-2642-fe0f',
      uc_greedy: '1f9d8-1f3fd-2642',
      shortnames: [':man_in_lotus_position_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_in_lotus_position_tone4:': {
      uc_base: '1f9d8-1f3fe-2642',
      uc_output: '1f9d8-1f3fe-200d-2642-fe0f',
      uc_match: '1f9d8-1f3fe-2642-fe0f',
      uc_greedy: '1f9d8-1f3fe-2642',
      shortnames: [':man_in_lotus_position_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_in_lotus_position_tone5:': {
      uc_base: '1f9d8-1f3ff-2642',
      uc_output: '1f9d8-1f3ff-200d-2642-fe0f',
      uc_match: '1f9d8-1f3ff-2642-fe0f',
      uc_greedy: '1f9d8-1f3ff-2642',
      shortnames: [':man_in_lotus_position_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_in_steamy_room_tone1:': {
      uc_base: '1f9d6-1f3fb-2642',
      uc_output: '1f9d6-1f3fb-200d-2642-fe0f',
      uc_match: '1f9d6-1f3fb-2642-fe0f',
      uc_greedy: '1f9d6-1f3fb-2642',
      shortnames: [':man_in_steamy_room_light_skin_tone:'],
      category: 'people'
    },
    ':man_in_steamy_room_tone2:': {
      uc_base: '1f9d6-1f3fc-2642',
      uc_output: '1f9d6-1f3fc-200d-2642-fe0f',
      uc_match: '1f9d6-1f3fc-2642-fe0f',
      uc_greedy: '1f9d6-1f3fc-2642',
      shortnames: [':man_in_steamy_room_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_in_steamy_room_tone3:': {
      uc_base: '1f9d6-1f3fd-2642',
      uc_output: '1f9d6-1f3fd-200d-2642-fe0f',
      uc_match: '1f9d6-1f3fd-2642-fe0f',
      uc_greedy: '1f9d6-1f3fd-2642',
      shortnames: [':man_in_steamy_room_medium_skin_tone:'],
      category: 'people'
    },
    ':man_in_steamy_room_tone4:': {
      uc_base: '1f9d6-1f3fe-2642',
      uc_output: '1f9d6-1f3fe-200d-2642-fe0f',
      uc_match: '1f9d6-1f3fe-2642-fe0f',
      uc_greedy: '1f9d6-1f3fe-2642',
      shortnames: [':man_in_steamy_room_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_in_steamy_room_tone5:': {
      uc_base: '1f9d6-1f3ff-2642',
      uc_output: '1f9d6-1f3ff-200d-2642-fe0f',
      uc_match: '1f9d6-1f3ff-2642-fe0f',
      uc_greedy: '1f9d6-1f3ff-2642',
      shortnames: [':man_in_steamy_room_dark_skin_tone:'],
      category: 'people'
    },
    ':man_judge_tone1:': {
      uc_base: '1f468-1f3fb-2696',
      uc_output: '1f468-1f3fb-200d-2696-fe0f',
      uc_match: '1f468-1f3fb-2696-fe0f',
      uc_greedy: '1f468-1f3fb-2696',
      shortnames: [':man_judge_light_skin_tone:'],
      category: 'people'
    },
    ':man_judge_tone2:': {
      uc_base: '1f468-1f3fc-2696',
      uc_output: '1f468-1f3fc-200d-2696-fe0f',
      uc_match: '1f468-1f3fc-2696-fe0f',
      uc_greedy: '1f468-1f3fc-2696',
      shortnames: [':man_judge_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_judge_tone3:': {
      uc_base: '1f468-1f3fd-2696',
      uc_output: '1f468-1f3fd-200d-2696-fe0f',
      uc_match: '1f468-1f3fd-2696-fe0f',
      uc_greedy: '1f468-1f3fd-2696',
      shortnames: [':man_judge_medium_skin_tone:'],
      category: 'people'
    },
    ':man_judge_tone4:': {
      uc_base: '1f468-1f3fe-2696',
      uc_output: '1f468-1f3fe-200d-2696-fe0f',
      uc_match: '1f468-1f3fe-2696-fe0f',
      uc_greedy: '1f468-1f3fe-2696',
      shortnames: [':man_judge_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_judge_tone5:': {
      uc_base: '1f468-1f3ff-2696',
      uc_output: '1f468-1f3ff-200d-2696-fe0f',
      uc_match: '1f468-1f3ff-2696-fe0f',
      uc_greedy: '1f468-1f3ff-2696',
      shortnames: [':man_judge_dark_skin_tone:'],
      category: 'people'
    },
    ':man_juggling_tone1:': {
      uc_base: '1f939-1f3fb-2642',
      uc_output: '1f939-1f3fb-200d-2642-fe0f',
      uc_match: '1f939-1f3fb-2642-fe0f',
      uc_greedy: '1f939-1f3fb-2642',
      shortnames: [':man_juggling_light_skin_tone:'],
      category: 'activity'
    },
    ':man_juggling_tone2:': {
      uc_base: '1f939-1f3fc-2642',
      uc_output: '1f939-1f3fc-200d-2642-fe0f',
      uc_match: '1f939-1f3fc-2642-fe0f',
      uc_greedy: '1f939-1f3fc-2642',
      shortnames: [':man_juggling_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_juggling_tone3:': {
      uc_base: '1f939-1f3fd-2642',
      uc_output: '1f939-1f3fd-200d-2642-fe0f',
      uc_match: '1f939-1f3fd-2642-fe0f',
      uc_greedy: '1f939-1f3fd-2642',
      shortnames: [':man_juggling_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_juggling_tone4:': {
      uc_base: '1f939-1f3fe-2642',
      uc_output: '1f939-1f3fe-200d-2642-fe0f',
      uc_match: '1f939-1f3fe-2642-fe0f',
      uc_greedy: '1f939-1f3fe-2642',
      shortnames: [':man_juggling_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_juggling_tone5:': {
      uc_base: '1f939-1f3ff-2642',
      uc_output: '1f939-1f3ff-200d-2642-fe0f',
      uc_match: '1f939-1f3ff-2642-fe0f',
      uc_greedy: '1f939-1f3ff-2642',
      shortnames: [':man_juggling_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_lifting_weights_tone1:': {
      uc_base: '1f3cb-1f3fb-2642',
      uc_output: '1f3cb-1f3fb-200d-2642-fe0f',
      uc_match: '1f3cb-fe0f-1f3fb-2642-fe0f',
      uc_greedy: '1f3cb-1f3fb-2642',
      shortnames: [':man_lifting_weights_light_skin_tone:'],
      category: 'activity'
    },
    ':man_lifting_weights_tone2:': {
      uc_base: '1f3cb-1f3fc-2642',
      uc_output: '1f3cb-1f3fc-200d-2642-fe0f',
      uc_match: '1f3cb-fe0f-1f3fc-2642-fe0f',
      uc_greedy: '1f3cb-1f3fc-2642',
      shortnames: [':man_lifting_weights_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_lifting_weights_tone3:': {
      uc_base: '1f3cb-1f3fd-2642',
      uc_output: '1f3cb-1f3fd-200d-2642-fe0f',
      uc_match: '1f3cb-fe0f-1f3fd-2642-fe0f',
      uc_greedy: '1f3cb-1f3fd-2642',
      shortnames: [':man_lifting_weights_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_lifting_weights_tone4:': {
      uc_base: '1f3cb-1f3fe-2642',
      uc_output: '1f3cb-1f3fe-200d-2642-fe0f',
      uc_match: '1f3cb-fe0f-1f3fe-2642-fe0f',
      uc_greedy: '1f3cb-1f3fe-2642',
      shortnames: [':man_lifting_weights_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_lifting_weights_tone5:': {
      uc_base: '1f3cb-1f3ff-2642',
      uc_output: '1f3cb-1f3ff-200d-2642-fe0f',
      uc_match: '1f3cb-fe0f-1f3ff-2642-fe0f',
      uc_greedy: '1f3cb-1f3ff-2642',
      shortnames: [':man_lifting_weights_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_mage_tone1:': {
      uc_base: '1f9d9-1f3fb-2642',
      uc_output: '1f9d9-1f3fb-200d-2642-fe0f',
      uc_match: '1f9d9-1f3fb-2642-fe0f',
      uc_greedy: '1f9d9-1f3fb-2642',
      shortnames: [':man_mage_light_skin_tone:'],
      category: 'people'
    },
    ':man_mage_tone2:': {
      uc_base: '1f9d9-1f3fc-2642',
      uc_output: '1f9d9-1f3fc-200d-2642-fe0f',
      uc_match: '1f9d9-1f3fc-2642-fe0f',
      uc_greedy: '1f9d9-1f3fc-2642',
      shortnames: [':man_mage_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_mage_tone3:': {
      uc_base: '1f9d9-1f3fd-2642',
      uc_output: '1f9d9-1f3fd-200d-2642-fe0f',
      uc_match: '1f9d9-1f3fd-2642-fe0f',
      uc_greedy: '1f9d9-1f3fd-2642',
      shortnames: [':man_mage_medium_skin_tone:'],
      category: 'people'
    },
    ':man_mage_tone4:': {
      uc_base: '1f9d9-1f3fe-2642',
      uc_output: '1f9d9-1f3fe-200d-2642-fe0f',
      uc_match: '1f9d9-1f3fe-2642-fe0f',
      uc_greedy: '1f9d9-1f3fe-2642',
      shortnames: [':man_mage_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_mage_tone5:': {
      uc_base: '1f9d9-1f3ff-2642',
      uc_output: '1f9d9-1f3ff-200d-2642-fe0f',
      uc_match: '1f9d9-1f3ff-2642-fe0f',
      uc_greedy: '1f9d9-1f3ff-2642',
      shortnames: [':man_mage_dark_skin_tone:'],
      category: 'people'
    },
    ':man_mountain_biking_tone1:': {
      uc_base: '1f6b5-1f3fb-2642',
      uc_output: '1f6b5-1f3fb-200d-2642-fe0f',
      uc_match: '1f6b5-1f3fb-2642-fe0f',
      uc_greedy: '1f6b5-1f3fb-2642',
      shortnames: [':man_mountain_biking_light_skin_tone:'],
      category: 'activity'
    },
    ':man_mountain_biking_tone2:': {
      uc_base: '1f6b5-1f3fc-2642',
      uc_output: '1f6b5-1f3fc-200d-2642-fe0f',
      uc_match: '1f6b5-1f3fc-2642-fe0f',
      uc_greedy: '1f6b5-1f3fc-2642',
      shortnames: [':man_mountain_biking_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_mountain_biking_tone3:': {
      uc_base: '1f6b5-1f3fd-2642',
      uc_output: '1f6b5-1f3fd-200d-2642-fe0f',
      uc_match: '1f6b5-1f3fd-2642-fe0f',
      uc_greedy: '1f6b5-1f3fd-2642',
      shortnames: [':man_mountain_biking_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_mountain_biking_tone4:': {
      uc_base: '1f6b5-1f3fe-2642',
      uc_output: '1f6b5-1f3fe-200d-2642-fe0f',
      uc_match: '1f6b5-1f3fe-2642-fe0f',
      uc_greedy: '1f6b5-1f3fe-2642',
      shortnames: [':man_mountain_biking_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_mountain_biking_tone5:': {
      uc_base: '1f6b5-1f3ff-2642',
      uc_output: '1f6b5-1f3ff-200d-2642-fe0f',
      uc_match: '1f6b5-1f3ff-2642-fe0f',
      uc_greedy: '1f6b5-1f3ff-2642',
      shortnames: [':man_mountain_biking_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_pilot_tone1:': {
      uc_base: '1f468-1f3fb-2708',
      uc_output: '1f468-1f3fb-200d-2708-fe0f',
      uc_match: '1f468-1f3fb-2708-fe0f',
      uc_greedy: '1f468-1f3fb-2708',
      shortnames: [':man_pilot_light_skin_tone:'],
      category: 'people'
    },
    ':man_pilot_tone2:': {
      uc_base: '1f468-1f3fc-2708',
      uc_output: '1f468-1f3fc-200d-2708-fe0f',
      uc_match: '1f468-1f3fc-2708-fe0f',
      uc_greedy: '1f468-1f3fc-2708',
      shortnames: [':man_pilot_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_pilot_tone3:': {
      uc_base: '1f468-1f3fd-2708',
      uc_output: '1f468-1f3fd-200d-2708-fe0f',
      uc_match: '1f468-1f3fd-2708-fe0f',
      uc_greedy: '1f468-1f3fd-2708',
      shortnames: [':man_pilot_medium_skin_tone:'],
      category: 'people'
    },
    ':man_pilot_tone4:': {
      uc_base: '1f468-1f3fe-2708',
      uc_output: '1f468-1f3fe-200d-2708-fe0f',
      uc_match: '1f468-1f3fe-2708-fe0f',
      uc_greedy: '1f468-1f3fe-2708',
      shortnames: [':man_pilot_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_pilot_tone5:': {
      uc_base: '1f468-1f3ff-2708',
      uc_output: '1f468-1f3ff-200d-2708-fe0f',
      uc_match: '1f468-1f3ff-2708-fe0f',
      uc_greedy: '1f468-1f3ff-2708',
      shortnames: [':man_pilot_dark_skin_tone:'],
      category: 'people'
    },
    ':man_playing_handball_tone1:': {
      uc_base: '1f93e-1f3fb-2642',
      uc_output: '1f93e-1f3fb-200d-2642-fe0f',
      uc_match: '1f93e-1f3fb-2642-fe0f',
      uc_greedy: '1f93e-1f3fb-2642',
      shortnames: [':man_playing_handball_light_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_handball_tone2:': {
      uc_base: '1f93e-1f3fc-2642',
      uc_output: '1f93e-1f3fc-200d-2642-fe0f',
      uc_match: '1f93e-1f3fc-2642-fe0f',
      uc_greedy: '1f93e-1f3fc-2642',
      shortnames: [':man_playing_handball_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_handball_tone3:': {
      uc_base: '1f93e-1f3fd-2642',
      uc_output: '1f93e-1f3fd-200d-2642-fe0f',
      uc_match: '1f93e-1f3fd-2642-fe0f',
      uc_greedy: '1f93e-1f3fd-2642',
      shortnames: [':man_playing_handball_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_handball_tone4:': {
      uc_base: '1f93e-1f3fe-2642',
      uc_output: '1f93e-1f3fe-200d-2642-fe0f',
      uc_match: '1f93e-1f3fe-2642-fe0f',
      uc_greedy: '1f93e-1f3fe-2642',
      shortnames: [':man_playing_handball_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_handball_tone5:': {
      uc_base: '1f93e-1f3ff-2642',
      uc_output: '1f93e-1f3ff-200d-2642-fe0f',
      uc_match: '1f93e-1f3ff-2642-fe0f',
      uc_greedy: '1f93e-1f3ff-2642',
      shortnames: [':man_playing_handball_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_water_polo_tone1:': {
      uc_base: '1f93d-1f3fb-2642',
      uc_output: '1f93d-1f3fb-200d-2642-fe0f',
      uc_match: '1f93d-1f3fb-2642-fe0f',
      uc_greedy: '1f93d-1f3fb-2642',
      shortnames: [':man_playing_water_polo_light_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_water_polo_tone2:': {
      uc_base: '1f93d-1f3fc-2642',
      uc_output: '1f93d-1f3fc-200d-2642-fe0f',
      uc_match: '1f93d-1f3fc-2642-fe0f',
      uc_greedy: '1f93d-1f3fc-2642',
      shortnames: [':man_playing_water_polo_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_water_polo_tone3:': {
      uc_base: '1f93d-1f3fd-2642',
      uc_output: '1f93d-1f3fd-200d-2642-fe0f',
      uc_match: '1f93d-1f3fd-2642-fe0f',
      uc_greedy: '1f93d-1f3fd-2642',
      shortnames: [':man_playing_water_polo_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_water_polo_tone4:': {
      uc_base: '1f93d-1f3fe-2642',
      uc_output: '1f93d-1f3fe-200d-2642-fe0f',
      uc_match: '1f93d-1f3fe-2642-fe0f',
      uc_greedy: '1f93d-1f3fe-2642',
      shortnames: [':man_playing_water_polo_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_playing_water_polo_tone5:': {
      uc_base: '1f93d-1f3ff-2642',
      uc_output: '1f93d-1f3ff-200d-2642-fe0f',
      uc_match: '1f93d-1f3ff-2642-fe0f',
      uc_greedy: '1f93d-1f3ff-2642',
      shortnames: [':man_playing_water_polo_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_police_officer_tone1:': {
      uc_base: '1f46e-1f3fb-2642',
      uc_output: '1f46e-1f3fb-200d-2642-fe0f',
      uc_match: '1f46e-1f3fb-2642-fe0f',
      uc_greedy: '1f46e-1f3fb-2642',
      shortnames: [':man_police_officer_light_skin_tone:'],
      category: 'people'
    },
    ':man_police_officer_tone2:': {
      uc_base: '1f46e-1f3fc-2642',
      uc_output: '1f46e-1f3fc-200d-2642-fe0f',
      uc_match: '1f46e-1f3fc-2642-fe0f',
      uc_greedy: '1f46e-1f3fc-2642',
      shortnames: [':man_police_officer_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_police_officer_tone3:': {
      uc_base: '1f46e-1f3fd-2642',
      uc_output: '1f46e-1f3fd-200d-2642-fe0f',
      uc_match: '1f46e-1f3fd-2642-fe0f',
      uc_greedy: '1f46e-1f3fd-2642',
      shortnames: [':man_police_officer_medium_skin_tone:'],
      category: 'people'
    },
    ':man_police_officer_tone4:': {
      uc_base: '1f46e-1f3fe-2642',
      uc_output: '1f46e-1f3fe-200d-2642-fe0f',
      uc_match: '1f46e-1f3fe-2642-fe0f',
      uc_greedy: '1f46e-1f3fe-2642',
      shortnames: [':man_police_officer_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_police_officer_tone5:': {
      uc_base: '1f46e-1f3ff-2642',
      uc_output: '1f46e-1f3ff-200d-2642-fe0f',
      uc_match: '1f46e-1f3ff-2642-fe0f',
      uc_greedy: '1f46e-1f3ff-2642',
      shortnames: [':man_police_officer_dark_skin_tone:'],
      category: 'people'
    },
    ':man_pouting_tone1:': {
      uc_base: '1f64e-1f3fb-2642',
      uc_output: '1f64e-1f3fb-200d-2642-fe0f',
      uc_match: '1f64e-1f3fb-2642-fe0f',
      uc_greedy: '1f64e-1f3fb-2642',
      shortnames: [':man_pouting_light_skin_tone:'],
      category: 'people'
    },
    ':man_pouting_tone2:': {
      uc_base: '1f64e-1f3fc-2642',
      uc_output: '1f64e-1f3fc-200d-2642-fe0f',
      uc_match: '1f64e-1f3fc-2642-fe0f',
      uc_greedy: '1f64e-1f3fc-2642',
      shortnames: [':man_pouting_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_pouting_tone3:': {
      uc_base: '1f64e-1f3fd-2642',
      uc_output: '1f64e-1f3fd-200d-2642-fe0f',
      uc_match: '1f64e-1f3fd-2642-fe0f',
      uc_greedy: '1f64e-1f3fd-2642',
      shortnames: [':man_pouting_medium_skin_tone:'],
      category: 'people'
    },
    ':man_pouting_tone4:': {
      uc_base: '1f64e-1f3fe-2642',
      uc_output: '1f64e-1f3fe-200d-2642-fe0f',
      uc_match: '1f64e-1f3fe-2642-fe0f',
      uc_greedy: '1f64e-1f3fe-2642',
      shortnames: [':man_pouting_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_pouting_tone5:': {
      uc_base: '1f64e-1f3ff-2642',
      uc_output: '1f64e-1f3ff-200d-2642-fe0f',
      uc_match: '1f64e-1f3ff-2642-fe0f',
      uc_greedy: '1f64e-1f3ff-2642',
      shortnames: [':man_pouting_dark_skin_tone:'],
      category: 'people'
    },
    ':man_raising_hand_tone1:': {
      uc_base: '1f64b-1f3fb-2642',
      uc_output: '1f64b-1f3fb-200d-2642-fe0f',
      uc_match: '1f64b-1f3fb-2642-fe0f',
      uc_greedy: '1f64b-1f3fb-2642',
      shortnames: [':man_raising_hand_light_skin_tone:'],
      category: 'people'
    },
    ':man_raising_hand_tone2:': {
      uc_base: '1f64b-1f3fc-2642',
      uc_output: '1f64b-1f3fc-200d-2642-fe0f',
      uc_match: '1f64b-1f3fc-2642-fe0f',
      uc_greedy: '1f64b-1f3fc-2642',
      shortnames: [':man_raising_hand_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_raising_hand_tone3:': {
      uc_base: '1f64b-1f3fd-2642',
      uc_output: '1f64b-1f3fd-200d-2642-fe0f',
      uc_match: '1f64b-1f3fd-2642-fe0f',
      uc_greedy: '1f64b-1f3fd-2642',
      shortnames: [':man_raising_hand_medium_skin_tone:'],
      category: 'people'
    },
    ':man_raising_hand_tone4:': {
      uc_base: '1f64b-1f3fe-2642',
      uc_output: '1f64b-1f3fe-200d-2642-fe0f',
      uc_match: '1f64b-1f3fe-2642-fe0f',
      uc_greedy: '1f64b-1f3fe-2642',
      shortnames: [':man_raising_hand_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_raising_hand_tone5:': {
      uc_base: '1f64b-1f3ff-2642',
      uc_output: '1f64b-1f3ff-200d-2642-fe0f',
      uc_match: '1f64b-1f3ff-2642-fe0f',
      uc_greedy: '1f64b-1f3ff-2642',
      shortnames: [':man_raising_hand_dark_skin_tone:'],
      category: 'people'
    },
    ':man_rowing_boat_tone1:': {
      uc_base: '1f6a3-1f3fb-2642',
      uc_output: '1f6a3-1f3fb-200d-2642-fe0f',
      uc_match: '1f6a3-1f3fb-2642-fe0f',
      uc_greedy: '1f6a3-1f3fb-2642',
      shortnames: [':man_rowing_boat_light_skin_tone:'],
      category: 'activity'
    },
    ':man_rowing_boat_tone2:': {
      uc_base: '1f6a3-1f3fc-2642',
      uc_output: '1f6a3-1f3fc-200d-2642-fe0f',
      uc_match: '1f6a3-1f3fc-2642-fe0f',
      uc_greedy: '1f6a3-1f3fc-2642',
      shortnames: [':man_rowing_boat_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_rowing_boat_tone3:': {
      uc_base: '1f6a3-1f3fd-2642',
      uc_output: '1f6a3-1f3fd-200d-2642-fe0f',
      uc_match: '1f6a3-1f3fd-2642-fe0f',
      uc_greedy: '1f6a3-1f3fd-2642',
      shortnames: [':man_rowing_boat_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_rowing_boat_tone4:': {
      uc_base: '1f6a3-1f3fe-2642',
      uc_output: '1f6a3-1f3fe-200d-2642-fe0f',
      uc_match: '1f6a3-1f3fe-2642-fe0f',
      uc_greedy: '1f6a3-1f3fe-2642',
      shortnames: [':man_rowing_boat_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_rowing_boat_tone5:': {
      uc_base: '1f6a3-1f3ff-2642',
      uc_output: '1f6a3-1f3ff-200d-2642-fe0f',
      uc_match: '1f6a3-1f3ff-2642-fe0f',
      uc_greedy: '1f6a3-1f3ff-2642',
      shortnames: [':man_rowing_boat_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_running_tone1:': {
      uc_base: '1f3c3-1f3fb-2642',
      uc_output: '1f3c3-1f3fb-200d-2642-fe0f',
      uc_match: '1f3c3-1f3fb-2642-fe0f',
      uc_greedy: '1f3c3-1f3fb-2642',
      shortnames: [':man_running_light_skin_tone:'],
      category: 'people'
    },
    ':man_running_tone2:': {
      uc_base: '1f3c3-1f3fc-2642',
      uc_output: '1f3c3-1f3fc-200d-2642-fe0f',
      uc_match: '1f3c3-1f3fc-2642-fe0f',
      uc_greedy: '1f3c3-1f3fc-2642',
      shortnames: [':man_running_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_running_tone3:': {
      uc_base: '1f3c3-1f3fd-2642',
      uc_output: '1f3c3-1f3fd-200d-2642-fe0f',
      uc_match: '1f3c3-1f3fd-2642-fe0f',
      uc_greedy: '1f3c3-1f3fd-2642',
      shortnames: [':man_running_medium_skin_tone:'],
      category: 'people'
    },
    ':man_running_tone4:': {
      uc_base: '1f3c3-1f3fe-2642',
      uc_output: '1f3c3-1f3fe-200d-2642-fe0f',
      uc_match: '1f3c3-1f3fe-2642-fe0f',
      uc_greedy: '1f3c3-1f3fe-2642',
      shortnames: [':man_running_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_running_tone5:': {
      uc_base: '1f3c3-1f3ff-2642',
      uc_output: '1f3c3-1f3ff-200d-2642-fe0f',
      uc_match: '1f3c3-1f3ff-2642-fe0f',
      uc_greedy: '1f3c3-1f3ff-2642',
      shortnames: [':man_running_dark_skin_tone:'],
      category: 'people'
    },
    ':man_shrugging_tone1:': {
      uc_base: '1f937-1f3fb-2642',
      uc_output: '1f937-1f3fb-200d-2642-fe0f',
      uc_match: '1f937-1f3fb-2642-fe0f',
      uc_greedy: '1f937-1f3fb-2642',
      shortnames: [':man_shrugging_light_skin_tone:'],
      category: 'people'
    },
    ':man_shrugging_tone2:': {
      uc_base: '1f937-1f3fc-2642',
      uc_output: '1f937-1f3fc-200d-2642-fe0f',
      uc_match: '1f937-1f3fc-2642-fe0f',
      uc_greedy: '1f937-1f3fc-2642',
      shortnames: [':man_shrugging_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_shrugging_tone3:': {
      uc_base: '1f937-1f3fd-2642',
      uc_output: '1f937-1f3fd-200d-2642-fe0f',
      uc_match: '1f937-1f3fd-2642-fe0f',
      uc_greedy: '1f937-1f3fd-2642',
      shortnames: [':man_shrugging_medium_skin_tone:'],
      category: 'people'
    },
    ':man_shrugging_tone4:': {
      uc_base: '1f937-1f3fe-2642',
      uc_output: '1f937-1f3fe-200d-2642-fe0f',
      uc_match: '1f937-1f3fe-2642-fe0f',
      uc_greedy: '1f937-1f3fe-2642',
      shortnames: [':man_shrugging_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_shrugging_tone5:': {
      uc_base: '1f937-1f3ff-2642',
      uc_output: '1f937-1f3ff-200d-2642-fe0f',
      uc_match: '1f937-1f3ff-2642-fe0f',
      uc_greedy: '1f937-1f3ff-2642',
      shortnames: [':man_shrugging_dark_skin_tone:'],
      category: 'people'
    },
    ':man_surfing_tone1:': {
      uc_base: '1f3c4-1f3fb-2642',
      uc_output: '1f3c4-1f3fb-200d-2642-fe0f',
      uc_match: '1f3c4-1f3fb-2642-fe0f',
      uc_greedy: '1f3c4-1f3fb-2642',
      shortnames: [':man_surfing_light_skin_tone:'],
      category: 'activity'
    },
    ':man_surfing_tone2:': {
      uc_base: '1f3c4-1f3fc-2642',
      uc_output: '1f3c4-1f3fc-200d-2642-fe0f',
      uc_match: '1f3c4-1f3fc-2642-fe0f',
      uc_greedy: '1f3c4-1f3fc-2642',
      shortnames: [':man_surfing_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_surfing_tone3:': {
      uc_base: '1f3c4-1f3fd-2642',
      uc_output: '1f3c4-1f3fd-200d-2642-fe0f',
      uc_match: '1f3c4-1f3fd-2642-fe0f',
      uc_greedy: '1f3c4-1f3fd-2642',
      shortnames: [':man_surfing_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_surfing_tone4:': {
      uc_base: '1f3c4-1f3fe-2642',
      uc_output: '1f3c4-1f3fe-200d-2642-fe0f',
      uc_match: '1f3c4-1f3fe-2642-fe0f',
      uc_greedy: '1f3c4-1f3fe-2642',
      shortnames: [':man_surfing_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_surfing_tone5:': {
      uc_base: '1f3c4-1f3ff-2642',
      uc_output: '1f3c4-1f3ff-200d-2642-fe0f',
      uc_match: '1f3c4-1f3ff-2642-fe0f',
      uc_greedy: '1f3c4-1f3ff-2642',
      shortnames: [':man_surfing_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_swimming_tone1:': {
      uc_base: '1f3ca-1f3fb-2642',
      uc_output: '1f3ca-1f3fb-200d-2642-fe0f',
      uc_match: '1f3ca-1f3fb-2642-fe0f',
      uc_greedy: '1f3ca-1f3fb-2642',
      shortnames: [':man_swimming_light_skin_tone:'],
      category: 'activity'
    },
    ':man_swimming_tone2:': {
      uc_base: '1f3ca-1f3fc-2642',
      uc_output: '1f3ca-1f3fc-200d-2642-fe0f',
      uc_match: '1f3ca-1f3fc-2642-fe0f',
      uc_greedy: '1f3ca-1f3fc-2642',
      shortnames: [':man_swimming_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_swimming_tone3:': {
      uc_base: '1f3ca-1f3fd-2642',
      uc_output: '1f3ca-1f3fd-200d-2642-fe0f',
      uc_match: '1f3ca-1f3fd-2642-fe0f',
      uc_greedy: '1f3ca-1f3fd-2642',
      shortnames: [':man_swimming_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_swimming_tone4:': {
      uc_base: '1f3ca-1f3fe-2642',
      uc_output: '1f3ca-1f3fe-200d-2642-fe0f',
      uc_match: '1f3ca-1f3fe-2642-fe0f',
      uc_greedy: '1f3ca-1f3fe-2642',
      shortnames: [':man_swimming_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_swimming_tone5:': {
      uc_base: '1f3ca-1f3ff-2642',
      uc_output: '1f3ca-1f3ff-200d-2642-fe0f',
      uc_match: '1f3ca-1f3ff-2642-fe0f',
      uc_greedy: '1f3ca-1f3ff-2642',
      shortnames: [':man_swimming_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_tipping_hand_tone1:': {
      uc_base: '1f481-1f3fb-2642',
      uc_output: '1f481-1f3fb-200d-2642-fe0f',
      uc_match: '1f481-1f3fb-2642-fe0f',
      uc_greedy: '1f481-1f3fb-2642',
      shortnames: [':man_tipping_hand_light_skin_tone:'],
      category: 'people'
    },
    ':man_tipping_hand_tone2:': {
      uc_base: '1f481-1f3fc-2642',
      uc_output: '1f481-1f3fc-200d-2642-fe0f',
      uc_match: '1f481-1f3fc-2642-fe0f',
      uc_greedy: '1f481-1f3fc-2642',
      shortnames: [':man_tipping_hand_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_tipping_hand_tone3:': {
      uc_base: '1f481-1f3fd-2642',
      uc_output: '1f481-1f3fd-200d-2642-fe0f',
      uc_match: '1f481-1f3fd-2642-fe0f',
      uc_greedy: '1f481-1f3fd-2642',
      shortnames: [':man_tipping_hand_medium_skin_tone:'],
      category: 'people'
    },
    ':man_tipping_hand_tone4:': {
      uc_base: '1f481-1f3fe-2642',
      uc_output: '1f481-1f3fe-200d-2642-fe0f',
      uc_match: '1f481-1f3fe-2642-fe0f',
      uc_greedy: '1f481-1f3fe-2642',
      shortnames: [':man_tipping_hand_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_tipping_hand_tone5:': {
      uc_base: '1f481-1f3ff-2642',
      uc_output: '1f481-1f3ff-200d-2642-fe0f',
      uc_match: '1f481-1f3ff-2642-fe0f',
      uc_greedy: '1f481-1f3ff-2642',
      shortnames: [':man_tipping_hand_dark_skin_tone:'],
      category: 'people'
    },
    ':man_vampire_tone1:': {
      uc_base: '1f9db-1f3fb-2642',
      uc_output: '1f9db-1f3fb-200d-2642-fe0f',
      uc_match: '1f9db-1f3fb-2642-fe0f',
      uc_greedy: '1f9db-1f3fb-2642',
      shortnames: [':man_vampire_light_skin_tone:'],
      category: 'people'
    },
    ':man_vampire_tone2:': {
      uc_base: '1f9db-1f3fc-2642',
      uc_output: '1f9db-1f3fc-200d-2642-fe0f',
      uc_match: '1f9db-1f3fc-2642-fe0f',
      uc_greedy: '1f9db-1f3fc-2642',
      shortnames: [':man_vampire_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_vampire_tone3:': {
      uc_base: '1f9db-1f3fd-2642',
      uc_output: '1f9db-1f3fd-200d-2642-fe0f',
      uc_match: '1f9db-1f3fd-2642-fe0f',
      uc_greedy: '1f9db-1f3fd-2642',
      shortnames: [':man_vampire_medium_skin_tone:'],
      category: 'people'
    },
    ':man_vampire_tone4:': {
      uc_base: '1f9db-1f3fe-2642',
      uc_output: '1f9db-1f3fe-200d-2642-fe0f',
      uc_match: '1f9db-1f3fe-2642-fe0f',
      uc_greedy: '1f9db-1f3fe-2642',
      shortnames: [':man_vampire_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_vampire_tone5:': {
      uc_base: '1f9db-1f3ff-2642',
      uc_output: '1f9db-1f3ff-200d-2642-fe0f',
      uc_match: '1f9db-1f3ff-2642-fe0f',
      uc_greedy: '1f9db-1f3ff-2642',
      shortnames: [':man_vampire_dark_skin_tone:'],
      category: 'people'
    },
    ':man_walking_tone1:': {
      uc_base: '1f6b6-1f3fb-2642',
      uc_output: '1f6b6-1f3fb-200d-2642-fe0f',
      uc_match: '1f6b6-1f3fb-2642-fe0f',
      uc_greedy: '1f6b6-1f3fb-2642',
      shortnames: [':man_walking_light_skin_tone:'],
      category: 'people'
    },
    ':man_walking_tone2:': {
      uc_base: '1f6b6-1f3fc-2642',
      uc_output: '1f6b6-1f3fc-200d-2642-fe0f',
      uc_match: '1f6b6-1f3fc-2642-fe0f',
      uc_greedy: '1f6b6-1f3fc-2642',
      shortnames: [':man_walking_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_walking_tone3:': {
      uc_base: '1f6b6-1f3fd-2642',
      uc_output: '1f6b6-1f3fd-200d-2642-fe0f',
      uc_match: '1f6b6-1f3fd-2642-fe0f',
      uc_greedy: '1f6b6-1f3fd-2642',
      shortnames: [':man_walking_medium_skin_tone:'],
      category: 'people'
    },
    ':man_walking_tone4:': {
      uc_base: '1f6b6-1f3fe-2642',
      uc_output: '1f6b6-1f3fe-200d-2642-fe0f',
      uc_match: '1f6b6-1f3fe-2642-fe0f',
      uc_greedy: '1f6b6-1f3fe-2642',
      shortnames: [':man_walking_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_walking_tone5:': {
      uc_base: '1f6b6-1f3ff-2642',
      uc_output: '1f6b6-1f3ff-200d-2642-fe0f',
      uc_match: '1f6b6-1f3ff-2642-fe0f',
      uc_greedy: '1f6b6-1f3ff-2642',
      shortnames: [':man_walking_dark_skin_tone:'],
      category: 'people'
    },
    ':man_wearing_turban_tone1:': {
      uc_base: '1f473-1f3fb-2642',
      uc_output: '1f473-1f3fb-200d-2642-fe0f',
      uc_match: '1f473-1f3fb-2642-fe0f',
      uc_greedy: '1f473-1f3fb-2642',
      shortnames: [':man_wearing_turban_light_skin_tone:'],
      category: 'people'
    },
    ':man_wearing_turban_tone2:': {
      uc_base: '1f473-1f3fc-2642',
      uc_output: '1f473-1f3fc-200d-2642-fe0f',
      uc_match: '1f473-1f3fc-2642-fe0f',
      uc_greedy: '1f473-1f3fc-2642',
      shortnames: [':man_wearing_turban_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_wearing_turban_tone3:': {
      uc_base: '1f473-1f3fd-2642',
      uc_output: '1f473-1f3fd-200d-2642-fe0f',
      uc_match: '1f473-1f3fd-2642-fe0f',
      uc_greedy: '1f473-1f3fd-2642',
      shortnames: [':man_wearing_turban_medium_skin_tone:'],
      category: 'people'
    },
    ':man_wearing_turban_tone4:': {
      uc_base: '1f473-1f3fe-2642',
      uc_output: '1f473-1f3fe-200d-2642-fe0f',
      uc_match: '1f473-1f3fe-2642-fe0f',
      uc_greedy: '1f473-1f3fe-2642',
      shortnames: [':man_wearing_turban_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_wearing_turban_tone5:': {
      uc_base: '1f473-1f3ff-2642',
      uc_output: '1f473-1f3ff-200d-2642-fe0f',
      uc_match: '1f473-1f3ff-2642-fe0f',
      uc_greedy: '1f473-1f3ff-2642',
      shortnames: [':man_wearing_turban_dark_skin_tone:'],
      category: 'people'
    },
    ':mermaid_tone1:': {
      uc_base: '1f9dc-1f3fb-2640',
      uc_output: '1f9dc-1f3fb-200d-2640-fe0f',
      uc_match: '1f9dc-1f3fb-2640-fe0f',
      uc_greedy: '1f9dc-1f3fb-2640',
      shortnames: [':mermaid_light_skin_tone:'],
      category: 'people'
    },
    ':mermaid_tone2:': {
      uc_base: '1f9dc-1f3fc-2640',
      uc_output: '1f9dc-1f3fc-200d-2640-fe0f',
      uc_match: '1f9dc-1f3fc-2640-fe0f',
      uc_greedy: '1f9dc-1f3fc-2640',
      shortnames: [':mermaid_medium_light_skin_tone:'],
      category: 'people'
    },
    ':mermaid_tone3:': {
      uc_base: '1f9dc-1f3fd-2640',
      uc_output: '1f9dc-1f3fd-200d-2640-fe0f',
      uc_match: '1f9dc-1f3fd-2640-fe0f',
      uc_greedy: '1f9dc-1f3fd-2640',
      shortnames: [':mermaid_medium_skin_tone:'],
      category: 'people'
    },
    ':mermaid_tone4:': {
      uc_base: '1f9dc-1f3fe-2640',
      uc_output: '1f9dc-1f3fe-200d-2640-fe0f',
      uc_match: '1f9dc-1f3fe-2640-fe0f',
      uc_greedy: '1f9dc-1f3fe-2640',
      shortnames: [':mermaid_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':mermaid_tone5:': {
      uc_base: '1f9dc-1f3ff-2640',
      uc_output: '1f9dc-1f3ff-200d-2640-fe0f',
      uc_match: '1f9dc-1f3ff-2640-fe0f',
      uc_greedy: '1f9dc-1f3ff-2640',
      shortnames: [':mermaid_dark_skin_tone:'],
      category: 'people'
    },
    ':merman_tone1:': {
      uc_base: '1f9dc-1f3fb-2642',
      uc_output: '1f9dc-1f3fb-200d-2642-fe0f',
      uc_match: '1f9dc-1f3fb-2642-fe0f',
      uc_greedy: '1f9dc-1f3fb-2642',
      shortnames: [':merman_light_skin_tone:'],
      category: 'people'
    },
    ':merman_tone2:': {
      uc_base: '1f9dc-1f3fc-2642',
      uc_output: '1f9dc-1f3fc-200d-2642-fe0f',
      uc_match: '1f9dc-1f3fc-2642-fe0f',
      uc_greedy: '1f9dc-1f3fc-2642',
      shortnames: [':merman_medium_light_skin_tone:'],
      category: 'people'
    },
    ':merman_tone3:': {
      uc_base: '1f9dc-1f3fd-2642',
      uc_output: '1f9dc-1f3fd-200d-2642-fe0f',
      uc_match: '1f9dc-1f3fd-2642-fe0f',
      uc_greedy: '1f9dc-1f3fd-2642',
      shortnames: [':merman_medium_skin_tone:'],
      category: 'people'
    },
    ':merman_tone4:': {
      uc_base: '1f9dc-1f3fe-2642',
      uc_output: '1f9dc-1f3fe-200d-2642-fe0f',
      uc_match: '1f9dc-1f3fe-2642-fe0f',
      uc_greedy: '1f9dc-1f3fe-2642',
      shortnames: [':merman_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':merman_tone5:': {
      uc_base: '1f9dc-1f3ff-2642',
      uc_output: '1f9dc-1f3ff-200d-2642-fe0f',
      uc_match: '1f9dc-1f3ff-2642-fe0f',
      uc_greedy: '1f9dc-1f3ff-2642',
      shortnames: [':merman_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_biking_tone1:': {
      uc_base: '1f6b4-1f3fb-2640',
      uc_output: '1f6b4-1f3fb-200d-2640-fe0f',
      uc_match: '1f6b4-1f3fb-2640-fe0f',
      uc_greedy: '1f6b4-1f3fb-2640',
      shortnames: [':woman_biking_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_biking_tone2:': {
      uc_base: '1f6b4-1f3fc-2640',
      uc_output: '1f6b4-1f3fc-200d-2640-fe0f',
      uc_match: '1f6b4-1f3fc-2640-fe0f',
      uc_greedy: '1f6b4-1f3fc-2640',
      shortnames: [':woman_biking_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_biking_tone3:': {
      uc_base: '1f6b4-1f3fd-2640',
      uc_output: '1f6b4-1f3fd-200d-2640-fe0f',
      uc_match: '1f6b4-1f3fd-2640-fe0f',
      uc_greedy: '1f6b4-1f3fd-2640',
      shortnames: [':woman_biking_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_biking_tone4:': {
      uc_base: '1f6b4-1f3fe-2640',
      uc_output: '1f6b4-1f3fe-200d-2640-fe0f',
      uc_match: '1f6b4-1f3fe-2640-fe0f',
      uc_greedy: '1f6b4-1f3fe-2640',
      shortnames: [':woman_biking_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_biking_tone5:': {
      uc_base: '1f6b4-1f3ff-2640',
      uc_output: '1f6b4-1f3ff-200d-2640-fe0f',
      uc_match: '1f6b4-1f3ff-2640-fe0f',
      uc_greedy: '1f6b4-1f3ff-2640',
      shortnames: [':woman_biking_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_bowing_tone1:': {
      uc_base: '1f647-1f3fb-2640',
      uc_output: '1f647-1f3fb-200d-2640-fe0f',
      uc_match: '1f647-1f3fb-2640-fe0f',
      uc_greedy: '1f647-1f3fb-2640',
      shortnames: [':woman_bowing_light_skin_tone:'],
      category: 'people'
    },
    ':woman_bowing_tone2:': {
      uc_base: '1f647-1f3fc-2640',
      uc_output: '1f647-1f3fc-200d-2640-fe0f',
      uc_match: '1f647-1f3fc-2640-fe0f',
      uc_greedy: '1f647-1f3fc-2640',
      shortnames: [':woman_bowing_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_bowing_tone3:': {
      uc_base: '1f647-1f3fd-2640',
      uc_output: '1f647-1f3fd-200d-2640-fe0f',
      uc_match: '1f647-1f3fd-2640-fe0f',
      uc_greedy: '1f647-1f3fd-2640',
      shortnames: [':woman_bowing_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_bowing_tone4:': {
      uc_base: '1f647-1f3fe-2640',
      uc_output: '1f647-1f3fe-200d-2640-fe0f',
      uc_match: '1f647-1f3fe-2640-fe0f',
      uc_greedy: '1f647-1f3fe-2640',
      shortnames: [':woman_bowing_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_bowing_tone5:': {
      uc_base: '1f647-1f3ff-2640',
      uc_output: '1f647-1f3ff-200d-2640-fe0f',
      uc_match: '1f647-1f3ff-2640-fe0f',
      uc_greedy: '1f647-1f3ff-2640',
      shortnames: [':woman_bowing_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_cartwheeling_tone1:': {
      uc_base: '1f938-1f3fb-2640',
      uc_output: '1f938-1f3fb-200d-2640-fe0f',
      uc_match: '1f938-1f3fb-2640-fe0f',
      uc_greedy: '1f938-1f3fb-2640',
      shortnames: [':woman_cartwheeling_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_cartwheeling_tone2:': {
      uc_base: '1f938-1f3fc-2640',
      uc_output: '1f938-1f3fc-200d-2640-fe0f',
      uc_match: '1f938-1f3fc-2640-fe0f',
      uc_greedy: '1f938-1f3fc-2640',
      shortnames: [':woman_cartwheeling_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_cartwheeling_tone3:': {
      uc_base: '1f938-1f3fd-2640',
      uc_output: '1f938-1f3fd-200d-2640-fe0f',
      uc_match: '1f938-1f3fd-2640-fe0f',
      uc_greedy: '1f938-1f3fd-2640',
      shortnames: [':woman_cartwheeling_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_cartwheeling_tone4:': {
      uc_base: '1f938-1f3fe-2640',
      uc_output: '1f938-1f3fe-200d-2640-fe0f',
      uc_match: '1f938-1f3fe-2640-fe0f',
      uc_greedy: '1f938-1f3fe-2640',
      shortnames: [':woman_cartwheeling_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_cartwheeling_tone5:': {
      uc_base: '1f938-1f3ff-2640',
      uc_output: '1f938-1f3ff-200d-2640-fe0f',
      uc_match: '1f938-1f3ff-2640-fe0f',
      uc_greedy: '1f938-1f3ff-2640',
      shortnames: [':woman_cartwheeling_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_climbing_tone1:': {
      uc_base: '1f9d7-1f3fb-2640',
      uc_output: '1f9d7-1f3fb-200d-2640-fe0f',
      uc_match: '1f9d7-1f3fb-2640-fe0f',
      uc_greedy: '1f9d7-1f3fb-2640',
      shortnames: [':woman_climbing_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_climbing_tone2:': {
      uc_base: '1f9d7-1f3fc-2640',
      uc_output: '1f9d7-1f3fc-200d-2640-fe0f',
      uc_match: '1f9d7-1f3fc-2640-fe0f',
      uc_greedy: '1f9d7-1f3fc-2640',
      shortnames: [':woman_climbing_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_climbing_tone3:': {
      uc_base: '1f9d7-1f3fd-2640',
      uc_output: '1f9d7-1f3fd-200d-2640-fe0f',
      uc_match: '1f9d7-1f3fd-2640-fe0f',
      uc_greedy: '1f9d7-1f3fd-2640',
      shortnames: [':woman_climbing_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_climbing_tone4:': {
      uc_base: '1f9d7-1f3fe-2640',
      uc_output: '1f9d7-1f3fe-200d-2640-fe0f',
      uc_match: '1f9d7-1f3fe-2640-fe0f',
      uc_greedy: '1f9d7-1f3fe-2640',
      shortnames: [':woman_climbing_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_climbing_tone5:': {
      uc_base: '1f9d7-1f3ff-2640',
      uc_output: '1f9d7-1f3ff-200d-2640-fe0f',
      uc_match: '1f9d7-1f3ff-2640-fe0f',
      uc_greedy: '1f9d7-1f3ff-2640',
      shortnames: [':woman_climbing_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_construction_worker_tone1:': {
      uc_base: '1f477-1f3fb-2640',
      uc_output: '1f477-1f3fb-200d-2640-fe0f',
      uc_match: '1f477-1f3fb-2640-fe0f',
      uc_greedy: '1f477-1f3fb-2640',
      shortnames: [':woman_construction_worker_light_skin_tone:'],
      category: 'people'
    },
    ':woman_construction_worker_tone2:': {
      uc_base: '1f477-1f3fc-2640',
      uc_output: '1f477-1f3fc-200d-2640-fe0f',
      uc_match: '1f477-1f3fc-2640-fe0f',
      uc_greedy: '1f477-1f3fc-2640',
      shortnames: [':woman_construction_worker_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_construction_worker_tone3:': {
      uc_base: '1f477-1f3fd-2640',
      uc_output: '1f477-1f3fd-200d-2640-fe0f',
      uc_match: '1f477-1f3fd-2640-fe0f',
      uc_greedy: '1f477-1f3fd-2640',
      shortnames: [':woman_construction_worker_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_construction_worker_tone4:': {
      uc_base: '1f477-1f3fe-2640',
      uc_output: '1f477-1f3fe-200d-2640-fe0f',
      uc_match: '1f477-1f3fe-2640-fe0f',
      uc_greedy: '1f477-1f3fe-2640',
      shortnames: [':woman_construction_worker_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_construction_worker_tone5:': {
      uc_base: '1f477-1f3ff-2640',
      uc_output: '1f477-1f3ff-200d-2640-fe0f',
      uc_match: '1f477-1f3ff-2640-fe0f',
      uc_greedy: '1f477-1f3ff-2640',
      shortnames: [':woman_construction_worker_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_detective_tone1:': {
      uc_base: '1f575-1f3fb-2640',
      uc_output: '1f575-1f3fb-200d-2640-fe0f',
      uc_match: '1f575-fe0f-1f3fb-2640-fe0f',
      uc_greedy: '1f575-1f3fb-2640',
      shortnames: [':woman_detective_light_skin_tone:'],
      category: 'people'
    },
    ':woman_detective_tone2:': {
      uc_base: '1f575-1f3fc-2640',
      uc_output: '1f575-1f3fc-200d-2640-fe0f',
      uc_match: '1f575-fe0f-1f3fc-2640-fe0f',
      uc_greedy: '1f575-1f3fc-2640',
      shortnames: [':woman_detective_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_detective_tone3:': {
      uc_base: '1f575-1f3fd-2640',
      uc_output: '1f575-1f3fd-200d-2640-fe0f',
      uc_match: '1f575-fe0f-1f3fd-2640-fe0f',
      uc_greedy: '1f575-1f3fd-2640',
      shortnames: [':woman_detective_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_detective_tone4:': {
      uc_base: '1f575-1f3fe-2640',
      uc_output: '1f575-1f3fe-200d-2640-fe0f',
      uc_match: '1f575-fe0f-1f3fe-2640-fe0f',
      uc_greedy: '1f575-1f3fe-2640',
      shortnames: [':woman_detective_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_detective_tone5:': {
      uc_base: '1f575-1f3ff-2640',
      uc_output: '1f575-1f3ff-200d-2640-fe0f',
      uc_match: '1f575-fe0f-1f3ff-2640-fe0f',
      uc_greedy: '1f575-1f3ff-2640',
      shortnames: [':woman_detective_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_elf_tone1:': {
      uc_base: '1f9dd-1f3fb-2640',
      uc_output: '1f9dd-1f3fb-200d-2640-fe0f',
      uc_match: '1f9dd-1f3fb-2640-fe0f',
      uc_greedy: '1f9dd-1f3fb-2640',
      shortnames: [':woman_elf_light_skin_tone:'],
      category: 'people'
    },
    ':woman_elf_tone2:': {
      uc_base: '1f9dd-1f3fc-2640',
      uc_output: '1f9dd-1f3fc-200d-2640-fe0f',
      uc_match: '1f9dd-1f3fc-2640-fe0f',
      uc_greedy: '1f9dd-1f3fc-2640',
      shortnames: [':woman_elf_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_elf_tone3:': {
      uc_base: '1f9dd-1f3fd-2640',
      uc_output: '1f9dd-1f3fd-200d-2640-fe0f',
      uc_match: '1f9dd-1f3fd-2640-fe0f',
      uc_greedy: '1f9dd-1f3fd-2640',
      shortnames: [':woman_elf_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_elf_tone4:': {
      uc_base: '1f9dd-1f3fe-2640',
      uc_output: '1f9dd-1f3fe-200d-2640-fe0f',
      uc_match: '1f9dd-1f3fe-2640-fe0f',
      uc_greedy: '1f9dd-1f3fe-2640',
      shortnames: [':woman_elf_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_elf_tone5:': {
      uc_base: '1f9dd-1f3ff-2640',
      uc_output: '1f9dd-1f3ff-200d-2640-fe0f',
      uc_match: '1f9dd-1f3ff-2640-fe0f',
      uc_greedy: '1f9dd-1f3ff-2640',
      shortnames: [':woman_elf_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_facepalming_tone1:': {
      uc_base: '1f926-1f3fb-2640',
      uc_output: '1f926-1f3fb-200d-2640-fe0f',
      uc_match: '1f926-1f3fb-2640-fe0f',
      uc_greedy: '1f926-1f3fb-2640',
      shortnames: [':woman_facepalming_light_skin_tone:'],
      category: 'people'
    },
    ':woman_facepalming_tone2:': {
      uc_base: '1f926-1f3fc-2640',
      uc_output: '1f926-1f3fc-200d-2640-fe0f',
      uc_match: '1f926-1f3fc-2640-fe0f',
      uc_greedy: '1f926-1f3fc-2640',
      shortnames: [':woman_facepalming_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_facepalming_tone3:': {
      uc_base: '1f926-1f3fd-2640',
      uc_output: '1f926-1f3fd-200d-2640-fe0f',
      uc_match: '1f926-1f3fd-2640-fe0f',
      uc_greedy: '1f926-1f3fd-2640',
      shortnames: [':woman_facepalming_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_facepalming_tone4:': {
      uc_base: '1f926-1f3fe-2640',
      uc_output: '1f926-1f3fe-200d-2640-fe0f',
      uc_match: '1f926-1f3fe-2640-fe0f',
      uc_greedy: '1f926-1f3fe-2640',
      shortnames: [':woman_facepalming_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_facepalming_tone5:': {
      uc_base: '1f926-1f3ff-2640',
      uc_output: '1f926-1f3ff-200d-2640-fe0f',
      uc_match: '1f926-1f3ff-2640-fe0f',
      uc_greedy: '1f926-1f3ff-2640',
      shortnames: [':woman_facepalming_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_fairy_tone1:': {
      uc_base: '1f9da-1f3fb-2640',
      uc_output: '1f9da-1f3fb-200d-2640-fe0f',
      uc_match: '1f9da-1f3fb-2640-fe0f',
      uc_greedy: '1f9da-1f3fb-2640',
      shortnames: [':woman_fairy_light_skin_tone:'],
      category: 'people'
    },
    ':woman_fairy_tone2:': {
      uc_base: '1f9da-1f3fc-2640',
      uc_output: '1f9da-1f3fc-200d-2640-fe0f',
      uc_match: '1f9da-1f3fc-2640-fe0f',
      uc_greedy: '1f9da-1f3fc-2640',
      shortnames: [':woman_fairy_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_fairy_tone3:': {
      uc_base: '1f9da-1f3fd-2640',
      uc_output: '1f9da-1f3fd-200d-2640-fe0f',
      uc_match: '1f9da-1f3fd-2640-fe0f',
      uc_greedy: '1f9da-1f3fd-2640',
      shortnames: [':woman_fairy_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_fairy_tone4:': {
      uc_base: '1f9da-1f3fe-2640',
      uc_output: '1f9da-1f3fe-200d-2640-fe0f',
      uc_match: '1f9da-1f3fe-2640-fe0f',
      uc_greedy: '1f9da-1f3fe-2640',
      shortnames: [':woman_fairy_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_fairy_tone5:': {
      uc_base: '1f9da-1f3ff-2640',
      uc_output: '1f9da-1f3ff-200d-2640-fe0f',
      uc_match: '1f9da-1f3ff-2640-fe0f',
      uc_greedy: '1f9da-1f3ff-2640',
      shortnames: [':woman_fairy_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_frowning_tone1:': {
      uc_base: '1f64d-1f3fb-2640',
      uc_output: '1f64d-1f3fb-200d-2640-fe0f',
      uc_match: '1f64d-1f3fb-2640-fe0f',
      uc_greedy: '1f64d-1f3fb-2640',
      shortnames: [':woman_frowning_light_skin_tone:'],
      category: 'people'
    },
    ':woman_frowning_tone2:': {
      uc_base: '1f64d-1f3fc-2640',
      uc_output: '1f64d-1f3fc-200d-2640-fe0f',
      uc_match: '1f64d-1f3fc-2640-fe0f',
      uc_greedy: '1f64d-1f3fc-2640',
      shortnames: [':woman_frowning_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_frowning_tone3:': {
      uc_base: '1f64d-1f3fd-2640',
      uc_output: '1f64d-1f3fd-200d-2640-fe0f',
      uc_match: '1f64d-1f3fd-2640-fe0f',
      uc_greedy: '1f64d-1f3fd-2640',
      shortnames: [':woman_frowning_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_frowning_tone4:': {
      uc_base: '1f64d-1f3fe-2640',
      uc_output: '1f64d-1f3fe-200d-2640-fe0f',
      uc_match: '1f64d-1f3fe-2640-fe0f',
      uc_greedy: '1f64d-1f3fe-2640',
      shortnames: [':woman_frowning_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_frowning_tone5:': {
      uc_base: '1f64d-1f3ff-2640',
      uc_output: '1f64d-1f3ff-200d-2640-fe0f',
      uc_match: '1f64d-1f3ff-2640-fe0f',
      uc_greedy: '1f64d-1f3ff-2640',
      shortnames: [':woman_frowning_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_no_tone1:': {
      uc_base: '1f645-1f3fb-2640',
      uc_output: '1f645-1f3fb-200d-2640-fe0f',
      uc_match: '1f645-1f3fb-2640-fe0f',
      uc_greedy: '1f645-1f3fb-2640',
      shortnames: [':woman_gesturing_no_light_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_no_tone2:': {
      uc_base: '1f645-1f3fc-2640',
      uc_output: '1f645-1f3fc-200d-2640-fe0f',
      uc_match: '1f645-1f3fc-2640-fe0f',
      uc_greedy: '1f645-1f3fc-2640',
      shortnames: [':woman_gesturing_no_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_no_tone3:': {
      uc_base: '1f645-1f3fd-2640',
      uc_output: '1f645-1f3fd-200d-2640-fe0f',
      uc_match: '1f645-1f3fd-2640-fe0f',
      uc_greedy: '1f645-1f3fd-2640',
      shortnames: [':woman_gesturing_no_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_no_tone4:': {
      uc_base: '1f645-1f3fe-2640',
      uc_output: '1f645-1f3fe-200d-2640-fe0f',
      uc_match: '1f645-1f3fe-2640-fe0f',
      uc_greedy: '1f645-1f3fe-2640',
      shortnames: [':woman_gesturing_no_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_no_tone5:': {
      uc_base: '1f645-1f3ff-2640',
      uc_output: '1f645-1f3ff-200d-2640-fe0f',
      uc_match: '1f645-1f3ff-2640-fe0f',
      uc_greedy: '1f645-1f3ff-2640',
      shortnames: [':woman_gesturing_no_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_ok_tone1:': {
      uc_base: '1f646-1f3fb-2640',
      uc_output: '1f646-1f3fb-200d-2640-fe0f',
      uc_match: '1f646-1f3fb-2640-fe0f',
      uc_greedy: '1f646-1f3fb-2640',
      shortnames: [':woman_gesturing_ok_light_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_ok_tone2:': {
      uc_base: '1f646-1f3fc-2640',
      uc_output: '1f646-1f3fc-200d-2640-fe0f',
      uc_match: '1f646-1f3fc-2640-fe0f',
      uc_greedy: '1f646-1f3fc-2640',
      shortnames: [':woman_gesturing_ok_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_ok_tone3:': {
      uc_base: '1f646-1f3fd-2640',
      uc_output: '1f646-1f3fd-200d-2640-fe0f',
      uc_match: '1f646-1f3fd-2640-fe0f',
      uc_greedy: '1f646-1f3fd-2640',
      shortnames: [':woman_gesturing_ok_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_ok_tone4:': {
      uc_base: '1f646-1f3fe-2640',
      uc_output: '1f646-1f3fe-200d-2640-fe0f',
      uc_match: '1f646-1f3fe-2640-fe0f',
      uc_greedy: '1f646-1f3fe-2640',
      shortnames: [':woman_gesturing_ok_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_gesturing_ok_tone5:': {
      uc_base: '1f646-1f3ff-2640',
      uc_output: '1f646-1f3ff-200d-2640-fe0f',
      uc_match: '1f646-1f3ff-2640-fe0f',
      uc_greedy: '1f646-1f3ff-2640',
      shortnames: [':woman_gesturing_ok_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_face_massage_tone1:': {
      uc_base: '1f486-1f3fb-2640',
      uc_output: '1f486-1f3fb-200d-2640-fe0f',
      uc_match: '1f486-1f3fb-2640-fe0f',
      uc_greedy: '1f486-1f3fb-2640',
      shortnames: [':woman_getting_face_massage_light_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_face_massage_tone2:': {
      uc_base: '1f486-1f3fc-2640',
      uc_output: '1f486-1f3fc-200d-2640-fe0f',
      uc_match: '1f486-1f3fc-2640-fe0f',
      uc_greedy: '1f486-1f3fc-2640',
      shortnames: [':woman_getting_face_massage_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_face_massage_tone3:': {
      uc_base: '1f486-1f3fd-2640',
      uc_output: '1f486-1f3fd-200d-2640-fe0f',
      uc_match: '1f486-1f3fd-2640-fe0f',
      uc_greedy: '1f486-1f3fd-2640',
      shortnames: [':woman_getting_face_massage_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_face_massage_tone4:': {
      uc_base: '1f486-1f3fe-2640',
      uc_output: '1f486-1f3fe-200d-2640-fe0f',
      uc_match: '1f486-1f3fe-2640-fe0f',
      uc_greedy: '1f486-1f3fe-2640',
      shortnames: [':woman_getting_face_massage_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_face_massage_tone5:': {
      uc_base: '1f486-1f3ff-2640',
      uc_output: '1f486-1f3ff-200d-2640-fe0f',
      uc_match: '1f486-1f3ff-2640-fe0f',
      uc_greedy: '1f486-1f3ff-2640',
      shortnames: [':woman_getting_face_massage_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_haircut_tone1:': {
      uc_base: '1f487-1f3fb-2640',
      uc_output: '1f487-1f3fb-200d-2640-fe0f',
      uc_match: '1f487-1f3fb-2640-fe0f',
      uc_greedy: '1f487-1f3fb-2640',
      shortnames: [':woman_getting_haircut_light_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_haircut_tone2:': {
      uc_base: '1f487-1f3fc-2640',
      uc_output: '1f487-1f3fc-200d-2640-fe0f',
      uc_match: '1f487-1f3fc-2640-fe0f',
      uc_greedy: '1f487-1f3fc-2640',
      shortnames: [':woman_getting_haircut_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_haircut_tone3:': {
      uc_base: '1f487-1f3fd-2640',
      uc_output: '1f487-1f3fd-200d-2640-fe0f',
      uc_match: '1f487-1f3fd-2640-fe0f',
      uc_greedy: '1f487-1f3fd-2640',
      shortnames: [':woman_getting_haircut_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_haircut_tone4:': {
      uc_base: '1f487-1f3fe-2640',
      uc_output: '1f487-1f3fe-200d-2640-fe0f',
      uc_match: '1f487-1f3fe-2640-fe0f',
      uc_greedy: '1f487-1f3fe-2640',
      shortnames: [':woman_getting_haircut_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_getting_haircut_tone5:': {
      uc_base: '1f487-1f3ff-2640',
      uc_output: '1f487-1f3ff-200d-2640-fe0f',
      uc_match: '1f487-1f3ff-2640-fe0f',
      uc_greedy: '1f487-1f3ff-2640',
      shortnames: [':woman_getting_haircut_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_golfing_tone1:': {
      uc_base: '1f3cc-1f3fb-2640',
      uc_output: '1f3cc-1f3fb-200d-2640-fe0f',
      uc_match: '1f3cc-fe0f-1f3fb-2640-fe0f',
      uc_greedy: '1f3cc-1f3fb-2640',
      shortnames: [':woman_golfing_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_golfing_tone2:': {
      uc_base: '1f3cc-1f3fc-2640',
      uc_output: '1f3cc-1f3fc-200d-2640-fe0f',
      uc_match: '1f3cc-fe0f-1f3fc-2640-fe0f',
      uc_greedy: '1f3cc-1f3fc-2640',
      shortnames: [':woman_golfing_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_golfing_tone3:': {
      uc_base: '1f3cc-1f3fd-2640',
      uc_output: '1f3cc-1f3fd-200d-2640-fe0f',
      uc_match: '1f3cc-fe0f-1f3fd-2640-fe0f',
      uc_greedy: '1f3cc-1f3fd-2640',
      shortnames: [':woman_golfing_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_golfing_tone4:': {
      uc_base: '1f3cc-1f3fe-2640',
      uc_output: '1f3cc-1f3fe-200d-2640-fe0f',
      uc_match: '1f3cc-fe0f-1f3fe-2640-fe0f',
      uc_greedy: '1f3cc-1f3fe-2640',
      shortnames: [':woman_golfing_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_golfing_tone5:': {
      uc_base: '1f3cc-1f3ff-2640',
      uc_output: '1f3cc-1f3ff-200d-2640-fe0f',
      uc_match: '1f3cc-fe0f-1f3ff-2640-fe0f',
      uc_greedy: '1f3cc-1f3ff-2640',
      shortnames: [':woman_golfing_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_guard_tone1:': {
      uc_base: '1f482-1f3fb-2640',
      uc_output: '1f482-1f3fb-200d-2640-fe0f',
      uc_match: '1f482-1f3fb-2640-fe0f',
      uc_greedy: '1f482-1f3fb-2640',
      shortnames: [':woman_guard_light_skin_tone:'],
      category: 'people'
    },
    ':woman_guard_tone2:': {
      uc_base: '1f482-1f3fc-2640',
      uc_output: '1f482-1f3fc-200d-2640-fe0f',
      uc_match: '1f482-1f3fc-2640-fe0f',
      uc_greedy: '1f482-1f3fc-2640',
      shortnames: [':woman_guard_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_guard_tone3:': {
      uc_base: '1f482-1f3fd-2640',
      uc_output: '1f482-1f3fd-200d-2640-fe0f',
      uc_match: '1f482-1f3fd-2640-fe0f',
      uc_greedy: '1f482-1f3fd-2640',
      shortnames: [':woman_guard_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_guard_tone4:': {
      uc_base: '1f482-1f3fe-2640',
      uc_output: '1f482-1f3fe-200d-2640-fe0f',
      uc_match: '1f482-1f3fe-2640-fe0f',
      uc_greedy: '1f482-1f3fe-2640',
      shortnames: [':woman_guard_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_guard_tone5:': {
      uc_base: '1f482-1f3ff-2640',
      uc_output: '1f482-1f3ff-200d-2640-fe0f',
      uc_match: '1f482-1f3ff-2640-fe0f',
      uc_greedy: '1f482-1f3ff-2640',
      shortnames: [':woman_guard_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_health_worker_tone1:': {
      uc_base: '1f469-1f3fb-2695',
      uc_output: '1f469-1f3fb-200d-2695-fe0f',
      uc_match: '1f469-1f3fb-2695-fe0f',
      uc_greedy: '1f469-1f3fb-2695',
      shortnames: [':woman_health_worker_light_skin_tone:'],
      category: 'people'
    },
    ':woman_health_worker_tone2:': {
      uc_base: '1f469-1f3fc-2695',
      uc_output: '1f469-1f3fc-200d-2695-fe0f',
      uc_match: '1f469-1f3fc-2695-fe0f',
      uc_greedy: '1f469-1f3fc-2695',
      shortnames: [':woman_health_worker_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_health_worker_tone3:': {
      uc_base: '1f469-1f3fd-2695',
      uc_output: '1f469-1f3fd-200d-2695-fe0f',
      uc_match: '1f469-1f3fd-2695-fe0f',
      uc_greedy: '1f469-1f3fd-2695',
      shortnames: [':woman_health_worker_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_health_worker_tone4:': {
      uc_base: '1f469-1f3fe-2695',
      uc_output: '1f469-1f3fe-200d-2695-fe0f',
      uc_match: '1f469-1f3fe-2695-fe0f',
      uc_greedy: '1f469-1f3fe-2695',
      shortnames: [':woman_health_worker_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_health_worker_tone5:': {
      uc_base: '1f469-1f3ff-2695',
      uc_output: '1f469-1f3ff-200d-2695-fe0f',
      uc_match: '1f469-1f3ff-2695-fe0f',
      uc_greedy: '1f469-1f3ff-2695',
      shortnames: [':woman_health_worker_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_in_lotus_position_tone1:': {
      uc_base: '1f9d8-1f3fb-2640',
      uc_output: '1f9d8-1f3fb-200d-2640-fe0f',
      uc_match: '1f9d8-1f3fb-2640-fe0f',
      uc_greedy: '1f9d8-1f3fb-2640',
      shortnames: [':woman_in_lotus_position_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_in_lotus_position_tone2:': {
      uc_base: '1f9d8-1f3fc-2640',
      uc_output: '1f9d8-1f3fc-200d-2640-fe0f',
      uc_match: '1f9d8-1f3fc-2640-fe0f',
      uc_greedy: '1f9d8-1f3fc-2640',
      shortnames: [':woman_in_lotus_position_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_in_lotus_position_tone3:': {
      uc_base: '1f9d8-1f3fd-2640',
      uc_output: '1f9d8-1f3fd-200d-2640-fe0f',
      uc_match: '1f9d8-1f3fd-2640-fe0f',
      uc_greedy: '1f9d8-1f3fd-2640',
      shortnames: [':woman_in_lotus_position_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_in_lotus_position_tone4:': {
      uc_base: '1f9d8-1f3fe-2640',
      uc_output: '1f9d8-1f3fe-200d-2640-fe0f',
      uc_match: '1f9d8-1f3fe-2640-fe0f',
      uc_greedy: '1f9d8-1f3fe-2640',
      shortnames: [':woman_in_lotus_position_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_in_lotus_position_tone5:': {
      uc_base: '1f9d8-1f3ff-2640',
      uc_output: '1f9d8-1f3ff-200d-2640-fe0f',
      uc_match: '1f9d8-1f3ff-2640-fe0f',
      uc_greedy: '1f9d8-1f3ff-2640',
      shortnames: [':woman_in_lotus_position_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_in_steamy_room_tone1:': {
      uc_base: '1f9d6-1f3fb-2640',
      uc_output: '1f9d6-1f3fb-200d-2640-fe0f',
      uc_match: '1f9d6-1f3fb-2640-fe0f',
      uc_greedy: '1f9d6-1f3fb-2640',
      shortnames: [':woman_in_steamy_room_light_skin_tone:'],
      category: 'people'
    },
    ':woman_in_steamy_room_tone2:': {
      uc_base: '1f9d6-1f3fc-2640',
      uc_output: '1f9d6-1f3fc-200d-2640-fe0f',
      uc_match: '1f9d6-1f3fc-2640-fe0f',
      uc_greedy: '1f9d6-1f3fc-2640',
      shortnames: [':woman_in_steamy_room_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_in_steamy_room_tone3:': {
      uc_base: '1f9d6-1f3fd-2640',
      uc_output: '1f9d6-1f3fd-200d-2640-fe0f',
      uc_match: '1f9d6-1f3fd-2640-fe0f',
      uc_greedy: '1f9d6-1f3fd-2640',
      shortnames: [':woman_in_steamy_room_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_in_steamy_room_tone4:': {
      uc_base: '1f9d6-1f3fe-2640',
      uc_output: '1f9d6-1f3fe-200d-2640-fe0f',
      uc_match: '1f9d6-1f3fe-2640-fe0f',
      uc_greedy: '1f9d6-1f3fe-2640',
      shortnames: [':woman_in_steamy_room_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_in_steamy_room_tone5:': {
      uc_base: '1f9d6-1f3ff-2640',
      uc_output: '1f9d6-1f3ff-200d-2640-fe0f',
      uc_match: '1f9d6-1f3ff-2640-fe0f',
      uc_greedy: '1f9d6-1f3ff-2640',
      shortnames: [':woman_in_steamy_room_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_judge_tone1:': {
      uc_base: '1f469-1f3fb-2696',
      uc_output: '1f469-1f3fb-200d-2696-fe0f',
      uc_match: '1f469-1f3fb-2696-fe0f',
      uc_greedy: '1f469-1f3fb-2696',
      shortnames: [':woman_judge_light_skin_tone:'],
      category: 'people'
    },
    ':woman_judge_tone2:': {
      uc_base: '1f469-1f3fc-2696',
      uc_output: '1f469-1f3fc-200d-2696-fe0f',
      uc_match: '1f469-1f3fc-2696-fe0f',
      uc_greedy: '1f469-1f3fc-2696',
      shortnames: [':woman_judge_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_judge_tone3:': {
      uc_base: '1f469-1f3fd-2696',
      uc_output: '1f469-1f3fd-200d-2696-fe0f',
      uc_match: '1f469-1f3fd-2696-fe0f',
      uc_greedy: '1f469-1f3fd-2696',
      shortnames: [':woman_judge_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_judge_tone4:': {
      uc_base: '1f469-1f3fe-2696',
      uc_output: '1f469-1f3fe-200d-2696-fe0f',
      uc_match: '1f469-1f3fe-2696-fe0f',
      uc_greedy: '1f469-1f3fe-2696',
      shortnames: [':woman_judge_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_judge_tone5:': {
      uc_base: '1f469-1f3ff-2696',
      uc_output: '1f469-1f3ff-200d-2696-fe0f',
      uc_match: '1f469-1f3ff-2696-fe0f',
      uc_greedy: '1f469-1f3ff-2696',
      shortnames: [':woman_judge_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_juggling_tone1:': {
      uc_base: '1f939-1f3fb-2640',
      uc_output: '1f939-1f3fb-200d-2640-fe0f',
      uc_match: '1f939-1f3fb-2640-fe0f',
      uc_greedy: '1f939-1f3fb-2640',
      shortnames: [':woman_juggling_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_juggling_tone2:': {
      uc_base: '1f939-1f3fc-2640',
      uc_output: '1f939-1f3fc-200d-2640-fe0f',
      uc_match: '1f939-1f3fc-2640-fe0f',
      uc_greedy: '1f939-1f3fc-2640',
      shortnames: [':woman_juggling_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_juggling_tone3:': {
      uc_base: '1f939-1f3fd-2640',
      uc_output: '1f939-1f3fd-200d-2640-fe0f',
      uc_match: '1f939-1f3fd-2640-fe0f',
      uc_greedy: '1f939-1f3fd-2640',
      shortnames: [':woman_juggling_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_juggling_tone4:': {
      uc_base: '1f939-1f3fe-2640',
      uc_output: '1f939-1f3fe-200d-2640-fe0f',
      uc_match: '1f939-1f3fe-2640-fe0f',
      uc_greedy: '1f939-1f3fe-2640',
      shortnames: [':woman_juggling_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_juggling_tone5:': {
      uc_base: '1f939-1f3ff-2640',
      uc_output: '1f939-1f3ff-200d-2640-fe0f',
      uc_match: '1f939-1f3ff-2640-fe0f',
      uc_greedy: '1f939-1f3ff-2640',
      shortnames: [':woman_juggling_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_lifting_weights_tone1:': {
      uc_base: '1f3cb-1f3fb-2640',
      uc_output: '1f3cb-1f3fb-200d-2640-fe0f',
      uc_match: '1f3cb-fe0f-1f3fb-2640-fe0f',
      uc_greedy: '1f3cb-1f3fb-2640',
      shortnames: [':woman_lifting_weights_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_lifting_weights_tone2:': {
      uc_base: '1f3cb-1f3fc-2640',
      uc_output: '1f3cb-1f3fc-200d-2640-fe0f',
      uc_match: '1f3cb-fe0f-1f3fc-2640-fe0f',
      uc_greedy: '1f3cb-1f3fc-2640',
      shortnames: [':woman_lifting_weights_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_lifting_weights_tone3:': {
      uc_base: '1f3cb-1f3fd-2640',
      uc_output: '1f3cb-1f3fd-200d-2640-fe0f',
      uc_match: '1f3cb-fe0f-1f3fd-2640-fe0f',
      uc_greedy: '1f3cb-1f3fd-2640',
      shortnames: [':woman_lifting_weights_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_lifting_weights_tone4:': {
      uc_base: '1f3cb-1f3fe-2640',
      uc_output: '1f3cb-1f3fe-200d-2640-fe0f',
      uc_match: '1f3cb-fe0f-1f3fe-2640-fe0f',
      uc_greedy: '1f3cb-1f3fe-2640',
      shortnames: [':woman_lifting_weights_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_lifting_weights_tone5:': {
      uc_base: '1f3cb-1f3ff-2640',
      uc_output: '1f3cb-1f3ff-200d-2640-fe0f',
      uc_match: '1f3cb-fe0f-1f3ff-2640-fe0f',
      uc_greedy: '1f3cb-1f3ff-2640',
      shortnames: [':woman_lifting_weights_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_mage_tone1:': {
      uc_base: '1f9d9-1f3fb-2640',
      uc_output: '1f9d9-1f3fb-200d-2640-fe0f',
      uc_match: '1f9d9-1f3fb-2640-fe0f',
      uc_greedy: '1f9d9-1f3fb-2640',
      shortnames: [':woman_mage_light_skin_tone:'],
      category: 'people'
    },
    ':woman_mage_tone2:': {
      uc_base: '1f9d9-1f3fc-2640',
      uc_output: '1f9d9-1f3fc-200d-2640-fe0f',
      uc_match: '1f9d9-1f3fc-2640-fe0f',
      uc_greedy: '1f9d9-1f3fc-2640',
      shortnames: [':woman_mage_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_mage_tone3:': {
      uc_base: '1f9d9-1f3fd-2640',
      uc_output: '1f9d9-1f3fd-200d-2640-fe0f',
      uc_match: '1f9d9-1f3fd-2640-fe0f',
      uc_greedy: '1f9d9-1f3fd-2640',
      shortnames: [':woman_mage_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_mage_tone4:': {
      uc_base: '1f9d9-1f3fe-2640',
      uc_output: '1f9d9-1f3fe-200d-2640-fe0f',
      uc_match: '1f9d9-1f3fe-2640-fe0f',
      uc_greedy: '1f9d9-1f3fe-2640',
      shortnames: [':woman_mage_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_mage_tone5:': {
      uc_base: '1f9d9-1f3ff-2640',
      uc_output: '1f9d9-1f3ff-200d-2640-fe0f',
      uc_match: '1f9d9-1f3ff-2640-fe0f',
      uc_greedy: '1f9d9-1f3ff-2640',
      shortnames: [':woman_mage_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_mountain_biking_tone1:': {
      uc_base: '1f6b5-1f3fb-2640',
      uc_output: '1f6b5-1f3fb-200d-2640-fe0f',
      uc_match: '1f6b5-1f3fb-2640-fe0f',
      uc_greedy: '1f6b5-1f3fb-2640',
      shortnames: [':woman_mountain_biking_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_mountain_biking_tone2:': {
      uc_base: '1f6b5-1f3fc-2640',
      uc_output: '1f6b5-1f3fc-200d-2640-fe0f',
      uc_match: '1f6b5-1f3fc-2640-fe0f',
      uc_greedy: '1f6b5-1f3fc-2640',
      shortnames: [':woman_mountain_biking_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_mountain_biking_tone3:': {
      uc_base: '1f6b5-1f3fd-2640',
      uc_output: '1f6b5-1f3fd-200d-2640-fe0f',
      uc_match: '1f6b5-1f3fd-2640-fe0f',
      uc_greedy: '1f6b5-1f3fd-2640',
      shortnames: [':woman_mountain_biking_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_mountain_biking_tone4:': {
      uc_base: '1f6b5-1f3fe-2640',
      uc_output: '1f6b5-1f3fe-200d-2640-fe0f',
      uc_match: '1f6b5-1f3fe-2640-fe0f',
      uc_greedy: '1f6b5-1f3fe-2640',
      shortnames: [':woman_mountain_biking_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_mountain_biking_tone5:': {
      uc_base: '1f6b5-1f3ff-2640',
      uc_output: '1f6b5-1f3ff-200d-2640-fe0f',
      uc_match: '1f6b5-1f3ff-2640-fe0f',
      uc_greedy: '1f6b5-1f3ff-2640',
      shortnames: [':woman_mountain_biking_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_pilot_tone1:': {
      uc_base: '1f469-1f3fb-2708',
      uc_output: '1f469-1f3fb-200d-2708-fe0f',
      uc_match: '1f469-1f3fb-2708-fe0f',
      uc_greedy: '1f469-1f3fb-2708',
      shortnames: [':woman_pilot_light_skin_tone:'],
      category: 'people'
    },
    ':woman_pilot_tone2:': {
      uc_base: '1f469-1f3fc-2708',
      uc_output: '1f469-1f3fc-200d-2708-fe0f',
      uc_match: '1f469-1f3fc-2708-fe0f',
      uc_greedy: '1f469-1f3fc-2708',
      shortnames: [':woman_pilot_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_pilot_tone3:': {
      uc_base: '1f469-1f3fd-2708',
      uc_output: '1f469-1f3fd-200d-2708-fe0f',
      uc_match: '1f469-1f3fd-2708-fe0f',
      uc_greedy: '1f469-1f3fd-2708',
      shortnames: [':woman_pilot_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_pilot_tone4:': {
      uc_base: '1f469-1f3fe-2708',
      uc_output: '1f469-1f3fe-200d-2708-fe0f',
      uc_match: '1f469-1f3fe-2708-fe0f',
      uc_greedy: '1f469-1f3fe-2708',
      shortnames: [':woman_pilot_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_pilot_tone5:': {
      uc_base: '1f469-1f3ff-2708',
      uc_output: '1f469-1f3ff-200d-2708-fe0f',
      uc_match: '1f469-1f3ff-2708-fe0f',
      uc_greedy: '1f469-1f3ff-2708',
      shortnames: [':woman_pilot_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_playing_handball_tone1:': {
      uc_base: '1f93e-1f3fb-2640',
      uc_output: '1f93e-1f3fb-200d-2640-fe0f',
      uc_match: '1f93e-1f3fb-2640-fe0f',
      uc_greedy: '1f93e-1f3fb-2640',
      shortnames: [':woman_playing_handball_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_handball_tone2:': {
      uc_base: '1f93e-1f3fc-2640',
      uc_output: '1f93e-1f3fc-200d-2640-fe0f',
      uc_match: '1f93e-1f3fc-2640-fe0f',
      uc_greedy: '1f93e-1f3fc-2640',
      shortnames: [':woman_playing_handball_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_handball_tone3:': {
      uc_base: '1f93e-1f3fd-2640',
      uc_output: '1f93e-1f3fd-200d-2640-fe0f',
      uc_match: '1f93e-1f3fd-2640-fe0f',
      uc_greedy: '1f93e-1f3fd-2640',
      shortnames: [':woman_playing_handball_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_handball_tone4:': {
      uc_base: '1f93e-1f3fe-2640',
      uc_output: '1f93e-1f3fe-200d-2640-fe0f',
      uc_match: '1f93e-1f3fe-2640-fe0f',
      uc_greedy: '1f93e-1f3fe-2640',
      shortnames: [':woman_playing_handball_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_handball_tone5:': {
      uc_base: '1f93e-1f3ff-2640',
      uc_output: '1f93e-1f3ff-200d-2640-fe0f',
      uc_match: '1f93e-1f3ff-2640-fe0f',
      uc_greedy: '1f93e-1f3ff-2640',
      shortnames: [':woman_playing_handball_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_water_polo_tone1:': {
      uc_base: '1f93d-1f3fb-2640',
      uc_output: '1f93d-1f3fb-200d-2640-fe0f',
      uc_match: '1f93d-1f3fb-2640-fe0f',
      uc_greedy: '1f93d-1f3fb-2640',
      shortnames: [':woman_playing_water_polo_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_water_polo_tone2:': {
      uc_base: '1f93d-1f3fc-2640',
      uc_output: '1f93d-1f3fc-200d-2640-fe0f',
      uc_match: '1f93d-1f3fc-2640-fe0f',
      uc_greedy: '1f93d-1f3fc-2640',
      shortnames: [':woman_playing_water_polo_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_water_polo_tone3:': {
      uc_base: '1f93d-1f3fd-2640',
      uc_output: '1f93d-1f3fd-200d-2640-fe0f',
      uc_match: '1f93d-1f3fd-2640-fe0f',
      uc_greedy: '1f93d-1f3fd-2640',
      shortnames: [':woman_playing_water_polo_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_water_polo_tone4:': {
      uc_base: '1f93d-1f3fe-2640',
      uc_output: '1f93d-1f3fe-200d-2640-fe0f',
      uc_match: '1f93d-1f3fe-2640-fe0f',
      uc_greedy: '1f93d-1f3fe-2640',
      shortnames: [':woman_playing_water_polo_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_playing_water_polo_tone5:': {
      uc_base: '1f93d-1f3ff-2640',
      uc_output: '1f93d-1f3ff-200d-2640-fe0f',
      uc_match: '1f93d-1f3ff-2640-fe0f',
      uc_greedy: '1f93d-1f3ff-2640',
      shortnames: [':woman_playing_water_polo_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_police_officer_tone1:': {
      uc_base: '1f46e-1f3fb-2640',
      uc_output: '1f46e-1f3fb-200d-2640-fe0f',
      uc_match: '1f46e-1f3fb-2640-fe0f',
      uc_greedy: '1f46e-1f3fb-2640',
      shortnames: [':woman_police_officer_light_skin_tone:'],
      category: 'people'
    },
    ':woman_police_officer_tone2:': {
      uc_base: '1f46e-1f3fc-2640',
      uc_output: '1f46e-1f3fc-200d-2640-fe0f',
      uc_match: '1f46e-1f3fc-2640-fe0f',
      uc_greedy: '1f46e-1f3fc-2640',
      shortnames: [':woman_police_officer_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_police_officer_tone3:': {
      uc_base: '1f46e-1f3fd-2640',
      uc_output: '1f46e-1f3fd-200d-2640-fe0f',
      uc_match: '1f46e-1f3fd-2640-fe0f',
      uc_greedy: '1f46e-1f3fd-2640',
      shortnames: [':woman_police_officer_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_police_officer_tone4:': {
      uc_base: '1f46e-1f3fe-2640',
      uc_output: '1f46e-1f3fe-200d-2640-fe0f',
      uc_match: '1f46e-1f3fe-2640-fe0f',
      uc_greedy: '1f46e-1f3fe-2640',
      shortnames: [':woman_police_officer_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_police_officer_tone5:': {
      uc_base: '1f46e-1f3ff-2640',
      uc_output: '1f46e-1f3ff-200d-2640-fe0f',
      uc_match: '1f46e-1f3ff-2640-fe0f',
      uc_greedy: '1f46e-1f3ff-2640',
      shortnames: [':woman_police_officer_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_pouting_tone1:': {
      uc_base: '1f64e-1f3fb-2640',
      uc_output: '1f64e-1f3fb-200d-2640-fe0f',
      uc_match: '1f64e-1f3fb-2640-fe0f',
      uc_greedy: '1f64e-1f3fb-2640',
      shortnames: [':woman_pouting_light_skin_tone:'],
      category: 'people'
    },
    ':woman_pouting_tone2:': {
      uc_base: '1f64e-1f3fc-2640',
      uc_output: '1f64e-1f3fc-200d-2640-fe0f',
      uc_match: '1f64e-1f3fc-2640-fe0f',
      uc_greedy: '1f64e-1f3fc-2640',
      shortnames: [':woman_pouting_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_pouting_tone3:': {
      uc_base: '1f64e-1f3fd-2640',
      uc_output: '1f64e-1f3fd-200d-2640-fe0f',
      uc_match: '1f64e-1f3fd-2640-fe0f',
      uc_greedy: '1f64e-1f3fd-2640',
      shortnames: [':woman_pouting_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_pouting_tone4:': {
      uc_base: '1f64e-1f3fe-2640',
      uc_output: '1f64e-1f3fe-200d-2640-fe0f',
      uc_match: '1f64e-1f3fe-2640-fe0f',
      uc_greedy: '1f64e-1f3fe-2640',
      shortnames: [':woman_pouting_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_pouting_tone5:': {
      uc_base: '1f64e-1f3ff-2640',
      uc_output: '1f64e-1f3ff-200d-2640-fe0f',
      uc_match: '1f64e-1f3ff-2640-fe0f',
      uc_greedy: '1f64e-1f3ff-2640',
      shortnames: [':woman_pouting_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_raising_hand_tone1:': {
      uc_base: '1f64b-1f3fb-2640',
      uc_output: '1f64b-1f3fb-200d-2640-fe0f',
      uc_match: '1f64b-1f3fb-2640-fe0f',
      uc_greedy: '1f64b-1f3fb-2640',
      shortnames: [':woman_raising_hand_light_skin_tone:'],
      category: 'people'
    },
    ':woman_raising_hand_tone2:': {
      uc_base: '1f64b-1f3fc-2640',
      uc_output: '1f64b-1f3fc-200d-2640-fe0f',
      uc_match: '1f64b-1f3fc-2640-fe0f',
      uc_greedy: '1f64b-1f3fc-2640',
      shortnames: [':woman_raising_hand_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_raising_hand_tone3:': {
      uc_base: '1f64b-1f3fd-2640',
      uc_output: '1f64b-1f3fd-200d-2640-fe0f',
      uc_match: '1f64b-1f3fd-2640-fe0f',
      uc_greedy: '1f64b-1f3fd-2640',
      shortnames: [':woman_raising_hand_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_raising_hand_tone4:': {
      uc_base: '1f64b-1f3fe-2640',
      uc_output: '1f64b-1f3fe-200d-2640-fe0f',
      uc_match: '1f64b-1f3fe-2640-fe0f',
      uc_greedy: '1f64b-1f3fe-2640',
      shortnames: [':woman_raising_hand_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_raising_hand_tone5:': {
      uc_base: '1f64b-1f3ff-2640',
      uc_output: '1f64b-1f3ff-200d-2640-fe0f',
      uc_match: '1f64b-1f3ff-2640-fe0f',
      uc_greedy: '1f64b-1f3ff-2640',
      shortnames: [':woman_raising_hand_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_rowing_boat_tone1:': {
      uc_base: '1f6a3-1f3fb-2640',
      uc_output: '1f6a3-1f3fb-200d-2640-fe0f',
      uc_match: '1f6a3-1f3fb-2640-fe0f',
      uc_greedy: '1f6a3-1f3fb-2640',
      shortnames: [':woman_rowing_boat_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_rowing_boat_tone2:': {
      uc_base: '1f6a3-1f3fc-2640',
      uc_output: '1f6a3-1f3fc-200d-2640-fe0f',
      uc_match: '1f6a3-1f3fc-2640-fe0f',
      uc_greedy: '1f6a3-1f3fc-2640',
      shortnames: [':woman_rowing_boat_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_rowing_boat_tone3:': {
      uc_base: '1f6a3-1f3fd-2640',
      uc_output: '1f6a3-1f3fd-200d-2640-fe0f',
      uc_match: '1f6a3-1f3fd-2640-fe0f',
      uc_greedy: '1f6a3-1f3fd-2640',
      shortnames: [':woman_rowing_boat_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_rowing_boat_tone4:': {
      uc_base: '1f6a3-1f3fe-2640',
      uc_output: '1f6a3-1f3fe-200d-2640-fe0f',
      uc_match: '1f6a3-1f3fe-2640-fe0f',
      uc_greedy: '1f6a3-1f3fe-2640',
      shortnames: [':woman_rowing_boat_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_rowing_boat_tone5:': {
      uc_base: '1f6a3-1f3ff-2640',
      uc_output: '1f6a3-1f3ff-200d-2640-fe0f',
      uc_match: '1f6a3-1f3ff-2640-fe0f',
      uc_greedy: '1f6a3-1f3ff-2640',
      shortnames: [':woman_rowing_boat_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_running_tone1:': {
      uc_base: '1f3c3-1f3fb-2640',
      uc_output: '1f3c3-1f3fb-200d-2640-fe0f',
      uc_match: '1f3c3-1f3fb-2640-fe0f',
      uc_greedy: '1f3c3-1f3fb-2640',
      shortnames: [':woman_running_light_skin_tone:'],
      category: 'people'
    },
    ':woman_running_tone2:': {
      uc_base: '1f3c3-1f3fc-2640',
      uc_output: '1f3c3-1f3fc-200d-2640-fe0f',
      uc_match: '1f3c3-1f3fc-2640-fe0f',
      uc_greedy: '1f3c3-1f3fc-2640',
      shortnames: [':woman_running_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_running_tone3:': {
      uc_base: '1f3c3-1f3fd-2640',
      uc_output: '1f3c3-1f3fd-200d-2640-fe0f',
      uc_match: '1f3c3-1f3fd-2640-fe0f',
      uc_greedy: '1f3c3-1f3fd-2640',
      shortnames: [':woman_running_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_running_tone4:': {
      uc_base: '1f3c3-1f3fe-2640',
      uc_output: '1f3c3-1f3fe-200d-2640-fe0f',
      uc_match: '1f3c3-1f3fe-2640-fe0f',
      uc_greedy: '1f3c3-1f3fe-2640',
      shortnames: [':woman_running_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_running_tone5:': {
      uc_base: '1f3c3-1f3ff-2640',
      uc_output: '1f3c3-1f3ff-200d-2640-fe0f',
      uc_match: '1f3c3-1f3ff-2640-fe0f',
      uc_greedy: '1f3c3-1f3ff-2640',
      shortnames: [':woman_running_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_shrugging_tone1:': {
      uc_base: '1f937-1f3fb-2640',
      uc_output: '1f937-1f3fb-200d-2640-fe0f',
      uc_match: '1f937-1f3fb-2640-fe0f',
      uc_greedy: '1f937-1f3fb-2640',
      shortnames: [':woman_shrugging_light_skin_tone:'],
      category: 'people'
    },
    ':woman_shrugging_tone2:': {
      uc_base: '1f937-1f3fc-2640',
      uc_output: '1f937-1f3fc-200d-2640-fe0f',
      uc_match: '1f937-1f3fc-2640-fe0f',
      uc_greedy: '1f937-1f3fc-2640',
      shortnames: [':woman_shrugging_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_shrugging_tone3:': {
      uc_base: '1f937-1f3fd-2640',
      uc_output: '1f937-1f3fd-200d-2640-fe0f',
      uc_match: '1f937-1f3fd-2640-fe0f',
      uc_greedy: '1f937-1f3fd-2640',
      shortnames: [':woman_shrugging_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_shrugging_tone4:': {
      uc_base: '1f937-1f3fe-2640',
      uc_output: '1f937-1f3fe-200d-2640-fe0f',
      uc_match: '1f937-1f3fe-2640-fe0f',
      uc_greedy: '1f937-1f3fe-2640',
      shortnames: [':woman_shrugging_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_shrugging_tone5:': {
      uc_base: '1f937-1f3ff-2640',
      uc_output: '1f937-1f3ff-200d-2640-fe0f',
      uc_match: '1f937-1f3ff-2640-fe0f',
      uc_greedy: '1f937-1f3ff-2640',
      shortnames: [':woman_shrugging_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_surfing_tone1:': {
      uc_base: '1f3c4-1f3fb-2640',
      uc_output: '1f3c4-1f3fb-200d-2640-fe0f',
      uc_match: '1f3c4-1f3fb-2640-fe0f',
      uc_greedy: '1f3c4-1f3fb-2640',
      shortnames: [':woman_surfing_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_surfing_tone2:': {
      uc_base: '1f3c4-1f3fc-2640',
      uc_output: '1f3c4-1f3fc-200d-2640-fe0f',
      uc_match: '1f3c4-1f3fc-2640-fe0f',
      uc_greedy: '1f3c4-1f3fc-2640',
      shortnames: [':woman_surfing_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_surfing_tone3:': {
      uc_base: '1f3c4-1f3fd-2640',
      uc_output: '1f3c4-1f3fd-200d-2640-fe0f',
      uc_match: '1f3c4-1f3fd-2640-fe0f',
      uc_greedy: '1f3c4-1f3fd-2640',
      shortnames: [':woman_surfing_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_surfing_tone4:': {
      uc_base: '1f3c4-1f3fe-2640',
      uc_output: '1f3c4-1f3fe-200d-2640-fe0f',
      uc_match: '1f3c4-1f3fe-2640-fe0f',
      uc_greedy: '1f3c4-1f3fe-2640',
      shortnames: [':woman_surfing_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_surfing_tone5:': {
      uc_base: '1f3c4-1f3ff-2640',
      uc_output: '1f3c4-1f3ff-200d-2640-fe0f',
      uc_match: '1f3c4-1f3ff-2640-fe0f',
      uc_greedy: '1f3c4-1f3ff-2640',
      shortnames: [':woman_surfing_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_swimming_tone1:': {
      uc_base: '1f3ca-1f3fb-2640',
      uc_output: '1f3ca-1f3fb-200d-2640-fe0f',
      uc_match: '1f3ca-1f3fb-2640-fe0f',
      uc_greedy: '1f3ca-1f3fb-2640',
      shortnames: [':woman_swimming_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_swimming_tone2:': {
      uc_base: '1f3ca-1f3fc-2640',
      uc_output: '1f3ca-1f3fc-200d-2640-fe0f',
      uc_match: '1f3ca-1f3fc-2640-fe0f',
      uc_greedy: '1f3ca-1f3fc-2640',
      shortnames: [':woman_swimming_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_swimming_tone3:': {
      uc_base: '1f3ca-1f3fd-2640',
      uc_output: '1f3ca-1f3fd-200d-2640-fe0f',
      uc_match: '1f3ca-1f3fd-2640-fe0f',
      uc_greedy: '1f3ca-1f3fd-2640',
      shortnames: [':woman_swimming_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_swimming_tone4:': {
      uc_base: '1f3ca-1f3fe-2640',
      uc_output: '1f3ca-1f3fe-200d-2640-fe0f',
      uc_match: '1f3ca-1f3fe-2640-fe0f',
      uc_greedy: '1f3ca-1f3fe-2640',
      shortnames: [':woman_swimming_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_swimming_tone5:': {
      uc_base: '1f3ca-1f3ff-2640',
      uc_output: '1f3ca-1f3ff-200d-2640-fe0f',
      uc_match: '1f3ca-1f3ff-2640-fe0f',
      uc_greedy: '1f3ca-1f3ff-2640',
      shortnames: [':woman_swimming_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_tipping_hand_tone1:': {
      uc_base: '1f481-1f3fb-2640',
      uc_output: '1f481-1f3fb-200d-2640-fe0f',
      uc_match: '1f481-1f3fb-2640-fe0f',
      uc_greedy: '1f481-1f3fb-2640',
      shortnames: [':woman_tipping_hand_light_skin_tone:'],
      category: 'people'
    },
    ':woman_tipping_hand_tone2:': {
      uc_base: '1f481-1f3fc-2640',
      uc_output: '1f481-1f3fc-200d-2640-fe0f',
      uc_match: '1f481-1f3fc-2640-fe0f',
      uc_greedy: '1f481-1f3fc-2640',
      shortnames: [':woman_tipping_hand_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_tipping_hand_tone3:': {
      uc_base: '1f481-1f3fd-2640',
      uc_output: '1f481-1f3fd-200d-2640-fe0f',
      uc_match: '1f481-1f3fd-2640-fe0f',
      uc_greedy: '1f481-1f3fd-2640',
      shortnames: [':woman_tipping_hand_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_tipping_hand_tone4:': {
      uc_base: '1f481-1f3fe-2640',
      uc_output: '1f481-1f3fe-200d-2640-fe0f',
      uc_match: '1f481-1f3fe-2640-fe0f',
      uc_greedy: '1f481-1f3fe-2640',
      shortnames: [':woman_tipping_hand_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_tipping_hand_tone5:': {
      uc_base: '1f481-1f3ff-2640',
      uc_output: '1f481-1f3ff-200d-2640-fe0f',
      uc_match: '1f481-1f3ff-2640-fe0f',
      uc_greedy: '1f481-1f3ff-2640',
      shortnames: [':woman_tipping_hand_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_vampire_tone1:': {
      uc_base: '1f9db-1f3fb-2640',
      uc_output: '1f9db-1f3fb-200d-2640-fe0f',
      uc_match: '1f9db-1f3fb-2640-fe0f',
      uc_greedy: '1f9db-1f3fb-2640',
      shortnames: [':woman_vampire_light_skin_tone:'],
      category: 'people'
    },
    ':woman_vampire_tone2:': {
      uc_base: '1f9db-1f3fc-2640',
      uc_output: '1f9db-1f3fc-200d-2640-fe0f',
      uc_match: '1f9db-1f3fc-2640-fe0f',
      uc_greedy: '1f9db-1f3fc-2640',
      shortnames: [':woman_vampire_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_vampire_tone3:': {
      uc_base: '1f9db-1f3fd-2640',
      uc_output: '1f9db-1f3fd-200d-2640-fe0f',
      uc_match: '1f9db-1f3fd-2640-fe0f',
      uc_greedy: '1f9db-1f3fd-2640',
      shortnames: [':woman_vampire_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_vampire_tone4:': {
      uc_base: '1f9db-1f3fe-2640',
      uc_output: '1f9db-1f3fe-200d-2640-fe0f',
      uc_match: '1f9db-1f3fe-2640-fe0f',
      uc_greedy: '1f9db-1f3fe-2640',
      shortnames: [':woman_vampire_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_vampire_tone5:': {
      uc_base: '1f9db-1f3ff-2640',
      uc_output: '1f9db-1f3ff-200d-2640-fe0f',
      uc_match: '1f9db-1f3ff-2640-fe0f',
      uc_greedy: '1f9db-1f3ff-2640',
      shortnames: [':woman_vampire_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_walking_tone1:': {
      uc_base: '1f6b6-1f3fb-2640',
      uc_output: '1f6b6-1f3fb-200d-2640-fe0f',
      uc_match: '1f6b6-1f3fb-2640-fe0f',
      uc_greedy: '1f6b6-1f3fb-2640',
      shortnames: [':woman_walking_light_skin_tone:'],
      category: 'people'
    },
    ':woman_walking_tone2:': {
      uc_base: '1f6b6-1f3fc-2640',
      uc_output: '1f6b6-1f3fc-200d-2640-fe0f',
      uc_match: '1f6b6-1f3fc-2640-fe0f',
      uc_greedy: '1f6b6-1f3fc-2640',
      shortnames: [':woman_walking_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_walking_tone3:': {
      uc_base: '1f6b6-1f3fd-2640',
      uc_output: '1f6b6-1f3fd-200d-2640-fe0f',
      uc_match: '1f6b6-1f3fd-2640-fe0f',
      uc_greedy: '1f6b6-1f3fd-2640',
      shortnames: [':woman_walking_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_walking_tone4:': {
      uc_base: '1f6b6-1f3fe-2640',
      uc_output: '1f6b6-1f3fe-200d-2640-fe0f',
      uc_match: '1f6b6-1f3fe-2640-fe0f',
      uc_greedy: '1f6b6-1f3fe-2640',
      shortnames: [':woman_walking_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_walking_tone5:': {
      uc_base: '1f6b6-1f3ff-2640',
      uc_output: '1f6b6-1f3ff-200d-2640-fe0f',
      uc_match: '1f6b6-1f3ff-2640-fe0f',
      uc_greedy: '1f6b6-1f3ff-2640',
      shortnames: [':woman_walking_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_wearing_turban_tone1:': {
      uc_base: '1f473-1f3fb-2640',
      uc_output: '1f473-1f3fb-200d-2640-fe0f',
      uc_match: '1f473-1f3fb-2640-fe0f',
      uc_greedy: '1f473-1f3fb-2640',
      shortnames: [':woman_wearing_turban_light_skin_tone:'],
      category: 'people'
    },
    ':woman_wearing_turban_tone2:': {
      uc_base: '1f473-1f3fc-2640',
      uc_output: '1f473-1f3fc-200d-2640-fe0f',
      uc_match: '1f473-1f3fc-2640-fe0f',
      uc_greedy: '1f473-1f3fc-2640',
      shortnames: [':woman_wearing_turban_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_wearing_turban_tone3:': {
      uc_base: '1f473-1f3fd-2640',
      uc_output: '1f473-1f3fd-200d-2640-fe0f',
      uc_match: '1f473-1f3fd-2640-fe0f',
      uc_greedy: '1f473-1f3fd-2640',
      shortnames: [':woman_wearing_turban_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_wearing_turban_tone4:': {
      uc_base: '1f473-1f3fe-2640',
      uc_output: '1f473-1f3fe-200d-2640-fe0f',
      uc_match: '1f473-1f3fe-2640-fe0f',
      uc_greedy: '1f473-1f3fe-2640',
      shortnames: [':woman_wearing_turban_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_wearing_turban_tone5:': {
      uc_base: '1f473-1f3ff-2640',
      uc_output: '1f473-1f3ff-200d-2640-fe0f',
      uc_match: '1f473-1f3ff-2640-fe0f',
      uc_greedy: '1f473-1f3ff-2640',
      shortnames: [':woman_wearing_turban_dark_skin_tone:'],
      category: 'people'
    },
    ':man_bouncing_ball_tone1:': {
      uc_base: '26f9-1f3fb-2642',
      uc_output: '26f9-1f3fb-200d-2642-fe0f',
      uc_match: '26f9-fe0f-1f3fb-2642-fe0f',
      uc_greedy: '26f9-1f3fb-2642',
      shortnames: [':man_bouncing_ball_light_skin_tone:'],
      category: 'activity'
    },
    ':man_bouncing_ball_tone2:': {
      uc_base: '26f9-1f3fc-2642',
      uc_output: '26f9-1f3fc-200d-2642-fe0f',
      uc_match: '26f9-fe0f-1f3fc-2642-fe0f',
      uc_greedy: '26f9-1f3fc-2642',
      shortnames: [':man_bouncing_ball_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':man_bouncing_ball_tone3:': {
      uc_base: '26f9-1f3fd-2642',
      uc_output: '26f9-1f3fd-200d-2642-fe0f',
      uc_match: '26f9-fe0f-1f3fd-2642-fe0f',
      uc_greedy: '26f9-1f3fd-2642',
      shortnames: [':man_bouncing_ball_medium_skin_tone:'],
      category: 'activity'
    },
    ':man_bouncing_ball_tone4:': {
      uc_base: '26f9-1f3fe-2642',
      uc_output: '26f9-1f3fe-200d-2642-fe0f',
      uc_match: '26f9-fe0f-1f3fe-2642-fe0f',
      uc_greedy: '26f9-1f3fe-2642',
      shortnames: [':man_bouncing_ball_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_bouncing_ball_tone5:': {
      uc_base: '26f9-1f3ff-2642',
      uc_output: '26f9-1f3ff-200d-2642-fe0f',
      uc_match: '26f9-fe0f-1f3ff-2642-fe0f',
      uc_greedy: '26f9-1f3ff-2642',
      shortnames: [':man_bouncing_ball_dark_skin_tone:'],
      category: 'activity'
    },
    ':man_detective:': {
      uc_base: '1f575-2642',
      uc_output: '1f575-fe0f-200d-2642-fe0f',
      uc_match: '1f575-fe0f-200d-2642',
      uc_greedy: '1f575-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_golfing:': {
      uc_base: '1f3cc-2642',
      uc_output: '1f3cc-fe0f-200d-2642-fe0f',
      uc_match: '1f3cc-fe0f-200d-2642',
      uc_greedy: '1f3cc-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_lifting_weights:': {
      uc_base: '1f3cb-2642',
      uc_output: '1f3cb-fe0f-200d-2642-fe0f',
      uc_match: '1f3cb-fe0f-200d-2642',
      uc_greedy: '1f3cb-2642',
      shortnames: [],
      category: 'activity'
    },
    ':woman_bouncing_ball_tone1:': {
      uc_base: '26f9-1f3fb-2640',
      uc_output: '26f9-1f3fb-200d-2640-fe0f',
      uc_match: '26f9-fe0f-1f3fb-2640-fe0f',
      uc_greedy: '26f9-1f3fb-2640',
      shortnames: [':woman_bouncing_ball_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_bouncing_ball_tone2:': {
      uc_base: '26f9-1f3fc-2640',
      uc_output: '26f9-1f3fc-200d-2640-fe0f',
      uc_match: '26f9-fe0f-1f3fc-2640-fe0f',
      uc_greedy: '26f9-1f3fc-2640',
      shortnames: [':woman_bouncing_ball_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':woman_bouncing_ball_tone3:': {
      uc_base: '26f9-1f3fd-2640',
      uc_output: '26f9-1f3fd-200d-2640-fe0f',
      uc_match: '26f9-fe0f-1f3fd-2640-fe0f',
      uc_greedy: '26f9-1f3fd-2640',
      shortnames: [':woman_bouncing_ball_medium_skin_tone:'],
      category: 'activity'
    },
    ':woman_bouncing_ball_tone4:': {
      uc_base: '26f9-1f3fe-2640',
      uc_output: '26f9-1f3fe-200d-2640-fe0f',
      uc_match: '26f9-fe0f-1f3fe-2640-fe0f',
      uc_greedy: '26f9-1f3fe-2640',
      shortnames: [':woman_bouncing_ball_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_bouncing_ball_tone5:': {
      uc_base: '26f9-1f3ff-2640',
      uc_output: '26f9-1f3ff-200d-2640-fe0f',
      uc_match: '26f9-fe0f-1f3ff-2640-fe0f',
      uc_greedy: '26f9-1f3ff-2640',
      shortnames: [':woman_bouncing_ball_dark_skin_tone:'],
      category: 'activity'
    },
    ':woman_detective:': {
      uc_base: '1f575-2640',
      uc_output: '1f575-fe0f-200d-2640-fe0f',
      uc_match: '1f575-fe0f-200d-2640',
      uc_greedy: '1f575-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_golfing:': {
      uc_base: '1f3cc-2640',
      uc_output: '1f3cc-fe0f-200d-2640-fe0f',
      uc_match: '1f3cc-fe0f-200d-2640',
      uc_greedy: '1f3cc-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_lifting_weights:': {
      uc_base: '1f3cb-2640',
      uc_output: '1f3cb-fe0f-200d-2640-fe0f',
      uc_match: '1f3cb-fe0f-200d-2640',
      uc_greedy: '1f3cb-2640',
      shortnames: [],
      category: 'activity'
    },
    ':man_bouncing_ball:': {
      uc_base: '26f9-2642',
      uc_output: '26f9-fe0f-200d-2642-fe0f',
      uc_match: '26f9-fe0f-200d-2642',
      uc_greedy: '26f9-2642',
      shortnames: [],
      category: 'activity'
    },
    ':woman_bouncing_ball:': {
      uc_base: '26f9-2640',
      uc_output: '26f9-fe0f-200d-2640-fe0f',
      uc_match: '26f9-fe0f-200d-2640',
      uc_greedy: '26f9-2640',
      shortnames: [],
      category: 'activity'
    },
    ':man_artist_tone1:': {
      uc_base: '1f468-1f3fb-1f3a8',
      uc_output: '1f468-1f3fb-200d-1f3a8',
      uc_match: '1f468-1f3fb-1f3a8',
      uc_greedy: '1f468-1f3fb-1f3a8',
      shortnames: [':man_artist_light_skin_tone:'],
      category: 'people'
    },
    ':man_artist_tone2:': {
      uc_base: '1f468-1f3fc-1f3a8',
      uc_output: '1f468-1f3fc-200d-1f3a8',
      uc_match: '1f468-1f3fc-1f3a8',
      uc_greedy: '1f468-1f3fc-1f3a8',
      shortnames: [':man_artist_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_artist_tone3:': {
      uc_base: '1f468-1f3fd-1f3a8',
      uc_output: '1f468-1f3fd-200d-1f3a8',
      uc_match: '1f468-1f3fd-1f3a8',
      uc_greedy: '1f468-1f3fd-1f3a8',
      shortnames: [':man_artist_medium_skin_tone:'],
      category: 'people'
    },
    ':man_artist_tone4:': {
      uc_base: '1f468-1f3fe-1f3a8',
      uc_output: '1f468-1f3fe-200d-1f3a8',
      uc_match: '1f468-1f3fe-1f3a8',
      uc_greedy: '1f468-1f3fe-1f3a8',
      shortnames: [':man_artist_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_artist_tone5:': {
      uc_base: '1f468-1f3ff-1f3a8',
      uc_output: '1f468-1f3ff-200d-1f3a8',
      uc_match: '1f468-1f3ff-1f3a8',
      uc_greedy: '1f468-1f3ff-1f3a8',
      shortnames: [':man_artist_dark_skin_tone:'],
      category: 'people'
    },
    ':man_astronaut_tone1:': {
      uc_base: '1f468-1f3fb-1f680',
      uc_output: '1f468-1f3fb-200d-1f680',
      uc_match: '1f468-1f3fb-1f680',
      uc_greedy: '1f468-1f3fb-1f680',
      shortnames: [':man_astronaut_light_skin_tone:'],
      category: 'people'
    },
    ':man_astronaut_tone2:': {
      uc_base: '1f468-1f3fc-1f680',
      uc_output: '1f468-1f3fc-200d-1f680',
      uc_match: '1f468-1f3fc-1f680',
      uc_greedy: '1f468-1f3fc-1f680',
      shortnames: [':man_astronaut_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_astronaut_tone3:': {
      uc_base: '1f468-1f3fd-1f680',
      uc_output: '1f468-1f3fd-200d-1f680',
      uc_match: '1f468-1f3fd-1f680',
      uc_greedy: '1f468-1f3fd-1f680',
      shortnames: [':man_astronaut_medium_skin_tone:'],
      category: 'people'
    },
    ':man_astronaut_tone4:': {
      uc_base: '1f468-1f3fe-1f680',
      uc_output: '1f468-1f3fe-200d-1f680',
      uc_match: '1f468-1f3fe-1f680',
      uc_greedy: '1f468-1f3fe-1f680',
      shortnames: [':man_astronaut_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_astronaut_tone5:': {
      uc_base: '1f468-1f3ff-1f680',
      uc_output: '1f468-1f3ff-200d-1f680',
      uc_match: '1f468-1f3ff-1f680',
      uc_greedy: '1f468-1f3ff-1f680',
      shortnames: [':man_astronaut_dark_skin_tone:'],
      category: 'people'
    },
    ':man_cook_tone1:': {
      uc_base: '1f468-1f3fb-1f373',
      uc_output: '1f468-1f3fb-200d-1f373',
      uc_match: '1f468-1f3fb-1f373',
      uc_greedy: '1f468-1f3fb-1f373',
      shortnames: [':man_cook_light_skin_tone:'],
      category: 'people'
    },
    ':man_cook_tone2:': {
      uc_base: '1f468-1f3fc-1f373',
      uc_output: '1f468-1f3fc-200d-1f373',
      uc_match: '1f468-1f3fc-1f373',
      uc_greedy: '1f468-1f3fc-1f373',
      shortnames: [':man_cook_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_cook_tone3:': {
      uc_base: '1f468-1f3fd-1f373',
      uc_output: '1f468-1f3fd-200d-1f373',
      uc_match: '1f468-1f3fd-1f373',
      uc_greedy: '1f468-1f3fd-1f373',
      shortnames: [':man_cook_medium_skin_tone:'],
      category: 'people'
    },
    ':man_cook_tone4:': {
      uc_base: '1f468-1f3fe-1f373',
      uc_output: '1f468-1f3fe-200d-1f373',
      uc_match: '1f468-1f3fe-1f373',
      uc_greedy: '1f468-1f3fe-1f373',
      shortnames: [':man_cook_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_cook_tone5:': {
      uc_base: '1f468-1f3ff-1f373',
      uc_output: '1f468-1f3ff-200d-1f373',
      uc_match: '1f468-1f3ff-1f373',
      uc_greedy: '1f468-1f3ff-1f373',
      shortnames: [':man_cook_dark_skin_tone:'],
      category: 'people'
    },
    ':man_factory_worker_tone1:': {
      uc_base: '1f468-1f3fb-1f3ed',
      uc_output: '1f468-1f3fb-200d-1f3ed',
      uc_match: '1f468-1f3fb-1f3ed',
      uc_greedy: '1f468-1f3fb-1f3ed',
      shortnames: [':man_factory_worker_light_skin_tone:'],
      category: 'people'
    },
    ':man_factory_worker_tone2:': {
      uc_base: '1f468-1f3fc-1f3ed',
      uc_output: '1f468-1f3fc-200d-1f3ed',
      uc_match: '1f468-1f3fc-1f3ed',
      uc_greedy: '1f468-1f3fc-1f3ed',
      shortnames: [':man_factory_worker_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_factory_worker_tone3:': {
      uc_base: '1f468-1f3fd-1f3ed',
      uc_output: '1f468-1f3fd-200d-1f3ed',
      uc_match: '1f468-1f3fd-1f3ed',
      uc_greedy: '1f468-1f3fd-1f3ed',
      shortnames: [':man_factory_worker_medium_skin_tone:'],
      category: 'people'
    },
    ':man_factory_worker_tone4:': {
      uc_base: '1f468-1f3fe-1f3ed',
      uc_output: '1f468-1f3fe-200d-1f3ed',
      uc_match: '1f468-1f3fe-1f3ed',
      uc_greedy: '1f468-1f3fe-1f3ed',
      shortnames: [':man_factory_worker_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_factory_worker_tone5:': {
      uc_base: '1f468-1f3ff-1f3ed',
      uc_output: '1f468-1f3ff-200d-1f3ed',
      uc_match: '1f468-1f3ff-1f3ed',
      uc_greedy: '1f468-1f3ff-1f3ed',
      shortnames: [':man_factory_worker_dark_skin_tone:'],
      category: 'people'
    },
    ':man_farmer_tone1:': {
      uc_base: '1f468-1f3fb-1f33e',
      uc_output: '1f468-1f3fb-200d-1f33e',
      uc_match: '1f468-1f3fb-1f33e',
      uc_greedy: '1f468-1f3fb-1f33e',
      shortnames: [':man_farmer_light_skin_tone:'],
      category: 'people'
    },
    ':man_farmer_tone2:': {
      uc_base: '1f468-1f3fc-1f33e',
      uc_output: '1f468-1f3fc-200d-1f33e',
      uc_match: '1f468-1f3fc-1f33e',
      uc_greedy: '1f468-1f3fc-1f33e',
      shortnames: [':man_farmer_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_farmer_tone3:': {
      uc_base: '1f468-1f3fd-1f33e',
      uc_output: '1f468-1f3fd-200d-1f33e',
      uc_match: '1f468-1f3fd-1f33e',
      uc_greedy: '1f468-1f3fd-1f33e',
      shortnames: [':man_farmer_medium_skin_tone:'],
      category: 'people'
    },
    ':man_farmer_tone4:': {
      uc_base: '1f468-1f3fe-1f33e',
      uc_output: '1f468-1f3fe-200d-1f33e',
      uc_match: '1f468-1f3fe-1f33e',
      uc_greedy: '1f468-1f3fe-1f33e',
      shortnames: [':man_farmer_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_farmer_tone5:': {
      uc_base: '1f468-1f3ff-1f33e',
      uc_output: '1f468-1f3ff-200d-1f33e',
      uc_match: '1f468-1f3ff-1f33e',
      uc_greedy: '1f468-1f3ff-1f33e',
      shortnames: [':man_farmer_dark_skin_tone:'],
      category: 'people'
    },
    ':man_firefighter_tone1:': {
      uc_base: '1f468-1f3fb-1f692',
      uc_output: '1f468-1f3fb-200d-1f692',
      uc_match: '1f468-1f3fb-1f692',
      uc_greedy: '1f468-1f3fb-1f692',
      shortnames: [':man_firefighter_light_skin_tone:'],
      category: 'people'
    },
    ':man_firefighter_tone2:': {
      uc_base: '1f468-1f3fc-1f692',
      uc_output: '1f468-1f3fc-200d-1f692',
      uc_match: '1f468-1f3fc-1f692',
      uc_greedy: '1f468-1f3fc-1f692',
      shortnames: [':man_firefighter_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_firefighter_tone3:': {
      uc_base: '1f468-1f3fd-1f692',
      uc_output: '1f468-1f3fd-200d-1f692',
      uc_match: '1f468-1f3fd-1f692',
      uc_greedy: '1f468-1f3fd-1f692',
      shortnames: [':man_firefighter_medium_skin_tone:'],
      category: 'people'
    },
    ':man_firefighter_tone4:': {
      uc_base: '1f468-1f3fe-1f692',
      uc_output: '1f468-1f3fe-200d-1f692',
      uc_match: '1f468-1f3fe-1f692',
      uc_greedy: '1f468-1f3fe-1f692',
      shortnames: [':man_firefighter_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_firefighter_tone5:': {
      uc_base: '1f468-1f3ff-1f692',
      uc_output: '1f468-1f3ff-200d-1f692',
      uc_match: '1f468-1f3ff-1f692',
      uc_greedy: '1f468-1f3ff-1f692',
      shortnames: [':man_firefighter_dark_skin_tone:'],
      category: 'people'
    },
    ':man_mechanic_tone1:': {
      uc_base: '1f468-1f3fb-1f527',
      uc_output: '1f468-1f3fb-200d-1f527',
      uc_match: '1f468-1f3fb-1f527',
      uc_greedy: '1f468-1f3fb-1f527',
      shortnames: [':man_mechanic_light_skin_tone:'],
      category: 'people'
    },
    ':man_mechanic_tone2:': {
      uc_base: '1f468-1f3fc-1f527',
      uc_output: '1f468-1f3fc-200d-1f527',
      uc_match: '1f468-1f3fc-1f527',
      uc_greedy: '1f468-1f3fc-1f527',
      shortnames: [':man_mechanic_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_mechanic_tone3:': {
      uc_base: '1f468-1f3fd-1f527',
      uc_output: '1f468-1f3fd-200d-1f527',
      uc_match: '1f468-1f3fd-1f527',
      uc_greedy: '1f468-1f3fd-1f527',
      shortnames: [':man_mechanic_medium_skin_tone:'],
      category: 'people'
    },
    ':man_mechanic_tone4:': {
      uc_base: '1f468-1f3fe-1f527',
      uc_output: '1f468-1f3fe-200d-1f527',
      uc_match: '1f468-1f3fe-1f527',
      uc_greedy: '1f468-1f3fe-1f527',
      shortnames: [':man_mechanic_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_mechanic_tone5:': {
      uc_base: '1f468-1f3ff-1f527',
      uc_output: '1f468-1f3ff-200d-1f527',
      uc_match: '1f468-1f3ff-1f527',
      uc_greedy: '1f468-1f3ff-1f527',
      shortnames: [':man_mechanic_dark_skin_tone:'],
      category: 'people'
    },
    ':man_office_worker_tone1:': {
      uc_base: '1f468-1f3fb-1f4bc',
      uc_output: '1f468-1f3fb-200d-1f4bc',
      uc_match: '1f468-1f3fb-1f4bc',
      uc_greedy: '1f468-1f3fb-1f4bc',
      shortnames: [':man_office_worker_light_skin_tone:'],
      category: 'people'
    },
    ':man_office_worker_tone2:': {
      uc_base: '1f468-1f3fc-1f4bc',
      uc_output: '1f468-1f3fc-200d-1f4bc',
      uc_match: '1f468-1f3fc-1f4bc',
      uc_greedy: '1f468-1f3fc-1f4bc',
      shortnames: [':man_office_worker_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_office_worker_tone3:': {
      uc_base: '1f468-1f3fd-1f4bc',
      uc_output: '1f468-1f3fd-200d-1f4bc',
      uc_match: '1f468-1f3fd-1f4bc',
      uc_greedy: '1f468-1f3fd-1f4bc',
      shortnames: [':man_office_worker_medium_skin_tone:'],
      category: 'people'
    },
    ':man_office_worker_tone4:': {
      uc_base: '1f468-1f3fe-1f4bc',
      uc_output: '1f468-1f3fe-200d-1f4bc',
      uc_match: '1f468-1f3fe-1f4bc',
      uc_greedy: '1f468-1f3fe-1f4bc',
      shortnames: [':man_office_worker_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_office_worker_tone5:': {
      uc_base: '1f468-1f3ff-1f4bc',
      uc_output: '1f468-1f3ff-200d-1f4bc',
      uc_match: '1f468-1f3ff-1f4bc',
      uc_greedy: '1f468-1f3ff-1f4bc',
      shortnames: [':man_office_worker_dark_skin_tone:'],
      category: 'people'
    },
    ':man_scientist_tone1:': {
      uc_base: '1f468-1f3fb-1f52c',
      uc_output: '1f468-1f3fb-200d-1f52c',
      uc_match: '1f468-1f3fb-1f52c',
      uc_greedy: '1f468-1f3fb-1f52c',
      shortnames: [':man_scientist_light_skin_tone:'],
      category: 'people'
    },
    ':man_scientist_tone2:': {
      uc_base: '1f468-1f3fc-1f52c',
      uc_output: '1f468-1f3fc-200d-1f52c',
      uc_match: '1f468-1f3fc-1f52c',
      uc_greedy: '1f468-1f3fc-1f52c',
      shortnames: [':man_scientist_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_scientist_tone3:': {
      uc_base: '1f468-1f3fd-1f52c',
      uc_output: '1f468-1f3fd-200d-1f52c',
      uc_match: '1f468-1f3fd-1f52c',
      uc_greedy: '1f468-1f3fd-1f52c',
      shortnames: [':man_scientist_medium_skin_tone:'],
      category: 'people'
    },
    ':man_scientist_tone4:': {
      uc_base: '1f468-1f3fe-1f52c',
      uc_output: '1f468-1f3fe-200d-1f52c',
      uc_match: '1f468-1f3fe-1f52c',
      uc_greedy: '1f468-1f3fe-1f52c',
      shortnames: [':man_scientist_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_scientist_tone5:': {
      uc_base: '1f468-1f3ff-1f52c',
      uc_output: '1f468-1f3ff-200d-1f52c',
      uc_match: '1f468-1f3ff-1f52c',
      uc_greedy: '1f468-1f3ff-1f52c',
      shortnames: [':man_scientist_dark_skin_tone:'],
      category: 'people'
    },
    ':man_singer_tone1:': {
      uc_base: '1f468-1f3fb-1f3a4',
      uc_output: '1f468-1f3fb-200d-1f3a4',
      uc_match: '1f468-1f3fb-1f3a4',
      uc_greedy: '1f468-1f3fb-1f3a4',
      shortnames: [':man_singer_light_skin_tone:'],
      category: 'people'
    },
    ':man_singer_tone2:': {
      uc_base: '1f468-1f3fc-1f3a4',
      uc_output: '1f468-1f3fc-200d-1f3a4',
      uc_match: '1f468-1f3fc-1f3a4',
      uc_greedy: '1f468-1f3fc-1f3a4',
      shortnames: [':man_singer_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_singer_tone3:': {
      uc_base: '1f468-1f3fd-1f3a4',
      uc_output: '1f468-1f3fd-200d-1f3a4',
      uc_match: '1f468-1f3fd-1f3a4',
      uc_greedy: '1f468-1f3fd-1f3a4',
      shortnames: [':man_singer_medium_skin_tone:'],
      category: 'people'
    },
    ':man_singer_tone4:': {
      uc_base: '1f468-1f3fe-1f3a4',
      uc_output: '1f468-1f3fe-200d-1f3a4',
      uc_match: '1f468-1f3fe-1f3a4',
      uc_greedy: '1f468-1f3fe-1f3a4',
      shortnames: [':man_singer_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_singer_tone5:': {
      uc_base: '1f468-1f3ff-1f3a4',
      uc_output: '1f468-1f3ff-200d-1f3a4',
      uc_match: '1f468-1f3ff-1f3a4',
      uc_greedy: '1f468-1f3ff-1f3a4',
      shortnames: [':man_singer_dark_skin_tone:'],
      category: 'people'
    },
    ':man_student_tone1:': {
      uc_base: '1f468-1f3fb-1f393',
      uc_output: '1f468-1f3fb-200d-1f393',
      uc_match: '1f468-1f3fb-1f393',
      uc_greedy: '1f468-1f3fb-1f393',
      shortnames: [':man_student_light_skin_tone:'],
      category: 'people'
    },
    ':man_student_tone2:': {
      uc_base: '1f468-1f3fc-1f393',
      uc_output: '1f468-1f3fc-200d-1f393',
      uc_match: '1f468-1f3fc-1f393',
      uc_greedy: '1f468-1f3fc-1f393',
      shortnames: [':man_student_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_student_tone3:': {
      uc_base: '1f468-1f3fd-1f393',
      uc_output: '1f468-1f3fd-200d-1f393',
      uc_match: '1f468-1f3fd-1f393',
      uc_greedy: '1f468-1f3fd-1f393',
      shortnames: [':man_student_medium_skin_tone:'],
      category: 'people'
    },
    ':man_student_tone4:': {
      uc_base: '1f468-1f3fe-1f393',
      uc_output: '1f468-1f3fe-200d-1f393',
      uc_match: '1f468-1f3fe-1f393',
      uc_greedy: '1f468-1f3fe-1f393',
      shortnames: [':man_student_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_student_tone5:': {
      uc_base: '1f468-1f3ff-1f393',
      uc_output: '1f468-1f3ff-200d-1f393',
      uc_match: '1f468-1f3ff-1f393',
      uc_greedy: '1f468-1f3ff-1f393',
      shortnames: [':man_student_dark_skin_tone:'],
      category: 'people'
    },
    ':man_teacher_tone1:': {
      uc_base: '1f468-1f3fb-1f3eb',
      uc_output: '1f468-1f3fb-200d-1f3eb',
      uc_match: '1f468-1f3fb-1f3eb',
      uc_greedy: '1f468-1f3fb-1f3eb',
      shortnames: [':man_teacher_light_skin_tone:'],
      category: 'people'
    },
    ':man_teacher_tone2:': {
      uc_base: '1f468-1f3fc-1f3eb',
      uc_output: '1f468-1f3fc-200d-1f3eb',
      uc_match: '1f468-1f3fc-1f3eb',
      uc_greedy: '1f468-1f3fc-1f3eb',
      shortnames: [':man_teacher_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_teacher_tone3:': {
      uc_base: '1f468-1f3fd-1f3eb',
      uc_output: '1f468-1f3fd-200d-1f3eb',
      uc_match: '1f468-1f3fd-1f3eb',
      uc_greedy: '1f468-1f3fd-1f3eb',
      shortnames: [':man_teacher_medium_skin_tone:'],
      category: 'people'
    },
    ':man_teacher_tone4:': {
      uc_base: '1f468-1f3fe-1f3eb',
      uc_output: '1f468-1f3fe-200d-1f3eb',
      uc_match: '1f468-1f3fe-1f3eb',
      uc_greedy: '1f468-1f3fe-1f3eb',
      shortnames: [':man_teacher_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_teacher_tone5:': {
      uc_base: '1f468-1f3ff-1f3eb',
      uc_output: '1f468-1f3ff-200d-1f3eb',
      uc_match: '1f468-1f3ff-1f3eb',
      uc_greedy: '1f468-1f3ff-1f3eb',
      shortnames: [':man_teacher_dark_skin_tone:'],
      category: 'people'
    },
    ':man_technologist_tone1:': {
      uc_base: '1f468-1f3fb-1f4bb',
      uc_output: '1f468-1f3fb-200d-1f4bb',
      uc_match: '1f468-1f3fb-1f4bb',
      uc_greedy: '1f468-1f3fb-1f4bb',
      shortnames: [':man_technologist_light_skin_tone:'],
      category: 'people'
    },
    ':man_technologist_tone2:': {
      uc_base: '1f468-1f3fc-1f4bb',
      uc_output: '1f468-1f3fc-200d-1f4bb',
      uc_match: '1f468-1f3fc-1f4bb',
      uc_greedy: '1f468-1f3fc-1f4bb',
      shortnames: [':man_technologist_medium_light_skin_tone:'],
      category: 'people'
    },
    ':man_technologist_tone3:': {
      uc_base: '1f468-1f3fd-1f4bb',
      uc_output: '1f468-1f3fd-200d-1f4bb',
      uc_match: '1f468-1f3fd-1f4bb',
      uc_greedy: '1f468-1f3fd-1f4bb',
      shortnames: [':man_technologist_medium_skin_tone:'],
      category: 'people'
    },
    ':man_technologist_tone4:': {
      uc_base: '1f468-1f3fe-1f4bb',
      uc_output: '1f468-1f3fe-200d-1f4bb',
      uc_match: '1f468-1f3fe-1f4bb',
      uc_greedy: '1f468-1f3fe-1f4bb',
      shortnames: [':man_technologist_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':man_technologist_tone5:': {
      uc_base: '1f468-1f3ff-1f4bb',
      uc_output: '1f468-1f3ff-200d-1f4bb',
      uc_match: '1f468-1f3ff-1f4bb',
      uc_greedy: '1f468-1f3ff-1f4bb',
      shortnames: [':man_technologist_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_artist_tone1:': {
      uc_base: '1f469-1f3fb-1f3a8',
      uc_output: '1f469-1f3fb-200d-1f3a8',
      uc_match: '1f469-1f3fb-1f3a8',
      uc_greedy: '1f469-1f3fb-1f3a8',
      shortnames: [':woman_artist_light_skin_tone:'],
      category: 'people'
    },
    ':woman_artist_tone2:': {
      uc_base: '1f469-1f3fc-1f3a8',
      uc_output: '1f469-1f3fc-200d-1f3a8',
      uc_match: '1f469-1f3fc-1f3a8',
      uc_greedy: '1f469-1f3fc-1f3a8',
      shortnames: [':woman_artist_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_artist_tone3:': {
      uc_base: '1f469-1f3fd-1f3a8',
      uc_output: '1f469-1f3fd-200d-1f3a8',
      uc_match: '1f469-1f3fd-1f3a8',
      uc_greedy: '1f469-1f3fd-1f3a8',
      shortnames: [':woman_artist_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_artist_tone4:': {
      uc_base: '1f469-1f3fe-1f3a8',
      uc_output: '1f469-1f3fe-200d-1f3a8',
      uc_match: '1f469-1f3fe-1f3a8',
      uc_greedy: '1f469-1f3fe-1f3a8',
      shortnames: [':woman_artist_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_artist_tone5:': {
      uc_base: '1f469-1f3ff-1f3a8',
      uc_output: '1f469-1f3ff-200d-1f3a8',
      uc_match: '1f469-1f3ff-1f3a8',
      uc_greedy: '1f469-1f3ff-1f3a8',
      shortnames: [':woman_artist_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_astronaut_tone1:': {
      uc_base: '1f469-1f3fb-1f680',
      uc_output: '1f469-1f3fb-200d-1f680',
      uc_match: '1f469-1f3fb-1f680',
      uc_greedy: '1f469-1f3fb-1f680',
      shortnames: [':woman_astronaut_light_skin_tone:'],
      category: 'people'
    },
    ':woman_astronaut_tone2:': {
      uc_base: '1f469-1f3fc-1f680',
      uc_output: '1f469-1f3fc-200d-1f680',
      uc_match: '1f469-1f3fc-1f680',
      uc_greedy: '1f469-1f3fc-1f680',
      shortnames: [':woman_astronaut_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_astronaut_tone3:': {
      uc_base: '1f469-1f3fd-1f680',
      uc_output: '1f469-1f3fd-200d-1f680',
      uc_match: '1f469-1f3fd-1f680',
      uc_greedy: '1f469-1f3fd-1f680',
      shortnames: [':woman_astronaut_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_astronaut_tone4:': {
      uc_base: '1f469-1f3fe-1f680',
      uc_output: '1f469-1f3fe-200d-1f680',
      uc_match: '1f469-1f3fe-1f680',
      uc_greedy: '1f469-1f3fe-1f680',
      shortnames: [':woman_astronaut_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_astronaut_tone5:': {
      uc_base: '1f469-1f3ff-1f680',
      uc_output: '1f469-1f3ff-200d-1f680',
      uc_match: '1f469-1f3ff-1f680',
      uc_greedy: '1f469-1f3ff-1f680',
      shortnames: [':woman_astronaut_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_cook_tone1:': {
      uc_base: '1f469-1f3fb-1f373',
      uc_output: '1f469-1f3fb-200d-1f373',
      uc_match: '1f469-1f3fb-1f373',
      uc_greedy: '1f469-1f3fb-1f373',
      shortnames: [':woman_cook_light_skin_tone:'],
      category: 'people'
    },
    ':woman_cook_tone2:': {
      uc_base: '1f469-1f3fc-1f373',
      uc_output: '1f469-1f3fc-200d-1f373',
      uc_match: '1f469-1f3fc-1f373',
      uc_greedy: '1f469-1f3fc-1f373',
      shortnames: [':woman_cook_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_cook_tone3:': {
      uc_base: '1f469-1f3fd-1f373',
      uc_output: '1f469-1f3fd-200d-1f373',
      uc_match: '1f469-1f3fd-1f373',
      uc_greedy: '1f469-1f3fd-1f373',
      shortnames: [':woman_cook_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_cook_tone4:': {
      uc_base: '1f469-1f3fe-1f373',
      uc_output: '1f469-1f3fe-200d-1f373',
      uc_match: '1f469-1f3fe-1f373',
      uc_greedy: '1f469-1f3fe-1f373',
      shortnames: [':woman_cook_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_cook_tone5:': {
      uc_base: '1f469-1f3ff-1f373',
      uc_output: '1f469-1f3ff-200d-1f373',
      uc_match: '1f469-1f3ff-1f373',
      uc_greedy: '1f469-1f3ff-1f373',
      shortnames: [':woman_cook_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_factory_worker_tone1:': {
      uc_base: '1f469-1f3fb-1f3ed',
      uc_output: '1f469-1f3fb-200d-1f3ed',
      uc_match: '1f469-1f3fb-1f3ed',
      uc_greedy: '1f469-1f3fb-1f3ed',
      shortnames: [':woman_factory_worker_light_skin_tone:'],
      category: 'people'
    },
    ':woman_factory_worker_tone2:': {
      uc_base: '1f469-1f3fc-1f3ed',
      uc_output: '1f469-1f3fc-200d-1f3ed',
      uc_match: '1f469-1f3fc-1f3ed',
      uc_greedy: '1f469-1f3fc-1f3ed',
      shortnames: [':woman_factory_worker_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_factory_worker_tone3:': {
      uc_base: '1f469-1f3fd-1f3ed',
      uc_output: '1f469-1f3fd-200d-1f3ed',
      uc_match: '1f469-1f3fd-1f3ed',
      uc_greedy: '1f469-1f3fd-1f3ed',
      shortnames: [':woman_factory_worker_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_factory_worker_tone4:': {
      uc_base: '1f469-1f3fe-1f3ed',
      uc_output: '1f469-1f3fe-200d-1f3ed',
      uc_match: '1f469-1f3fe-1f3ed',
      uc_greedy: '1f469-1f3fe-1f3ed',
      shortnames: [':woman_factory_worker_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_factory_worker_tone5:': {
      uc_base: '1f469-1f3ff-1f3ed',
      uc_output: '1f469-1f3ff-200d-1f3ed',
      uc_match: '1f469-1f3ff-1f3ed',
      uc_greedy: '1f469-1f3ff-1f3ed',
      shortnames: [':woman_factory_worker_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_farmer_tone1:': {
      uc_base: '1f469-1f3fb-1f33e',
      uc_output: '1f469-1f3fb-200d-1f33e',
      uc_match: '1f469-1f3fb-1f33e',
      uc_greedy: '1f469-1f3fb-1f33e',
      shortnames: [':woman_farmer_light_skin_tone:'],
      category: 'people'
    },
    ':woman_farmer_tone2:': {
      uc_base: '1f469-1f3fc-1f33e',
      uc_output: '1f469-1f3fc-200d-1f33e',
      uc_match: '1f469-1f3fc-1f33e',
      uc_greedy: '1f469-1f3fc-1f33e',
      shortnames: [':woman_farmer_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_farmer_tone3:': {
      uc_base: '1f469-1f3fd-1f33e',
      uc_output: '1f469-1f3fd-200d-1f33e',
      uc_match: '1f469-1f3fd-1f33e',
      uc_greedy: '1f469-1f3fd-1f33e',
      shortnames: [':woman_farmer_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_farmer_tone4:': {
      uc_base: '1f469-1f3fe-1f33e',
      uc_output: '1f469-1f3fe-200d-1f33e',
      uc_match: '1f469-1f3fe-1f33e',
      uc_greedy: '1f469-1f3fe-1f33e',
      shortnames: [':woman_farmer_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_farmer_tone5:': {
      uc_base: '1f469-1f3ff-1f33e',
      uc_output: '1f469-1f3ff-200d-1f33e',
      uc_match: '1f469-1f3ff-1f33e',
      uc_greedy: '1f469-1f3ff-1f33e',
      shortnames: [':woman_farmer_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_firefighter_tone1:': {
      uc_base: '1f469-1f3fb-1f692',
      uc_output: '1f469-1f3fb-200d-1f692',
      uc_match: '1f469-1f3fb-1f692',
      uc_greedy: '1f469-1f3fb-1f692',
      shortnames: [':woman_firefighter_light_skin_tone:'],
      category: 'people'
    },
    ':woman_firefighter_tone2:': {
      uc_base: '1f469-1f3fc-1f692',
      uc_output: '1f469-1f3fc-200d-1f692',
      uc_match: '1f469-1f3fc-1f692',
      uc_greedy: '1f469-1f3fc-1f692',
      shortnames: [':woman_firefighter_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_firefighter_tone3:': {
      uc_base: '1f469-1f3fd-1f692',
      uc_output: '1f469-1f3fd-200d-1f692',
      uc_match: '1f469-1f3fd-1f692',
      uc_greedy: '1f469-1f3fd-1f692',
      shortnames: [':woman_firefighter_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_firefighter_tone4:': {
      uc_base: '1f469-1f3fe-1f692',
      uc_output: '1f469-1f3fe-200d-1f692',
      uc_match: '1f469-1f3fe-1f692',
      uc_greedy: '1f469-1f3fe-1f692',
      shortnames: [':woman_firefighter_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_firefighter_tone5:': {
      uc_base: '1f469-1f3ff-1f692',
      uc_output: '1f469-1f3ff-200d-1f692',
      uc_match: '1f469-1f3ff-1f692',
      uc_greedy: '1f469-1f3ff-1f692',
      shortnames: [':woman_firefighter_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_mechanic_tone1:': {
      uc_base: '1f469-1f3fb-1f527',
      uc_output: '1f469-1f3fb-200d-1f527',
      uc_match: '1f469-1f3fb-1f527',
      uc_greedy: '1f469-1f3fb-1f527',
      shortnames: [':woman_mechanic_light_skin_tone:'],
      category: 'people'
    },
    ':woman_mechanic_tone2:': {
      uc_base: '1f469-1f3fc-1f527',
      uc_output: '1f469-1f3fc-200d-1f527',
      uc_match: '1f469-1f3fc-1f527',
      uc_greedy: '1f469-1f3fc-1f527',
      shortnames: [':woman_mechanic_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_mechanic_tone3:': {
      uc_base: '1f469-1f3fd-1f527',
      uc_output: '1f469-1f3fd-200d-1f527',
      uc_match: '1f469-1f3fd-1f527',
      uc_greedy: '1f469-1f3fd-1f527',
      shortnames: [':woman_mechanic_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_mechanic_tone4:': {
      uc_base: '1f469-1f3fe-1f527',
      uc_output: '1f469-1f3fe-200d-1f527',
      uc_match: '1f469-1f3fe-1f527',
      uc_greedy: '1f469-1f3fe-1f527',
      shortnames: [':woman_mechanic_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_mechanic_tone5:': {
      uc_base: '1f469-1f3ff-1f527',
      uc_output: '1f469-1f3ff-200d-1f527',
      uc_match: '1f469-1f3ff-1f527',
      uc_greedy: '1f469-1f3ff-1f527',
      shortnames: [':woman_mechanic_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_office_worker_tone1:': {
      uc_base: '1f469-1f3fb-1f4bc',
      uc_output: '1f469-1f3fb-200d-1f4bc',
      uc_match: '1f469-1f3fb-1f4bc',
      uc_greedy: '1f469-1f3fb-1f4bc',
      shortnames: [':woman_office_worker_light_skin_tone:'],
      category: 'people'
    },
    ':woman_office_worker_tone2:': {
      uc_base: '1f469-1f3fc-1f4bc',
      uc_output: '1f469-1f3fc-200d-1f4bc',
      uc_match: '1f469-1f3fc-1f4bc',
      uc_greedy: '1f469-1f3fc-1f4bc',
      shortnames: [':woman_office_worker_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_office_worker_tone3:': {
      uc_base: '1f469-1f3fd-1f4bc',
      uc_output: '1f469-1f3fd-200d-1f4bc',
      uc_match: '1f469-1f3fd-1f4bc',
      uc_greedy: '1f469-1f3fd-1f4bc',
      shortnames: [':woman_office_worker_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_office_worker_tone4:': {
      uc_base: '1f469-1f3fe-1f4bc',
      uc_output: '1f469-1f3fe-200d-1f4bc',
      uc_match: '1f469-1f3fe-1f4bc',
      uc_greedy: '1f469-1f3fe-1f4bc',
      shortnames: [':woman_office_worker_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_office_worker_tone5:': {
      uc_base: '1f469-1f3ff-1f4bc',
      uc_output: '1f469-1f3ff-200d-1f4bc',
      uc_match: '1f469-1f3ff-1f4bc',
      uc_greedy: '1f469-1f3ff-1f4bc',
      shortnames: [':woman_office_worker_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_scientist_tone1:': {
      uc_base: '1f469-1f3fb-1f52c',
      uc_output: '1f469-1f3fb-200d-1f52c',
      uc_match: '1f469-1f3fb-1f52c',
      uc_greedy: '1f469-1f3fb-1f52c',
      shortnames: [':woman_scientist_light_skin_tone:'],
      category: 'people'
    },
    ':woman_scientist_tone2:': {
      uc_base: '1f469-1f3fc-1f52c',
      uc_output: '1f469-1f3fc-200d-1f52c',
      uc_match: '1f469-1f3fc-1f52c',
      uc_greedy: '1f469-1f3fc-1f52c',
      shortnames: [':woman_scientist_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_scientist_tone3:': {
      uc_base: '1f469-1f3fd-1f52c',
      uc_output: '1f469-1f3fd-200d-1f52c',
      uc_match: '1f469-1f3fd-1f52c',
      uc_greedy: '1f469-1f3fd-1f52c',
      shortnames: [':woman_scientist_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_scientist_tone4:': {
      uc_base: '1f469-1f3fe-1f52c',
      uc_output: '1f469-1f3fe-200d-1f52c',
      uc_match: '1f469-1f3fe-1f52c',
      uc_greedy: '1f469-1f3fe-1f52c',
      shortnames: [':woman_scientist_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_scientist_tone5:': {
      uc_base: '1f469-1f3ff-1f52c',
      uc_output: '1f469-1f3ff-200d-1f52c',
      uc_match: '1f469-1f3ff-1f52c',
      uc_greedy: '1f469-1f3ff-1f52c',
      shortnames: [':woman_scientist_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_singer_tone1:': {
      uc_base: '1f469-1f3fb-1f3a4',
      uc_output: '1f469-1f3fb-200d-1f3a4',
      uc_match: '1f469-1f3fb-1f3a4',
      uc_greedy: '1f469-1f3fb-1f3a4',
      shortnames: [':woman_singer_light_skin_tone:'],
      category: 'people'
    },
    ':woman_singer_tone2:': {
      uc_base: '1f469-1f3fc-1f3a4',
      uc_output: '1f469-1f3fc-200d-1f3a4',
      uc_match: '1f469-1f3fc-1f3a4',
      uc_greedy: '1f469-1f3fc-1f3a4',
      shortnames: [':woman_singer_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_singer_tone3:': {
      uc_base: '1f469-1f3fd-1f3a4',
      uc_output: '1f469-1f3fd-200d-1f3a4',
      uc_match: '1f469-1f3fd-1f3a4',
      uc_greedy: '1f469-1f3fd-1f3a4',
      shortnames: [':woman_singer_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_singer_tone4:': {
      uc_base: '1f469-1f3fe-1f3a4',
      uc_output: '1f469-1f3fe-200d-1f3a4',
      uc_match: '1f469-1f3fe-1f3a4',
      uc_greedy: '1f469-1f3fe-1f3a4',
      shortnames: [':woman_singer_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_singer_tone5:': {
      uc_base: '1f469-1f3ff-1f3a4',
      uc_output: '1f469-1f3ff-200d-1f3a4',
      uc_match: '1f469-1f3ff-1f3a4',
      uc_greedy: '1f469-1f3ff-1f3a4',
      shortnames: [':woman_singer_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_student_tone1:': {
      uc_base: '1f469-1f3fb-1f393',
      uc_output: '1f469-1f3fb-200d-1f393',
      uc_match: '1f469-1f3fb-1f393',
      uc_greedy: '1f469-1f3fb-1f393',
      shortnames: [':woman_student_light_skin_tone:'],
      category: 'people'
    },
    ':woman_student_tone2:': {
      uc_base: '1f469-1f3fc-1f393',
      uc_output: '1f469-1f3fc-200d-1f393',
      uc_match: '1f469-1f3fc-1f393',
      uc_greedy: '1f469-1f3fc-1f393',
      shortnames: [':woman_student_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_student_tone3:': {
      uc_base: '1f469-1f3fd-1f393',
      uc_output: '1f469-1f3fd-200d-1f393',
      uc_match: '1f469-1f3fd-1f393',
      uc_greedy: '1f469-1f3fd-1f393',
      shortnames: [':woman_student_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_student_tone4:': {
      uc_base: '1f469-1f3fe-1f393',
      uc_output: '1f469-1f3fe-200d-1f393',
      uc_match: '1f469-1f3fe-1f393',
      uc_greedy: '1f469-1f3fe-1f393',
      shortnames: [':woman_student_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_student_tone5:': {
      uc_base: '1f469-1f3ff-1f393',
      uc_output: '1f469-1f3ff-200d-1f393',
      uc_match: '1f469-1f3ff-1f393',
      uc_greedy: '1f469-1f3ff-1f393',
      shortnames: [':woman_student_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_teacher_tone1:': {
      uc_base: '1f469-1f3fb-1f3eb',
      uc_output: '1f469-1f3fb-200d-1f3eb',
      uc_match: '1f469-1f3fb-1f3eb',
      uc_greedy: '1f469-1f3fb-1f3eb',
      shortnames: [':woman_teacher_light_skin_tone:'],
      category: 'people'
    },
    ':woman_teacher_tone2:': {
      uc_base: '1f469-1f3fc-1f3eb',
      uc_output: '1f469-1f3fc-200d-1f3eb',
      uc_match: '1f469-1f3fc-1f3eb',
      uc_greedy: '1f469-1f3fc-1f3eb',
      shortnames: [':woman_teacher_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_teacher_tone3:': {
      uc_base: '1f469-1f3fd-1f3eb',
      uc_output: '1f469-1f3fd-200d-1f3eb',
      uc_match: '1f469-1f3fd-1f3eb',
      uc_greedy: '1f469-1f3fd-1f3eb',
      shortnames: [':woman_teacher_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_teacher_tone4:': {
      uc_base: '1f469-1f3fe-1f3eb',
      uc_output: '1f469-1f3fe-200d-1f3eb',
      uc_match: '1f469-1f3fe-1f3eb',
      uc_greedy: '1f469-1f3fe-1f3eb',
      shortnames: [':woman_teacher_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_teacher_tone5:': {
      uc_base: '1f469-1f3ff-1f3eb',
      uc_output: '1f469-1f3ff-200d-1f3eb',
      uc_match: '1f469-1f3ff-1f3eb',
      uc_greedy: '1f469-1f3ff-1f3eb',
      shortnames: [':woman_teacher_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_technologist_tone1:': {
      uc_base: '1f469-1f3fb-1f4bb',
      uc_output: '1f469-1f3fb-200d-1f4bb',
      uc_match: '1f469-1f3fb-1f4bb',
      uc_greedy: '1f469-1f3fb-1f4bb',
      shortnames: [':woman_technologist_light_skin_tone:'],
      category: 'people'
    },
    ':woman_technologist_tone2:': {
      uc_base: '1f469-1f3fc-1f4bb',
      uc_output: '1f469-1f3fc-200d-1f4bb',
      uc_match: '1f469-1f3fc-1f4bb',
      uc_greedy: '1f469-1f3fc-1f4bb',
      shortnames: [':woman_technologist_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_technologist_tone3:': {
      uc_base: '1f469-1f3fd-1f4bb',
      uc_output: '1f469-1f3fd-200d-1f4bb',
      uc_match: '1f469-1f3fd-1f4bb',
      uc_greedy: '1f469-1f3fd-1f4bb',
      shortnames: [':woman_technologist_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_technologist_tone4:': {
      uc_base: '1f469-1f3fe-1f4bb',
      uc_output: '1f469-1f3fe-200d-1f4bb',
      uc_match: '1f469-1f3fe-1f4bb',
      uc_greedy: '1f469-1f3fe-1f4bb',
      shortnames: [':woman_technologist_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_technologist_tone5:': {
      uc_base: '1f469-1f3ff-1f4bb',
      uc_output: '1f469-1f3ff-200d-1f4bb',
      uc_match: '1f469-1f3ff-1f4bb',
      uc_greedy: '1f469-1f3ff-1f4bb',
      shortnames: [':woman_technologist_dark_skin_tone:'],
      category: 'people'
    },
    ':rainbow_flag:': {
      uc_base: '1f3f3-1f308',
      uc_output: '1f3f3-fe0f-200d-1f308',
      uc_match: '1f3f3-fe0f-1f308',
      uc_greedy: '1f3f3-1f308',
      shortnames: [':gay_pride_flag:'],
      category: 'flags'
    },
    ':blond-haired_man:': {
      uc_base: '1f471-2642',
      uc_output: '1f471-200d-2642-fe0f',
      uc_match: '1f471-2642-fe0f',
      uc_greedy: '1f471-2642',
      shortnames: [],
      category: 'people'
    },
    ':blond-haired_woman:': {
      uc_base: '1f471-2640',
      uc_output: '1f471-200d-2640-fe0f',
      uc_match: '1f471-2640-fe0f',
      uc_greedy: '1f471-2640',
      shortnames: [],
      category: 'people'
    },
    ':man_biking:': {
      uc_base: '1f6b4-2642',
      uc_output: '1f6b4-200d-2642-fe0f',
      uc_match: '1f6b4-2642-fe0f',
      uc_greedy: '1f6b4-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_bowing:': {
      uc_base: '1f647-2642',
      uc_output: '1f647-200d-2642-fe0f',
      uc_match: '1f647-2642-fe0f',
      uc_greedy: '1f647-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_cartwheeling:': {
      uc_base: '1f938-2642',
      uc_output: '1f938-200d-2642-fe0f',
      uc_match: '1f938-2642-fe0f',
      uc_greedy: '1f938-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_climbing:': {
      uc_base: '1f9d7-2642',
      uc_output: '1f9d7-200d-2642-fe0f',
      uc_match: '1f9d7-2642-fe0f',
      uc_greedy: '1f9d7-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_construction_worker:': {
      uc_base: '1f477-2642',
      uc_output: '1f477-200d-2642-fe0f',
      uc_match: '1f477-2642-fe0f',
      uc_greedy: '1f477-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_elf:': {
      uc_base: '1f9dd-2642',
      uc_output: '1f9dd-200d-2642-fe0f',
      uc_match: '1f9dd-2642-fe0f',
      uc_greedy: '1f9dd-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_facepalming:': {
      uc_base: '1f926-2642',
      uc_output: '1f926-200d-2642-fe0f',
      uc_match: '1f926-2642-fe0f',
      uc_greedy: '1f926-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_fairy:': {
      uc_base: '1f9da-2642',
      uc_output: '1f9da-200d-2642-fe0f',
      uc_match: '1f9da-2642-fe0f',
      uc_greedy: '1f9da-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_frowning:': {
      uc_base: '1f64d-2642',
      uc_output: '1f64d-200d-2642-fe0f',
      uc_match: '1f64d-2642-fe0f',
      uc_greedy: '1f64d-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_genie:': {
      uc_base: '1f9de-2642',
      uc_output: '1f9de-200d-2642-fe0f',
      uc_match: '1f9de-2642-fe0f',
      uc_greedy: '1f9de-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_gesturing_no:': {
      uc_base: '1f645-2642',
      uc_output: '1f645-200d-2642-fe0f',
      uc_match: '1f645-2642-fe0f',
      uc_greedy: '1f645-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_gesturing_ok:': {
      uc_base: '1f646-2642',
      uc_output: '1f646-200d-2642-fe0f',
      uc_match: '1f646-2642-fe0f',
      uc_greedy: '1f646-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_getting_face_massage:': {
      uc_base: '1f486-2642',
      uc_output: '1f486-200d-2642-fe0f',
      uc_match: '1f486-2642-fe0f',
      uc_greedy: '1f486-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_getting_haircut:': {
      uc_base: '1f487-2642',
      uc_output: '1f487-200d-2642-fe0f',
      uc_match: '1f487-2642-fe0f',
      uc_greedy: '1f487-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_guard:': {
      uc_base: '1f482-2642',
      uc_output: '1f482-200d-2642-fe0f',
      uc_match: '1f482-2642-fe0f',
      uc_greedy: '1f482-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_health_worker:': {
      uc_base: '1f468-2695',
      uc_output: '1f468-200d-2695-fe0f',
      uc_match: '1f468-2695-fe0f',
      uc_greedy: '1f468-2695',
      shortnames: [],
      category: 'people'
    },
    ':man_in_lotus_position:': {
      uc_base: '1f9d8-2642',
      uc_output: '1f9d8-200d-2642-fe0f',
      uc_match: '1f9d8-2642-fe0f',
      uc_greedy: '1f9d8-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_in_steamy_room:': {
      uc_base: '1f9d6-2642',
      uc_output: '1f9d6-200d-2642-fe0f',
      uc_match: '1f9d6-2642-fe0f',
      uc_greedy: '1f9d6-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_judge:': {
      uc_base: '1f468-2696',
      uc_output: '1f468-200d-2696-fe0f',
      uc_match: '1f468-2696-fe0f',
      uc_greedy: '1f468-2696',
      shortnames: [],
      category: 'people'
    },
    ':man_juggling:': {
      uc_base: '1f939-2642',
      uc_output: '1f939-200d-2642-fe0f',
      uc_match: '1f939-2642-fe0f',
      uc_greedy: '1f939-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_mage:': {
      uc_base: '1f9d9-2642',
      uc_output: '1f9d9-200d-2642-fe0f',
      uc_match: '1f9d9-2642-fe0f',
      uc_greedy: '1f9d9-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_mountain_biking:': {
      uc_base: '1f6b5-2642',
      uc_output: '1f6b5-200d-2642-fe0f',
      uc_match: '1f6b5-2642-fe0f',
      uc_greedy: '1f6b5-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_pilot:': {
      uc_base: '1f468-2708',
      uc_output: '1f468-200d-2708-fe0f',
      uc_match: '1f468-2708-fe0f',
      uc_greedy: '1f468-2708',
      shortnames: [],
      category: 'people'
    },
    ':man_playing_handball:': {
      uc_base: '1f93e-2642',
      uc_output: '1f93e-200d-2642-fe0f',
      uc_match: '1f93e-2642-fe0f',
      uc_greedy: '1f93e-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_playing_water_polo:': {
      uc_base: '1f93d-2642',
      uc_output: '1f93d-200d-2642-fe0f',
      uc_match: '1f93d-2642-fe0f',
      uc_greedy: '1f93d-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_police_officer:': {
      uc_base: '1f46e-2642',
      uc_output: '1f46e-200d-2642-fe0f',
      uc_match: '1f46e-2642-fe0f',
      uc_greedy: '1f46e-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_pouting:': {
      uc_base: '1f64e-2642',
      uc_output: '1f64e-200d-2642-fe0f',
      uc_match: '1f64e-2642-fe0f',
      uc_greedy: '1f64e-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_raising_hand:': {
      uc_base: '1f64b-2642',
      uc_output: '1f64b-200d-2642-fe0f',
      uc_match: '1f64b-2642-fe0f',
      uc_greedy: '1f64b-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_rowing_boat:': {
      uc_base: '1f6a3-2642',
      uc_output: '1f6a3-200d-2642-fe0f',
      uc_match: '1f6a3-2642-fe0f',
      uc_greedy: '1f6a3-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_running:': {
      uc_base: '1f3c3-2642',
      uc_output: '1f3c3-200d-2642-fe0f',
      uc_match: '1f3c3-2642-fe0f',
      uc_greedy: '1f3c3-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_shrugging:': {
      uc_base: '1f937-2642',
      uc_output: '1f937-200d-2642-fe0f',
      uc_match: '1f937-2642-fe0f',
      uc_greedy: '1f937-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_surfing:': {
      uc_base: '1f3c4-2642',
      uc_output: '1f3c4-200d-2642-fe0f',
      uc_match: '1f3c4-2642-fe0f',
      uc_greedy: '1f3c4-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_swimming:': {
      uc_base: '1f3ca-2642',
      uc_output: '1f3ca-200d-2642-fe0f',
      uc_match: '1f3ca-2642-fe0f',
      uc_greedy: '1f3ca-2642',
      shortnames: [],
      category: 'activity'
    },
    ':man_tipping_hand:': {
      uc_base: '1f481-2642',
      uc_output: '1f481-200d-2642-fe0f',
      uc_match: '1f481-2642-fe0f',
      uc_greedy: '1f481-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_vampire:': {
      uc_base: '1f9db-2642',
      uc_output: '1f9db-200d-2642-fe0f',
      uc_match: '1f9db-2642-fe0f',
      uc_greedy: '1f9db-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_walking:': {
      uc_base: '1f6b6-2642',
      uc_output: '1f6b6-200d-2642-fe0f',
      uc_match: '1f6b6-2642-fe0f',
      uc_greedy: '1f6b6-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_wearing_turban:': {
      uc_base: '1f473-2642',
      uc_output: '1f473-200d-2642-fe0f',
      uc_match: '1f473-2642-fe0f',
      uc_greedy: '1f473-2642',
      shortnames: [],
      category: 'people'
    },
    ':man_zombie:': {
      uc_base: '1f9df-2642',
      uc_output: '1f9df-200d-2642-fe0f',
      uc_match: '1f9df-2642-fe0f',
      uc_greedy: '1f9df-2642',
      shortnames: [],
      category: 'people'
    },
    ':men_with_bunny_ears_partying:': {
      uc_base: '1f46f-2642',
      uc_output: '1f46f-200d-2642-fe0f',
      uc_match: '1f46f-2642-fe0f',
      uc_greedy: '1f46f-2642',
      shortnames: [],
      category: 'people'
    },
    ':men_wrestling:': {
      uc_base: '1f93c-2642',
      uc_output: '1f93c-200d-2642-fe0f',
      uc_match: '1f93c-2642-fe0f',
      uc_greedy: '1f93c-2642',
      shortnames: [],
      category: 'activity'
    },
    ':mermaid:': {
      uc_base: '1f9dc-2640',
      uc_output: '1f9dc-200d-2640-fe0f',
      uc_match: '1f9dc-2640-fe0f',
      uc_greedy: '1f9dc-2640',
      shortnames: [],
      category: 'people'
    },
    ':merman:': {
      uc_base: '1f9dc-2642',
      uc_output: '1f9dc-200d-2642-fe0f',
      uc_match: '1f9dc-2642-fe0f',
      uc_greedy: '1f9dc-2642',
      shortnames: [],
      category: 'people'
    },
    ':woman_biking:': {
      uc_base: '1f6b4-2640',
      uc_output: '1f6b4-200d-2640-fe0f',
      uc_match: '1f6b4-2640-fe0f',
      uc_greedy: '1f6b4-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_bowing:': {
      uc_base: '1f647-2640',
      uc_output: '1f647-200d-2640-fe0f',
      uc_match: '1f647-2640-fe0f',
      uc_greedy: '1f647-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_cartwheeling:': {
      uc_base: '1f938-2640',
      uc_output: '1f938-200d-2640-fe0f',
      uc_match: '1f938-2640-fe0f',
      uc_greedy: '1f938-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_climbing:': {
      uc_base: '1f9d7-2640',
      uc_output: '1f9d7-200d-2640-fe0f',
      uc_match: '1f9d7-2640-fe0f',
      uc_greedy: '1f9d7-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_construction_worker:': {
      uc_base: '1f477-2640',
      uc_output: '1f477-200d-2640-fe0f',
      uc_match: '1f477-2640-fe0f',
      uc_greedy: '1f477-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_elf:': {
      uc_base: '1f9dd-2640',
      uc_output: '1f9dd-200d-2640-fe0f',
      uc_match: '1f9dd-2640-fe0f',
      uc_greedy: '1f9dd-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_facepalming:': {
      uc_base: '1f926-2640',
      uc_output: '1f926-200d-2640-fe0f',
      uc_match: '1f926-2640-fe0f',
      uc_greedy: '1f926-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_fairy:': {
      uc_base: '1f9da-2640',
      uc_output: '1f9da-200d-2640-fe0f',
      uc_match: '1f9da-2640-fe0f',
      uc_greedy: '1f9da-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_frowning:': {
      uc_base: '1f64d-2640',
      uc_output: '1f64d-200d-2640-fe0f',
      uc_match: '1f64d-2640-fe0f',
      uc_greedy: '1f64d-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_genie:': {
      uc_base: '1f9de-2640',
      uc_output: '1f9de-200d-2640-fe0f',
      uc_match: '1f9de-2640-fe0f',
      uc_greedy: '1f9de-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_gesturing_no:': {
      uc_base: '1f645-2640',
      uc_output: '1f645-200d-2640-fe0f',
      uc_match: '1f645-2640-fe0f',
      uc_greedy: '1f645-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_gesturing_ok:': {
      uc_base: '1f646-2640',
      uc_output: '1f646-200d-2640-fe0f',
      uc_match: '1f646-2640-fe0f',
      uc_greedy: '1f646-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_getting_face_massage:': {
      uc_base: '1f486-2640',
      uc_output: '1f486-200d-2640-fe0f',
      uc_match: '1f486-2640-fe0f',
      uc_greedy: '1f486-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_getting_haircut:': {
      uc_base: '1f487-2640',
      uc_output: '1f487-200d-2640-fe0f',
      uc_match: '1f487-2640-fe0f',
      uc_greedy: '1f487-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_guard:': {
      uc_base: '1f482-2640',
      uc_output: '1f482-200d-2640-fe0f',
      uc_match: '1f482-2640-fe0f',
      uc_greedy: '1f482-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_health_worker:': {
      uc_base: '1f469-2695',
      uc_output: '1f469-200d-2695-fe0f',
      uc_match: '1f469-2695-fe0f',
      uc_greedy: '1f469-2695',
      shortnames: [],
      category: 'people'
    },
    ':woman_in_lotus_position:': {
      uc_base: '1f9d8-2640',
      uc_output: '1f9d8-200d-2640-fe0f',
      uc_match: '1f9d8-2640-fe0f',
      uc_greedy: '1f9d8-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_in_steamy_room:': {
      uc_base: '1f9d6-2640',
      uc_output: '1f9d6-200d-2640-fe0f',
      uc_match: '1f9d6-2640-fe0f',
      uc_greedy: '1f9d6-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_judge:': {
      uc_base: '1f469-2696',
      uc_output: '1f469-200d-2696-fe0f',
      uc_match: '1f469-2696-fe0f',
      uc_greedy: '1f469-2696',
      shortnames: [],
      category: 'people'
    },
    ':woman_juggling:': {
      uc_base: '1f939-2640',
      uc_output: '1f939-200d-2640-fe0f',
      uc_match: '1f939-2640-fe0f',
      uc_greedy: '1f939-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_mage:': {
      uc_base: '1f9d9-2640',
      uc_output: '1f9d9-200d-2640-fe0f',
      uc_match: '1f9d9-2640-fe0f',
      uc_greedy: '1f9d9-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_mountain_biking:': {
      uc_base: '1f6b5-2640',
      uc_output: '1f6b5-200d-2640-fe0f',
      uc_match: '1f6b5-2640-fe0f',
      uc_greedy: '1f6b5-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_pilot:': {
      uc_base: '1f469-2708',
      uc_output: '1f469-200d-2708-fe0f',
      uc_match: '1f469-2708-fe0f',
      uc_greedy: '1f469-2708',
      shortnames: [],
      category: 'people'
    },
    ':woman_playing_handball:': {
      uc_base: '1f93e-2640',
      uc_output: '1f93e-200d-2640-fe0f',
      uc_match: '1f93e-2640-fe0f',
      uc_greedy: '1f93e-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_playing_water_polo:': {
      uc_base: '1f93d-2640',
      uc_output: '1f93d-200d-2640-fe0f',
      uc_match: '1f93d-2640-fe0f',
      uc_greedy: '1f93d-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_police_officer:': {
      uc_base: '1f46e-2640',
      uc_output: '1f46e-200d-2640-fe0f',
      uc_match: '1f46e-2640-fe0f',
      uc_greedy: '1f46e-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_pouting:': {
      uc_base: '1f64e-2640',
      uc_output: '1f64e-200d-2640-fe0f',
      uc_match: '1f64e-2640-fe0f',
      uc_greedy: '1f64e-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_raising_hand:': {
      uc_base: '1f64b-2640',
      uc_output: '1f64b-200d-2640-fe0f',
      uc_match: '1f64b-2640-fe0f',
      uc_greedy: '1f64b-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_rowing_boat:': {
      uc_base: '1f6a3-2640',
      uc_output: '1f6a3-200d-2640-fe0f',
      uc_match: '1f6a3-2640-fe0f',
      uc_greedy: '1f6a3-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_running:': {
      uc_base: '1f3c3-2640',
      uc_output: '1f3c3-200d-2640-fe0f',
      uc_match: '1f3c3-2640-fe0f',
      uc_greedy: '1f3c3-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_shrugging:': {
      uc_base: '1f937-2640',
      uc_output: '1f937-200d-2640-fe0f',
      uc_match: '1f937-2640-fe0f',
      uc_greedy: '1f937-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_surfing:': {
      uc_base: '1f3c4-2640',
      uc_output: '1f3c4-200d-2640-fe0f',
      uc_match: '1f3c4-2640-fe0f',
      uc_greedy: '1f3c4-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_swimming:': {
      uc_base: '1f3ca-2640',
      uc_output: '1f3ca-200d-2640-fe0f',
      uc_match: '1f3ca-2640-fe0f',
      uc_greedy: '1f3ca-2640',
      shortnames: [],
      category: 'activity'
    },
    ':woman_tipping_hand:': {
      uc_base: '1f481-2640',
      uc_output: '1f481-200d-2640-fe0f',
      uc_match: '1f481-2640-fe0f',
      uc_greedy: '1f481-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_vampire:': {
      uc_base: '1f9db-2640',
      uc_output: '1f9db-200d-2640-fe0f',
      uc_match: '1f9db-2640-fe0f',
      uc_greedy: '1f9db-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_walking:': {
      uc_base: '1f6b6-2640',
      uc_output: '1f6b6-200d-2640-fe0f',
      uc_match: '1f6b6-2640-fe0f',
      uc_greedy: '1f6b6-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_wearing_turban:': {
      uc_base: '1f473-2640',
      uc_output: '1f473-200d-2640-fe0f',
      uc_match: '1f473-2640-fe0f',
      uc_greedy: '1f473-2640',
      shortnames: [],
      category: 'people'
    },
    ':woman_zombie:': {
      uc_base: '1f9df-2640',
      uc_output: '1f9df-200d-2640-fe0f',
      uc_match: '1f9df-2640-fe0f',
      uc_greedy: '1f9df-2640',
      shortnames: [],
      category: 'people'
    },
    ':women_with_bunny_ears_partying:': {
      uc_base: '1f46f-2640',
      uc_output: '1f46f-200d-2640-fe0f',
      uc_match: '1f46f-2640-fe0f',
      uc_greedy: '1f46f-2640',
      shortnames: [],
      category: 'people'
    },
    ':women_wrestling:': {
      uc_base: '1f93c-2640',
      uc_output: '1f93c-200d-2640-fe0f',
      uc_match: '1f93c-2640-fe0f',
      uc_greedy: '1f93c-2640',
      shortnames: [],
      category: 'activity'
    },
    ':family_man_boy:': {
      uc_base: '1f468-1f466',
      uc_output: '1f468-200d-1f466',
      uc_match: '1f468-1f466',
      uc_greedy: '1f468-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_man_girl:': {
      uc_base: '1f468-1f467',
      uc_output: '1f468-200d-1f467',
      uc_match: '1f468-1f467',
      uc_greedy: '1f468-1f467',
      shortnames: [],
      category: 'people'
    },
    ':family_woman_boy:': {
      uc_base: '1f469-1f466',
      uc_output: '1f469-200d-1f466',
      uc_match: '1f469-1f466',
      uc_greedy: '1f469-1f466',
      shortnames: [],
      category: 'people'
    },
    ':family_woman_girl:': {
      uc_base: '1f469-1f467',
      uc_output: '1f469-200d-1f467',
      uc_match: '1f469-1f467',
      uc_greedy: '1f469-1f467',
      shortnames: [],
      category: 'people'
    },
    ':man_artist:': {
      uc_base: '1f468-1f3a8',
      uc_output: '1f468-200d-1f3a8',
      uc_match: '1f468-1f3a8',
      uc_greedy: '1f468-1f3a8',
      shortnames: [],
      category: 'people'
    },
    ':man_astronaut:': {
      uc_base: '1f468-1f680',
      uc_output: '1f468-200d-1f680',
      uc_match: '1f468-1f680',
      uc_greedy: '1f468-1f680',
      shortnames: [],
      category: 'people'
    },
    ':man_cook:': {
      uc_base: '1f468-1f373',
      uc_output: '1f468-200d-1f373',
      uc_match: '1f468-1f373',
      uc_greedy: '1f468-1f373',
      shortnames: [],
      category: 'people'
    },
    ':man_factory_worker:': {
      uc_base: '1f468-1f3ed',
      uc_output: '1f468-200d-1f3ed',
      uc_match: '1f468-1f3ed',
      uc_greedy: '1f468-1f3ed',
      shortnames: [],
      category: 'people'
    },
    ':man_farmer:': {
      uc_base: '1f468-1f33e',
      uc_output: '1f468-200d-1f33e',
      uc_match: '1f468-1f33e',
      uc_greedy: '1f468-1f33e',
      shortnames: [],
      category: 'people'
    },
    ':man_firefighter:': {
      uc_base: '1f468-1f692',
      uc_output: '1f468-200d-1f692',
      uc_match: '1f468-1f692',
      uc_greedy: '1f468-1f692',
      shortnames: [],
      category: 'people'
    },
    ':man_mechanic:': {
      uc_base: '1f468-1f527',
      uc_output: '1f468-200d-1f527',
      uc_match: '1f468-1f527',
      uc_greedy: '1f468-1f527',
      shortnames: [],
      category: 'people'
    },
    ':man_office_worker:': {
      uc_base: '1f468-1f4bc',
      uc_output: '1f468-200d-1f4bc',
      uc_match: '1f468-1f4bc',
      uc_greedy: '1f468-1f4bc',
      shortnames: [],
      category: 'people'
    },
    ':man_scientist:': {
      uc_base: '1f468-1f52c',
      uc_output: '1f468-200d-1f52c',
      uc_match: '1f468-1f52c',
      uc_greedy: '1f468-1f52c',
      shortnames: [],
      category: 'people'
    },
    ':man_singer:': {
      uc_base: '1f468-1f3a4',
      uc_output: '1f468-200d-1f3a4',
      uc_match: '1f468-1f3a4',
      uc_greedy: '1f468-1f3a4',
      shortnames: [],
      category: 'people'
    },
    ':man_student:': {
      uc_base: '1f468-1f393',
      uc_output: '1f468-200d-1f393',
      uc_match: '1f468-1f393',
      uc_greedy: '1f468-1f393',
      shortnames: [],
      category: 'people'
    },
    ':man_teacher:': {
      uc_base: '1f468-1f3eb',
      uc_output: '1f468-200d-1f3eb',
      uc_match: '1f468-1f3eb',
      uc_greedy: '1f468-1f3eb',
      shortnames: [],
      category: 'people'
    },
    ':man_technologist:': {
      uc_base: '1f468-1f4bb',
      uc_output: '1f468-200d-1f4bb',
      uc_match: '1f468-1f4bb',
      uc_greedy: '1f468-1f4bb',
      shortnames: [],
      category: 'people'
    },
    ':woman_artist:': {
      uc_base: '1f469-1f3a8',
      uc_output: '1f469-200d-1f3a8',
      uc_match: '1f469-1f3a8',
      uc_greedy: '1f469-1f3a8',
      shortnames: [],
      category: 'people'
    },
    ':woman_astronaut:': {
      uc_base: '1f469-1f680',
      uc_output: '1f469-200d-1f680',
      uc_match: '1f469-1f680',
      uc_greedy: '1f469-1f680',
      shortnames: [],
      category: 'people'
    },
    ':woman_cook:': {
      uc_base: '1f469-1f373',
      uc_output: '1f469-200d-1f373',
      uc_match: '1f469-1f373',
      uc_greedy: '1f469-1f373',
      shortnames: [],
      category: 'people'
    },
    ':woman_factory_worker:': {
      uc_base: '1f469-1f3ed',
      uc_output: '1f469-200d-1f3ed',
      uc_match: '1f469-1f3ed',
      uc_greedy: '1f469-1f3ed',
      shortnames: [],
      category: 'people'
    },
    ':woman_farmer:': {
      uc_base: '1f469-1f33e',
      uc_output: '1f469-200d-1f33e',
      uc_match: '1f469-1f33e',
      uc_greedy: '1f469-1f33e',
      shortnames: [],
      category: 'people'
    },
    ':woman_firefighter:': {
      uc_base: '1f469-1f692',
      uc_output: '1f469-200d-1f692',
      uc_match: '1f469-1f692',
      uc_greedy: '1f469-1f692',
      shortnames: [],
      category: 'people'
    },
    ':woman_mechanic:': {
      uc_base: '1f469-1f527',
      uc_output: '1f469-200d-1f527',
      uc_match: '1f469-1f527',
      uc_greedy: '1f469-1f527',
      shortnames: [],
      category: 'people'
    },
    ':woman_office_worker:': {
      uc_base: '1f469-1f4bc',
      uc_output: '1f469-200d-1f4bc',
      uc_match: '1f469-1f4bc',
      uc_greedy: '1f469-1f4bc',
      shortnames: [],
      category: 'people'
    },
    ':woman_scientist:': {
      uc_base: '1f469-1f52c',
      uc_output: '1f469-200d-1f52c',
      uc_match: '1f469-1f52c',
      uc_greedy: '1f469-1f52c',
      shortnames: [],
      category: 'people'
    },
    ':woman_singer:': {
      uc_base: '1f469-1f3a4',
      uc_output: '1f469-200d-1f3a4',
      uc_match: '1f469-1f3a4',
      uc_greedy: '1f469-1f3a4',
      shortnames: [],
      category: 'people'
    },
    ':woman_student:': {
      uc_base: '1f469-1f393',
      uc_output: '1f469-200d-1f393',
      uc_match: '1f469-1f393',
      uc_greedy: '1f469-1f393',
      shortnames: [],
      category: 'people'
    },
    ':woman_teacher:': {
      uc_base: '1f469-1f3eb',
      uc_output: '1f469-200d-1f3eb',
      uc_match: '1f469-1f3eb',
      uc_greedy: '1f469-1f3eb',
      shortnames: [],
      category: 'people'
    },
    ':woman_technologist:': {
      uc_base: '1f469-1f4bb',
      uc_output: '1f469-200d-1f4bb',
      uc_match: '1f469-1f4bb',
      uc_greedy: '1f469-1f4bb',
      shortnames: [],
      category: 'people'
    },
    ':asterisk:': {
      uc_base: '002a-20e3',
      uc_output: '002a-fe0f-20e3',
      uc_match: '002a-20e3',
      uc_greedy: '002a-20e3',
      shortnames: [':keycap_asterisk:'],
      category: 'symbols'
    },
    ':eight:': {
      uc_base: '0038-20e3',
      uc_output: '0038-fe0f-20e3',
      uc_match: '0038-20e3',
      uc_greedy: '0038-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':five:': {
      uc_base: '0035-20e3',
      uc_output: '0035-fe0f-20e3',
      uc_match: '0035-20e3',
      uc_greedy: '0035-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':four:': {
      uc_base: '0034-20e3',
      uc_output: '0034-fe0f-20e3',
      uc_match: '0034-20e3',
      uc_greedy: '0034-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':hash:': {
      uc_base: '0023-20e3',
      uc_output: '0023-fe0f-20e3',
      uc_match: '0023-20e3',
      uc_greedy: '0023-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':nine:': {
      uc_base: '0039-20e3',
      uc_output: '0039-fe0f-20e3',
      uc_match: '0039-20e3',
      uc_greedy: '0039-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':one:': {
      uc_base: '0031-20e3',
      uc_output: '0031-fe0f-20e3',
      uc_match: '0031-20e3',
      uc_greedy: '0031-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':seven:': {
      uc_base: '0037-20e3',
      uc_output: '0037-fe0f-20e3',
      uc_match: '0037-20e3',
      uc_greedy: '0037-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':six:': {
      uc_base: '0036-20e3',
      uc_output: '0036-fe0f-20e3',
      uc_match: '0036-20e3',
      uc_greedy: '0036-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':three:': {
      uc_base: '0033-20e3',
      uc_output: '0033-fe0f-20e3',
      uc_match: '0033-20e3',
      uc_greedy: '0033-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':two:': {
      uc_base: '0032-20e3',
      uc_output: '0032-fe0f-20e3',
      uc_match: '0032-20e3',
      uc_greedy: '0032-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':zero:': {
      uc_base: '0030-20e3',
      uc_output: '0030-fe0f-20e3',
      uc_match: '0030-20e3',
      uc_greedy: '0030-20e3',
      shortnames: [],
      category: 'symbols'
    },
    ':adult_tone1:': {
      uc_base: '1f9d1-1f3fb',
      uc_output: '1f9d1-1f3fb',
      uc_match: '1f9d1-1f3fb',
      uc_greedy: '1f9d1-1f3fb',
      shortnames: [':adult_light_skin_tone:'],
      category: 'people'
    },
    ':adult_tone2:': {
      uc_base: '1f9d1-1f3fc',
      uc_output: '1f9d1-1f3fc',
      uc_match: '1f9d1-1f3fc',
      uc_greedy: '1f9d1-1f3fc',
      shortnames: [':adult_medium_light_skin_tone:'],
      category: 'people'
    },
    ':adult_tone3:': {
      uc_base: '1f9d1-1f3fd',
      uc_output: '1f9d1-1f3fd',
      uc_match: '1f9d1-1f3fd',
      uc_greedy: '1f9d1-1f3fd',
      shortnames: [':adult_medium_skin_tone:'],
      category: 'people'
    },
    ':adult_tone4:': {
      uc_base: '1f9d1-1f3fe',
      uc_output: '1f9d1-1f3fe',
      uc_match: '1f9d1-1f3fe',
      uc_greedy: '1f9d1-1f3fe',
      shortnames: [':adult_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':adult_tone5:': {
      uc_base: '1f9d1-1f3ff',
      uc_output: '1f9d1-1f3ff',
      uc_match: '1f9d1-1f3ff',
      uc_greedy: '1f9d1-1f3ff',
      shortnames: [':adult_dark_skin_tone:'],
      category: 'people'
    },
    ':angel_tone1:': {
      uc_base: '1f47c-1f3fb',
      uc_output: '1f47c-1f3fb',
      uc_match: '1f47c-1f3fb',
      uc_greedy: '1f47c-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':angel_tone2:': {
      uc_base: '1f47c-1f3fc',
      uc_output: '1f47c-1f3fc',
      uc_match: '1f47c-1f3fc',
      uc_greedy: '1f47c-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':angel_tone3:': {
      uc_base: '1f47c-1f3fd',
      uc_output: '1f47c-1f3fd',
      uc_match: '1f47c-1f3fd',
      uc_greedy: '1f47c-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':angel_tone4:': {
      uc_base: '1f47c-1f3fe',
      uc_output: '1f47c-1f3fe',
      uc_match: '1f47c-1f3fe',
      uc_greedy: '1f47c-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':angel_tone5:': {
      uc_base: '1f47c-1f3ff',
      uc_output: '1f47c-1f3ff',
      uc_match: '1f47c-1f3ff',
      uc_greedy: '1f47c-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':baby_tone1:': {
      uc_base: '1f476-1f3fb',
      uc_output: '1f476-1f3fb',
      uc_match: '1f476-1f3fb',
      uc_greedy: '1f476-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':baby_tone2:': {
      uc_base: '1f476-1f3fc',
      uc_output: '1f476-1f3fc',
      uc_match: '1f476-1f3fc',
      uc_greedy: '1f476-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':baby_tone3:': {
      uc_base: '1f476-1f3fd',
      uc_output: '1f476-1f3fd',
      uc_match: '1f476-1f3fd',
      uc_greedy: '1f476-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':baby_tone4:': {
      uc_base: '1f476-1f3fe',
      uc_output: '1f476-1f3fe',
      uc_match: '1f476-1f3fe',
      uc_greedy: '1f476-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':baby_tone5:': {
      uc_base: '1f476-1f3ff',
      uc_output: '1f476-1f3ff',
      uc_match: '1f476-1f3ff',
      uc_greedy: '1f476-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':bath_tone1:': {
      uc_base: '1f6c0-1f3fb',
      uc_output: '1f6c0-1f3fb',
      uc_match: '1f6c0-1f3fb',
      uc_greedy: '1f6c0-1f3fb',
      shortnames: [],
      category: 'objects'
    },
    ':bath_tone2:': {
      uc_base: '1f6c0-1f3fc',
      uc_output: '1f6c0-1f3fc',
      uc_match: '1f6c0-1f3fc',
      uc_greedy: '1f6c0-1f3fc',
      shortnames: [],
      category: 'objects'
    },
    ':bath_tone3:': {
      uc_base: '1f6c0-1f3fd',
      uc_output: '1f6c0-1f3fd',
      uc_match: '1f6c0-1f3fd',
      uc_greedy: '1f6c0-1f3fd',
      shortnames: [],
      category: 'objects'
    },
    ':bath_tone4:': {
      uc_base: '1f6c0-1f3fe',
      uc_output: '1f6c0-1f3fe',
      uc_match: '1f6c0-1f3fe',
      uc_greedy: '1f6c0-1f3fe',
      shortnames: [],
      category: 'objects'
    },
    ':bath_tone5:': {
      uc_base: '1f6c0-1f3ff',
      uc_output: '1f6c0-1f3ff',
      uc_match: '1f6c0-1f3ff',
      uc_greedy: '1f6c0-1f3ff',
      shortnames: [],
      category: 'objects'
    },
    ':bearded_person_tone1:': {
      uc_base: '1f9d4-1f3fb',
      uc_output: '1f9d4-1f3fb',
      uc_match: '1f9d4-1f3fb',
      uc_greedy: '1f9d4-1f3fb',
      shortnames: [':bearded_person_light_skin_tone:'],
      category: 'people'
    },
    ':bearded_person_tone2:': {
      uc_base: '1f9d4-1f3fc',
      uc_output: '1f9d4-1f3fc',
      uc_match: '1f9d4-1f3fc',
      uc_greedy: '1f9d4-1f3fc',
      shortnames: [':bearded_person_medium_light_skin_tone:'],
      category: 'people'
    },
    ':bearded_person_tone3:': {
      uc_base: '1f9d4-1f3fd',
      uc_output: '1f9d4-1f3fd',
      uc_match: '1f9d4-1f3fd',
      uc_greedy: '1f9d4-1f3fd',
      shortnames: [':bearded_person_medium_skin_tone:'],
      category: 'people'
    },
    ':bearded_person_tone4:': {
      uc_base: '1f9d4-1f3fe',
      uc_output: '1f9d4-1f3fe',
      uc_match: '1f9d4-1f3fe',
      uc_greedy: '1f9d4-1f3fe',
      shortnames: [':bearded_person_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':bearded_person_tone5:': {
      uc_base: '1f9d4-1f3ff',
      uc_output: '1f9d4-1f3ff',
      uc_match: '1f9d4-1f3ff',
      uc_greedy: '1f9d4-1f3ff',
      shortnames: [':bearded_person_dark_skin_tone:'],
      category: 'people'
    },
    ':blond_haired_person_tone1:': {
      uc_base: '1f471-1f3fb',
      uc_output: '1f471-1f3fb',
      uc_match: '1f471-1f3fb',
      uc_greedy: '1f471-1f3fb',
      shortnames: [':person_with_blond_hair_tone1:'],
      category: 'people'
    },
    ':blond_haired_person_tone2:': {
      uc_base: '1f471-1f3fc',
      uc_output: '1f471-1f3fc',
      uc_match: '1f471-1f3fc',
      uc_greedy: '1f471-1f3fc',
      shortnames: [':person_with_blond_hair_tone2:'],
      category: 'people'
    },
    ':blond_haired_person_tone3:': {
      uc_base: '1f471-1f3fd',
      uc_output: '1f471-1f3fd',
      uc_match: '1f471-1f3fd',
      uc_greedy: '1f471-1f3fd',
      shortnames: [':person_with_blond_hair_tone3:'],
      category: 'people'
    },
    ':blond_haired_person_tone4:': {
      uc_base: '1f471-1f3fe',
      uc_output: '1f471-1f3fe',
      uc_match: '1f471-1f3fe',
      uc_greedy: '1f471-1f3fe',
      shortnames: [':person_with_blond_hair_tone4:'],
      category: 'people'
    },
    ':blond_haired_person_tone5:': {
      uc_base: '1f471-1f3ff',
      uc_output: '1f471-1f3ff',
      uc_match: '1f471-1f3ff',
      uc_greedy: '1f471-1f3ff',
      shortnames: [':person_with_blond_hair_tone5:'],
      category: 'people'
    },
    ':boy_tone1:': {
      uc_base: '1f466-1f3fb',
      uc_output: '1f466-1f3fb',
      uc_match: '1f466-1f3fb',
      uc_greedy: '1f466-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':boy_tone2:': {
      uc_base: '1f466-1f3fc',
      uc_output: '1f466-1f3fc',
      uc_match: '1f466-1f3fc',
      uc_greedy: '1f466-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':boy_tone3:': {
      uc_base: '1f466-1f3fd',
      uc_output: '1f466-1f3fd',
      uc_match: '1f466-1f3fd',
      uc_greedy: '1f466-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':boy_tone4:': {
      uc_base: '1f466-1f3fe',
      uc_output: '1f466-1f3fe',
      uc_match: '1f466-1f3fe',
      uc_greedy: '1f466-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':boy_tone5:': {
      uc_base: '1f466-1f3ff',
      uc_output: '1f466-1f3ff',
      uc_match: '1f466-1f3ff',
      uc_greedy: '1f466-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':breast_feeding_tone1:': {
      uc_base: '1f931-1f3fb',
      uc_output: '1f931-1f3fb',
      uc_match: '1f931-1f3fb',
      uc_greedy: '1f931-1f3fb',
      shortnames: [':breast_feeding_light_skin_tone:'],
      category: 'people'
    },
    ':breast_feeding_tone2:': {
      uc_base: '1f931-1f3fc',
      uc_output: '1f931-1f3fc',
      uc_match: '1f931-1f3fc',
      uc_greedy: '1f931-1f3fc',
      shortnames: [':breast_feeding_medium_light_skin_tone:'],
      category: 'people'
    },
    ':breast_feeding_tone3:': {
      uc_base: '1f931-1f3fd',
      uc_output: '1f931-1f3fd',
      uc_match: '1f931-1f3fd',
      uc_greedy: '1f931-1f3fd',
      shortnames: [':breast_feeding_medium_skin_tone:'],
      category: 'people'
    },
    ':breast_feeding_tone4:': {
      uc_base: '1f931-1f3fe',
      uc_output: '1f931-1f3fe',
      uc_match: '1f931-1f3fe',
      uc_greedy: '1f931-1f3fe',
      shortnames: [':breast_feeding_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':breast_feeding_tone5:': {
      uc_base: '1f931-1f3ff',
      uc_output: '1f931-1f3ff',
      uc_match: '1f931-1f3ff',
      uc_greedy: '1f931-1f3ff',
      shortnames: [':breast_feeding_dark_skin_tone:'],
      category: 'people'
    },
    ':bride_with_veil_tone1:': {
      uc_base: '1f470-1f3fb',
      uc_output: '1f470-1f3fb',
      uc_match: '1f470-1f3fb',
      uc_greedy: '1f470-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':bride_with_veil_tone2:': {
      uc_base: '1f470-1f3fc',
      uc_output: '1f470-1f3fc',
      uc_match: '1f470-1f3fc',
      uc_greedy: '1f470-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':bride_with_veil_tone3:': {
      uc_base: '1f470-1f3fd',
      uc_output: '1f470-1f3fd',
      uc_match: '1f470-1f3fd',
      uc_greedy: '1f470-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':bride_with_veil_tone4:': {
      uc_base: '1f470-1f3fe',
      uc_output: '1f470-1f3fe',
      uc_match: '1f470-1f3fe',
      uc_greedy: '1f470-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':bride_with_veil_tone5:': {
      uc_base: '1f470-1f3ff',
      uc_output: '1f470-1f3ff',
      uc_match: '1f470-1f3ff',
      uc_greedy: '1f470-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':call_me_tone1:': {
      uc_base: '1f919-1f3fb',
      uc_output: '1f919-1f3fb',
      uc_match: '1f919-1f3fb',
      uc_greedy: '1f919-1f3fb',
      shortnames: [':call_me_hand_tone1:'],
      category: 'people'
    },
    ':call_me_tone2:': {
      uc_base: '1f919-1f3fc',
      uc_output: '1f919-1f3fc',
      uc_match: '1f919-1f3fc',
      uc_greedy: '1f919-1f3fc',
      shortnames: [':call_me_hand_tone2:'],
      category: 'people'
    },
    ':call_me_tone3:': {
      uc_base: '1f919-1f3fd',
      uc_output: '1f919-1f3fd',
      uc_match: '1f919-1f3fd',
      uc_greedy: '1f919-1f3fd',
      shortnames: [':call_me_hand_tone3:'],
      category: 'people'
    },
    ':call_me_tone4:': {
      uc_base: '1f919-1f3fe',
      uc_output: '1f919-1f3fe',
      uc_match: '1f919-1f3fe',
      uc_greedy: '1f919-1f3fe',
      shortnames: [':call_me_hand_tone4:'],
      category: 'people'
    },
    ':call_me_tone5:': {
      uc_base: '1f919-1f3ff',
      uc_output: '1f919-1f3ff',
      uc_match: '1f919-1f3ff',
      uc_greedy: '1f919-1f3ff',
      shortnames: [':call_me_hand_tone5:'],
      category: 'people'
    },
    ':child_tone1:': {
      uc_base: '1f9d2-1f3fb',
      uc_output: '1f9d2-1f3fb',
      uc_match: '1f9d2-1f3fb',
      uc_greedy: '1f9d2-1f3fb',
      shortnames: [':child_light_skin_tone:'],
      category: 'people'
    },
    ':child_tone2:': {
      uc_base: '1f9d2-1f3fc',
      uc_output: '1f9d2-1f3fc',
      uc_match: '1f9d2-1f3fc',
      uc_greedy: '1f9d2-1f3fc',
      shortnames: [':child_medium_light_skin_tone:'],
      category: 'people'
    },
    ':child_tone3:': {
      uc_base: '1f9d2-1f3fd',
      uc_output: '1f9d2-1f3fd',
      uc_match: '1f9d2-1f3fd',
      uc_greedy: '1f9d2-1f3fd',
      shortnames: [':child_medium_skin_tone:'],
      category: 'people'
    },
    ':child_tone4:': {
      uc_base: '1f9d2-1f3fe',
      uc_output: '1f9d2-1f3fe',
      uc_match: '1f9d2-1f3fe',
      uc_greedy: '1f9d2-1f3fe',
      shortnames: [':child_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':child_tone5:': {
      uc_base: '1f9d2-1f3ff',
      uc_output: '1f9d2-1f3ff',
      uc_match: '1f9d2-1f3ff',
      uc_greedy: '1f9d2-1f3ff',
      shortnames: [':child_dark_skin_tone:'],
      category: 'people'
    },
    ':clap_tone1:': {
      uc_base: '1f44f-1f3fb',
      uc_output: '1f44f-1f3fb',
      uc_match: '1f44f-1f3fb',
      uc_greedy: '1f44f-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':clap_tone2:': {
      uc_base: '1f44f-1f3fc',
      uc_output: '1f44f-1f3fc',
      uc_match: '1f44f-1f3fc',
      uc_greedy: '1f44f-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':clap_tone3:': {
      uc_base: '1f44f-1f3fd',
      uc_output: '1f44f-1f3fd',
      uc_match: '1f44f-1f3fd',
      uc_greedy: '1f44f-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':clap_tone4:': {
      uc_base: '1f44f-1f3fe',
      uc_output: '1f44f-1f3fe',
      uc_match: '1f44f-1f3fe',
      uc_greedy: '1f44f-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':clap_tone5:': {
      uc_base: '1f44f-1f3ff',
      uc_output: '1f44f-1f3ff',
      uc_match: '1f44f-1f3ff',
      uc_greedy: '1f44f-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':construction_worker_tone1:': {
      uc_base: '1f477-1f3fb',
      uc_output: '1f477-1f3fb',
      uc_match: '1f477-1f3fb',
      uc_greedy: '1f477-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':construction_worker_tone2:': {
      uc_base: '1f477-1f3fc',
      uc_output: '1f477-1f3fc',
      uc_match: '1f477-1f3fc',
      uc_greedy: '1f477-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':construction_worker_tone3:': {
      uc_base: '1f477-1f3fd',
      uc_output: '1f477-1f3fd',
      uc_match: '1f477-1f3fd',
      uc_greedy: '1f477-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':construction_worker_tone4:': {
      uc_base: '1f477-1f3fe',
      uc_output: '1f477-1f3fe',
      uc_match: '1f477-1f3fe',
      uc_greedy: '1f477-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':construction_worker_tone5:': {
      uc_base: '1f477-1f3ff',
      uc_output: '1f477-1f3ff',
      uc_match: '1f477-1f3ff',
      uc_greedy: '1f477-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':dancer_tone1:': {
      uc_base: '1f483-1f3fb',
      uc_output: '1f483-1f3fb',
      uc_match: '1f483-1f3fb',
      uc_greedy: '1f483-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':dancer_tone2:': {
      uc_base: '1f483-1f3fc',
      uc_output: '1f483-1f3fc',
      uc_match: '1f483-1f3fc',
      uc_greedy: '1f483-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':dancer_tone3:': {
      uc_base: '1f483-1f3fd',
      uc_output: '1f483-1f3fd',
      uc_match: '1f483-1f3fd',
      uc_greedy: '1f483-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':dancer_tone4:': {
      uc_base: '1f483-1f3fe',
      uc_output: '1f483-1f3fe',
      uc_match: '1f483-1f3fe',
      uc_greedy: '1f483-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':dancer_tone5:': {
      uc_base: '1f483-1f3ff',
      uc_output: '1f483-1f3ff',
      uc_match: '1f483-1f3ff',
      uc_greedy: '1f483-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':detective_tone1:': {
      uc_base: '1f575-1f3fb',
      uc_output: '1f575-1f3fb',
      uc_match: '1f575-fe0f-1f3fb',
      uc_greedy: '1f575-fe0f-1f3fb',
      shortnames: [':spy_tone1:', ':sleuth_or_spy_tone1:'],
      category: 'people'
    },
    ':detective_tone2:': {
      uc_base: '1f575-1f3fc',
      uc_output: '1f575-1f3fc',
      uc_match: '1f575-fe0f-1f3fc',
      uc_greedy: '1f575-fe0f-1f3fc',
      shortnames: [':spy_tone2:', ':sleuth_or_spy_tone2:'],
      category: 'people'
    },
    ':detective_tone3:': {
      uc_base: '1f575-1f3fd',
      uc_output: '1f575-1f3fd',
      uc_match: '1f575-fe0f-1f3fd',
      uc_greedy: '1f575-fe0f-1f3fd',
      shortnames: [':spy_tone3:', ':sleuth_or_spy_tone3:'],
      category: 'people'
    },
    ':detective_tone4:': {
      uc_base: '1f575-1f3fe',
      uc_output: '1f575-1f3fe',
      uc_match: '1f575-fe0f-1f3fe',
      uc_greedy: '1f575-fe0f-1f3fe',
      shortnames: [':spy_tone4:', ':sleuth_or_spy_tone4:'],
      category: 'people'
    },
    ':detective_tone5:': {
      uc_base: '1f575-1f3ff',
      uc_output: '1f575-1f3ff',
      uc_match: '1f575-fe0f-1f3ff',
      uc_greedy: '1f575-fe0f-1f3ff',
      shortnames: [':spy_tone5:', ':sleuth_or_spy_tone5:'],
      category: 'people'
    },
    ':ear_tone1:': {
      uc_base: '1f442-1f3fb',
      uc_output: '1f442-1f3fb',
      uc_match: '1f442-1f3fb',
      uc_greedy: '1f442-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':ear_tone2:': {
      uc_base: '1f442-1f3fc',
      uc_output: '1f442-1f3fc',
      uc_match: '1f442-1f3fc',
      uc_greedy: '1f442-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':ear_tone3:': {
      uc_base: '1f442-1f3fd',
      uc_output: '1f442-1f3fd',
      uc_match: '1f442-1f3fd',
      uc_greedy: '1f442-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':ear_tone4:': {
      uc_base: '1f442-1f3fe',
      uc_output: '1f442-1f3fe',
      uc_match: '1f442-1f3fe',
      uc_greedy: '1f442-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':ear_tone5:': {
      uc_base: '1f442-1f3ff',
      uc_output: '1f442-1f3ff',
      uc_match: '1f442-1f3ff',
      uc_greedy: '1f442-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':elf_tone1:': {
      uc_base: '1f9dd-1f3fb',
      uc_output: '1f9dd-1f3fb',
      uc_match: '1f9dd-1f3fb',
      uc_greedy: '1f9dd-1f3fb',
      shortnames: [':elf_light_skin_tone:'],
      category: 'people'
    },
    ':elf_tone2:': {
      uc_base: '1f9dd-1f3fc',
      uc_output: '1f9dd-1f3fc',
      uc_match: '1f9dd-1f3fc',
      uc_greedy: '1f9dd-1f3fc',
      shortnames: [':elf_medium_light_skin_tone:'],
      category: 'people'
    },
    ':elf_tone3:': {
      uc_base: '1f9dd-1f3fd',
      uc_output: '1f9dd-1f3fd',
      uc_match: '1f9dd-1f3fd',
      uc_greedy: '1f9dd-1f3fd',
      shortnames: [':elf_medium_skin_tone:'],
      category: 'people'
    },
    ':elf_tone4:': {
      uc_base: '1f9dd-1f3fe',
      uc_output: '1f9dd-1f3fe',
      uc_match: '1f9dd-1f3fe',
      uc_greedy: '1f9dd-1f3fe',
      shortnames: [':elf_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':elf_tone5:': {
      uc_base: '1f9dd-1f3ff',
      uc_output: '1f9dd-1f3ff',
      uc_match: '1f9dd-1f3ff',
      uc_greedy: '1f9dd-1f3ff',
      shortnames: [':elf_dark_skin_tone:'],
      category: 'people'
    },
    ':fairy_tone1:': {
      uc_base: '1f9da-1f3fb',
      uc_output: '1f9da-1f3fb',
      uc_match: '1f9da-1f3fb',
      uc_greedy: '1f9da-1f3fb',
      shortnames: [':fairy_light_skin_tone:'],
      category: 'people'
    },
    ':fairy_tone2:': {
      uc_base: '1f9da-1f3fc',
      uc_output: '1f9da-1f3fc',
      uc_match: '1f9da-1f3fc',
      uc_greedy: '1f9da-1f3fc',
      shortnames: [':fairy_medium_light_skin_tone:'],
      category: 'people'
    },
    ':fairy_tone3:': {
      uc_base: '1f9da-1f3fd',
      uc_output: '1f9da-1f3fd',
      uc_match: '1f9da-1f3fd',
      uc_greedy: '1f9da-1f3fd',
      shortnames: [':fairy_medium_skin_tone:'],
      category: 'people'
    },
    ':fairy_tone4:': {
      uc_base: '1f9da-1f3fe',
      uc_output: '1f9da-1f3fe',
      uc_match: '1f9da-1f3fe',
      uc_greedy: '1f9da-1f3fe',
      shortnames: [':fairy_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':fairy_tone5:': {
      uc_base: '1f9da-1f3ff',
      uc_output: '1f9da-1f3ff',
      uc_match: '1f9da-1f3ff',
      uc_greedy: '1f9da-1f3ff',
      shortnames: [':fairy_dark_skin_tone:'],
      category: 'people'
    },
    ':fingers_crossed_tone1:': {
      uc_base: '1f91e-1f3fb',
      uc_output: '1f91e-1f3fb',
      uc_match: '1f91e-1f3fb',
      uc_greedy: '1f91e-1f3fb',
      shortnames: [':hand_with_index_and_middle_fingers_crossed_tone1:'],
      category: 'people'
    },
    ':fingers_crossed_tone2:': {
      uc_base: '1f91e-1f3fc',
      uc_output: '1f91e-1f3fc',
      uc_match: '1f91e-1f3fc',
      uc_greedy: '1f91e-1f3fc',
      shortnames: [':hand_with_index_and_middle_fingers_crossed_tone2:'],
      category: 'people'
    },
    ':fingers_crossed_tone3:': {
      uc_base: '1f91e-1f3fd',
      uc_output: '1f91e-1f3fd',
      uc_match: '1f91e-1f3fd',
      uc_greedy: '1f91e-1f3fd',
      shortnames: [':hand_with_index_and_middle_fingers_crossed_tone3:'],
      category: 'people'
    },
    ':fingers_crossed_tone4:': {
      uc_base: '1f91e-1f3fe',
      uc_output: '1f91e-1f3fe',
      uc_match: '1f91e-1f3fe',
      uc_greedy: '1f91e-1f3fe',
      shortnames: [':hand_with_index_and_middle_fingers_crossed_tone4:'],
      category: 'people'
    },
    ':fingers_crossed_tone5:': {
      uc_base: '1f91e-1f3ff',
      uc_output: '1f91e-1f3ff',
      uc_match: '1f91e-1f3ff',
      uc_greedy: '1f91e-1f3ff',
      shortnames: [':hand_with_index_and_middle_fingers_crossed_tone5:'],
      category: 'people'
    },
    ':flag_ac:': {
      uc_base: '1f1e6-1f1e8',
      uc_output: '1f1e6-1f1e8',
      uc_match: '1f1e6-1f1e8',
      uc_greedy: '1f1e6-1f1e8',
      shortnames: [':ac:'],
      category: 'flags'
    },
    ':flag_ad:': {
      uc_base: '1f1e6-1f1e9',
      uc_output: '1f1e6-1f1e9',
      uc_match: '1f1e6-1f1e9',
      uc_greedy: '1f1e6-1f1e9',
      shortnames: [':ad:'],
      category: 'flags'
    },
    ':flag_ae:': {
      uc_base: '1f1e6-1f1ea',
      uc_output: '1f1e6-1f1ea',
      uc_match: '1f1e6-1f1ea',
      uc_greedy: '1f1e6-1f1ea',
      shortnames: [':ae:'],
      category: 'flags'
    },
    ':flag_af:': {
      uc_base: '1f1e6-1f1eb',
      uc_output: '1f1e6-1f1eb',
      uc_match: '1f1e6-1f1eb',
      uc_greedy: '1f1e6-1f1eb',
      shortnames: [':af:'],
      category: 'flags'
    },
    ':flag_ag:': {
      uc_base: '1f1e6-1f1ec',
      uc_output: '1f1e6-1f1ec',
      uc_match: '1f1e6-1f1ec',
      uc_greedy: '1f1e6-1f1ec',
      shortnames: [':ag:'],
      category: 'flags'
    },
    ':flag_ai:': {
      uc_base: '1f1e6-1f1ee',
      uc_output: '1f1e6-1f1ee',
      uc_match: '1f1e6-1f1ee',
      uc_greedy: '1f1e6-1f1ee',
      shortnames: [':ai:'],
      category: 'flags'
    },
    ':flag_al:': {
      uc_base: '1f1e6-1f1f1',
      uc_output: '1f1e6-1f1f1',
      uc_match: '1f1e6-1f1f1',
      uc_greedy: '1f1e6-1f1f1',
      shortnames: [':al:'],
      category: 'flags'
    },
    ':flag_am:': {
      uc_base: '1f1e6-1f1f2',
      uc_output: '1f1e6-1f1f2',
      uc_match: '1f1e6-1f1f2',
      uc_greedy: '1f1e6-1f1f2',
      shortnames: [':am:'],
      category: 'flags'
    },
    ':flag_ao:': {
      uc_base: '1f1e6-1f1f4',
      uc_output: '1f1e6-1f1f4',
      uc_match: '1f1e6-1f1f4',
      uc_greedy: '1f1e6-1f1f4',
      shortnames: [':ao:'],
      category: 'flags'
    },
    ':flag_aq:': {
      uc_base: '1f1e6-1f1f6',
      uc_output: '1f1e6-1f1f6',
      uc_match: '1f1e6-1f1f6',
      uc_greedy: '1f1e6-1f1f6',
      shortnames: [':aq:'],
      category: 'flags'
    },
    ':flag_ar:': {
      uc_base: '1f1e6-1f1f7',
      uc_output: '1f1e6-1f1f7',
      uc_match: '1f1e6-1f1f7',
      uc_greedy: '1f1e6-1f1f7',
      shortnames: [':ar:'],
      category: 'flags'
    },
    ':flag_as:': {
      uc_base: '1f1e6-1f1f8',
      uc_output: '1f1e6-1f1f8',
      uc_match: '1f1e6-1f1f8',
      uc_greedy: '1f1e6-1f1f8',
      shortnames: [':as:'],
      category: 'flags'
    },
    ':flag_at:': {
      uc_base: '1f1e6-1f1f9',
      uc_output: '1f1e6-1f1f9',
      uc_match: '1f1e6-1f1f9',
      uc_greedy: '1f1e6-1f1f9',
      shortnames: [':at:'],
      category: 'flags'
    },
    ':flag_au:': {
      uc_base: '1f1e6-1f1fa',
      uc_output: '1f1e6-1f1fa',
      uc_match: '1f1e6-1f1fa',
      uc_greedy: '1f1e6-1f1fa',
      shortnames: [':au:'],
      category: 'flags'
    },
    ':flag_aw:': {
      uc_base: '1f1e6-1f1fc',
      uc_output: '1f1e6-1f1fc',
      uc_match: '1f1e6-1f1fc',
      uc_greedy: '1f1e6-1f1fc',
      shortnames: [':aw:'],
      category: 'flags'
    },
    ':flag_ax:': {
      uc_base: '1f1e6-1f1fd',
      uc_output: '1f1e6-1f1fd',
      uc_match: '1f1e6-1f1fd',
      uc_greedy: '1f1e6-1f1fd',
      shortnames: [':ax:'],
      category: 'flags'
    },
    ':flag_az:': {
      uc_base: '1f1e6-1f1ff',
      uc_output: '1f1e6-1f1ff',
      uc_match: '1f1e6-1f1ff',
      uc_greedy: '1f1e6-1f1ff',
      shortnames: [':az:'],
      category: 'flags'
    },
    ':flag_ba:': {
      uc_base: '1f1e7-1f1e6',
      uc_output: '1f1e7-1f1e6',
      uc_match: '1f1e7-1f1e6',
      uc_greedy: '1f1e7-1f1e6',
      shortnames: [':ba:'],
      category: 'flags'
    },
    ':flag_bb:': {
      uc_base: '1f1e7-1f1e7',
      uc_output: '1f1e7-1f1e7',
      uc_match: '1f1e7-1f1e7',
      uc_greedy: '1f1e7-1f1e7',
      shortnames: [':bb:'],
      category: 'flags'
    },
    ':flag_bd:': {
      uc_base: '1f1e7-1f1e9',
      uc_output: '1f1e7-1f1e9',
      uc_match: '1f1e7-1f1e9',
      uc_greedy: '1f1e7-1f1e9',
      shortnames: [':bd:'],
      category: 'flags'
    },
    ':flag_be:': {
      uc_base: '1f1e7-1f1ea',
      uc_output: '1f1e7-1f1ea',
      uc_match: '1f1e7-1f1ea',
      uc_greedy: '1f1e7-1f1ea',
      shortnames: [':be:'],
      category: 'flags'
    },
    ':flag_bf:': {
      uc_base: '1f1e7-1f1eb',
      uc_output: '1f1e7-1f1eb',
      uc_match: '1f1e7-1f1eb',
      uc_greedy: '1f1e7-1f1eb',
      shortnames: [':bf:'],
      category: 'flags'
    },
    ':flag_bg:': {
      uc_base: '1f1e7-1f1ec',
      uc_output: '1f1e7-1f1ec',
      uc_match: '1f1e7-1f1ec',
      uc_greedy: '1f1e7-1f1ec',
      shortnames: [':bg:'],
      category: 'flags'
    },
    ':flag_bh:': {
      uc_base: '1f1e7-1f1ed',
      uc_output: '1f1e7-1f1ed',
      uc_match: '1f1e7-1f1ed',
      uc_greedy: '1f1e7-1f1ed',
      shortnames: [':bh:'],
      category: 'flags'
    },
    ':flag_bi:': {
      uc_base: '1f1e7-1f1ee',
      uc_output: '1f1e7-1f1ee',
      uc_match: '1f1e7-1f1ee',
      uc_greedy: '1f1e7-1f1ee',
      shortnames: [':bi:'],
      category: 'flags'
    },
    ':flag_bj:': {
      uc_base: '1f1e7-1f1ef',
      uc_output: '1f1e7-1f1ef',
      uc_match: '1f1e7-1f1ef',
      uc_greedy: '1f1e7-1f1ef',
      shortnames: [':bj:'],
      category: 'flags'
    },
    ':flag_bl:': {
      uc_base: '1f1e7-1f1f1',
      uc_output: '1f1e7-1f1f1',
      uc_match: '1f1e7-1f1f1',
      uc_greedy: '1f1e7-1f1f1',
      shortnames: [':bl:'],
      category: 'flags'
    },
    ':flag_bm:': {
      uc_base: '1f1e7-1f1f2',
      uc_output: '1f1e7-1f1f2',
      uc_match: '1f1e7-1f1f2',
      uc_greedy: '1f1e7-1f1f2',
      shortnames: [':bm:'],
      category: 'flags'
    },
    ':flag_bn:': {
      uc_base: '1f1e7-1f1f3',
      uc_output: '1f1e7-1f1f3',
      uc_match: '1f1e7-1f1f3',
      uc_greedy: '1f1e7-1f1f3',
      shortnames: [':bn:'],
      category: 'flags'
    },
    ':flag_bo:': {
      uc_base: '1f1e7-1f1f4',
      uc_output: '1f1e7-1f1f4',
      uc_match: '1f1e7-1f1f4',
      uc_greedy: '1f1e7-1f1f4',
      shortnames: [':bo:'],
      category: 'flags'
    },
    ':flag_bq:': {
      uc_base: '1f1e7-1f1f6',
      uc_output: '1f1e7-1f1f6',
      uc_match: '1f1e7-1f1f6',
      uc_greedy: '1f1e7-1f1f6',
      shortnames: [':bq:'],
      category: 'flags'
    },
    ':flag_br:': {
      uc_base: '1f1e7-1f1f7',
      uc_output: '1f1e7-1f1f7',
      uc_match: '1f1e7-1f1f7',
      uc_greedy: '1f1e7-1f1f7',
      shortnames: [':br:'],
      category: 'flags'
    },
    ':flag_bs:': {
      uc_base: '1f1e7-1f1f8',
      uc_output: '1f1e7-1f1f8',
      uc_match: '1f1e7-1f1f8',
      uc_greedy: '1f1e7-1f1f8',
      shortnames: [':bs:'],
      category: 'flags'
    },
    ':flag_bt:': {
      uc_base: '1f1e7-1f1f9',
      uc_output: '1f1e7-1f1f9',
      uc_match: '1f1e7-1f1f9',
      uc_greedy: '1f1e7-1f1f9',
      shortnames: [':bt:'],
      category: 'flags'
    },
    ':flag_bv:': {
      uc_base: '1f1e7-1f1fb',
      uc_output: '1f1e7-1f1fb',
      uc_match: '1f1e7-1f1fb',
      uc_greedy: '1f1e7-1f1fb',
      shortnames: [':bv:'],
      category: 'flags'
    },
    ':flag_bw:': {
      uc_base: '1f1e7-1f1fc',
      uc_output: '1f1e7-1f1fc',
      uc_match: '1f1e7-1f1fc',
      uc_greedy: '1f1e7-1f1fc',
      shortnames: [':bw:'],
      category: 'flags'
    },
    ':flag_by:': {
      uc_base: '1f1e7-1f1fe',
      uc_output: '1f1e7-1f1fe',
      uc_match: '1f1e7-1f1fe',
      uc_greedy: '1f1e7-1f1fe',
      shortnames: [':by:'],
      category: 'flags'
    },
    ':flag_bz:': {
      uc_base: '1f1e7-1f1ff',
      uc_output: '1f1e7-1f1ff',
      uc_match: '1f1e7-1f1ff',
      uc_greedy: '1f1e7-1f1ff',
      shortnames: [':bz:'],
      category: 'flags'
    },
    ':flag_ca:': {
      uc_base: '1f1e8-1f1e6',
      uc_output: '1f1e8-1f1e6',
      uc_match: '1f1e8-1f1e6',
      uc_greedy: '1f1e8-1f1e6',
      shortnames: [':ca:'],
      category: 'flags'
    },
    ':flag_cc:': {
      uc_base: '1f1e8-1f1e8',
      uc_output: '1f1e8-1f1e8',
      uc_match: '1f1e8-1f1e8',
      uc_greedy: '1f1e8-1f1e8',
      shortnames: [':cc:'],
      category: 'flags'
    },
    ':flag_cd:': {
      uc_base: '1f1e8-1f1e9',
      uc_output: '1f1e8-1f1e9',
      uc_match: '1f1e8-1f1e9',
      uc_greedy: '1f1e8-1f1e9',
      shortnames: [':congo:'],
      category: 'flags'
    },
    ':flag_cf:': {
      uc_base: '1f1e8-1f1eb',
      uc_output: '1f1e8-1f1eb',
      uc_match: '1f1e8-1f1eb',
      uc_greedy: '1f1e8-1f1eb',
      shortnames: [':cf:'],
      category: 'flags'
    },
    ':flag_cg:': {
      uc_base: '1f1e8-1f1ec',
      uc_output: '1f1e8-1f1ec',
      uc_match: '1f1e8-1f1ec',
      uc_greedy: '1f1e8-1f1ec',
      shortnames: [':cg:'],
      category: 'flags'
    },
    ':flag_ch:': {
      uc_base: '1f1e8-1f1ed',
      uc_output: '1f1e8-1f1ed',
      uc_match: '1f1e8-1f1ed',
      uc_greedy: '1f1e8-1f1ed',
      shortnames: [':ch:'],
      category: 'flags'
    },
    ':flag_ci:': {
      uc_base: '1f1e8-1f1ee',
      uc_output: '1f1e8-1f1ee',
      uc_match: '1f1e8-1f1ee',
      uc_greedy: '1f1e8-1f1ee',
      shortnames: [':ci:'],
      category: 'flags'
    },
    ':flag_ck:': {
      uc_base: '1f1e8-1f1f0',
      uc_output: '1f1e8-1f1f0',
      uc_match: '1f1e8-1f1f0',
      uc_greedy: '1f1e8-1f1f0',
      shortnames: [':ck:'],
      category: 'flags'
    },
    ':flag_cl:': {
      uc_base: '1f1e8-1f1f1',
      uc_output: '1f1e8-1f1f1',
      uc_match: '1f1e8-1f1f1',
      uc_greedy: '1f1e8-1f1f1',
      shortnames: [':chile:'],
      category: 'flags'
    },
    ':flag_cm:': {
      uc_base: '1f1e8-1f1f2',
      uc_output: '1f1e8-1f1f2',
      uc_match: '1f1e8-1f1f2',
      uc_greedy: '1f1e8-1f1f2',
      shortnames: [':cm:'],
      category: 'flags'
    },
    ':flag_cn:': {
      uc_base: '1f1e8-1f1f3',
      uc_output: '1f1e8-1f1f3',
      uc_match: '1f1e8-1f1f3',
      uc_greedy: '1f1e8-1f1f3',
      shortnames: [':cn:'],
      category: 'flags'
    },
    ':flag_co:': {
      uc_base: '1f1e8-1f1f4',
      uc_output: '1f1e8-1f1f4',
      uc_match: '1f1e8-1f1f4',
      uc_greedy: '1f1e8-1f1f4',
      shortnames: [':co:'],
      category: 'flags'
    },
    ':flag_cp:': {
      uc_base: '1f1e8-1f1f5',
      uc_output: '1f1e8-1f1f5',
      uc_match: '1f1e8-1f1f5',
      uc_greedy: '1f1e8-1f1f5',
      shortnames: [':cp:'],
      category: 'flags'
    },
    ':flag_cr:': {
      uc_base: '1f1e8-1f1f7',
      uc_output: '1f1e8-1f1f7',
      uc_match: '1f1e8-1f1f7',
      uc_greedy: '1f1e8-1f1f7',
      shortnames: [':cr:'],
      category: 'flags'
    },
    ':flag_cu:': {
      uc_base: '1f1e8-1f1fa',
      uc_output: '1f1e8-1f1fa',
      uc_match: '1f1e8-1f1fa',
      uc_greedy: '1f1e8-1f1fa',
      shortnames: [':cu:'],
      category: 'flags'
    },
    ':flag_cv:': {
      uc_base: '1f1e8-1f1fb',
      uc_output: '1f1e8-1f1fb',
      uc_match: '1f1e8-1f1fb',
      uc_greedy: '1f1e8-1f1fb',
      shortnames: [':cv:'],
      category: 'flags'
    },
    ':flag_cw:': {
      uc_base: '1f1e8-1f1fc',
      uc_output: '1f1e8-1f1fc',
      uc_match: '1f1e8-1f1fc',
      uc_greedy: '1f1e8-1f1fc',
      shortnames: [':cw:'],
      category: 'flags'
    },
    ':flag_cx:': {
      uc_base: '1f1e8-1f1fd',
      uc_output: '1f1e8-1f1fd',
      uc_match: '1f1e8-1f1fd',
      uc_greedy: '1f1e8-1f1fd',
      shortnames: [':cx:'],
      category: 'flags'
    },
    ':flag_cy:': {
      uc_base: '1f1e8-1f1fe',
      uc_output: '1f1e8-1f1fe',
      uc_match: '1f1e8-1f1fe',
      uc_greedy: '1f1e8-1f1fe',
      shortnames: [':cy:'],
      category: 'flags'
    },
    ':flag_cz:': {
      uc_base: '1f1e8-1f1ff',
      uc_output: '1f1e8-1f1ff',
      uc_match: '1f1e8-1f1ff',
      uc_greedy: '1f1e8-1f1ff',
      shortnames: [':cz:'],
      category: 'flags'
    },
    ':flag_de:': {
      uc_base: '1f1e9-1f1ea',
      uc_output: '1f1e9-1f1ea',
      uc_match: '1f1e9-1f1ea',
      uc_greedy: '1f1e9-1f1ea',
      shortnames: [':de:'],
      category: 'flags'
    },
    ':flag_dg:': {
      uc_base: '1f1e9-1f1ec',
      uc_output: '1f1e9-1f1ec',
      uc_match: '1f1e9-1f1ec',
      uc_greedy: '1f1e9-1f1ec',
      shortnames: [':dg:'],
      category: 'flags'
    },
    ':flag_dj:': {
      uc_base: '1f1e9-1f1ef',
      uc_output: '1f1e9-1f1ef',
      uc_match: '1f1e9-1f1ef',
      uc_greedy: '1f1e9-1f1ef',
      shortnames: [':dj:'],
      category: 'flags'
    },
    ':flag_dk:': {
      uc_base: '1f1e9-1f1f0',
      uc_output: '1f1e9-1f1f0',
      uc_match: '1f1e9-1f1f0',
      uc_greedy: '1f1e9-1f1f0',
      shortnames: [':dk:'],
      category: 'flags'
    },
    ':flag_dm:': {
      uc_base: '1f1e9-1f1f2',
      uc_output: '1f1e9-1f1f2',
      uc_match: '1f1e9-1f1f2',
      uc_greedy: '1f1e9-1f1f2',
      shortnames: [':dm:'],
      category: 'flags'
    },
    ':flag_do:': {
      uc_base: '1f1e9-1f1f4',
      uc_output: '1f1e9-1f1f4',
      uc_match: '1f1e9-1f1f4',
      uc_greedy: '1f1e9-1f1f4',
      shortnames: [':do:'],
      category: 'flags'
    },
    ':flag_dz:': {
      uc_base: '1f1e9-1f1ff',
      uc_output: '1f1e9-1f1ff',
      uc_match: '1f1e9-1f1ff',
      uc_greedy: '1f1e9-1f1ff',
      shortnames: [':dz:'],
      category: 'flags'
    },
    ':flag_ea:': {
      uc_base: '1f1ea-1f1e6',
      uc_output: '1f1ea-1f1e6',
      uc_match: '1f1ea-1f1e6',
      uc_greedy: '1f1ea-1f1e6',
      shortnames: [':ea:'],
      category: 'flags'
    },
    ':flag_ec:': {
      uc_base: '1f1ea-1f1e8',
      uc_output: '1f1ea-1f1e8',
      uc_match: '1f1ea-1f1e8',
      uc_greedy: '1f1ea-1f1e8',
      shortnames: [':ec:'],
      category: 'flags'
    },
    ':flag_ee:': {
      uc_base: '1f1ea-1f1ea',
      uc_output: '1f1ea-1f1ea',
      uc_match: '1f1ea-1f1ea',
      uc_greedy: '1f1ea-1f1ea',
      shortnames: [':ee:'],
      category: 'flags'
    },
    ':flag_eg:': {
      uc_base: '1f1ea-1f1ec',
      uc_output: '1f1ea-1f1ec',
      uc_match: '1f1ea-1f1ec',
      uc_greedy: '1f1ea-1f1ec',
      shortnames: [':eg:'],
      category: 'flags'
    },
    ':flag_eh:': {
      uc_base: '1f1ea-1f1ed',
      uc_output: '1f1ea-1f1ed',
      uc_match: '1f1ea-1f1ed',
      uc_greedy: '1f1ea-1f1ed',
      shortnames: [':eh:'],
      category: 'flags'
    },
    ':flag_er:': {
      uc_base: '1f1ea-1f1f7',
      uc_output: '1f1ea-1f1f7',
      uc_match: '1f1ea-1f1f7',
      uc_greedy: '1f1ea-1f1f7',
      shortnames: [':er:'],
      category: 'flags'
    },
    ':flag_es:': {
      uc_base: '1f1ea-1f1f8',
      uc_output: '1f1ea-1f1f8',
      uc_match: '1f1ea-1f1f8',
      uc_greedy: '1f1ea-1f1f8',
      shortnames: [':es:'],
      category: 'flags'
    },
    ':flag_et:': {
      uc_base: '1f1ea-1f1f9',
      uc_output: '1f1ea-1f1f9',
      uc_match: '1f1ea-1f1f9',
      uc_greedy: '1f1ea-1f1f9',
      shortnames: [':et:'],
      category: 'flags'
    },
    ':flag_eu:': {
      uc_base: '1f1ea-1f1fa',
      uc_output: '1f1ea-1f1fa',
      uc_match: '1f1ea-1f1fa',
      uc_greedy: '1f1ea-1f1fa',
      shortnames: [':eu:'],
      category: 'flags'
    },
    ':flag_fi:': {
      uc_base: '1f1eb-1f1ee',
      uc_output: '1f1eb-1f1ee',
      uc_match: '1f1eb-1f1ee',
      uc_greedy: '1f1eb-1f1ee',
      shortnames: [':fi:'],
      category: 'flags'
    },
    ':flag_fj:': {
      uc_base: '1f1eb-1f1ef',
      uc_output: '1f1eb-1f1ef',
      uc_match: '1f1eb-1f1ef',
      uc_greedy: '1f1eb-1f1ef',
      shortnames: [':fj:'],
      category: 'flags'
    },
    ':flag_fk:': {
      uc_base: '1f1eb-1f1f0',
      uc_output: '1f1eb-1f1f0',
      uc_match: '1f1eb-1f1f0',
      uc_greedy: '1f1eb-1f1f0',
      shortnames: [':fk:'],
      category: 'flags'
    },
    ':flag_fm:': {
      uc_base: '1f1eb-1f1f2',
      uc_output: '1f1eb-1f1f2',
      uc_match: '1f1eb-1f1f2',
      uc_greedy: '1f1eb-1f1f2',
      shortnames: [':fm:'],
      category: 'flags'
    },
    ':flag_fo:': {
      uc_base: '1f1eb-1f1f4',
      uc_output: '1f1eb-1f1f4',
      uc_match: '1f1eb-1f1f4',
      uc_greedy: '1f1eb-1f1f4',
      shortnames: [':fo:'],
      category: 'flags'
    },
    ':flag_fr:': {
      uc_base: '1f1eb-1f1f7',
      uc_output: '1f1eb-1f1f7',
      uc_match: '1f1eb-1f1f7',
      uc_greedy: '1f1eb-1f1f7',
      shortnames: [':fr:'],
      category: 'flags'
    },
    ':flag_ga:': {
      uc_base: '1f1ec-1f1e6',
      uc_output: '1f1ec-1f1e6',
      uc_match: '1f1ec-1f1e6',
      uc_greedy: '1f1ec-1f1e6',
      shortnames: [':ga:'],
      category: 'flags'
    },
    ':flag_gb:': {
      uc_base: '1f1ec-1f1e7',
      uc_output: '1f1ec-1f1e7',
      uc_match: '1f1ec-1f1e7',
      uc_greedy: '1f1ec-1f1e7',
      shortnames: [':gb:'],
      category: 'flags'
    },
    ':flag_gd:': {
      uc_base: '1f1ec-1f1e9',
      uc_output: '1f1ec-1f1e9',
      uc_match: '1f1ec-1f1e9',
      uc_greedy: '1f1ec-1f1e9',
      shortnames: [':gd:'],
      category: 'flags'
    },
    ':flag_ge:': {
      uc_base: '1f1ec-1f1ea',
      uc_output: '1f1ec-1f1ea',
      uc_match: '1f1ec-1f1ea',
      uc_greedy: '1f1ec-1f1ea',
      shortnames: [':ge:'],
      category: 'flags'
    },
    ':flag_gf:': {
      uc_base: '1f1ec-1f1eb',
      uc_output: '1f1ec-1f1eb',
      uc_match: '1f1ec-1f1eb',
      uc_greedy: '1f1ec-1f1eb',
      shortnames: [':gf:'],
      category: 'flags'
    },
    ':flag_gg:': {
      uc_base: '1f1ec-1f1ec',
      uc_output: '1f1ec-1f1ec',
      uc_match: '1f1ec-1f1ec',
      uc_greedy: '1f1ec-1f1ec',
      shortnames: [':gg:'],
      category: 'flags'
    },
    ':flag_gh:': {
      uc_base: '1f1ec-1f1ed',
      uc_output: '1f1ec-1f1ed',
      uc_match: '1f1ec-1f1ed',
      uc_greedy: '1f1ec-1f1ed',
      shortnames: [':gh:'],
      category: 'flags'
    },
    ':flag_gi:': {
      uc_base: '1f1ec-1f1ee',
      uc_output: '1f1ec-1f1ee',
      uc_match: '1f1ec-1f1ee',
      uc_greedy: '1f1ec-1f1ee',
      shortnames: [':gi:'],
      category: 'flags'
    },
    ':flag_gl:': {
      uc_base: '1f1ec-1f1f1',
      uc_output: '1f1ec-1f1f1',
      uc_match: '1f1ec-1f1f1',
      uc_greedy: '1f1ec-1f1f1',
      shortnames: [':gl:'],
      category: 'flags'
    },
    ':flag_gm:': {
      uc_base: '1f1ec-1f1f2',
      uc_output: '1f1ec-1f1f2',
      uc_match: '1f1ec-1f1f2',
      uc_greedy: '1f1ec-1f1f2',
      shortnames: [':gm:'],
      category: 'flags'
    },
    ':flag_gn:': {
      uc_base: '1f1ec-1f1f3',
      uc_output: '1f1ec-1f1f3',
      uc_match: '1f1ec-1f1f3',
      uc_greedy: '1f1ec-1f1f3',
      shortnames: [':gn:'],
      category: 'flags'
    },
    ':flag_gp:': {
      uc_base: '1f1ec-1f1f5',
      uc_output: '1f1ec-1f1f5',
      uc_match: '1f1ec-1f1f5',
      uc_greedy: '1f1ec-1f1f5',
      shortnames: [':gp:'],
      category: 'flags'
    },
    ':flag_gq:': {
      uc_base: '1f1ec-1f1f6',
      uc_output: '1f1ec-1f1f6',
      uc_match: '1f1ec-1f1f6',
      uc_greedy: '1f1ec-1f1f6',
      shortnames: [':gq:'],
      category: 'flags'
    },
    ':flag_gr:': {
      uc_base: '1f1ec-1f1f7',
      uc_output: '1f1ec-1f1f7',
      uc_match: '1f1ec-1f1f7',
      uc_greedy: '1f1ec-1f1f7',
      shortnames: [':gr:'],
      category: 'flags'
    },
    ':flag_gs:': {
      uc_base: '1f1ec-1f1f8',
      uc_output: '1f1ec-1f1f8',
      uc_match: '1f1ec-1f1f8',
      uc_greedy: '1f1ec-1f1f8',
      shortnames: [':gs:'],
      category: 'flags'
    },
    ':flag_gt:': {
      uc_base: '1f1ec-1f1f9',
      uc_output: '1f1ec-1f1f9',
      uc_match: '1f1ec-1f1f9',
      uc_greedy: '1f1ec-1f1f9',
      shortnames: [':gt:'],
      category: 'flags'
    },
    ':flag_gu:': {
      uc_base: '1f1ec-1f1fa',
      uc_output: '1f1ec-1f1fa',
      uc_match: '1f1ec-1f1fa',
      uc_greedy: '1f1ec-1f1fa',
      shortnames: [':gu:'],
      category: 'flags'
    },
    ':flag_gw:': {
      uc_base: '1f1ec-1f1fc',
      uc_output: '1f1ec-1f1fc',
      uc_match: '1f1ec-1f1fc',
      uc_greedy: '1f1ec-1f1fc',
      shortnames: [':gw:'],
      category: 'flags'
    },
    ':flag_gy:': {
      uc_base: '1f1ec-1f1fe',
      uc_output: '1f1ec-1f1fe',
      uc_match: '1f1ec-1f1fe',
      uc_greedy: '1f1ec-1f1fe',
      shortnames: [':gy:'],
      category: 'flags'
    },
    ':flag_hk:': {
      uc_base: '1f1ed-1f1f0',
      uc_output: '1f1ed-1f1f0',
      uc_match: '1f1ed-1f1f0',
      uc_greedy: '1f1ed-1f1f0',
      shortnames: [':hk:'],
      category: 'flags'
    },
    ':flag_hm:': {
      uc_base: '1f1ed-1f1f2',
      uc_output: '1f1ed-1f1f2',
      uc_match: '1f1ed-1f1f2',
      uc_greedy: '1f1ed-1f1f2',
      shortnames: [':hm:'],
      category: 'flags'
    },
    ':flag_hn:': {
      uc_base: '1f1ed-1f1f3',
      uc_output: '1f1ed-1f1f3',
      uc_match: '1f1ed-1f1f3',
      uc_greedy: '1f1ed-1f1f3',
      shortnames: [':hn:'],
      category: 'flags'
    },
    ':flag_hr:': {
      uc_base: '1f1ed-1f1f7',
      uc_output: '1f1ed-1f1f7',
      uc_match: '1f1ed-1f1f7',
      uc_greedy: '1f1ed-1f1f7',
      shortnames: [':hr:'],
      category: 'flags'
    },
    ':flag_ht:': {
      uc_base: '1f1ed-1f1f9',
      uc_output: '1f1ed-1f1f9',
      uc_match: '1f1ed-1f1f9',
      uc_greedy: '1f1ed-1f1f9',
      shortnames: [':ht:'],
      category: 'flags'
    },
    ':flag_hu:': {
      uc_base: '1f1ed-1f1fa',
      uc_output: '1f1ed-1f1fa',
      uc_match: '1f1ed-1f1fa',
      uc_greedy: '1f1ed-1f1fa',
      shortnames: [':hu:'],
      category: 'flags'
    },
    ':flag_ic:': {
      uc_base: '1f1ee-1f1e8',
      uc_output: '1f1ee-1f1e8',
      uc_match: '1f1ee-1f1e8',
      uc_greedy: '1f1ee-1f1e8',
      shortnames: [':ic:'],
      category: 'flags'
    },
    ':flag_id:': {
      uc_base: '1f1ee-1f1e9',
      uc_output: '1f1ee-1f1e9',
      uc_match: '1f1ee-1f1e9',
      uc_greedy: '1f1ee-1f1e9',
      shortnames: [':indonesia:'],
      category: 'flags'
    },
    ':flag_ie:': {
      uc_base: '1f1ee-1f1ea',
      uc_output: '1f1ee-1f1ea',
      uc_match: '1f1ee-1f1ea',
      uc_greedy: '1f1ee-1f1ea',
      shortnames: [':ie:'],
      category: 'flags'
    },
    ':flag_il:': {
      uc_base: '1f1ee-1f1f1',
      uc_output: '1f1ee-1f1f1',
      uc_match: '1f1ee-1f1f1',
      uc_greedy: '1f1ee-1f1f1',
      shortnames: [':il:'],
      category: 'flags'
    },
    ':flag_im:': {
      uc_base: '1f1ee-1f1f2',
      uc_output: '1f1ee-1f1f2',
      uc_match: '1f1ee-1f1f2',
      uc_greedy: '1f1ee-1f1f2',
      shortnames: [':im:'],
      category: 'flags'
    },
    ':flag_in:': {
      uc_base: '1f1ee-1f1f3',
      uc_output: '1f1ee-1f1f3',
      uc_match: '1f1ee-1f1f3',
      uc_greedy: '1f1ee-1f1f3',
      shortnames: [':in:'],
      category: 'flags'
    },
    ':flag_io:': {
      uc_base: '1f1ee-1f1f4',
      uc_output: '1f1ee-1f1f4',
      uc_match: '1f1ee-1f1f4',
      uc_greedy: '1f1ee-1f1f4',
      shortnames: [':io:'],
      category: 'flags'
    },
    ':flag_iq:': {
      uc_base: '1f1ee-1f1f6',
      uc_output: '1f1ee-1f1f6',
      uc_match: '1f1ee-1f1f6',
      uc_greedy: '1f1ee-1f1f6',
      shortnames: [':iq:'],
      category: 'flags'
    },
    ':flag_ir:': {
      uc_base: '1f1ee-1f1f7',
      uc_output: '1f1ee-1f1f7',
      uc_match: '1f1ee-1f1f7',
      uc_greedy: '1f1ee-1f1f7',
      shortnames: [':ir:'],
      category: 'flags'
    },
    ':flag_is:': {
      uc_base: '1f1ee-1f1f8',
      uc_output: '1f1ee-1f1f8',
      uc_match: '1f1ee-1f1f8',
      uc_greedy: '1f1ee-1f1f8',
      shortnames: [':is:'],
      category: 'flags'
    },
    ':flag_it:': {
      uc_base: '1f1ee-1f1f9',
      uc_output: '1f1ee-1f1f9',
      uc_match: '1f1ee-1f1f9',
      uc_greedy: '1f1ee-1f1f9',
      shortnames: [':it:'],
      category: 'flags'
    },
    ':flag_je:': {
      uc_base: '1f1ef-1f1ea',
      uc_output: '1f1ef-1f1ea',
      uc_match: '1f1ef-1f1ea',
      uc_greedy: '1f1ef-1f1ea',
      shortnames: [':je:'],
      category: 'flags'
    },
    ':flag_jm:': {
      uc_base: '1f1ef-1f1f2',
      uc_output: '1f1ef-1f1f2',
      uc_match: '1f1ef-1f1f2',
      uc_greedy: '1f1ef-1f1f2',
      shortnames: [':jm:'],
      category: 'flags'
    },
    ':flag_jo:': {
      uc_base: '1f1ef-1f1f4',
      uc_output: '1f1ef-1f1f4',
      uc_match: '1f1ef-1f1f4',
      uc_greedy: '1f1ef-1f1f4',
      shortnames: [':jo:'],
      category: 'flags'
    },
    ':flag_jp:': {
      uc_base: '1f1ef-1f1f5',
      uc_output: '1f1ef-1f1f5',
      uc_match: '1f1ef-1f1f5',
      uc_greedy: '1f1ef-1f1f5',
      shortnames: [':jp:'],
      category: 'flags'
    },
    ':flag_ke:': {
      uc_base: '1f1f0-1f1ea',
      uc_output: '1f1f0-1f1ea',
      uc_match: '1f1f0-1f1ea',
      uc_greedy: '1f1f0-1f1ea',
      shortnames: [':ke:'],
      category: 'flags'
    },
    ':flag_kg:': {
      uc_base: '1f1f0-1f1ec',
      uc_output: '1f1f0-1f1ec',
      uc_match: '1f1f0-1f1ec',
      uc_greedy: '1f1f0-1f1ec',
      shortnames: [':kg:'],
      category: 'flags'
    },
    ':flag_kh:': {
      uc_base: '1f1f0-1f1ed',
      uc_output: '1f1f0-1f1ed',
      uc_match: '1f1f0-1f1ed',
      uc_greedy: '1f1f0-1f1ed',
      shortnames: [':kh:'],
      category: 'flags'
    },
    ':flag_ki:': {
      uc_base: '1f1f0-1f1ee',
      uc_output: '1f1f0-1f1ee',
      uc_match: '1f1f0-1f1ee',
      uc_greedy: '1f1f0-1f1ee',
      shortnames: [':ki:'],
      category: 'flags'
    },
    ':flag_km:': {
      uc_base: '1f1f0-1f1f2',
      uc_output: '1f1f0-1f1f2',
      uc_match: '1f1f0-1f1f2',
      uc_greedy: '1f1f0-1f1f2',
      shortnames: [':km:'],
      category: 'flags'
    },
    ':flag_kn:': {
      uc_base: '1f1f0-1f1f3',
      uc_output: '1f1f0-1f1f3',
      uc_match: '1f1f0-1f1f3',
      uc_greedy: '1f1f0-1f1f3',
      shortnames: [':kn:'],
      category: 'flags'
    },
    ':flag_kp:': {
      uc_base: '1f1f0-1f1f5',
      uc_output: '1f1f0-1f1f5',
      uc_match: '1f1f0-1f1f5',
      uc_greedy: '1f1f0-1f1f5',
      shortnames: [':kp:'],
      category: 'flags'
    },
    ':flag_kr:': {
      uc_base: '1f1f0-1f1f7',
      uc_output: '1f1f0-1f1f7',
      uc_match: '1f1f0-1f1f7',
      uc_greedy: '1f1f0-1f1f7',
      shortnames: [':kr:'],
      category: 'flags'
    },
    ':flag_kw:': {
      uc_base: '1f1f0-1f1fc',
      uc_output: '1f1f0-1f1fc',
      uc_match: '1f1f0-1f1fc',
      uc_greedy: '1f1f0-1f1fc',
      shortnames: [':kw:'],
      category: 'flags'
    },
    ':flag_ky:': {
      uc_base: '1f1f0-1f1fe',
      uc_output: '1f1f0-1f1fe',
      uc_match: '1f1f0-1f1fe',
      uc_greedy: '1f1f0-1f1fe',
      shortnames: [':ky:'],
      category: 'flags'
    },
    ':flag_kz:': {
      uc_base: '1f1f0-1f1ff',
      uc_output: '1f1f0-1f1ff',
      uc_match: '1f1f0-1f1ff',
      uc_greedy: '1f1f0-1f1ff',
      shortnames: [':kz:'],
      category: 'flags'
    },
    ':flag_la:': {
      uc_base: '1f1f1-1f1e6',
      uc_output: '1f1f1-1f1e6',
      uc_match: '1f1f1-1f1e6',
      uc_greedy: '1f1f1-1f1e6',
      shortnames: [':la:'],
      category: 'flags'
    },
    ':flag_lb:': {
      uc_base: '1f1f1-1f1e7',
      uc_output: '1f1f1-1f1e7',
      uc_match: '1f1f1-1f1e7',
      uc_greedy: '1f1f1-1f1e7',
      shortnames: [':lb:'],
      category: 'flags'
    },
    ':flag_lc:': {
      uc_base: '1f1f1-1f1e8',
      uc_output: '1f1f1-1f1e8',
      uc_match: '1f1f1-1f1e8',
      uc_greedy: '1f1f1-1f1e8',
      shortnames: [':lc:'],
      category: 'flags'
    },
    ':flag_li:': {
      uc_base: '1f1f1-1f1ee',
      uc_output: '1f1f1-1f1ee',
      uc_match: '1f1f1-1f1ee',
      uc_greedy: '1f1f1-1f1ee',
      shortnames: [':li:'],
      category: 'flags'
    },
    ':flag_lk:': {
      uc_base: '1f1f1-1f1f0',
      uc_output: '1f1f1-1f1f0',
      uc_match: '1f1f1-1f1f0',
      uc_greedy: '1f1f1-1f1f0',
      shortnames: [':lk:'],
      category: 'flags'
    },
    ':flag_lr:': {
      uc_base: '1f1f1-1f1f7',
      uc_output: '1f1f1-1f1f7',
      uc_match: '1f1f1-1f1f7',
      uc_greedy: '1f1f1-1f1f7',
      shortnames: [':lr:'],
      category: 'flags'
    },
    ':flag_ls:': {
      uc_base: '1f1f1-1f1f8',
      uc_output: '1f1f1-1f1f8',
      uc_match: '1f1f1-1f1f8',
      uc_greedy: '1f1f1-1f1f8',
      shortnames: [':ls:'],
      category: 'flags'
    },
    ':flag_lt:': {
      uc_base: '1f1f1-1f1f9',
      uc_output: '1f1f1-1f1f9',
      uc_match: '1f1f1-1f1f9',
      uc_greedy: '1f1f1-1f1f9',
      shortnames: [':lt:'],
      category: 'flags'
    },
    ':flag_lu:': {
      uc_base: '1f1f1-1f1fa',
      uc_output: '1f1f1-1f1fa',
      uc_match: '1f1f1-1f1fa',
      uc_greedy: '1f1f1-1f1fa',
      shortnames: [':lu:'],
      category: 'flags'
    },
    ':flag_lv:': {
      uc_base: '1f1f1-1f1fb',
      uc_output: '1f1f1-1f1fb',
      uc_match: '1f1f1-1f1fb',
      uc_greedy: '1f1f1-1f1fb',
      shortnames: [':lv:'],
      category: 'flags'
    },
    ':flag_ly:': {
      uc_base: '1f1f1-1f1fe',
      uc_output: '1f1f1-1f1fe',
      uc_match: '1f1f1-1f1fe',
      uc_greedy: '1f1f1-1f1fe',
      shortnames: [':ly:'],
      category: 'flags'
    },
    ':flag_ma:': {
      uc_base: '1f1f2-1f1e6',
      uc_output: '1f1f2-1f1e6',
      uc_match: '1f1f2-1f1e6',
      uc_greedy: '1f1f2-1f1e6',
      shortnames: [':ma:'],
      category: 'flags'
    },
    ':flag_mc:': {
      uc_base: '1f1f2-1f1e8',
      uc_output: '1f1f2-1f1e8',
      uc_match: '1f1f2-1f1e8',
      uc_greedy: '1f1f2-1f1e8',
      shortnames: [':mc:'],
      category: 'flags'
    },
    ':flag_md:': {
      uc_base: '1f1f2-1f1e9',
      uc_output: '1f1f2-1f1e9',
      uc_match: '1f1f2-1f1e9',
      uc_greedy: '1f1f2-1f1e9',
      shortnames: [':md:'],
      category: 'flags'
    },
    ':flag_me:': {
      uc_base: '1f1f2-1f1ea',
      uc_output: '1f1f2-1f1ea',
      uc_match: '1f1f2-1f1ea',
      uc_greedy: '1f1f2-1f1ea',
      shortnames: [':me:'],
      category: 'flags'
    },
    ':flag_mf:': {
      uc_base: '1f1f2-1f1eb',
      uc_output: '1f1f2-1f1eb',
      uc_match: '1f1f2-1f1eb',
      uc_greedy: '1f1f2-1f1eb',
      shortnames: [':mf:'],
      category: 'flags'
    },
    ':flag_mg:': {
      uc_base: '1f1f2-1f1ec',
      uc_output: '1f1f2-1f1ec',
      uc_match: '1f1f2-1f1ec',
      uc_greedy: '1f1f2-1f1ec',
      shortnames: [':mg:'],
      category: 'flags'
    },
    ':flag_mh:': {
      uc_base: '1f1f2-1f1ed',
      uc_output: '1f1f2-1f1ed',
      uc_match: '1f1f2-1f1ed',
      uc_greedy: '1f1f2-1f1ed',
      shortnames: [':mh:'],
      category: 'flags'
    },
    ':flag_mk:': {
      uc_base: '1f1f2-1f1f0',
      uc_output: '1f1f2-1f1f0',
      uc_match: '1f1f2-1f1f0',
      uc_greedy: '1f1f2-1f1f0',
      shortnames: [':mk:'],
      category: 'flags'
    },
    ':flag_ml:': {
      uc_base: '1f1f2-1f1f1',
      uc_output: '1f1f2-1f1f1',
      uc_match: '1f1f2-1f1f1',
      uc_greedy: '1f1f2-1f1f1',
      shortnames: [':ml:'],
      category: 'flags'
    },
    ':flag_mm:': {
      uc_base: '1f1f2-1f1f2',
      uc_output: '1f1f2-1f1f2',
      uc_match: '1f1f2-1f1f2',
      uc_greedy: '1f1f2-1f1f2',
      shortnames: [':mm:'],
      category: 'flags'
    },
    ':flag_mn:': {
      uc_base: '1f1f2-1f1f3',
      uc_output: '1f1f2-1f1f3',
      uc_match: '1f1f2-1f1f3',
      uc_greedy: '1f1f2-1f1f3',
      shortnames: [':mn:'],
      category: 'flags'
    },
    ':flag_mo:': {
      uc_base: '1f1f2-1f1f4',
      uc_output: '1f1f2-1f1f4',
      uc_match: '1f1f2-1f1f4',
      uc_greedy: '1f1f2-1f1f4',
      shortnames: [':mo:'],
      category: 'flags'
    },
    ':flag_mp:': {
      uc_base: '1f1f2-1f1f5',
      uc_output: '1f1f2-1f1f5',
      uc_match: '1f1f2-1f1f5',
      uc_greedy: '1f1f2-1f1f5',
      shortnames: [':mp:'],
      category: 'flags'
    },
    ':flag_mq:': {
      uc_base: '1f1f2-1f1f6',
      uc_output: '1f1f2-1f1f6',
      uc_match: '1f1f2-1f1f6',
      uc_greedy: '1f1f2-1f1f6',
      shortnames: [':mq:'],
      category: 'flags'
    },
    ':flag_mr:': {
      uc_base: '1f1f2-1f1f7',
      uc_output: '1f1f2-1f1f7',
      uc_match: '1f1f2-1f1f7',
      uc_greedy: '1f1f2-1f1f7',
      shortnames: [':mr:'],
      category: 'flags'
    },
    ':flag_ms:': {
      uc_base: '1f1f2-1f1f8',
      uc_output: '1f1f2-1f1f8',
      uc_match: '1f1f2-1f1f8',
      uc_greedy: '1f1f2-1f1f8',
      shortnames: [':ms:'],
      category: 'flags'
    },
    ':flag_mt:': {
      uc_base: '1f1f2-1f1f9',
      uc_output: '1f1f2-1f1f9',
      uc_match: '1f1f2-1f1f9',
      uc_greedy: '1f1f2-1f1f9',
      shortnames: [':mt:'],
      category: 'flags'
    },
    ':flag_mu:': {
      uc_base: '1f1f2-1f1fa',
      uc_output: '1f1f2-1f1fa',
      uc_match: '1f1f2-1f1fa',
      uc_greedy: '1f1f2-1f1fa',
      shortnames: [':mu:'],
      category: 'flags'
    },
    ':flag_mv:': {
      uc_base: '1f1f2-1f1fb',
      uc_output: '1f1f2-1f1fb',
      uc_match: '1f1f2-1f1fb',
      uc_greedy: '1f1f2-1f1fb',
      shortnames: [':mv:'],
      category: 'flags'
    },
    ':flag_mw:': {
      uc_base: '1f1f2-1f1fc',
      uc_output: '1f1f2-1f1fc',
      uc_match: '1f1f2-1f1fc',
      uc_greedy: '1f1f2-1f1fc',
      shortnames: [':mw:'],
      category: 'flags'
    },
    ':flag_mx:': {
      uc_base: '1f1f2-1f1fd',
      uc_output: '1f1f2-1f1fd',
      uc_match: '1f1f2-1f1fd',
      uc_greedy: '1f1f2-1f1fd',
      shortnames: [':mx:'],
      category: 'flags'
    },
    ':flag_my:': {
      uc_base: '1f1f2-1f1fe',
      uc_output: '1f1f2-1f1fe',
      uc_match: '1f1f2-1f1fe',
      uc_greedy: '1f1f2-1f1fe',
      shortnames: [':my:'],
      category: 'flags'
    },
    ':flag_mz:': {
      uc_base: '1f1f2-1f1ff',
      uc_output: '1f1f2-1f1ff',
      uc_match: '1f1f2-1f1ff',
      uc_greedy: '1f1f2-1f1ff',
      shortnames: [':mz:'],
      category: 'flags'
    },
    ':flag_na:': {
      uc_base: '1f1f3-1f1e6',
      uc_output: '1f1f3-1f1e6',
      uc_match: '1f1f3-1f1e6',
      uc_greedy: '1f1f3-1f1e6',
      shortnames: [':na:'],
      category: 'flags'
    },
    ':flag_nc:': {
      uc_base: '1f1f3-1f1e8',
      uc_output: '1f1f3-1f1e8',
      uc_match: '1f1f3-1f1e8',
      uc_greedy: '1f1f3-1f1e8',
      shortnames: [':nc:'],
      category: 'flags'
    },
    ':flag_ne:': {
      uc_base: '1f1f3-1f1ea',
      uc_output: '1f1f3-1f1ea',
      uc_match: '1f1f3-1f1ea',
      uc_greedy: '1f1f3-1f1ea',
      shortnames: [':ne:'],
      category: 'flags'
    },
    ':flag_nf:': {
      uc_base: '1f1f3-1f1eb',
      uc_output: '1f1f3-1f1eb',
      uc_match: '1f1f3-1f1eb',
      uc_greedy: '1f1f3-1f1eb',
      shortnames: [':nf:'],
      category: 'flags'
    },
    ':flag_ng:': {
      uc_base: '1f1f3-1f1ec',
      uc_output: '1f1f3-1f1ec',
      uc_match: '1f1f3-1f1ec',
      uc_greedy: '1f1f3-1f1ec',
      shortnames: [':nigeria:'],
      category: 'flags'
    },
    ':flag_ni:': {
      uc_base: '1f1f3-1f1ee',
      uc_output: '1f1f3-1f1ee',
      uc_match: '1f1f3-1f1ee',
      uc_greedy: '1f1f3-1f1ee',
      shortnames: [':ni:'],
      category: 'flags'
    },
    ':flag_nl:': {
      uc_base: '1f1f3-1f1f1',
      uc_output: '1f1f3-1f1f1',
      uc_match: '1f1f3-1f1f1',
      uc_greedy: '1f1f3-1f1f1',
      shortnames: [':nl:'],
      category: 'flags'
    },
    ':flag_no:': {
      uc_base: '1f1f3-1f1f4',
      uc_output: '1f1f3-1f1f4',
      uc_match: '1f1f3-1f1f4',
      uc_greedy: '1f1f3-1f1f4',
      shortnames: [':no:'],
      category: 'flags'
    },
    ':flag_np:': {
      uc_base: '1f1f3-1f1f5',
      uc_output: '1f1f3-1f1f5',
      uc_match: '1f1f3-1f1f5',
      uc_greedy: '1f1f3-1f1f5',
      shortnames: [':np:'],
      category: 'flags'
    },
    ':flag_nr:': {
      uc_base: '1f1f3-1f1f7',
      uc_output: '1f1f3-1f1f7',
      uc_match: '1f1f3-1f1f7',
      uc_greedy: '1f1f3-1f1f7',
      shortnames: [':nr:'],
      category: 'flags'
    },
    ':flag_nu:': {
      uc_base: '1f1f3-1f1fa',
      uc_output: '1f1f3-1f1fa',
      uc_match: '1f1f3-1f1fa',
      uc_greedy: '1f1f3-1f1fa',
      shortnames: [':nu:'],
      category: 'flags'
    },
    ':flag_nz:': {
      uc_base: '1f1f3-1f1ff',
      uc_output: '1f1f3-1f1ff',
      uc_match: '1f1f3-1f1ff',
      uc_greedy: '1f1f3-1f1ff',
      shortnames: [':nz:'],
      category: 'flags'
    },
    ':flag_om:': {
      uc_base: '1f1f4-1f1f2',
      uc_output: '1f1f4-1f1f2',
      uc_match: '1f1f4-1f1f2',
      uc_greedy: '1f1f4-1f1f2',
      shortnames: [':om:'],
      category: 'flags'
    },
    ':flag_pa:': {
      uc_base: '1f1f5-1f1e6',
      uc_output: '1f1f5-1f1e6',
      uc_match: '1f1f5-1f1e6',
      uc_greedy: '1f1f5-1f1e6',
      shortnames: [':pa:'],
      category: 'flags'
    },
    ':flag_pe:': {
      uc_base: '1f1f5-1f1ea',
      uc_output: '1f1f5-1f1ea',
      uc_match: '1f1f5-1f1ea',
      uc_greedy: '1f1f5-1f1ea',
      shortnames: [':pe:'],
      category: 'flags'
    },
    ':flag_pf:': {
      uc_base: '1f1f5-1f1eb',
      uc_output: '1f1f5-1f1eb',
      uc_match: '1f1f5-1f1eb',
      uc_greedy: '1f1f5-1f1eb',
      shortnames: [':pf:'],
      category: 'flags'
    },
    ':flag_pg:': {
      uc_base: '1f1f5-1f1ec',
      uc_output: '1f1f5-1f1ec',
      uc_match: '1f1f5-1f1ec',
      uc_greedy: '1f1f5-1f1ec',
      shortnames: [':pg:'],
      category: 'flags'
    },
    ':flag_ph:': {
      uc_base: '1f1f5-1f1ed',
      uc_output: '1f1f5-1f1ed',
      uc_match: '1f1f5-1f1ed',
      uc_greedy: '1f1f5-1f1ed',
      shortnames: [':ph:'],
      category: 'flags'
    },
    ':flag_pk:': {
      uc_base: '1f1f5-1f1f0',
      uc_output: '1f1f5-1f1f0',
      uc_match: '1f1f5-1f1f0',
      uc_greedy: '1f1f5-1f1f0',
      shortnames: [':pk:'],
      category: 'flags'
    },
    ':flag_pl:': {
      uc_base: '1f1f5-1f1f1',
      uc_output: '1f1f5-1f1f1',
      uc_match: '1f1f5-1f1f1',
      uc_greedy: '1f1f5-1f1f1',
      shortnames: [':pl:'],
      category: 'flags'
    },
    ':flag_pm:': {
      uc_base: '1f1f5-1f1f2',
      uc_output: '1f1f5-1f1f2',
      uc_match: '1f1f5-1f1f2',
      uc_greedy: '1f1f5-1f1f2',
      shortnames: [':pm:'],
      category: 'flags'
    },
    ':flag_pn:': {
      uc_base: '1f1f5-1f1f3',
      uc_output: '1f1f5-1f1f3',
      uc_match: '1f1f5-1f1f3',
      uc_greedy: '1f1f5-1f1f3',
      shortnames: [':pn:'],
      category: 'flags'
    },
    ':flag_pr:': {
      uc_base: '1f1f5-1f1f7',
      uc_output: '1f1f5-1f1f7',
      uc_match: '1f1f5-1f1f7',
      uc_greedy: '1f1f5-1f1f7',
      shortnames: [':pr:'],
      category: 'flags'
    },
    ':flag_ps:': {
      uc_base: '1f1f5-1f1f8',
      uc_output: '1f1f5-1f1f8',
      uc_match: '1f1f5-1f1f8',
      uc_greedy: '1f1f5-1f1f8',
      shortnames: [':ps:'],
      category: 'flags'
    },
    ':flag_pt:': {
      uc_base: '1f1f5-1f1f9',
      uc_output: '1f1f5-1f1f9',
      uc_match: '1f1f5-1f1f9',
      uc_greedy: '1f1f5-1f1f9',
      shortnames: [':pt:'],
      category: 'flags'
    },
    ':flag_pw:': {
      uc_base: '1f1f5-1f1fc',
      uc_output: '1f1f5-1f1fc',
      uc_match: '1f1f5-1f1fc',
      uc_greedy: '1f1f5-1f1fc',
      shortnames: [':pw:'],
      category: 'flags'
    },
    ':flag_py:': {
      uc_base: '1f1f5-1f1fe',
      uc_output: '1f1f5-1f1fe',
      uc_match: '1f1f5-1f1fe',
      uc_greedy: '1f1f5-1f1fe',
      shortnames: [':py:'],
      category: 'flags'
    },
    ':flag_qa:': {
      uc_base: '1f1f6-1f1e6',
      uc_output: '1f1f6-1f1e6',
      uc_match: '1f1f6-1f1e6',
      uc_greedy: '1f1f6-1f1e6',
      shortnames: [':qa:'],
      category: 'flags'
    },
    ':flag_re:': {
      uc_base: '1f1f7-1f1ea',
      uc_output: '1f1f7-1f1ea',
      uc_match: '1f1f7-1f1ea',
      uc_greedy: '1f1f7-1f1ea',
      shortnames: [':re:'],
      category: 'flags'
    },
    ':flag_ro:': {
      uc_base: '1f1f7-1f1f4',
      uc_output: '1f1f7-1f1f4',
      uc_match: '1f1f7-1f1f4',
      uc_greedy: '1f1f7-1f1f4',
      shortnames: [':ro:'],
      category: 'flags'
    },
    ':flag_rs:': {
      uc_base: '1f1f7-1f1f8',
      uc_output: '1f1f7-1f1f8',
      uc_match: '1f1f7-1f1f8',
      uc_greedy: '1f1f7-1f1f8',
      shortnames: [':rs:'],
      category: 'flags'
    },
    ':flag_ru:': {
      uc_base: '1f1f7-1f1fa',
      uc_output: '1f1f7-1f1fa',
      uc_match: '1f1f7-1f1fa',
      uc_greedy: '1f1f7-1f1fa',
      shortnames: [':ru:'],
      category: 'flags'
    },
    ':flag_rw:': {
      uc_base: '1f1f7-1f1fc',
      uc_output: '1f1f7-1f1fc',
      uc_match: '1f1f7-1f1fc',
      uc_greedy: '1f1f7-1f1fc',
      shortnames: [':rw:'],
      category: 'flags'
    },
    ':flag_sa:': {
      uc_base: '1f1f8-1f1e6',
      uc_output: '1f1f8-1f1e6',
      uc_match: '1f1f8-1f1e6',
      uc_greedy: '1f1f8-1f1e6',
      shortnames: [':saudiarabia:', ':saudi:'],
      category: 'flags'
    },
    ':flag_sb:': {
      uc_base: '1f1f8-1f1e7',
      uc_output: '1f1f8-1f1e7',
      uc_match: '1f1f8-1f1e7',
      uc_greedy: '1f1f8-1f1e7',
      shortnames: [':sb:'],
      category: 'flags'
    },
    ':flag_sc:': {
      uc_base: '1f1f8-1f1e8',
      uc_output: '1f1f8-1f1e8',
      uc_match: '1f1f8-1f1e8',
      uc_greedy: '1f1f8-1f1e8',
      shortnames: [':sc:'],
      category: 'flags'
    },
    ':flag_sd:': {
      uc_base: '1f1f8-1f1e9',
      uc_output: '1f1f8-1f1e9',
      uc_match: '1f1f8-1f1e9',
      uc_greedy: '1f1f8-1f1e9',
      shortnames: [':sd:'],
      category: 'flags'
    },
    ':flag_se:': {
      uc_base: '1f1f8-1f1ea',
      uc_output: '1f1f8-1f1ea',
      uc_match: '1f1f8-1f1ea',
      uc_greedy: '1f1f8-1f1ea',
      shortnames: [':se:'],
      category: 'flags'
    },
    ':flag_sg:': {
      uc_base: '1f1f8-1f1ec',
      uc_output: '1f1f8-1f1ec',
      uc_match: '1f1f8-1f1ec',
      uc_greedy: '1f1f8-1f1ec',
      shortnames: [':sg:'],
      category: 'flags'
    },
    ':flag_sh:': {
      uc_base: '1f1f8-1f1ed',
      uc_output: '1f1f8-1f1ed',
      uc_match: '1f1f8-1f1ed',
      uc_greedy: '1f1f8-1f1ed',
      shortnames: [':sh:'],
      category: 'flags'
    },
    ':flag_si:': {
      uc_base: '1f1f8-1f1ee',
      uc_output: '1f1f8-1f1ee',
      uc_match: '1f1f8-1f1ee',
      uc_greedy: '1f1f8-1f1ee',
      shortnames: [':si:'],
      category: 'flags'
    },
    ':flag_sj:': {
      uc_base: '1f1f8-1f1ef',
      uc_output: '1f1f8-1f1ef',
      uc_match: '1f1f8-1f1ef',
      uc_greedy: '1f1f8-1f1ef',
      shortnames: [':sj:'],
      category: 'flags'
    },
    ':flag_sk:': {
      uc_base: '1f1f8-1f1f0',
      uc_output: '1f1f8-1f1f0',
      uc_match: '1f1f8-1f1f0',
      uc_greedy: '1f1f8-1f1f0',
      shortnames: [':sk:'],
      category: 'flags'
    },
    ':flag_sl:': {
      uc_base: '1f1f8-1f1f1',
      uc_output: '1f1f8-1f1f1',
      uc_match: '1f1f8-1f1f1',
      uc_greedy: '1f1f8-1f1f1',
      shortnames: [':sl:'],
      category: 'flags'
    },
    ':flag_sm:': {
      uc_base: '1f1f8-1f1f2',
      uc_output: '1f1f8-1f1f2',
      uc_match: '1f1f8-1f1f2',
      uc_greedy: '1f1f8-1f1f2',
      shortnames: [':sm:'],
      category: 'flags'
    },
    ':flag_sn:': {
      uc_base: '1f1f8-1f1f3',
      uc_output: '1f1f8-1f1f3',
      uc_match: '1f1f8-1f1f3',
      uc_greedy: '1f1f8-1f1f3',
      shortnames: [':sn:'],
      category: 'flags'
    },
    ':flag_so:': {
      uc_base: '1f1f8-1f1f4',
      uc_output: '1f1f8-1f1f4',
      uc_match: '1f1f8-1f1f4',
      uc_greedy: '1f1f8-1f1f4',
      shortnames: [':so:'],
      category: 'flags'
    },
    ':flag_sr:': {
      uc_base: '1f1f8-1f1f7',
      uc_output: '1f1f8-1f1f7',
      uc_match: '1f1f8-1f1f7',
      uc_greedy: '1f1f8-1f1f7',
      shortnames: [':sr:'],
      category: 'flags'
    },
    ':flag_ss:': {
      uc_base: '1f1f8-1f1f8',
      uc_output: '1f1f8-1f1f8',
      uc_match: '1f1f8-1f1f8',
      uc_greedy: '1f1f8-1f1f8',
      shortnames: [':ss:'],
      category: 'flags'
    },
    ':flag_st:': {
      uc_base: '1f1f8-1f1f9',
      uc_output: '1f1f8-1f1f9',
      uc_match: '1f1f8-1f1f9',
      uc_greedy: '1f1f8-1f1f9',
      shortnames: [':st:'],
      category: 'flags'
    },
    ':flag_sv:': {
      uc_base: '1f1f8-1f1fb',
      uc_output: '1f1f8-1f1fb',
      uc_match: '1f1f8-1f1fb',
      uc_greedy: '1f1f8-1f1fb',
      shortnames: [':sv:'],
      category: 'flags'
    },
    ':flag_sx:': {
      uc_base: '1f1f8-1f1fd',
      uc_output: '1f1f8-1f1fd',
      uc_match: '1f1f8-1f1fd',
      uc_greedy: '1f1f8-1f1fd',
      shortnames: [':sx:'],
      category: 'flags'
    },
    ':flag_sy:': {
      uc_base: '1f1f8-1f1fe',
      uc_output: '1f1f8-1f1fe',
      uc_match: '1f1f8-1f1fe',
      uc_greedy: '1f1f8-1f1fe',
      shortnames: [':sy:'],
      category: 'flags'
    },
    ':flag_sz:': {
      uc_base: '1f1f8-1f1ff',
      uc_output: '1f1f8-1f1ff',
      uc_match: '1f1f8-1f1ff',
      uc_greedy: '1f1f8-1f1ff',
      shortnames: [':sz:'],
      category: 'flags'
    },
    ':flag_ta:': {
      uc_base: '1f1f9-1f1e6',
      uc_output: '1f1f9-1f1e6',
      uc_match: '1f1f9-1f1e6',
      uc_greedy: '1f1f9-1f1e6',
      shortnames: [':ta:'],
      category: 'flags'
    },
    ':flag_tc:': {
      uc_base: '1f1f9-1f1e8',
      uc_output: '1f1f9-1f1e8',
      uc_match: '1f1f9-1f1e8',
      uc_greedy: '1f1f9-1f1e8',
      shortnames: [':tc:'],
      category: 'flags'
    },
    ':flag_td:': {
      uc_base: '1f1f9-1f1e9',
      uc_output: '1f1f9-1f1e9',
      uc_match: '1f1f9-1f1e9',
      uc_greedy: '1f1f9-1f1e9',
      shortnames: [':td:'],
      category: 'flags'
    },
    ':flag_tf:': {
      uc_base: '1f1f9-1f1eb',
      uc_output: '1f1f9-1f1eb',
      uc_match: '1f1f9-1f1eb',
      uc_greedy: '1f1f9-1f1eb',
      shortnames: [':tf:'],
      category: 'flags'
    },
    ':flag_tg:': {
      uc_base: '1f1f9-1f1ec',
      uc_output: '1f1f9-1f1ec',
      uc_match: '1f1f9-1f1ec',
      uc_greedy: '1f1f9-1f1ec',
      shortnames: [':tg:'],
      category: 'flags'
    },
    ':flag_th:': {
      uc_base: '1f1f9-1f1ed',
      uc_output: '1f1f9-1f1ed',
      uc_match: '1f1f9-1f1ed',
      uc_greedy: '1f1f9-1f1ed',
      shortnames: [':th:'],
      category: 'flags'
    },
    ':flag_tj:': {
      uc_base: '1f1f9-1f1ef',
      uc_output: '1f1f9-1f1ef',
      uc_match: '1f1f9-1f1ef',
      uc_greedy: '1f1f9-1f1ef',
      shortnames: [':tj:'],
      category: 'flags'
    },
    ':flag_tk:': {
      uc_base: '1f1f9-1f1f0',
      uc_output: '1f1f9-1f1f0',
      uc_match: '1f1f9-1f1f0',
      uc_greedy: '1f1f9-1f1f0',
      shortnames: [':tk:'],
      category: 'flags'
    },
    ':flag_tl:': {
      uc_base: '1f1f9-1f1f1',
      uc_output: '1f1f9-1f1f1',
      uc_match: '1f1f9-1f1f1',
      uc_greedy: '1f1f9-1f1f1',
      shortnames: [':tl:'],
      category: 'flags'
    },
    ':flag_tm:': {
      uc_base: '1f1f9-1f1f2',
      uc_output: '1f1f9-1f1f2',
      uc_match: '1f1f9-1f1f2',
      uc_greedy: '1f1f9-1f1f2',
      shortnames: [':turkmenistan:'],
      category: 'flags'
    },
    ':flag_tn:': {
      uc_base: '1f1f9-1f1f3',
      uc_output: '1f1f9-1f1f3',
      uc_match: '1f1f9-1f1f3',
      uc_greedy: '1f1f9-1f1f3',
      shortnames: [':tn:'],
      category: 'flags'
    },
    ':flag_to:': {
      uc_base: '1f1f9-1f1f4',
      uc_output: '1f1f9-1f1f4',
      uc_match: '1f1f9-1f1f4',
      uc_greedy: '1f1f9-1f1f4',
      shortnames: [':to:'],
      category: 'flags'
    },
    ':flag_tr:': {
      uc_base: '1f1f9-1f1f7',
      uc_output: '1f1f9-1f1f7',
      uc_match: '1f1f9-1f1f7',
      uc_greedy: '1f1f9-1f1f7',
      shortnames: [':tr:'],
      category: 'flags'
    },
    ':flag_tt:': {
      uc_base: '1f1f9-1f1f9',
      uc_output: '1f1f9-1f1f9',
      uc_match: '1f1f9-1f1f9',
      uc_greedy: '1f1f9-1f1f9',
      shortnames: [':tt:'],
      category: 'flags'
    },
    ':flag_tv:': {
      uc_base: '1f1f9-1f1fb',
      uc_output: '1f1f9-1f1fb',
      uc_match: '1f1f9-1f1fb',
      uc_greedy: '1f1f9-1f1fb',
      shortnames: [':tuvalu:'],
      category: 'flags'
    },
    ':flag_tw:': {
      uc_base: '1f1f9-1f1fc',
      uc_output: '1f1f9-1f1fc',
      uc_match: '1f1f9-1f1fc',
      uc_greedy: '1f1f9-1f1fc',
      shortnames: [':tw:'],
      category: 'flags'
    },
    ':flag_tz:': {
      uc_base: '1f1f9-1f1ff',
      uc_output: '1f1f9-1f1ff',
      uc_match: '1f1f9-1f1ff',
      uc_greedy: '1f1f9-1f1ff',
      shortnames: [':tz:'],
      category: 'flags'
    },
    ':flag_ua:': {
      uc_base: '1f1fa-1f1e6',
      uc_output: '1f1fa-1f1e6',
      uc_match: '1f1fa-1f1e6',
      uc_greedy: '1f1fa-1f1e6',
      shortnames: [':ua:'],
      category: 'flags'
    },
    ':flag_ug:': {
      uc_base: '1f1fa-1f1ec',
      uc_output: '1f1fa-1f1ec',
      uc_match: '1f1fa-1f1ec',
      uc_greedy: '1f1fa-1f1ec',
      shortnames: [':ug:'],
      category: 'flags'
    },
    ':flag_um:': {
      uc_base: '1f1fa-1f1f2',
      uc_output: '1f1fa-1f1f2',
      uc_match: '1f1fa-1f1f2',
      uc_greedy: '1f1fa-1f1f2',
      shortnames: [':um:'],
      category: 'flags'
    },
    ':flag_us:': {
      uc_base: '1f1fa-1f1f8',
      uc_output: '1f1fa-1f1f8',
      uc_match: '1f1fa-1f1f8',
      uc_greedy: '1f1fa-1f1f8',
      shortnames: [':us:'],
      category: 'flags'
    },
    ':flag_uy:': {
      uc_base: '1f1fa-1f1fe',
      uc_output: '1f1fa-1f1fe',
      uc_match: '1f1fa-1f1fe',
      uc_greedy: '1f1fa-1f1fe',
      shortnames: [':uy:'],
      category: 'flags'
    },
    ':flag_uz:': {
      uc_base: '1f1fa-1f1ff',
      uc_output: '1f1fa-1f1ff',
      uc_match: '1f1fa-1f1ff',
      uc_greedy: '1f1fa-1f1ff',
      shortnames: [':uz:'],
      category: 'flags'
    },
    ':flag_va:': {
      uc_base: '1f1fb-1f1e6',
      uc_output: '1f1fb-1f1e6',
      uc_match: '1f1fb-1f1e6',
      uc_greedy: '1f1fb-1f1e6',
      shortnames: [':va:'],
      category: 'flags'
    },
    ':flag_vc:': {
      uc_base: '1f1fb-1f1e8',
      uc_output: '1f1fb-1f1e8',
      uc_match: '1f1fb-1f1e8',
      uc_greedy: '1f1fb-1f1e8',
      shortnames: [':vc:'],
      category: 'flags'
    },
    ':flag_ve:': {
      uc_base: '1f1fb-1f1ea',
      uc_output: '1f1fb-1f1ea',
      uc_match: '1f1fb-1f1ea',
      uc_greedy: '1f1fb-1f1ea',
      shortnames: [':ve:'],
      category: 'flags'
    },
    ':flag_vg:': {
      uc_base: '1f1fb-1f1ec',
      uc_output: '1f1fb-1f1ec',
      uc_match: '1f1fb-1f1ec',
      uc_greedy: '1f1fb-1f1ec',
      shortnames: [':vg:'],
      category: 'flags'
    },
    ':flag_vi:': {
      uc_base: '1f1fb-1f1ee',
      uc_output: '1f1fb-1f1ee',
      uc_match: '1f1fb-1f1ee',
      uc_greedy: '1f1fb-1f1ee',
      shortnames: [':vi:'],
      category: 'flags'
    },
    ':flag_vn:': {
      uc_base: '1f1fb-1f1f3',
      uc_output: '1f1fb-1f1f3',
      uc_match: '1f1fb-1f1f3',
      uc_greedy: '1f1fb-1f1f3',
      shortnames: [':vn:'],
      category: 'flags'
    },
    ':flag_vu:': {
      uc_base: '1f1fb-1f1fa',
      uc_output: '1f1fb-1f1fa',
      uc_match: '1f1fb-1f1fa',
      uc_greedy: '1f1fb-1f1fa',
      shortnames: [':vu:'],
      category: 'flags'
    },
    ':flag_wf:': {
      uc_base: '1f1fc-1f1eb',
      uc_output: '1f1fc-1f1eb',
      uc_match: '1f1fc-1f1eb',
      uc_greedy: '1f1fc-1f1eb',
      shortnames: [':wf:'],
      category: 'flags'
    },
    ':flag_ws:': {
      uc_base: '1f1fc-1f1f8',
      uc_output: '1f1fc-1f1f8',
      uc_match: '1f1fc-1f1f8',
      uc_greedy: '1f1fc-1f1f8',
      shortnames: [':ws:'],
      category: 'flags'
    },
    ':flag_xk:': {
      uc_base: '1f1fd-1f1f0',
      uc_output: '1f1fd-1f1f0',
      uc_match: '1f1fd-1f1f0',
      uc_greedy: '1f1fd-1f1f0',
      shortnames: [':xk:'],
      category: 'flags'
    },
    ':flag_ye:': {
      uc_base: '1f1fe-1f1ea',
      uc_output: '1f1fe-1f1ea',
      uc_match: '1f1fe-1f1ea',
      uc_greedy: '1f1fe-1f1ea',
      shortnames: [':ye:'],
      category: 'flags'
    },
    ':flag_yt:': {
      uc_base: '1f1fe-1f1f9',
      uc_output: '1f1fe-1f1f9',
      uc_match: '1f1fe-1f1f9',
      uc_greedy: '1f1fe-1f1f9',
      shortnames: [':yt:'],
      category: 'flags'
    },
    ':flag_za:': {
      uc_base: '1f1ff-1f1e6',
      uc_output: '1f1ff-1f1e6',
      uc_match: '1f1ff-1f1e6',
      uc_greedy: '1f1ff-1f1e6',
      shortnames: [':za:'],
      category: 'flags'
    },
    ':flag_zm:': {
      uc_base: '1f1ff-1f1f2',
      uc_output: '1f1ff-1f1f2',
      uc_match: '1f1ff-1f1f2',
      uc_greedy: '1f1ff-1f1f2',
      shortnames: [':zm:'],
      category: 'flags'
    },
    ':flag_zw:': {
      uc_base: '1f1ff-1f1fc',
      uc_output: '1f1ff-1f1fc',
      uc_match: '1f1ff-1f1fc',
      uc_greedy: '1f1ff-1f1fc',
      shortnames: [':zw:'],
      category: 'flags'
    },
    ':girl_tone1:': {
      uc_base: '1f467-1f3fb',
      uc_output: '1f467-1f3fb',
      uc_match: '1f467-1f3fb',
      uc_greedy: '1f467-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':girl_tone2:': {
      uc_base: '1f467-1f3fc',
      uc_output: '1f467-1f3fc',
      uc_match: '1f467-1f3fc',
      uc_greedy: '1f467-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':girl_tone3:': {
      uc_base: '1f467-1f3fd',
      uc_output: '1f467-1f3fd',
      uc_match: '1f467-1f3fd',
      uc_greedy: '1f467-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':girl_tone4:': {
      uc_base: '1f467-1f3fe',
      uc_output: '1f467-1f3fe',
      uc_match: '1f467-1f3fe',
      uc_greedy: '1f467-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':girl_tone5:': {
      uc_base: '1f467-1f3ff',
      uc_output: '1f467-1f3ff',
      uc_match: '1f467-1f3ff',
      uc_greedy: '1f467-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':guard_tone1:': {
      uc_base: '1f482-1f3fb',
      uc_output: '1f482-1f3fb',
      uc_match: '1f482-1f3fb',
      uc_greedy: '1f482-1f3fb',
      shortnames: [':guardsman_tone1:'],
      category: 'people'
    },
    ':guard_tone2:': {
      uc_base: '1f482-1f3fc',
      uc_output: '1f482-1f3fc',
      uc_match: '1f482-1f3fc',
      uc_greedy: '1f482-1f3fc',
      shortnames: [':guardsman_tone2:'],
      category: 'people'
    },
    ':guard_tone3:': {
      uc_base: '1f482-1f3fd',
      uc_output: '1f482-1f3fd',
      uc_match: '1f482-1f3fd',
      uc_greedy: '1f482-1f3fd',
      shortnames: [':guardsman_tone3:'],
      category: 'people'
    },
    ':guard_tone4:': {
      uc_base: '1f482-1f3fe',
      uc_output: '1f482-1f3fe',
      uc_match: '1f482-1f3fe',
      uc_greedy: '1f482-1f3fe',
      shortnames: [':guardsman_tone4:'],
      category: 'people'
    },
    ':guard_tone5:': {
      uc_base: '1f482-1f3ff',
      uc_output: '1f482-1f3ff',
      uc_match: '1f482-1f3ff',
      uc_greedy: '1f482-1f3ff',
      shortnames: [':guardsman_tone5:'],
      category: 'people'
    },
    ':hand_splayed_tone1:': {
      uc_base: '1f590-1f3fb',
      uc_output: '1f590-1f3fb',
      uc_match: '1f590-fe0f-1f3fb',
      uc_greedy: '1f590-fe0f-1f3fb',
      shortnames: [':raised_hand_with_fingers_splayed_tone1:'],
      category: 'people'
    },
    ':hand_splayed_tone2:': {
      uc_base: '1f590-1f3fc',
      uc_output: '1f590-1f3fc',
      uc_match: '1f590-fe0f-1f3fc',
      uc_greedy: '1f590-fe0f-1f3fc',
      shortnames: [':raised_hand_with_fingers_splayed_tone2:'],
      category: 'people'
    },
    ':hand_splayed_tone3:': {
      uc_base: '1f590-1f3fd',
      uc_output: '1f590-1f3fd',
      uc_match: '1f590-fe0f-1f3fd',
      uc_greedy: '1f590-fe0f-1f3fd',
      shortnames: [':raised_hand_with_fingers_splayed_tone3:'],
      category: 'people'
    },
    ':hand_splayed_tone4:': {
      uc_base: '1f590-1f3fe',
      uc_output: '1f590-1f3fe',
      uc_match: '1f590-fe0f-1f3fe',
      uc_greedy: '1f590-fe0f-1f3fe',
      shortnames: [':raised_hand_with_fingers_splayed_tone4:'],
      category: 'people'
    },
    ':hand_splayed_tone5:': {
      uc_base: '1f590-1f3ff',
      uc_output: '1f590-1f3ff',
      uc_match: '1f590-fe0f-1f3ff',
      uc_greedy: '1f590-fe0f-1f3ff',
      shortnames: [':raised_hand_with_fingers_splayed_tone5:'],
      category: 'people'
    },
    ':horse_racing_tone1:': {
      uc_base: '1f3c7-1f3fb',
      uc_output: '1f3c7-1f3fb',
      uc_match: '1f3c7-1f3fb',
      uc_greedy: '1f3c7-1f3fb',
      shortnames: [],
      category: 'activity'
    },
    ':horse_racing_tone2:': {
      uc_base: '1f3c7-1f3fc',
      uc_output: '1f3c7-1f3fc',
      uc_match: '1f3c7-1f3fc',
      uc_greedy: '1f3c7-1f3fc',
      shortnames: [],
      category: 'activity'
    },
    ':horse_racing_tone3:': {
      uc_base: '1f3c7-1f3fd',
      uc_output: '1f3c7-1f3fd',
      uc_match: '1f3c7-1f3fd',
      uc_greedy: '1f3c7-1f3fd',
      shortnames: [],
      category: 'activity'
    },
    ':horse_racing_tone4:': {
      uc_base: '1f3c7-1f3fe',
      uc_output: '1f3c7-1f3fe',
      uc_match: '1f3c7-1f3fe',
      uc_greedy: '1f3c7-1f3fe',
      shortnames: [],
      category: 'activity'
    },
    ':horse_racing_tone5:': {
      uc_base: '1f3c7-1f3ff',
      uc_output: '1f3c7-1f3ff',
      uc_match: '1f3c7-1f3ff',
      uc_greedy: '1f3c7-1f3ff',
      shortnames: [],
      category: 'activity'
    },
    ':left_facing_fist_tone1:': {
      uc_base: '1f91b-1f3fb',
      uc_output: '1f91b-1f3fb',
      uc_match: '1f91b-1f3fb',
      uc_greedy: '1f91b-1f3fb',
      shortnames: [':left_fist_tone1:'],
      category: 'people'
    },
    ':left_facing_fist_tone2:': {
      uc_base: '1f91b-1f3fc',
      uc_output: '1f91b-1f3fc',
      uc_match: '1f91b-1f3fc',
      uc_greedy: '1f91b-1f3fc',
      shortnames: [':left_fist_tone2:'],
      category: 'people'
    },
    ':left_facing_fist_tone3:': {
      uc_base: '1f91b-1f3fd',
      uc_output: '1f91b-1f3fd',
      uc_match: '1f91b-1f3fd',
      uc_greedy: '1f91b-1f3fd',
      shortnames: [':left_fist_tone3:'],
      category: 'people'
    },
    ':left_facing_fist_tone4:': {
      uc_base: '1f91b-1f3fe',
      uc_output: '1f91b-1f3fe',
      uc_match: '1f91b-1f3fe',
      uc_greedy: '1f91b-1f3fe',
      shortnames: [':left_fist_tone4:'],
      category: 'people'
    },
    ':left_facing_fist_tone5:': {
      uc_base: '1f91b-1f3ff',
      uc_output: '1f91b-1f3ff',
      uc_match: '1f91b-1f3ff',
      uc_greedy: '1f91b-1f3ff',
      shortnames: [':left_fist_tone5:'],
      category: 'people'
    },
    ':levitate_tone1:': {
      uc_base: '1f574-1f3fb',
      uc_output: '1f574-1f3fb',
      uc_match: '1f574-fe0f-1f3fb',
      uc_greedy: '1f574-fe0f-1f3fb',
      shortnames: [
        ':man_in_business_suit_levitating_tone1:',
        ':man_in_business_suit_levitating_light_skin_tone:'
      ],
      category: 'people'
    },
    ':levitate_tone2:': {
      uc_base: '1f574-1f3fc',
      uc_output: '1f574-1f3fc',
      uc_match: '1f574-fe0f-1f3fc',
      uc_greedy: '1f574-fe0f-1f3fc',
      shortnames: [
        ':man_in_business_suit_levitating_tone2:',
        ':man_in_business_suit_levitating_medium_light_skin_tone:'
      ],
      category: 'people'
    },
    ':levitate_tone3:': {
      uc_base: '1f574-1f3fd',
      uc_output: '1f574-1f3fd',
      uc_match: '1f574-fe0f-1f3fd',
      uc_greedy: '1f574-fe0f-1f3fd',
      shortnames: [
        ':man_in_business_suit_levitating_tone3:',
        ':man_in_business_suit_levitating_medium_skin_tone:'
      ],
      category: 'people'
    },
    ':levitate_tone4:': {
      uc_base: '1f574-1f3fe',
      uc_output: '1f574-1f3fe',
      uc_match: '1f574-fe0f-1f3fe',
      uc_greedy: '1f574-fe0f-1f3fe',
      shortnames: [
        ':man_in_business_suit_levitating_tone4:',
        ':man_in_business_suit_levitating_medium_dark_skin_tone:'
      ],
      category: 'people'
    },
    ':levitate_tone5:': {
      uc_base: '1f574-1f3ff',
      uc_output: '1f574-1f3ff',
      uc_match: '1f574-fe0f-1f3ff',
      uc_greedy: '1f574-fe0f-1f3ff',
      shortnames: [
        ':man_in_business_suit_levitating_tone5:',
        ':man_in_business_suit_levitating_dark_skin_tone:'
      ],
      category: 'people'
    },
    ':love_you_gesture_tone1:': {
      uc_base: '1f91f-1f3fb',
      uc_output: '1f91f-1f3fb',
      uc_match: '1f91f-1f3fb',
      uc_greedy: '1f91f-1f3fb',
      shortnames: [':love_you_gesture_light_skin_tone:'],
      category: 'people'
    },
    ':love_you_gesture_tone2:': {
      uc_base: '1f91f-1f3fc',
      uc_output: '1f91f-1f3fc',
      uc_match: '1f91f-1f3fc',
      uc_greedy: '1f91f-1f3fc',
      shortnames: [':love_you_gesture_medium_light_skin_tone:'],
      category: 'people'
    },
    ':love_you_gesture_tone3:': {
      uc_base: '1f91f-1f3fd',
      uc_output: '1f91f-1f3fd',
      uc_match: '1f91f-1f3fd',
      uc_greedy: '1f91f-1f3fd',
      shortnames: [':love_you_gesture_medium_skin_tone:'],
      category: 'people'
    },
    ':love_you_gesture_tone4:': {
      uc_base: '1f91f-1f3fe',
      uc_output: '1f91f-1f3fe',
      uc_match: '1f91f-1f3fe',
      uc_greedy: '1f91f-1f3fe',
      shortnames: [':love_you_gesture_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':love_you_gesture_tone5:': {
      uc_base: '1f91f-1f3ff',
      uc_output: '1f91f-1f3ff',
      uc_match: '1f91f-1f3ff',
      uc_greedy: '1f91f-1f3ff',
      shortnames: [':love_you_gesture_dark_skin_tone:'],
      category: 'people'
    },
    ':mage_tone1:': {
      uc_base: '1f9d9-1f3fb',
      uc_output: '1f9d9-1f3fb',
      uc_match: '1f9d9-1f3fb',
      uc_greedy: '1f9d9-1f3fb',
      shortnames: [':mage_light_skin_tone:'],
      category: 'people'
    },
    ':mage_tone2:': {
      uc_base: '1f9d9-1f3fc',
      uc_output: '1f9d9-1f3fc',
      uc_match: '1f9d9-1f3fc',
      uc_greedy: '1f9d9-1f3fc',
      shortnames: [':mage_medium_light_skin_tone:'],
      category: 'people'
    },
    ':mage_tone3:': {
      uc_base: '1f9d9-1f3fd',
      uc_output: '1f9d9-1f3fd',
      uc_match: '1f9d9-1f3fd',
      uc_greedy: '1f9d9-1f3fd',
      shortnames: [':mage_medium_skin_tone:'],
      category: 'people'
    },
    ':mage_tone4:': {
      uc_base: '1f9d9-1f3fe',
      uc_output: '1f9d9-1f3fe',
      uc_match: '1f9d9-1f3fe',
      uc_greedy: '1f9d9-1f3fe',
      shortnames: [':mage_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':mage_tone5:': {
      uc_base: '1f9d9-1f3ff',
      uc_output: '1f9d9-1f3ff',
      uc_match: '1f9d9-1f3ff',
      uc_greedy: '1f9d9-1f3ff',
      shortnames: [':mage_dark_skin_tone:'],
      category: 'people'
    },
    ':man_dancing_tone1:': {
      uc_base: '1f57a-1f3fb',
      uc_output: '1f57a-1f3fb',
      uc_match: '1f57a-1f3fb',
      uc_greedy: '1f57a-1f3fb',
      shortnames: [':male_dancer_tone1:'],
      category: 'people'
    },
    ':man_dancing_tone2:': {
      uc_base: '1f57a-1f3fc',
      uc_output: '1f57a-1f3fc',
      uc_match: '1f57a-1f3fc',
      uc_greedy: '1f57a-1f3fc',
      shortnames: [':male_dancer_tone2:'],
      category: 'people'
    },
    ':man_dancing_tone3:': {
      uc_base: '1f57a-1f3fd',
      uc_output: '1f57a-1f3fd',
      uc_match: '1f57a-1f3fd',
      uc_greedy: '1f57a-1f3fd',
      shortnames: [':male_dancer_tone3:'],
      category: 'people'
    },
    ':man_dancing_tone4:': {
      uc_base: '1f57a-1f3fe',
      uc_output: '1f57a-1f3fe',
      uc_match: '1f57a-1f3fe',
      uc_greedy: '1f57a-1f3fe',
      shortnames: [':male_dancer_tone4:'],
      category: 'people'
    },
    ':man_dancing_tone5:': {
      uc_base: '1f57a-1f3ff',
      uc_output: '1f57a-1f3ff',
      uc_match: '1f57a-1f3ff',
      uc_greedy: '1f57a-1f3ff',
      shortnames: [':male_dancer_tone5:'],
      category: 'people'
    },
    ':man_in_tuxedo_tone1:': {
      uc_base: '1f935-1f3fb',
      uc_output: '1f935-1f3fb',
      uc_match: '1f935-1f3fb',
      uc_greedy: '1f935-1f3fb',
      shortnames: [':tuxedo_tone1:'],
      category: 'people'
    },
    ':man_in_tuxedo_tone2:': {
      uc_base: '1f935-1f3fc',
      uc_output: '1f935-1f3fc',
      uc_match: '1f935-1f3fc',
      uc_greedy: '1f935-1f3fc',
      shortnames: [':tuxedo_tone2:'],
      category: 'people'
    },
    ':man_in_tuxedo_tone3:': {
      uc_base: '1f935-1f3fd',
      uc_output: '1f935-1f3fd',
      uc_match: '1f935-1f3fd',
      uc_greedy: '1f935-1f3fd',
      shortnames: [':tuxedo_tone3:'],
      category: 'people'
    },
    ':man_in_tuxedo_tone4:': {
      uc_base: '1f935-1f3fe',
      uc_output: '1f935-1f3fe',
      uc_match: '1f935-1f3fe',
      uc_greedy: '1f935-1f3fe',
      shortnames: [':tuxedo_tone4:'],
      category: 'people'
    },
    ':man_in_tuxedo_tone5:': {
      uc_base: '1f935-1f3ff',
      uc_output: '1f935-1f3ff',
      uc_match: '1f935-1f3ff',
      uc_greedy: '1f935-1f3ff',
      shortnames: [':tuxedo_tone5:'],
      category: 'people'
    },
    ':man_tone1:': {
      uc_base: '1f468-1f3fb',
      uc_output: '1f468-1f3fb',
      uc_match: '1f468-1f3fb',
      uc_greedy: '1f468-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':man_tone2:': {
      uc_base: '1f468-1f3fc',
      uc_output: '1f468-1f3fc',
      uc_match: '1f468-1f3fc',
      uc_greedy: '1f468-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':man_tone3:': {
      uc_base: '1f468-1f3fd',
      uc_output: '1f468-1f3fd',
      uc_match: '1f468-1f3fd',
      uc_greedy: '1f468-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':man_tone4:': {
      uc_base: '1f468-1f3fe',
      uc_output: '1f468-1f3fe',
      uc_match: '1f468-1f3fe',
      uc_greedy: '1f468-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':man_tone5:': {
      uc_base: '1f468-1f3ff',
      uc_output: '1f468-1f3ff',
      uc_match: '1f468-1f3ff',
      uc_greedy: '1f468-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':man_with_chinese_cap_tone1:': {
      uc_base: '1f472-1f3fb',
      uc_output: '1f472-1f3fb',
      uc_match: '1f472-1f3fb',
      uc_greedy: '1f472-1f3fb',
      shortnames: [':man_with_gua_pi_mao_tone1:'],
      category: 'people'
    },
    ':man_with_chinese_cap_tone2:': {
      uc_base: '1f472-1f3fc',
      uc_output: '1f472-1f3fc',
      uc_match: '1f472-1f3fc',
      uc_greedy: '1f472-1f3fc',
      shortnames: [':man_with_gua_pi_mao_tone2:'],
      category: 'people'
    },
    ':man_with_chinese_cap_tone3:': {
      uc_base: '1f472-1f3fd',
      uc_output: '1f472-1f3fd',
      uc_match: '1f472-1f3fd',
      uc_greedy: '1f472-1f3fd',
      shortnames: [':man_with_gua_pi_mao_tone3:'],
      category: 'people'
    },
    ':man_with_chinese_cap_tone4:': {
      uc_base: '1f472-1f3fe',
      uc_output: '1f472-1f3fe',
      uc_match: '1f472-1f3fe',
      uc_greedy: '1f472-1f3fe',
      shortnames: [':man_with_gua_pi_mao_tone4:'],
      category: 'people'
    },
    ':man_with_chinese_cap_tone5:': {
      uc_base: '1f472-1f3ff',
      uc_output: '1f472-1f3ff',
      uc_match: '1f472-1f3ff',
      uc_greedy: '1f472-1f3ff',
      shortnames: [':man_with_gua_pi_mao_tone5:'],
      category: 'people'
    },
    ':merperson_tone1:': {
      uc_base: '1f9dc-1f3fb',
      uc_output: '1f9dc-1f3fb',
      uc_match: '1f9dc-1f3fb',
      uc_greedy: '1f9dc-1f3fb',
      shortnames: [':merperson_light_skin_tone:'],
      category: 'people'
    },
    ':merperson_tone2:': {
      uc_base: '1f9dc-1f3fc',
      uc_output: '1f9dc-1f3fc',
      uc_match: '1f9dc-1f3fc',
      uc_greedy: '1f9dc-1f3fc',
      shortnames: [':merperson_medium_light_skin_tone:'],
      category: 'people'
    },
    ':merperson_tone3:': {
      uc_base: '1f9dc-1f3fd',
      uc_output: '1f9dc-1f3fd',
      uc_match: '1f9dc-1f3fd',
      uc_greedy: '1f9dc-1f3fd',
      shortnames: [':merperson_medium_skin_tone:'],
      category: 'people'
    },
    ':merperson_tone4:': {
      uc_base: '1f9dc-1f3fe',
      uc_output: '1f9dc-1f3fe',
      uc_match: '1f9dc-1f3fe',
      uc_greedy: '1f9dc-1f3fe',
      shortnames: [':merperson_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':merperson_tone5:': {
      uc_base: '1f9dc-1f3ff',
      uc_output: '1f9dc-1f3ff',
      uc_match: '1f9dc-1f3ff',
      uc_greedy: '1f9dc-1f3ff',
      shortnames: [':merperson_dark_skin_tone:'],
      category: 'people'
    },
    ':metal_tone1:': {
      uc_base: '1f918-1f3fb',
      uc_output: '1f918-1f3fb',
      uc_match: '1f918-1f3fb',
      uc_greedy: '1f918-1f3fb',
      shortnames: [':sign_of_the_horns_tone1:'],
      category: 'people'
    },
    ':metal_tone2:': {
      uc_base: '1f918-1f3fc',
      uc_output: '1f918-1f3fc',
      uc_match: '1f918-1f3fc',
      uc_greedy: '1f918-1f3fc',
      shortnames: [':sign_of_the_horns_tone2:'],
      category: 'people'
    },
    ':metal_tone3:': {
      uc_base: '1f918-1f3fd',
      uc_output: '1f918-1f3fd',
      uc_match: '1f918-1f3fd',
      uc_greedy: '1f918-1f3fd',
      shortnames: [':sign_of_the_horns_tone3:'],
      category: 'people'
    },
    ':metal_tone4:': {
      uc_base: '1f918-1f3fe',
      uc_output: '1f918-1f3fe',
      uc_match: '1f918-1f3fe',
      uc_greedy: '1f918-1f3fe',
      shortnames: [':sign_of_the_horns_tone4:'],
      category: 'people'
    },
    ':metal_tone5:': {
      uc_base: '1f918-1f3ff',
      uc_output: '1f918-1f3ff',
      uc_match: '1f918-1f3ff',
      uc_greedy: '1f918-1f3ff',
      shortnames: [':sign_of_the_horns_tone5:'],
      category: 'people'
    },
    ':middle_finger_tone1:': {
      uc_base: '1f595-1f3fb',
      uc_output: '1f595-1f3fb',
      uc_match: '1f595-1f3fb',
      uc_greedy: '1f595-1f3fb',
      shortnames: [':reversed_hand_with_middle_finger_extended_tone1:'],
      category: 'people'
    },
    ':middle_finger_tone2:': {
      uc_base: '1f595-1f3fc',
      uc_output: '1f595-1f3fc',
      uc_match: '1f595-1f3fc',
      uc_greedy: '1f595-1f3fc',
      shortnames: [':reversed_hand_with_middle_finger_extended_tone2:'],
      category: 'people'
    },
    ':middle_finger_tone3:': {
      uc_base: '1f595-1f3fd',
      uc_output: '1f595-1f3fd',
      uc_match: '1f595-1f3fd',
      uc_greedy: '1f595-1f3fd',
      shortnames: [':reversed_hand_with_middle_finger_extended_tone3:'],
      category: 'people'
    },
    ':middle_finger_tone4:': {
      uc_base: '1f595-1f3fe',
      uc_output: '1f595-1f3fe',
      uc_match: '1f595-1f3fe',
      uc_greedy: '1f595-1f3fe',
      shortnames: [':reversed_hand_with_middle_finger_extended_tone4:'],
      category: 'people'
    },
    ':middle_finger_tone5:': {
      uc_base: '1f595-1f3ff',
      uc_output: '1f595-1f3ff',
      uc_match: '1f595-1f3ff',
      uc_greedy: '1f595-1f3ff',
      shortnames: [':reversed_hand_with_middle_finger_extended_tone5:'],
      category: 'people'
    },
    ':mrs_claus_tone1:': {
      uc_base: '1f936-1f3fb',
      uc_output: '1f936-1f3fb',
      uc_match: '1f936-1f3fb',
      uc_greedy: '1f936-1f3fb',
      shortnames: [':mother_christmas_tone1:'],
      category: 'people'
    },
    ':mrs_claus_tone2:': {
      uc_base: '1f936-1f3fc',
      uc_output: '1f936-1f3fc',
      uc_match: '1f936-1f3fc',
      uc_greedy: '1f936-1f3fc',
      shortnames: [':mother_christmas_tone2:'],
      category: 'people'
    },
    ':mrs_claus_tone3:': {
      uc_base: '1f936-1f3fd',
      uc_output: '1f936-1f3fd',
      uc_match: '1f936-1f3fd',
      uc_greedy: '1f936-1f3fd',
      shortnames: [':mother_christmas_tone3:'],
      category: 'people'
    },
    ':mrs_claus_tone4:': {
      uc_base: '1f936-1f3fe',
      uc_output: '1f936-1f3fe',
      uc_match: '1f936-1f3fe',
      uc_greedy: '1f936-1f3fe',
      shortnames: [':mother_christmas_tone4:'],
      category: 'people'
    },
    ':mrs_claus_tone5:': {
      uc_base: '1f936-1f3ff',
      uc_output: '1f936-1f3ff',
      uc_match: '1f936-1f3ff',
      uc_greedy: '1f936-1f3ff',
      shortnames: [':mother_christmas_tone5:'],
      category: 'people'
    },
    ':muscle_tone1:': {
      uc_base: '1f4aa-1f3fb',
      uc_output: '1f4aa-1f3fb',
      uc_match: '1f4aa-1f3fb',
      uc_greedy: '1f4aa-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':muscle_tone2:': {
      uc_base: '1f4aa-1f3fc',
      uc_output: '1f4aa-1f3fc',
      uc_match: '1f4aa-1f3fc',
      uc_greedy: '1f4aa-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':muscle_tone3:': {
      uc_base: '1f4aa-1f3fd',
      uc_output: '1f4aa-1f3fd',
      uc_match: '1f4aa-1f3fd',
      uc_greedy: '1f4aa-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':muscle_tone4:': {
      uc_base: '1f4aa-1f3fe',
      uc_output: '1f4aa-1f3fe',
      uc_match: '1f4aa-1f3fe',
      uc_greedy: '1f4aa-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':muscle_tone5:': {
      uc_base: '1f4aa-1f3ff',
      uc_output: '1f4aa-1f3ff',
      uc_match: '1f4aa-1f3ff',
      uc_greedy: '1f4aa-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':nail_care_tone1:': {
      uc_base: '1f485-1f3fb',
      uc_output: '1f485-1f3fb',
      uc_match: '1f485-1f3fb',
      uc_greedy: '1f485-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':nail_care_tone2:': {
      uc_base: '1f485-1f3fc',
      uc_output: '1f485-1f3fc',
      uc_match: '1f485-1f3fc',
      uc_greedy: '1f485-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':nail_care_tone3:': {
      uc_base: '1f485-1f3fd',
      uc_output: '1f485-1f3fd',
      uc_match: '1f485-1f3fd',
      uc_greedy: '1f485-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':nail_care_tone4:': {
      uc_base: '1f485-1f3fe',
      uc_output: '1f485-1f3fe',
      uc_match: '1f485-1f3fe',
      uc_greedy: '1f485-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':nail_care_tone5:': {
      uc_base: '1f485-1f3ff',
      uc_output: '1f485-1f3ff',
      uc_match: '1f485-1f3ff',
      uc_greedy: '1f485-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':nose_tone1:': {
      uc_base: '1f443-1f3fb',
      uc_output: '1f443-1f3fb',
      uc_match: '1f443-1f3fb',
      uc_greedy: '1f443-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':nose_tone2:': {
      uc_base: '1f443-1f3fc',
      uc_output: '1f443-1f3fc',
      uc_match: '1f443-1f3fc',
      uc_greedy: '1f443-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':nose_tone3:': {
      uc_base: '1f443-1f3fd',
      uc_output: '1f443-1f3fd',
      uc_match: '1f443-1f3fd',
      uc_greedy: '1f443-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':nose_tone4:': {
      uc_base: '1f443-1f3fe',
      uc_output: '1f443-1f3fe',
      uc_match: '1f443-1f3fe',
      uc_greedy: '1f443-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':nose_tone5:': {
      uc_base: '1f443-1f3ff',
      uc_output: '1f443-1f3ff',
      uc_match: '1f443-1f3ff',
      uc_greedy: '1f443-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':ok_hand_tone1:': {
      uc_base: '1f44c-1f3fb',
      uc_output: '1f44c-1f3fb',
      uc_match: '1f44c-1f3fb',
      uc_greedy: '1f44c-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':ok_hand_tone2:': {
      uc_base: '1f44c-1f3fc',
      uc_output: '1f44c-1f3fc',
      uc_match: '1f44c-1f3fc',
      uc_greedy: '1f44c-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':ok_hand_tone3:': {
      uc_base: '1f44c-1f3fd',
      uc_output: '1f44c-1f3fd',
      uc_match: '1f44c-1f3fd',
      uc_greedy: '1f44c-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':ok_hand_tone4:': {
      uc_base: '1f44c-1f3fe',
      uc_output: '1f44c-1f3fe',
      uc_match: '1f44c-1f3fe',
      uc_greedy: '1f44c-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':ok_hand_tone5:': {
      uc_base: '1f44c-1f3ff',
      uc_output: '1f44c-1f3ff',
      uc_match: '1f44c-1f3ff',
      uc_greedy: '1f44c-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':older_adult_tone1:': {
      uc_base: '1f9d3-1f3fb',
      uc_output: '1f9d3-1f3fb',
      uc_match: '1f9d3-1f3fb',
      uc_greedy: '1f9d3-1f3fb',
      shortnames: [':older_adult_light_skin_tone:'],
      category: 'people'
    },
    ':older_adult_tone2:': {
      uc_base: '1f9d3-1f3fc',
      uc_output: '1f9d3-1f3fc',
      uc_match: '1f9d3-1f3fc',
      uc_greedy: '1f9d3-1f3fc',
      shortnames: [':older_adult_medium_light_skin_tone:'],
      category: 'people'
    },
    ':older_adult_tone3:': {
      uc_base: '1f9d3-1f3fd',
      uc_output: '1f9d3-1f3fd',
      uc_match: '1f9d3-1f3fd',
      uc_greedy: '1f9d3-1f3fd',
      shortnames: [':older_adult_medium_skin_tone:'],
      category: 'people'
    },
    ':older_adult_tone4:': {
      uc_base: '1f9d3-1f3fe',
      uc_output: '1f9d3-1f3fe',
      uc_match: '1f9d3-1f3fe',
      uc_greedy: '1f9d3-1f3fe',
      shortnames: [':older_adult_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':older_adult_tone5:': {
      uc_base: '1f9d3-1f3ff',
      uc_output: '1f9d3-1f3ff',
      uc_match: '1f9d3-1f3ff',
      uc_greedy: '1f9d3-1f3ff',
      shortnames: [':older_adult_dark_skin_tone:'],
      category: 'people'
    },
    ':older_man_tone1:': {
      uc_base: '1f474-1f3fb',
      uc_output: '1f474-1f3fb',
      uc_match: '1f474-1f3fb',
      uc_greedy: '1f474-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':older_man_tone2:': {
      uc_base: '1f474-1f3fc',
      uc_output: '1f474-1f3fc',
      uc_match: '1f474-1f3fc',
      uc_greedy: '1f474-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':older_man_tone3:': {
      uc_base: '1f474-1f3fd',
      uc_output: '1f474-1f3fd',
      uc_match: '1f474-1f3fd',
      uc_greedy: '1f474-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':older_man_tone4:': {
      uc_base: '1f474-1f3fe',
      uc_output: '1f474-1f3fe',
      uc_match: '1f474-1f3fe',
      uc_greedy: '1f474-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':older_man_tone5:': {
      uc_base: '1f474-1f3ff',
      uc_output: '1f474-1f3ff',
      uc_match: '1f474-1f3ff',
      uc_greedy: '1f474-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':older_woman_tone1:': {
      uc_base: '1f475-1f3fb',
      uc_output: '1f475-1f3fb',
      uc_match: '1f475-1f3fb',
      uc_greedy: '1f475-1f3fb',
      shortnames: [':grandma_tone1:'],
      category: 'people'
    },
    ':older_woman_tone2:': {
      uc_base: '1f475-1f3fc',
      uc_output: '1f475-1f3fc',
      uc_match: '1f475-1f3fc',
      uc_greedy: '1f475-1f3fc',
      shortnames: [':grandma_tone2:'],
      category: 'people'
    },
    ':older_woman_tone3:': {
      uc_base: '1f475-1f3fd',
      uc_output: '1f475-1f3fd',
      uc_match: '1f475-1f3fd',
      uc_greedy: '1f475-1f3fd',
      shortnames: [':grandma_tone3:'],
      category: 'people'
    },
    ':older_woman_tone4:': {
      uc_base: '1f475-1f3fe',
      uc_output: '1f475-1f3fe',
      uc_match: '1f475-1f3fe',
      uc_greedy: '1f475-1f3fe',
      shortnames: [':grandma_tone4:'],
      category: 'people'
    },
    ':older_woman_tone5:': {
      uc_base: '1f475-1f3ff',
      uc_output: '1f475-1f3ff',
      uc_match: '1f475-1f3ff',
      uc_greedy: '1f475-1f3ff',
      shortnames: [':grandma_tone5:'],
      category: 'people'
    },
    ':open_hands_tone1:': {
      uc_base: '1f450-1f3fb',
      uc_output: '1f450-1f3fb',
      uc_match: '1f450-1f3fb',
      uc_greedy: '1f450-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':open_hands_tone2:': {
      uc_base: '1f450-1f3fc',
      uc_output: '1f450-1f3fc',
      uc_match: '1f450-1f3fc',
      uc_greedy: '1f450-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':open_hands_tone3:': {
      uc_base: '1f450-1f3fd',
      uc_output: '1f450-1f3fd',
      uc_match: '1f450-1f3fd',
      uc_greedy: '1f450-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':open_hands_tone4:': {
      uc_base: '1f450-1f3fe',
      uc_output: '1f450-1f3fe',
      uc_match: '1f450-1f3fe',
      uc_greedy: '1f450-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':open_hands_tone5:': {
      uc_base: '1f450-1f3ff',
      uc_output: '1f450-1f3ff',
      uc_match: '1f450-1f3ff',
      uc_greedy: '1f450-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':palms_up_together_tone1:': {
      uc_base: '1f932-1f3fb',
      uc_output: '1f932-1f3fb',
      uc_match: '1f932-1f3fb',
      uc_greedy: '1f932-1f3fb',
      shortnames: [':palms_up_together_light_skin_tone:'],
      category: 'people'
    },
    ':palms_up_together_tone2:': {
      uc_base: '1f932-1f3fc',
      uc_output: '1f932-1f3fc',
      uc_match: '1f932-1f3fc',
      uc_greedy: '1f932-1f3fc',
      shortnames: [':palms_up_together_medium_light_skin_tone:'],
      category: 'people'
    },
    ':palms_up_together_tone3:': {
      uc_base: '1f932-1f3fd',
      uc_output: '1f932-1f3fd',
      uc_match: '1f932-1f3fd',
      uc_greedy: '1f932-1f3fd',
      shortnames: [':palms_up_together_medium_skin_tone:'],
      category: 'people'
    },
    ':palms_up_together_tone4:': {
      uc_base: '1f932-1f3fe',
      uc_output: '1f932-1f3fe',
      uc_match: '1f932-1f3fe',
      uc_greedy: '1f932-1f3fe',
      shortnames: [':palms_up_together_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':palms_up_together_tone5:': {
      uc_base: '1f932-1f3ff',
      uc_output: '1f932-1f3ff',
      uc_match: '1f932-1f3ff',
      uc_greedy: '1f932-1f3ff',
      shortnames: [':palms_up_together_dark_skin_tone:'],
      category: 'people'
    },
    ':person_biking_tone1:': {
      uc_base: '1f6b4-1f3fb',
      uc_output: '1f6b4-1f3fb',
      uc_match: '1f6b4-1f3fb',
      uc_greedy: '1f6b4-1f3fb',
      shortnames: [':bicyclist_tone1:'],
      category: 'activity'
    },
    ':person_biking_tone2:': {
      uc_base: '1f6b4-1f3fc',
      uc_output: '1f6b4-1f3fc',
      uc_match: '1f6b4-1f3fc',
      uc_greedy: '1f6b4-1f3fc',
      shortnames: [':bicyclist_tone2:'],
      category: 'activity'
    },
    ':person_biking_tone3:': {
      uc_base: '1f6b4-1f3fd',
      uc_output: '1f6b4-1f3fd',
      uc_match: '1f6b4-1f3fd',
      uc_greedy: '1f6b4-1f3fd',
      shortnames: [':bicyclist_tone3:'],
      category: 'activity'
    },
    ':person_biking_tone4:': {
      uc_base: '1f6b4-1f3fe',
      uc_output: '1f6b4-1f3fe',
      uc_match: '1f6b4-1f3fe',
      uc_greedy: '1f6b4-1f3fe',
      shortnames: [':bicyclist_tone4:'],
      category: 'activity'
    },
    ':person_biking_tone5:': {
      uc_base: '1f6b4-1f3ff',
      uc_output: '1f6b4-1f3ff',
      uc_match: '1f6b4-1f3ff',
      uc_greedy: '1f6b4-1f3ff',
      shortnames: [':bicyclist_tone5:'],
      category: 'activity'
    },
    ':person_bowing_tone1:': {
      uc_base: '1f647-1f3fb',
      uc_output: '1f647-1f3fb',
      uc_match: '1f647-1f3fb',
      uc_greedy: '1f647-1f3fb',
      shortnames: [':bow_tone1:'],
      category: 'people'
    },
    ':person_bowing_tone2:': {
      uc_base: '1f647-1f3fc',
      uc_output: '1f647-1f3fc',
      uc_match: '1f647-1f3fc',
      uc_greedy: '1f647-1f3fc',
      shortnames: [':bow_tone2:'],
      category: 'people'
    },
    ':person_bowing_tone3:': {
      uc_base: '1f647-1f3fd',
      uc_output: '1f647-1f3fd',
      uc_match: '1f647-1f3fd',
      uc_greedy: '1f647-1f3fd',
      shortnames: [':bow_tone3:'],
      category: 'people'
    },
    ':person_bowing_tone4:': {
      uc_base: '1f647-1f3fe',
      uc_output: '1f647-1f3fe',
      uc_match: '1f647-1f3fe',
      uc_greedy: '1f647-1f3fe',
      shortnames: [':bow_tone4:'],
      category: 'people'
    },
    ':person_bowing_tone5:': {
      uc_base: '1f647-1f3ff',
      uc_output: '1f647-1f3ff',
      uc_match: '1f647-1f3ff',
      uc_greedy: '1f647-1f3ff',
      shortnames: [':bow_tone5:'],
      category: 'people'
    },
    ':person_climbing_tone1:': {
      uc_base: '1f9d7-1f3fb',
      uc_output: '1f9d7-1f3fb',
      uc_match: '1f9d7-1f3fb',
      uc_greedy: '1f9d7-1f3fb',
      shortnames: [':person_climbing_light_skin_tone:'],
      category: 'activity'
    },
    ':person_climbing_tone2:': {
      uc_base: '1f9d7-1f3fc',
      uc_output: '1f9d7-1f3fc',
      uc_match: '1f9d7-1f3fc',
      uc_greedy: '1f9d7-1f3fc',
      shortnames: [':person_climbing_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':person_climbing_tone3:': {
      uc_base: '1f9d7-1f3fd',
      uc_output: '1f9d7-1f3fd',
      uc_match: '1f9d7-1f3fd',
      uc_greedy: '1f9d7-1f3fd',
      shortnames: [':person_climbing_medium_skin_tone:'],
      category: 'activity'
    },
    ':person_climbing_tone4:': {
      uc_base: '1f9d7-1f3fe',
      uc_output: '1f9d7-1f3fe',
      uc_match: '1f9d7-1f3fe',
      uc_greedy: '1f9d7-1f3fe',
      shortnames: [':person_climbing_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':person_climbing_tone5:': {
      uc_base: '1f9d7-1f3ff',
      uc_output: '1f9d7-1f3ff',
      uc_match: '1f9d7-1f3ff',
      uc_greedy: '1f9d7-1f3ff',
      shortnames: [':person_climbing_dark_skin_tone:'],
      category: 'activity'
    },
    ':person_doing_cartwheel_tone1:': {
      uc_base: '1f938-1f3fb',
      uc_output: '1f938-1f3fb',
      uc_match: '1f938-1f3fb',
      uc_greedy: '1f938-1f3fb',
      shortnames: [':cartwheel_tone1:'],
      category: 'activity'
    },
    ':person_doing_cartwheel_tone2:': {
      uc_base: '1f938-1f3fc',
      uc_output: '1f938-1f3fc',
      uc_match: '1f938-1f3fc',
      uc_greedy: '1f938-1f3fc',
      shortnames: [':cartwheel_tone2:'],
      category: 'activity'
    },
    ':person_doing_cartwheel_tone3:': {
      uc_base: '1f938-1f3fd',
      uc_output: '1f938-1f3fd',
      uc_match: '1f938-1f3fd',
      uc_greedy: '1f938-1f3fd',
      shortnames: [':cartwheel_tone3:'],
      category: 'activity'
    },
    ':person_doing_cartwheel_tone4:': {
      uc_base: '1f938-1f3fe',
      uc_output: '1f938-1f3fe',
      uc_match: '1f938-1f3fe',
      uc_greedy: '1f938-1f3fe',
      shortnames: [':cartwheel_tone4:'],
      category: 'activity'
    },
    ':person_doing_cartwheel_tone5:': {
      uc_base: '1f938-1f3ff',
      uc_output: '1f938-1f3ff',
      uc_match: '1f938-1f3ff',
      uc_greedy: '1f938-1f3ff',
      shortnames: [':cartwheel_tone5:'],
      category: 'activity'
    },
    ':person_facepalming_tone1:': {
      uc_base: '1f926-1f3fb',
      uc_output: '1f926-1f3fb',
      uc_match: '1f926-1f3fb',
      uc_greedy: '1f926-1f3fb',
      shortnames: [':face_palm_tone1:', ':facepalm_tone1:'],
      category: 'people'
    },
    ':person_facepalming_tone2:': {
      uc_base: '1f926-1f3fc',
      uc_output: '1f926-1f3fc',
      uc_match: '1f926-1f3fc',
      uc_greedy: '1f926-1f3fc',
      shortnames: [':face_palm_tone2:', ':facepalm_tone2:'],
      category: 'people'
    },
    ':person_facepalming_tone3:': {
      uc_base: '1f926-1f3fd',
      uc_output: '1f926-1f3fd',
      uc_match: '1f926-1f3fd',
      uc_greedy: '1f926-1f3fd',
      shortnames: [':face_palm_tone3:', ':facepalm_tone3:'],
      category: 'people'
    },
    ':person_facepalming_tone4:': {
      uc_base: '1f926-1f3fe',
      uc_output: '1f926-1f3fe',
      uc_match: '1f926-1f3fe',
      uc_greedy: '1f926-1f3fe',
      shortnames: [':face_palm_tone4:', ':facepalm_tone4:'],
      category: 'people'
    },
    ':person_facepalming_tone5:': {
      uc_base: '1f926-1f3ff',
      uc_output: '1f926-1f3ff',
      uc_match: '1f926-1f3ff',
      uc_greedy: '1f926-1f3ff',
      shortnames: [':face_palm_tone5:', ':facepalm_tone5:'],
      category: 'people'
    },
    ':person_frowning_tone1:': {
      uc_base: '1f64d-1f3fb',
      uc_output: '1f64d-1f3fb',
      uc_match: '1f64d-1f3fb',
      uc_greedy: '1f64d-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':person_frowning_tone2:': {
      uc_base: '1f64d-1f3fc',
      uc_output: '1f64d-1f3fc',
      uc_match: '1f64d-1f3fc',
      uc_greedy: '1f64d-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':person_frowning_tone3:': {
      uc_base: '1f64d-1f3fd',
      uc_output: '1f64d-1f3fd',
      uc_match: '1f64d-1f3fd',
      uc_greedy: '1f64d-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':person_frowning_tone4:': {
      uc_base: '1f64d-1f3fe',
      uc_output: '1f64d-1f3fe',
      uc_match: '1f64d-1f3fe',
      uc_greedy: '1f64d-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':person_frowning_tone5:': {
      uc_base: '1f64d-1f3ff',
      uc_output: '1f64d-1f3ff',
      uc_match: '1f64d-1f3ff',
      uc_greedy: '1f64d-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':person_gesturing_no_tone1:': {
      uc_base: '1f645-1f3fb',
      uc_output: '1f645-1f3fb',
      uc_match: '1f645-1f3fb',
      uc_greedy: '1f645-1f3fb',
      shortnames: [':no_good_tone1:'],
      category: 'people'
    },
    ':person_gesturing_no_tone2:': {
      uc_base: '1f645-1f3fc',
      uc_output: '1f645-1f3fc',
      uc_match: '1f645-1f3fc',
      uc_greedy: '1f645-1f3fc',
      shortnames: [':no_good_tone2:'],
      category: 'people'
    },
    ':person_gesturing_no_tone3:': {
      uc_base: '1f645-1f3fd',
      uc_output: '1f645-1f3fd',
      uc_match: '1f645-1f3fd',
      uc_greedy: '1f645-1f3fd',
      shortnames: [':no_good_tone3:'],
      category: 'people'
    },
    ':person_gesturing_no_tone4:': {
      uc_base: '1f645-1f3fe',
      uc_output: '1f645-1f3fe',
      uc_match: '1f645-1f3fe',
      uc_greedy: '1f645-1f3fe',
      shortnames: [':no_good_tone4:'],
      category: 'people'
    },
    ':person_gesturing_no_tone5:': {
      uc_base: '1f645-1f3ff',
      uc_output: '1f645-1f3ff',
      uc_match: '1f645-1f3ff',
      uc_greedy: '1f645-1f3ff',
      shortnames: [':no_good_tone5:'],
      category: 'people'
    },
    ':person_gesturing_ok_tone1:': {
      uc_base: '1f646-1f3fb',
      uc_output: '1f646-1f3fb',
      uc_match: '1f646-1f3fb',
      uc_greedy: '1f646-1f3fb',
      shortnames: [':ok_woman_tone1:'],
      category: 'people'
    },
    ':person_gesturing_ok_tone2:': {
      uc_base: '1f646-1f3fc',
      uc_output: '1f646-1f3fc',
      uc_match: '1f646-1f3fc',
      uc_greedy: '1f646-1f3fc',
      shortnames: [':ok_woman_tone2:'],
      category: 'people'
    },
    ':person_gesturing_ok_tone3:': {
      uc_base: '1f646-1f3fd',
      uc_output: '1f646-1f3fd',
      uc_match: '1f646-1f3fd',
      uc_greedy: '1f646-1f3fd',
      shortnames: [':ok_woman_tone3:'],
      category: 'people'
    },
    ':person_gesturing_ok_tone4:': {
      uc_base: '1f646-1f3fe',
      uc_output: '1f646-1f3fe',
      uc_match: '1f646-1f3fe',
      uc_greedy: '1f646-1f3fe',
      shortnames: [':ok_woman_tone4:'],
      category: 'people'
    },
    ':person_gesturing_ok_tone5:': {
      uc_base: '1f646-1f3ff',
      uc_output: '1f646-1f3ff',
      uc_match: '1f646-1f3ff',
      uc_greedy: '1f646-1f3ff',
      shortnames: [':ok_woman_tone5:'],
      category: 'people'
    },
    ':person_getting_haircut_tone1:': {
      uc_base: '1f487-1f3fb',
      uc_output: '1f487-1f3fb',
      uc_match: '1f487-1f3fb',
      uc_greedy: '1f487-1f3fb',
      shortnames: [':haircut_tone1:'],
      category: 'people'
    },
    ':person_getting_haircut_tone2:': {
      uc_base: '1f487-1f3fc',
      uc_output: '1f487-1f3fc',
      uc_match: '1f487-1f3fc',
      uc_greedy: '1f487-1f3fc',
      shortnames: [':haircut_tone2:'],
      category: 'people'
    },
    ':person_getting_haircut_tone3:': {
      uc_base: '1f487-1f3fd',
      uc_output: '1f487-1f3fd',
      uc_match: '1f487-1f3fd',
      uc_greedy: '1f487-1f3fd',
      shortnames: [':haircut_tone3:'],
      category: 'people'
    },
    ':person_getting_haircut_tone4:': {
      uc_base: '1f487-1f3fe',
      uc_output: '1f487-1f3fe',
      uc_match: '1f487-1f3fe',
      uc_greedy: '1f487-1f3fe',
      shortnames: [':haircut_tone4:'],
      category: 'people'
    },
    ':person_getting_haircut_tone5:': {
      uc_base: '1f487-1f3ff',
      uc_output: '1f487-1f3ff',
      uc_match: '1f487-1f3ff',
      uc_greedy: '1f487-1f3ff',
      shortnames: [':haircut_tone5:'],
      category: 'people'
    },
    ':person_getting_massage_tone1:': {
      uc_base: '1f486-1f3fb',
      uc_output: '1f486-1f3fb',
      uc_match: '1f486-1f3fb',
      uc_greedy: '1f486-1f3fb',
      shortnames: [':massage_tone1:'],
      category: 'people'
    },
    ':person_getting_massage_tone2:': {
      uc_base: '1f486-1f3fc',
      uc_output: '1f486-1f3fc',
      uc_match: '1f486-1f3fc',
      uc_greedy: '1f486-1f3fc',
      shortnames: [':massage_tone2:'],
      category: 'people'
    },
    ':person_getting_massage_tone3:': {
      uc_base: '1f486-1f3fd',
      uc_output: '1f486-1f3fd',
      uc_match: '1f486-1f3fd',
      uc_greedy: '1f486-1f3fd',
      shortnames: [':massage_tone3:'],
      category: 'people'
    },
    ':person_getting_massage_tone4:': {
      uc_base: '1f486-1f3fe',
      uc_output: '1f486-1f3fe',
      uc_match: '1f486-1f3fe',
      uc_greedy: '1f486-1f3fe',
      shortnames: [':massage_tone4:'],
      category: 'people'
    },
    ':person_getting_massage_tone5:': {
      uc_base: '1f486-1f3ff',
      uc_output: '1f486-1f3ff',
      uc_match: '1f486-1f3ff',
      uc_greedy: '1f486-1f3ff',
      shortnames: [':massage_tone5:'],
      category: 'people'
    },
    ':person_golfing_tone1:': {
      uc_base: '1f3cc-1f3fb',
      uc_output: '1f3cc-1f3fb',
      uc_match: '1f3cc-fe0f-1f3fb',
      uc_greedy: '1f3cc-fe0f-1f3fb',
      shortnames: [':person_golfing_light_skin_tone:'],
      category: 'activity'
    },
    ':person_golfing_tone2:': {
      uc_base: '1f3cc-1f3fc',
      uc_output: '1f3cc-1f3fc',
      uc_match: '1f3cc-fe0f-1f3fc',
      uc_greedy: '1f3cc-fe0f-1f3fc',
      shortnames: [':person_golfing_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':person_golfing_tone3:': {
      uc_base: '1f3cc-1f3fd',
      uc_output: '1f3cc-1f3fd',
      uc_match: '1f3cc-fe0f-1f3fd',
      uc_greedy: '1f3cc-fe0f-1f3fd',
      shortnames: [':person_golfing_medium_skin_tone:'],
      category: 'activity'
    },
    ':person_golfing_tone4:': {
      uc_base: '1f3cc-1f3fe',
      uc_output: '1f3cc-1f3fe',
      uc_match: '1f3cc-fe0f-1f3fe',
      uc_greedy: '1f3cc-fe0f-1f3fe',
      shortnames: [':person_golfing_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':person_golfing_tone5:': {
      uc_base: '1f3cc-1f3ff',
      uc_output: '1f3cc-1f3ff',
      uc_match: '1f3cc-fe0f-1f3ff',
      uc_greedy: '1f3cc-fe0f-1f3ff',
      shortnames: [':person_golfing_dark_skin_tone:'],
      category: 'activity'
    },
    ':person_in_bed_tone1:': {
      uc_base: '1f6cc-1f3fb',
      uc_output: '1f6cc-1f3fb',
      uc_match: '1f6cc-1f3fb',
      uc_greedy: '1f6cc-1f3fb',
      shortnames: [':person_in_bed_light_skin_tone:'],
      category: 'objects'
    },
    ':person_in_bed_tone2:': {
      uc_base: '1f6cc-1f3fc',
      uc_output: '1f6cc-1f3fc',
      uc_match: '1f6cc-1f3fc',
      uc_greedy: '1f6cc-1f3fc',
      shortnames: [':person_in_bed_medium_light_skin_tone:'],
      category: 'objects'
    },
    ':person_in_bed_tone3:': {
      uc_base: '1f6cc-1f3fd',
      uc_output: '1f6cc-1f3fd',
      uc_match: '1f6cc-1f3fd',
      uc_greedy: '1f6cc-1f3fd',
      shortnames: [':person_in_bed_medium_skin_tone:'],
      category: 'objects'
    },
    ':person_in_bed_tone4:': {
      uc_base: '1f6cc-1f3fe',
      uc_output: '1f6cc-1f3fe',
      uc_match: '1f6cc-1f3fe',
      uc_greedy: '1f6cc-1f3fe',
      shortnames: [':person_in_bed_medium_dark_skin_tone:'],
      category: 'objects'
    },
    ':person_in_bed_tone5:': {
      uc_base: '1f6cc-1f3ff',
      uc_output: '1f6cc-1f3ff',
      uc_match: '1f6cc-1f3ff',
      uc_greedy: '1f6cc-1f3ff',
      shortnames: [':person_in_bed_dark_skin_tone:'],
      category: 'objects'
    },
    ':person_in_lotus_position_tone1:': {
      uc_base: '1f9d8-1f3fb',
      uc_output: '1f9d8-1f3fb',
      uc_match: '1f9d8-1f3fb',
      uc_greedy: '1f9d8-1f3fb',
      shortnames: [':person_in_lotus_position_light_skin_tone:'],
      category: 'activity'
    },
    ':person_in_lotus_position_tone2:': {
      uc_base: '1f9d8-1f3fc',
      uc_output: '1f9d8-1f3fc',
      uc_match: '1f9d8-1f3fc',
      uc_greedy: '1f9d8-1f3fc',
      shortnames: [':person_in_lotus_position_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':person_in_lotus_position_tone3:': {
      uc_base: '1f9d8-1f3fd',
      uc_output: '1f9d8-1f3fd',
      uc_match: '1f9d8-1f3fd',
      uc_greedy: '1f9d8-1f3fd',
      shortnames: [':person_in_lotus_position_medium_skin_tone:'],
      category: 'activity'
    },
    ':person_in_lotus_position_tone4:': {
      uc_base: '1f9d8-1f3fe',
      uc_output: '1f9d8-1f3fe',
      uc_match: '1f9d8-1f3fe',
      uc_greedy: '1f9d8-1f3fe',
      shortnames: [':person_in_lotus_position_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':person_in_lotus_position_tone5:': {
      uc_base: '1f9d8-1f3ff',
      uc_output: '1f9d8-1f3ff',
      uc_match: '1f9d8-1f3ff',
      uc_greedy: '1f9d8-1f3ff',
      shortnames: [':person_in_lotus_position_dark_skin_tone:'],
      category: 'activity'
    },
    ':person_in_steamy_room_tone1:': {
      uc_base: '1f9d6-1f3fb',
      uc_output: '1f9d6-1f3fb',
      uc_match: '1f9d6-1f3fb',
      uc_greedy: '1f9d6-1f3fb',
      shortnames: [':person_in_steamy_room_light_skin_tone:'],
      category: 'people'
    },
    ':person_in_steamy_room_tone2:': {
      uc_base: '1f9d6-1f3fc',
      uc_output: '1f9d6-1f3fc',
      uc_match: '1f9d6-1f3fc',
      uc_greedy: '1f9d6-1f3fc',
      shortnames: [':person_in_steamy_room_medium_light_skin_tone:'],
      category: 'people'
    },
    ':person_in_steamy_room_tone3:': {
      uc_base: '1f9d6-1f3fd',
      uc_output: '1f9d6-1f3fd',
      uc_match: '1f9d6-1f3fd',
      uc_greedy: '1f9d6-1f3fd',
      shortnames: [':person_in_steamy_room_medium_skin_tone:'],
      category: 'people'
    },
    ':person_in_steamy_room_tone4:': {
      uc_base: '1f9d6-1f3fe',
      uc_output: '1f9d6-1f3fe',
      uc_match: '1f9d6-1f3fe',
      uc_greedy: '1f9d6-1f3fe',
      shortnames: [':person_in_steamy_room_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':person_in_steamy_room_tone5:': {
      uc_base: '1f9d6-1f3ff',
      uc_output: '1f9d6-1f3ff',
      uc_match: '1f9d6-1f3ff',
      uc_greedy: '1f9d6-1f3ff',
      shortnames: [':person_in_steamy_room_dark_skin_tone:'],
      category: 'people'
    },
    ':person_juggling_tone1:': {
      uc_base: '1f939-1f3fb',
      uc_output: '1f939-1f3fb',
      uc_match: '1f939-1f3fb',
      uc_greedy: '1f939-1f3fb',
      shortnames: [':juggling_tone1:', ':juggler_tone1:'],
      category: 'activity'
    },
    ':person_juggling_tone2:': {
      uc_base: '1f939-1f3fc',
      uc_output: '1f939-1f3fc',
      uc_match: '1f939-1f3fc',
      uc_greedy: '1f939-1f3fc',
      shortnames: [':juggling_tone2:', ':juggler_tone2:'],
      category: 'activity'
    },
    ':person_juggling_tone3:': {
      uc_base: '1f939-1f3fd',
      uc_output: '1f939-1f3fd',
      uc_match: '1f939-1f3fd',
      uc_greedy: '1f939-1f3fd',
      shortnames: [':juggling_tone3:', ':juggler_tone3:'],
      category: 'activity'
    },
    ':person_juggling_tone4:': {
      uc_base: '1f939-1f3fe',
      uc_output: '1f939-1f3fe',
      uc_match: '1f939-1f3fe',
      uc_greedy: '1f939-1f3fe',
      shortnames: [':juggling_tone4:', ':juggler_tone4:'],
      category: 'activity'
    },
    ':person_juggling_tone5:': {
      uc_base: '1f939-1f3ff',
      uc_output: '1f939-1f3ff',
      uc_match: '1f939-1f3ff',
      uc_greedy: '1f939-1f3ff',
      shortnames: [':juggling_tone5:', ':juggler_tone5:'],
      category: 'activity'
    },
    ':person_lifting_weights_tone1:': {
      uc_base: '1f3cb-1f3fb',
      uc_output: '1f3cb-1f3fb',
      uc_match: '1f3cb-fe0f-1f3fb',
      uc_greedy: '1f3cb-fe0f-1f3fb',
      shortnames: [':lifter_tone1:', ':weight_lifter_tone1:'],
      category: 'activity'
    },
    ':person_lifting_weights_tone2:': {
      uc_base: '1f3cb-1f3fc',
      uc_output: '1f3cb-1f3fc',
      uc_match: '1f3cb-fe0f-1f3fc',
      uc_greedy: '1f3cb-fe0f-1f3fc',
      shortnames: [':lifter_tone2:', ':weight_lifter_tone2:'],
      category: 'activity'
    },
    ':person_lifting_weights_tone3:': {
      uc_base: '1f3cb-1f3fd',
      uc_output: '1f3cb-1f3fd',
      uc_match: '1f3cb-fe0f-1f3fd',
      uc_greedy: '1f3cb-fe0f-1f3fd',
      shortnames: [':lifter_tone3:', ':weight_lifter_tone3:'],
      category: 'activity'
    },
    ':person_lifting_weights_tone4:': {
      uc_base: '1f3cb-1f3fe',
      uc_output: '1f3cb-1f3fe',
      uc_match: '1f3cb-fe0f-1f3fe',
      uc_greedy: '1f3cb-fe0f-1f3fe',
      shortnames: [':lifter_tone4:', ':weight_lifter_tone4:'],
      category: 'activity'
    },
    ':person_lifting_weights_tone5:': {
      uc_base: '1f3cb-1f3ff',
      uc_output: '1f3cb-1f3ff',
      uc_match: '1f3cb-fe0f-1f3ff',
      uc_greedy: '1f3cb-fe0f-1f3ff',
      shortnames: [':lifter_tone5:', ':weight_lifter_tone5:'],
      category: 'activity'
    },
    ':person_mountain_biking_tone1:': {
      uc_base: '1f6b5-1f3fb',
      uc_output: '1f6b5-1f3fb',
      uc_match: '1f6b5-1f3fb',
      uc_greedy: '1f6b5-1f3fb',
      shortnames: [':mountain_bicyclist_tone1:'],
      category: 'activity'
    },
    ':person_mountain_biking_tone2:': {
      uc_base: '1f6b5-1f3fc',
      uc_output: '1f6b5-1f3fc',
      uc_match: '1f6b5-1f3fc',
      uc_greedy: '1f6b5-1f3fc',
      shortnames: [':mountain_bicyclist_tone2:'],
      category: 'activity'
    },
    ':person_mountain_biking_tone3:': {
      uc_base: '1f6b5-1f3fd',
      uc_output: '1f6b5-1f3fd',
      uc_match: '1f6b5-1f3fd',
      uc_greedy: '1f6b5-1f3fd',
      shortnames: [':mountain_bicyclist_tone3:'],
      category: 'activity'
    },
    ':person_mountain_biking_tone4:': {
      uc_base: '1f6b5-1f3fe',
      uc_output: '1f6b5-1f3fe',
      uc_match: '1f6b5-1f3fe',
      uc_greedy: '1f6b5-1f3fe',
      shortnames: [':mountain_bicyclist_tone4:'],
      category: 'activity'
    },
    ':person_mountain_biking_tone5:': {
      uc_base: '1f6b5-1f3ff',
      uc_output: '1f6b5-1f3ff',
      uc_match: '1f6b5-1f3ff',
      uc_greedy: '1f6b5-1f3ff',
      shortnames: [':mountain_bicyclist_tone5:'],
      category: 'activity'
    },
    ':person_playing_handball_tone1:': {
      uc_base: '1f93e-1f3fb',
      uc_output: '1f93e-1f3fb',
      uc_match: '1f93e-1f3fb',
      uc_greedy: '1f93e-1f3fb',
      shortnames: [':handball_tone1:'],
      category: 'activity'
    },
    ':person_playing_handball_tone2:': {
      uc_base: '1f93e-1f3fc',
      uc_output: '1f93e-1f3fc',
      uc_match: '1f93e-1f3fc',
      uc_greedy: '1f93e-1f3fc',
      shortnames: [':handball_tone2:'],
      category: 'activity'
    },
    ':person_playing_handball_tone3:': {
      uc_base: '1f93e-1f3fd',
      uc_output: '1f93e-1f3fd',
      uc_match: '1f93e-1f3fd',
      uc_greedy: '1f93e-1f3fd',
      shortnames: [':handball_tone3:'],
      category: 'activity'
    },
    ':person_playing_handball_tone4:': {
      uc_base: '1f93e-1f3fe',
      uc_output: '1f93e-1f3fe',
      uc_match: '1f93e-1f3fe',
      uc_greedy: '1f93e-1f3fe',
      shortnames: [':handball_tone4:'],
      category: 'activity'
    },
    ':person_playing_handball_tone5:': {
      uc_base: '1f93e-1f3ff',
      uc_output: '1f93e-1f3ff',
      uc_match: '1f93e-1f3ff',
      uc_greedy: '1f93e-1f3ff',
      shortnames: [':handball_tone5:'],
      category: 'activity'
    },
    ':person_playing_water_polo_tone1:': {
      uc_base: '1f93d-1f3fb',
      uc_output: '1f93d-1f3fb',
      uc_match: '1f93d-1f3fb',
      uc_greedy: '1f93d-1f3fb',
      shortnames: [':water_polo_tone1:'],
      category: 'activity'
    },
    ':person_playing_water_polo_tone2:': {
      uc_base: '1f93d-1f3fc',
      uc_output: '1f93d-1f3fc',
      uc_match: '1f93d-1f3fc',
      uc_greedy: '1f93d-1f3fc',
      shortnames: [':water_polo_tone2:'],
      category: 'activity'
    },
    ':person_playing_water_polo_tone3:': {
      uc_base: '1f93d-1f3fd',
      uc_output: '1f93d-1f3fd',
      uc_match: '1f93d-1f3fd',
      uc_greedy: '1f93d-1f3fd',
      shortnames: [':water_polo_tone3:'],
      category: 'activity'
    },
    ':person_playing_water_polo_tone4:': {
      uc_base: '1f93d-1f3fe',
      uc_output: '1f93d-1f3fe',
      uc_match: '1f93d-1f3fe',
      uc_greedy: '1f93d-1f3fe',
      shortnames: [':water_polo_tone4:'],
      category: 'activity'
    },
    ':person_playing_water_polo_tone5:': {
      uc_base: '1f93d-1f3ff',
      uc_output: '1f93d-1f3ff',
      uc_match: '1f93d-1f3ff',
      uc_greedy: '1f93d-1f3ff',
      shortnames: [':water_polo_tone5:'],
      category: 'activity'
    },
    ':person_pouting_tone1:': {
      uc_base: '1f64e-1f3fb',
      uc_output: '1f64e-1f3fb',
      uc_match: '1f64e-1f3fb',
      uc_greedy: '1f64e-1f3fb',
      shortnames: [':person_with_pouting_face_tone1:'],
      category: 'people'
    },
    ':person_pouting_tone2:': {
      uc_base: '1f64e-1f3fc',
      uc_output: '1f64e-1f3fc',
      uc_match: '1f64e-1f3fc',
      uc_greedy: '1f64e-1f3fc',
      shortnames: [':person_with_pouting_face_tone2:'],
      category: 'people'
    },
    ':person_pouting_tone3:': {
      uc_base: '1f64e-1f3fd',
      uc_output: '1f64e-1f3fd',
      uc_match: '1f64e-1f3fd',
      uc_greedy: '1f64e-1f3fd',
      shortnames: [':person_with_pouting_face_tone3:'],
      category: 'people'
    },
    ':person_pouting_tone4:': {
      uc_base: '1f64e-1f3fe',
      uc_output: '1f64e-1f3fe',
      uc_match: '1f64e-1f3fe',
      uc_greedy: '1f64e-1f3fe',
      shortnames: [':person_with_pouting_face_tone4:'],
      category: 'people'
    },
    ':person_pouting_tone5:': {
      uc_base: '1f64e-1f3ff',
      uc_output: '1f64e-1f3ff',
      uc_match: '1f64e-1f3ff',
      uc_greedy: '1f64e-1f3ff',
      shortnames: [':person_with_pouting_face_tone5:'],
      category: 'people'
    },
    ':person_raising_hand_tone1:': {
      uc_base: '1f64b-1f3fb',
      uc_output: '1f64b-1f3fb',
      uc_match: '1f64b-1f3fb',
      uc_greedy: '1f64b-1f3fb',
      shortnames: [':raising_hand_tone1:'],
      category: 'people'
    },
    ':person_raising_hand_tone2:': {
      uc_base: '1f64b-1f3fc',
      uc_output: '1f64b-1f3fc',
      uc_match: '1f64b-1f3fc',
      uc_greedy: '1f64b-1f3fc',
      shortnames: [':raising_hand_tone2:'],
      category: 'people'
    },
    ':person_raising_hand_tone3:': {
      uc_base: '1f64b-1f3fd',
      uc_output: '1f64b-1f3fd',
      uc_match: '1f64b-1f3fd',
      uc_greedy: '1f64b-1f3fd',
      shortnames: [':raising_hand_tone3:'],
      category: 'people'
    },
    ':person_raising_hand_tone4:': {
      uc_base: '1f64b-1f3fe',
      uc_output: '1f64b-1f3fe',
      uc_match: '1f64b-1f3fe',
      uc_greedy: '1f64b-1f3fe',
      shortnames: [':raising_hand_tone4:'],
      category: 'people'
    },
    ':person_raising_hand_tone5:': {
      uc_base: '1f64b-1f3ff',
      uc_output: '1f64b-1f3ff',
      uc_match: '1f64b-1f3ff',
      uc_greedy: '1f64b-1f3ff',
      shortnames: [':raising_hand_tone5:'],
      category: 'people'
    },
    ':person_rowing_boat_tone1:': {
      uc_base: '1f6a3-1f3fb',
      uc_output: '1f6a3-1f3fb',
      uc_match: '1f6a3-1f3fb',
      uc_greedy: '1f6a3-1f3fb',
      shortnames: [':rowboat_tone1:'],
      category: 'activity'
    },
    ':person_rowing_boat_tone2:': {
      uc_base: '1f6a3-1f3fc',
      uc_output: '1f6a3-1f3fc',
      uc_match: '1f6a3-1f3fc',
      uc_greedy: '1f6a3-1f3fc',
      shortnames: [':rowboat_tone2:'],
      category: 'activity'
    },
    ':person_rowing_boat_tone3:': {
      uc_base: '1f6a3-1f3fd',
      uc_output: '1f6a3-1f3fd',
      uc_match: '1f6a3-1f3fd',
      uc_greedy: '1f6a3-1f3fd',
      shortnames: [':rowboat_tone3:'],
      category: 'activity'
    },
    ':person_rowing_boat_tone4:': {
      uc_base: '1f6a3-1f3fe',
      uc_output: '1f6a3-1f3fe',
      uc_match: '1f6a3-1f3fe',
      uc_greedy: '1f6a3-1f3fe',
      shortnames: [':rowboat_tone4:'],
      category: 'activity'
    },
    ':person_rowing_boat_tone5:': {
      uc_base: '1f6a3-1f3ff',
      uc_output: '1f6a3-1f3ff',
      uc_match: '1f6a3-1f3ff',
      uc_greedy: '1f6a3-1f3ff',
      shortnames: [':rowboat_tone5:'],
      category: 'activity'
    },
    ':person_running_tone1:': {
      uc_base: '1f3c3-1f3fb',
      uc_output: '1f3c3-1f3fb',
      uc_match: '1f3c3-1f3fb',
      uc_greedy: '1f3c3-1f3fb',
      shortnames: [':runner_tone1:'],
      category: 'people'
    },
    ':person_running_tone2:': {
      uc_base: '1f3c3-1f3fc',
      uc_output: '1f3c3-1f3fc',
      uc_match: '1f3c3-1f3fc',
      uc_greedy: '1f3c3-1f3fc',
      shortnames: [':runner_tone2:'],
      category: 'people'
    },
    ':person_running_tone3:': {
      uc_base: '1f3c3-1f3fd',
      uc_output: '1f3c3-1f3fd',
      uc_match: '1f3c3-1f3fd',
      uc_greedy: '1f3c3-1f3fd',
      shortnames: [':runner_tone3:'],
      category: 'people'
    },
    ':person_running_tone4:': {
      uc_base: '1f3c3-1f3fe',
      uc_output: '1f3c3-1f3fe',
      uc_match: '1f3c3-1f3fe',
      uc_greedy: '1f3c3-1f3fe',
      shortnames: [':runner_tone4:'],
      category: 'people'
    },
    ':person_running_tone5:': {
      uc_base: '1f3c3-1f3ff',
      uc_output: '1f3c3-1f3ff',
      uc_match: '1f3c3-1f3ff',
      uc_greedy: '1f3c3-1f3ff',
      shortnames: [':runner_tone5:'],
      category: 'people'
    },
    ':person_shrugging_tone1:': {
      uc_base: '1f937-1f3fb',
      uc_output: '1f937-1f3fb',
      uc_match: '1f937-1f3fb',
      uc_greedy: '1f937-1f3fb',
      shortnames: [':shrug_tone1:'],
      category: 'people'
    },
    ':person_shrugging_tone2:': {
      uc_base: '1f937-1f3fc',
      uc_output: '1f937-1f3fc',
      uc_match: '1f937-1f3fc',
      uc_greedy: '1f937-1f3fc',
      shortnames: [':shrug_tone2:'],
      category: 'people'
    },
    ':person_shrugging_tone3:': {
      uc_base: '1f937-1f3fd',
      uc_output: '1f937-1f3fd',
      uc_match: '1f937-1f3fd',
      uc_greedy: '1f937-1f3fd',
      shortnames: [':shrug_tone3:'],
      category: 'people'
    },
    ':person_shrugging_tone4:': {
      uc_base: '1f937-1f3fe',
      uc_output: '1f937-1f3fe',
      uc_match: '1f937-1f3fe',
      uc_greedy: '1f937-1f3fe',
      shortnames: [':shrug_tone4:'],
      category: 'people'
    },
    ':person_shrugging_tone5:': {
      uc_base: '1f937-1f3ff',
      uc_output: '1f937-1f3ff',
      uc_match: '1f937-1f3ff',
      uc_greedy: '1f937-1f3ff',
      shortnames: [':shrug_tone5:'],
      category: 'people'
    },
    ':person_surfing_tone1:': {
      uc_base: '1f3c4-1f3fb',
      uc_output: '1f3c4-1f3fb',
      uc_match: '1f3c4-1f3fb',
      uc_greedy: '1f3c4-1f3fb',
      shortnames: [':surfer_tone1:'],
      category: 'activity'
    },
    ':person_surfing_tone2:': {
      uc_base: '1f3c4-1f3fc',
      uc_output: '1f3c4-1f3fc',
      uc_match: '1f3c4-1f3fc',
      uc_greedy: '1f3c4-1f3fc',
      shortnames: [':surfer_tone2:'],
      category: 'activity'
    },
    ':person_surfing_tone3:': {
      uc_base: '1f3c4-1f3fd',
      uc_output: '1f3c4-1f3fd',
      uc_match: '1f3c4-1f3fd',
      uc_greedy: '1f3c4-1f3fd',
      shortnames: [':surfer_tone3:'],
      category: 'activity'
    },
    ':person_surfing_tone4:': {
      uc_base: '1f3c4-1f3fe',
      uc_output: '1f3c4-1f3fe',
      uc_match: '1f3c4-1f3fe',
      uc_greedy: '1f3c4-1f3fe',
      shortnames: [':surfer_tone4:'],
      category: 'activity'
    },
    ':person_surfing_tone5:': {
      uc_base: '1f3c4-1f3ff',
      uc_output: '1f3c4-1f3ff',
      uc_match: '1f3c4-1f3ff',
      uc_greedy: '1f3c4-1f3ff',
      shortnames: [':surfer_tone5:'],
      category: 'activity'
    },
    ':person_swimming_tone1:': {
      uc_base: '1f3ca-1f3fb',
      uc_output: '1f3ca-1f3fb',
      uc_match: '1f3ca-1f3fb',
      uc_greedy: '1f3ca-1f3fb',
      shortnames: [':swimmer_tone1:'],
      category: 'activity'
    },
    ':person_swimming_tone2:': {
      uc_base: '1f3ca-1f3fc',
      uc_output: '1f3ca-1f3fc',
      uc_match: '1f3ca-1f3fc',
      uc_greedy: '1f3ca-1f3fc',
      shortnames: [':swimmer_tone2:'],
      category: 'activity'
    },
    ':person_swimming_tone3:': {
      uc_base: '1f3ca-1f3fd',
      uc_output: '1f3ca-1f3fd',
      uc_match: '1f3ca-1f3fd',
      uc_greedy: '1f3ca-1f3fd',
      shortnames: [':swimmer_tone3:'],
      category: 'activity'
    },
    ':person_swimming_tone4:': {
      uc_base: '1f3ca-1f3fe',
      uc_output: '1f3ca-1f3fe',
      uc_match: '1f3ca-1f3fe',
      uc_greedy: '1f3ca-1f3fe',
      shortnames: [':swimmer_tone4:'],
      category: 'activity'
    },
    ':person_swimming_tone5:': {
      uc_base: '1f3ca-1f3ff',
      uc_output: '1f3ca-1f3ff',
      uc_match: '1f3ca-1f3ff',
      uc_greedy: '1f3ca-1f3ff',
      shortnames: [':swimmer_tone5:'],
      category: 'activity'
    },
    ':person_tipping_hand_tone1:': {
      uc_base: '1f481-1f3fb',
      uc_output: '1f481-1f3fb',
      uc_match: '1f481-1f3fb',
      uc_greedy: '1f481-1f3fb',
      shortnames: [':information_desk_person_tone1:'],
      category: 'people'
    },
    ':person_tipping_hand_tone2:': {
      uc_base: '1f481-1f3fc',
      uc_output: '1f481-1f3fc',
      uc_match: '1f481-1f3fc',
      uc_greedy: '1f481-1f3fc',
      shortnames: [':information_desk_person_tone2:'],
      category: 'people'
    },
    ':person_tipping_hand_tone3:': {
      uc_base: '1f481-1f3fd',
      uc_output: '1f481-1f3fd',
      uc_match: '1f481-1f3fd',
      uc_greedy: '1f481-1f3fd',
      shortnames: [':information_desk_person_tone3:'],
      category: 'people'
    },
    ':person_tipping_hand_tone4:': {
      uc_base: '1f481-1f3fe',
      uc_output: '1f481-1f3fe',
      uc_match: '1f481-1f3fe',
      uc_greedy: '1f481-1f3fe',
      shortnames: [':information_desk_person_tone4:'],
      category: 'people'
    },
    ':person_tipping_hand_tone5:': {
      uc_base: '1f481-1f3ff',
      uc_output: '1f481-1f3ff',
      uc_match: '1f481-1f3ff',
      uc_greedy: '1f481-1f3ff',
      shortnames: [':information_desk_person_tone5:'],
      category: 'people'
    },
    ':person_walking_tone1:': {
      uc_base: '1f6b6-1f3fb',
      uc_output: '1f6b6-1f3fb',
      uc_match: '1f6b6-1f3fb',
      uc_greedy: '1f6b6-1f3fb',
      shortnames: [':walking_tone1:'],
      category: 'people'
    },
    ':person_walking_tone2:': {
      uc_base: '1f6b6-1f3fc',
      uc_output: '1f6b6-1f3fc',
      uc_match: '1f6b6-1f3fc',
      uc_greedy: '1f6b6-1f3fc',
      shortnames: [':walking_tone2:'],
      category: 'people'
    },
    ':person_walking_tone3:': {
      uc_base: '1f6b6-1f3fd',
      uc_output: '1f6b6-1f3fd',
      uc_match: '1f6b6-1f3fd',
      uc_greedy: '1f6b6-1f3fd',
      shortnames: [':walking_tone3:'],
      category: 'people'
    },
    ':person_walking_tone4:': {
      uc_base: '1f6b6-1f3fe',
      uc_output: '1f6b6-1f3fe',
      uc_match: '1f6b6-1f3fe',
      uc_greedy: '1f6b6-1f3fe',
      shortnames: [':walking_tone4:'],
      category: 'people'
    },
    ':person_walking_tone5:': {
      uc_base: '1f6b6-1f3ff',
      uc_output: '1f6b6-1f3ff',
      uc_match: '1f6b6-1f3ff',
      uc_greedy: '1f6b6-1f3ff',
      shortnames: [':walking_tone5:'],
      category: 'people'
    },
    ':person_wearing_turban_tone1:': {
      uc_base: '1f473-1f3fb',
      uc_output: '1f473-1f3fb',
      uc_match: '1f473-1f3fb',
      uc_greedy: '1f473-1f3fb',
      shortnames: [':man_with_turban_tone1:'],
      category: 'people'
    },
    ':person_wearing_turban_tone2:': {
      uc_base: '1f473-1f3fc',
      uc_output: '1f473-1f3fc',
      uc_match: '1f473-1f3fc',
      uc_greedy: '1f473-1f3fc',
      shortnames: [':man_with_turban_tone2:'],
      category: 'people'
    },
    ':person_wearing_turban_tone3:': {
      uc_base: '1f473-1f3fd',
      uc_output: '1f473-1f3fd',
      uc_match: '1f473-1f3fd',
      uc_greedy: '1f473-1f3fd',
      shortnames: [':man_with_turban_tone3:'],
      category: 'people'
    },
    ':person_wearing_turban_tone4:': {
      uc_base: '1f473-1f3fe',
      uc_output: '1f473-1f3fe',
      uc_match: '1f473-1f3fe',
      uc_greedy: '1f473-1f3fe',
      shortnames: [':man_with_turban_tone4:'],
      category: 'people'
    },
    ':person_wearing_turban_tone5:': {
      uc_base: '1f473-1f3ff',
      uc_output: '1f473-1f3ff',
      uc_match: '1f473-1f3ff',
      uc_greedy: '1f473-1f3ff',
      shortnames: [':man_with_turban_tone5:'],
      category: 'people'
    },
    ':point_down_tone1:': {
      uc_base: '1f447-1f3fb',
      uc_output: '1f447-1f3fb',
      uc_match: '1f447-1f3fb',
      uc_greedy: '1f447-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':point_down_tone2:': {
      uc_base: '1f447-1f3fc',
      uc_output: '1f447-1f3fc',
      uc_match: '1f447-1f3fc',
      uc_greedy: '1f447-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':point_down_tone3:': {
      uc_base: '1f447-1f3fd',
      uc_output: '1f447-1f3fd',
      uc_match: '1f447-1f3fd',
      uc_greedy: '1f447-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':point_down_tone4:': {
      uc_base: '1f447-1f3fe',
      uc_output: '1f447-1f3fe',
      uc_match: '1f447-1f3fe',
      uc_greedy: '1f447-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':point_down_tone5:': {
      uc_base: '1f447-1f3ff',
      uc_output: '1f447-1f3ff',
      uc_match: '1f447-1f3ff',
      uc_greedy: '1f447-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':point_left_tone1:': {
      uc_base: '1f448-1f3fb',
      uc_output: '1f448-1f3fb',
      uc_match: '1f448-1f3fb',
      uc_greedy: '1f448-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':point_left_tone2:': {
      uc_base: '1f448-1f3fc',
      uc_output: '1f448-1f3fc',
      uc_match: '1f448-1f3fc',
      uc_greedy: '1f448-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':point_left_tone3:': {
      uc_base: '1f448-1f3fd',
      uc_output: '1f448-1f3fd',
      uc_match: '1f448-1f3fd',
      uc_greedy: '1f448-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':point_left_tone4:': {
      uc_base: '1f448-1f3fe',
      uc_output: '1f448-1f3fe',
      uc_match: '1f448-1f3fe',
      uc_greedy: '1f448-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':point_left_tone5:': {
      uc_base: '1f448-1f3ff',
      uc_output: '1f448-1f3ff',
      uc_match: '1f448-1f3ff',
      uc_greedy: '1f448-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':point_right_tone1:': {
      uc_base: '1f449-1f3fb',
      uc_output: '1f449-1f3fb',
      uc_match: '1f449-1f3fb',
      uc_greedy: '1f449-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':point_right_tone2:': {
      uc_base: '1f449-1f3fc',
      uc_output: '1f449-1f3fc',
      uc_match: '1f449-1f3fc',
      uc_greedy: '1f449-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':point_right_tone3:': {
      uc_base: '1f449-1f3fd',
      uc_output: '1f449-1f3fd',
      uc_match: '1f449-1f3fd',
      uc_greedy: '1f449-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':point_right_tone4:': {
      uc_base: '1f449-1f3fe',
      uc_output: '1f449-1f3fe',
      uc_match: '1f449-1f3fe',
      uc_greedy: '1f449-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':point_right_tone5:': {
      uc_base: '1f449-1f3ff',
      uc_output: '1f449-1f3ff',
      uc_match: '1f449-1f3ff',
      uc_greedy: '1f449-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':point_up_2_tone1:': {
      uc_base: '1f446-1f3fb',
      uc_output: '1f446-1f3fb',
      uc_match: '1f446-1f3fb',
      uc_greedy: '1f446-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':point_up_2_tone2:': {
      uc_base: '1f446-1f3fc',
      uc_output: '1f446-1f3fc',
      uc_match: '1f446-1f3fc',
      uc_greedy: '1f446-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':point_up_2_tone3:': {
      uc_base: '1f446-1f3fd',
      uc_output: '1f446-1f3fd',
      uc_match: '1f446-1f3fd',
      uc_greedy: '1f446-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':point_up_2_tone4:': {
      uc_base: '1f446-1f3fe',
      uc_output: '1f446-1f3fe',
      uc_match: '1f446-1f3fe',
      uc_greedy: '1f446-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':point_up_2_tone5:': {
      uc_base: '1f446-1f3ff',
      uc_output: '1f446-1f3ff',
      uc_match: '1f446-1f3ff',
      uc_greedy: '1f446-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':police_officer_tone1:': {
      uc_base: '1f46e-1f3fb',
      uc_output: '1f46e-1f3fb',
      uc_match: '1f46e-1f3fb',
      uc_greedy: '1f46e-1f3fb',
      shortnames: [':cop_tone1:'],
      category: 'people'
    },
    ':police_officer_tone2:': {
      uc_base: '1f46e-1f3fc',
      uc_output: '1f46e-1f3fc',
      uc_match: '1f46e-1f3fc',
      uc_greedy: '1f46e-1f3fc',
      shortnames: [':cop_tone2:'],
      category: 'people'
    },
    ':police_officer_tone3:': {
      uc_base: '1f46e-1f3fd',
      uc_output: '1f46e-1f3fd',
      uc_match: '1f46e-1f3fd',
      uc_greedy: '1f46e-1f3fd',
      shortnames: [':cop_tone3:'],
      category: 'people'
    },
    ':police_officer_tone4:': {
      uc_base: '1f46e-1f3fe',
      uc_output: '1f46e-1f3fe',
      uc_match: '1f46e-1f3fe',
      uc_greedy: '1f46e-1f3fe',
      shortnames: [':cop_tone4:'],
      category: 'people'
    },
    ':police_officer_tone5:': {
      uc_base: '1f46e-1f3ff',
      uc_output: '1f46e-1f3ff',
      uc_match: '1f46e-1f3ff',
      uc_greedy: '1f46e-1f3ff',
      shortnames: [':cop_tone5:'],
      category: 'people'
    },
    ':pray_tone1:': {
      uc_base: '1f64f-1f3fb',
      uc_output: '1f64f-1f3fb',
      uc_match: '1f64f-1f3fb',
      uc_greedy: '1f64f-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':pray_tone2:': {
      uc_base: '1f64f-1f3fc',
      uc_output: '1f64f-1f3fc',
      uc_match: '1f64f-1f3fc',
      uc_greedy: '1f64f-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':pray_tone3:': {
      uc_base: '1f64f-1f3fd',
      uc_output: '1f64f-1f3fd',
      uc_match: '1f64f-1f3fd',
      uc_greedy: '1f64f-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':pray_tone4:': {
      uc_base: '1f64f-1f3fe',
      uc_output: '1f64f-1f3fe',
      uc_match: '1f64f-1f3fe',
      uc_greedy: '1f64f-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':pray_tone5:': {
      uc_base: '1f64f-1f3ff',
      uc_output: '1f64f-1f3ff',
      uc_match: '1f64f-1f3ff',
      uc_greedy: '1f64f-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':pregnant_woman_tone1:': {
      uc_base: '1f930-1f3fb',
      uc_output: '1f930-1f3fb',
      uc_match: '1f930-1f3fb',
      uc_greedy: '1f930-1f3fb',
      shortnames: [':expecting_woman_tone1:'],
      category: 'people'
    },
    ':pregnant_woman_tone2:': {
      uc_base: '1f930-1f3fc',
      uc_output: '1f930-1f3fc',
      uc_match: '1f930-1f3fc',
      uc_greedy: '1f930-1f3fc',
      shortnames: [':expecting_woman_tone2:'],
      category: 'people'
    },
    ':pregnant_woman_tone3:': {
      uc_base: '1f930-1f3fd',
      uc_output: '1f930-1f3fd',
      uc_match: '1f930-1f3fd',
      uc_greedy: '1f930-1f3fd',
      shortnames: [':expecting_woman_tone3:'],
      category: 'people'
    },
    ':pregnant_woman_tone4:': {
      uc_base: '1f930-1f3fe',
      uc_output: '1f930-1f3fe',
      uc_match: '1f930-1f3fe',
      uc_greedy: '1f930-1f3fe',
      shortnames: [':expecting_woman_tone4:'],
      category: 'people'
    },
    ':pregnant_woman_tone5:': {
      uc_base: '1f930-1f3ff',
      uc_output: '1f930-1f3ff',
      uc_match: '1f930-1f3ff',
      uc_greedy: '1f930-1f3ff',
      shortnames: [':expecting_woman_tone5:'],
      category: 'people'
    },
    ':prince_tone1:': {
      uc_base: '1f934-1f3fb',
      uc_output: '1f934-1f3fb',
      uc_match: '1f934-1f3fb',
      uc_greedy: '1f934-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':prince_tone2:': {
      uc_base: '1f934-1f3fc',
      uc_output: '1f934-1f3fc',
      uc_match: '1f934-1f3fc',
      uc_greedy: '1f934-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':prince_tone3:': {
      uc_base: '1f934-1f3fd',
      uc_output: '1f934-1f3fd',
      uc_match: '1f934-1f3fd',
      uc_greedy: '1f934-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':prince_tone4:': {
      uc_base: '1f934-1f3fe',
      uc_output: '1f934-1f3fe',
      uc_match: '1f934-1f3fe',
      uc_greedy: '1f934-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':prince_tone5:': {
      uc_base: '1f934-1f3ff',
      uc_output: '1f934-1f3ff',
      uc_match: '1f934-1f3ff',
      uc_greedy: '1f934-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':princess_tone1:': {
      uc_base: '1f478-1f3fb',
      uc_output: '1f478-1f3fb',
      uc_match: '1f478-1f3fb',
      uc_greedy: '1f478-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':princess_tone2:': {
      uc_base: '1f478-1f3fc',
      uc_output: '1f478-1f3fc',
      uc_match: '1f478-1f3fc',
      uc_greedy: '1f478-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':princess_tone3:': {
      uc_base: '1f478-1f3fd',
      uc_output: '1f478-1f3fd',
      uc_match: '1f478-1f3fd',
      uc_greedy: '1f478-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':princess_tone4:': {
      uc_base: '1f478-1f3fe',
      uc_output: '1f478-1f3fe',
      uc_match: '1f478-1f3fe',
      uc_greedy: '1f478-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':princess_tone5:': {
      uc_base: '1f478-1f3ff',
      uc_output: '1f478-1f3ff',
      uc_match: '1f478-1f3ff',
      uc_greedy: '1f478-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':punch_tone1:': {
      uc_base: '1f44a-1f3fb',
      uc_output: '1f44a-1f3fb',
      uc_match: '1f44a-1f3fb',
      uc_greedy: '1f44a-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':punch_tone2:': {
      uc_base: '1f44a-1f3fc',
      uc_output: '1f44a-1f3fc',
      uc_match: '1f44a-1f3fc',
      uc_greedy: '1f44a-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':punch_tone3:': {
      uc_base: '1f44a-1f3fd',
      uc_output: '1f44a-1f3fd',
      uc_match: '1f44a-1f3fd',
      uc_greedy: '1f44a-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':punch_tone4:': {
      uc_base: '1f44a-1f3fe',
      uc_output: '1f44a-1f3fe',
      uc_match: '1f44a-1f3fe',
      uc_greedy: '1f44a-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':punch_tone5:': {
      uc_base: '1f44a-1f3ff',
      uc_output: '1f44a-1f3ff',
      uc_match: '1f44a-1f3ff',
      uc_greedy: '1f44a-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':raised_back_of_hand_tone1:': {
      uc_base: '1f91a-1f3fb',
      uc_output: '1f91a-1f3fb',
      uc_match: '1f91a-1f3fb',
      uc_greedy: '1f91a-1f3fb',
      shortnames: [':back_of_hand_tone1:'],
      category: 'people'
    },
    ':raised_back_of_hand_tone2:': {
      uc_base: '1f91a-1f3fc',
      uc_output: '1f91a-1f3fc',
      uc_match: '1f91a-1f3fc',
      uc_greedy: '1f91a-1f3fc',
      shortnames: [':back_of_hand_tone2:'],
      category: 'people'
    },
    ':raised_back_of_hand_tone3:': {
      uc_base: '1f91a-1f3fd',
      uc_output: '1f91a-1f3fd',
      uc_match: '1f91a-1f3fd',
      uc_greedy: '1f91a-1f3fd',
      shortnames: [':back_of_hand_tone3:'],
      category: 'people'
    },
    ':raised_back_of_hand_tone4:': {
      uc_base: '1f91a-1f3fe',
      uc_output: '1f91a-1f3fe',
      uc_match: '1f91a-1f3fe',
      uc_greedy: '1f91a-1f3fe',
      shortnames: [':back_of_hand_tone4:'],
      category: 'people'
    },
    ':raised_back_of_hand_tone5:': {
      uc_base: '1f91a-1f3ff',
      uc_output: '1f91a-1f3ff',
      uc_match: '1f91a-1f3ff',
      uc_greedy: '1f91a-1f3ff',
      shortnames: [':back_of_hand_tone5:'],
      category: 'people'
    },
    ':raised_hands_tone1:': {
      uc_base: '1f64c-1f3fb',
      uc_output: '1f64c-1f3fb',
      uc_match: '1f64c-1f3fb',
      uc_greedy: '1f64c-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':raised_hands_tone2:': {
      uc_base: '1f64c-1f3fc',
      uc_output: '1f64c-1f3fc',
      uc_match: '1f64c-1f3fc',
      uc_greedy: '1f64c-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':raised_hands_tone3:': {
      uc_base: '1f64c-1f3fd',
      uc_output: '1f64c-1f3fd',
      uc_match: '1f64c-1f3fd',
      uc_greedy: '1f64c-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':raised_hands_tone4:': {
      uc_base: '1f64c-1f3fe',
      uc_output: '1f64c-1f3fe',
      uc_match: '1f64c-1f3fe',
      uc_greedy: '1f64c-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':raised_hands_tone5:': {
      uc_base: '1f64c-1f3ff',
      uc_output: '1f64c-1f3ff',
      uc_match: '1f64c-1f3ff',
      uc_greedy: '1f64c-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':right_facing_fist_tone1:': {
      uc_base: '1f91c-1f3fb',
      uc_output: '1f91c-1f3fb',
      uc_match: '1f91c-1f3fb',
      uc_greedy: '1f91c-1f3fb',
      shortnames: [':right_fist_tone1:'],
      category: 'people'
    },
    ':right_facing_fist_tone2:': {
      uc_base: '1f91c-1f3fc',
      uc_output: '1f91c-1f3fc',
      uc_match: '1f91c-1f3fc',
      uc_greedy: '1f91c-1f3fc',
      shortnames: [':right_fist_tone2:'],
      category: 'people'
    },
    ':right_facing_fist_tone3:': {
      uc_base: '1f91c-1f3fd',
      uc_output: '1f91c-1f3fd',
      uc_match: '1f91c-1f3fd',
      uc_greedy: '1f91c-1f3fd',
      shortnames: [':right_fist_tone3:'],
      category: 'people'
    },
    ':right_facing_fist_tone4:': {
      uc_base: '1f91c-1f3fe',
      uc_output: '1f91c-1f3fe',
      uc_match: '1f91c-1f3fe',
      uc_greedy: '1f91c-1f3fe',
      shortnames: [':right_fist_tone4:'],
      category: 'people'
    },
    ':right_facing_fist_tone5:': {
      uc_base: '1f91c-1f3ff',
      uc_output: '1f91c-1f3ff',
      uc_match: '1f91c-1f3ff',
      uc_greedy: '1f91c-1f3ff',
      shortnames: [':right_fist_tone5:'],
      category: 'people'
    },
    ':santa_tone1:': {
      uc_base: '1f385-1f3fb',
      uc_output: '1f385-1f3fb',
      uc_match: '1f385-1f3fb',
      uc_greedy: '1f385-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':santa_tone2:': {
      uc_base: '1f385-1f3fc',
      uc_output: '1f385-1f3fc',
      uc_match: '1f385-1f3fc',
      uc_greedy: '1f385-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':santa_tone3:': {
      uc_base: '1f385-1f3fd',
      uc_output: '1f385-1f3fd',
      uc_match: '1f385-1f3fd',
      uc_greedy: '1f385-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':santa_tone4:': {
      uc_base: '1f385-1f3fe',
      uc_output: '1f385-1f3fe',
      uc_match: '1f385-1f3fe',
      uc_greedy: '1f385-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':santa_tone5:': {
      uc_base: '1f385-1f3ff',
      uc_output: '1f385-1f3ff',
      uc_match: '1f385-1f3ff',
      uc_greedy: '1f385-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':selfie_tone1:': {
      uc_base: '1f933-1f3fb',
      uc_output: '1f933-1f3fb',
      uc_match: '1f933-1f3fb',
      uc_greedy: '1f933-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':selfie_tone2:': {
      uc_base: '1f933-1f3fc',
      uc_output: '1f933-1f3fc',
      uc_match: '1f933-1f3fc',
      uc_greedy: '1f933-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':selfie_tone3:': {
      uc_base: '1f933-1f3fd',
      uc_output: '1f933-1f3fd',
      uc_match: '1f933-1f3fd',
      uc_greedy: '1f933-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':selfie_tone4:': {
      uc_base: '1f933-1f3fe',
      uc_output: '1f933-1f3fe',
      uc_match: '1f933-1f3fe',
      uc_greedy: '1f933-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':selfie_tone5:': {
      uc_base: '1f933-1f3ff',
      uc_output: '1f933-1f3ff',
      uc_match: '1f933-1f3ff',
      uc_greedy: '1f933-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':snowboarder_tone1:': {
      uc_base: '1f3c2-1f3fb',
      uc_output: '1f3c2-1f3fb',
      uc_match: '1f3c2-1f3fb',
      uc_greedy: '1f3c2-1f3fb',
      shortnames: [':snowboarder_light_skin_tone:'],
      category: 'activity'
    },
    ':snowboarder_tone2:': {
      uc_base: '1f3c2-1f3fc',
      uc_output: '1f3c2-1f3fc',
      uc_match: '1f3c2-1f3fc',
      uc_greedy: '1f3c2-1f3fc',
      shortnames: [':snowboarder_medium_light_skin_tone:'],
      category: 'activity'
    },
    ':snowboarder_tone3:': {
      uc_base: '1f3c2-1f3fd',
      uc_output: '1f3c2-1f3fd',
      uc_match: '1f3c2-1f3fd',
      uc_greedy: '1f3c2-1f3fd',
      shortnames: [':snowboarder_medium_skin_tone:'],
      category: 'activity'
    },
    ':snowboarder_tone4:': {
      uc_base: '1f3c2-1f3fe',
      uc_output: '1f3c2-1f3fe',
      uc_match: '1f3c2-1f3fe',
      uc_greedy: '1f3c2-1f3fe',
      shortnames: [':snowboarder_medium_dark_skin_tone:'],
      category: 'activity'
    },
    ':snowboarder_tone5:': {
      uc_base: '1f3c2-1f3ff',
      uc_output: '1f3c2-1f3ff',
      uc_match: '1f3c2-1f3ff',
      uc_greedy: '1f3c2-1f3ff',
      shortnames: [':snowboarder_dark_skin_tone:'],
      category: 'activity'
    },
    ':thumbsdown_tone1:': {
      uc_base: '1f44e-1f3fb',
      uc_output: '1f44e-1f3fb',
      uc_match: '1f44e-1f3fb',
      uc_greedy: '1f44e-1f3fb',
      shortnames: [':-1_tone1:', ':thumbdown_tone1:'],
      category: 'people'
    },
    ':thumbsdown_tone2:': {
      uc_base: '1f44e-1f3fc',
      uc_output: '1f44e-1f3fc',
      uc_match: '1f44e-1f3fc',
      uc_greedy: '1f44e-1f3fc',
      shortnames: [':-1_tone2:', ':thumbdown_tone2:'],
      category: 'people'
    },
    ':thumbsdown_tone3:': {
      uc_base: '1f44e-1f3fd',
      uc_output: '1f44e-1f3fd',
      uc_match: '1f44e-1f3fd',
      uc_greedy: '1f44e-1f3fd',
      shortnames: [':-1_tone3:', ':thumbdown_tone3:'],
      category: 'people'
    },
    ':thumbsdown_tone4:': {
      uc_base: '1f44e-1f3fe',
      uc_output: '1f44e-1f3fe',
      uc_match: '1f44e-1f3fe',
      uc_greedy: '1f44e-1f3fe',
      shortnames: [':-1_tone4:', ':thumbdown_tone4:'],
      category: 'people'
    },
    ':thumbsdown_tone5:': {
      uc_base: '1f44e-1f3ff',
      uc_output: '1f44e-1f3ff',
      uc_match: '1f44e-1f3ff',
      uc_greedy: '1f44e-1f3ff',
      shortnames: [':-1_tone5:', ':thumbdown_tone5:'],
      category: 'people'
    },
    ':thumbsup_tone1:': {
      uc_base: '1f44d-1f3fb',
      uc_output: '1f44d-1f3fb',
      uc_match: '1f44d-1f3fb',
      uc_greedy: '1f44d-1f3fb',
      shortnames: [':+1_tone1:', ':thumbup_tone1:'],
      category: 'people'
    },
    ':thumbsup_tone2:': {
      uc_base: '1f44d-1f3fc',
      uc_output: '1f44d-1f3fc',
      uc_match: '1f44d-1f3fc',
      uc_greedy: '1f44d-1f3fc',
      shortnames: [':+1_tone2:', ':thumbup_tone2:'],
      category: 'people'
    },
    ':thumbsup_tone3:': {
      uc_base: '1f44d-1f3fd',
      uc_output: '1f44d-1f3fd',
      uc_match: '1f44d-1f3fd',
      uc_greedy: '1f44d-1f3fd',
      shortnames: [':+1_tone3:', ':thumbup_tone3:'],
      category: 'people'
    },
    ':thumbsup_tone4:': {
      uc_base: '1f44d-1f3fe',
      uc_output: '1f44d-1f3fe',
      uc_match: '1f44d-1f3fe',
      uc_greedy: '1f44d-1f3fe',
      shortnames: [':+1_tone4:', ':thumbup_tone4:'],
      category: 'people'
    },
    ':thumbsup_tone5:': {
      uc_base: '1f44d-1f3ff',
      uc_output: '1f44d-1f3ff',
      uc_match: '1f44d-1f3ff',
      uc_greedy: '1f44d-1f3ff',
      shortnames: [':+1_tone5:', ':thumbup_tone5:'],
      category: 'people'
    },
    ':united_nations:': {
      uc_base: '1f1fa-1f1f3',
      uc_output: '1f1fa-1f1f3',
      uc_match: '1f1fa-1f1f3',
      uc_greedy: '1f1fa-1f1f3',
      shortnames: [],
      category: 'flags'
    },
    ':vampire_tone1:': {
      uc_base: '1f9db-1f3fb',
      uc_output: '1f9db-1f3fb',
      uc_match: '1f9db-1f3fb',
      uc_greedy: '1f9db-1f3fb',
      shortnames: [':vampire_light_skin_tone:'],
      category: 'people'
    },
    ':vampire_tone2:': {
      uc_base: '1f9db-1f3fc',
      uc_output: '1f9db-1f3fc',
      uc_match: '1f9db-1f3fc',
      uc_greedy: '1f9db-1f3fc',
      shortnames: [':vampire_medium_light_skin_tone:'],
      category: 'people'
    },
    ':vampire_tone3:': {
      uc_base: '1f9db-1f3fd',
      uc_output: '1f9db-1f3fd',
      uc_match: '1f9db-1f3fd',
      uc_greedy: '1f9db-1f3fd',
      shortnames: [':vampire_medium_skin_tone:'],
      category: 'people'
    },
    ':vampire_tone4:': {
      uc_base: '1f9db-1f3fe',
      uc_output: '1f9db-1f3fe',
      uc_match: '1f9db-1f3fe',
      uc_greedy: '1f9db-1f3fe',
      shortnames: [':vampire_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':vampire_tone5:': {
      uc_base: '1f9db-1f3ff',
      uc_output: '1f9db-1f3ff',
      uc_match: '1f9db-1f3ff',
      uc_greedy: '1f9db-1f3ff',
      shortnames: [':vampire_dark_skin_tone:'],
      category: 'people'
    },
    ':vulcan_tone1:': {
      uc_base: '1f596-1f3fb',
      uc_output: '1f596-1f3fb',
      uc_match: '1f596-1f3fb',
      uc_greedy: '1f596-1f3fb',
      shortnames: [
        ':raised_hand_with_part_between_middle_and_ring_fingers_tone1:'
      ],
      category: 'people'
    },
    ':vulcan_tone2:': {
      uc_base: '1f596-1f3fc',
      uc_output: '1f596-1f3fc',
      uc_match: '1f596-1f3fc',
      uc_greedy: '1f596-1f3fc',
      shortnames: [
        ':raised_hand_with_part_between_middle_and_ring_fingers_tone2:'
      ],
      category: 'people'
    },
    ':vulcan_tone3:': {
      uc_base: '1f596-1f3fd',
      uc_output: '1f596-1f3fd',
      uc_match: '1f596-1f3fd',
      uc_greedy: '1f596-1f3fd',
      shortnames: [
        ':raised_hand_with_part_between_middle_and_ring_fingers_tone3:'
      ],
      category: 'people'
    },
    ':vulcan_tone4:': {
      uc_base: '1f596-1f3fe',
      uc_output: '1f596-1f3fe',
      uc_match: '1f596-1f3fe',
      uc_greedy: '1f596-1f3fe',
      shortnames: [
        ':raised_hand_with_part_between_middle_and_ring_fingers_tone4:'
      ],
      category: 'people'
    },
    ':vulcan_tone5:': {
      uc_base: '1f596-1f3ff',
      uc_output: '1f596-1f3ff',
      uc_match: '1f596-1f3ff',
      uc_greedy: '1f596-1f3ff',
      shortnames: [
        ':raised_hand_with_part_between_middle_and_ring_fingers_tone5:'
      ],
      category: 'people'
    },
    ':wave_tone1:': {
      uc_base: '1f44b-1f3fb',
      uc_output: '1f44b-1f3fb',
      uc_match: '1f44b-1f3fb',
      uc_greedy: '1f44b-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':wave_tone2:': {
      uc_base: '1f44b-1f3fc',
      uc_output: '1f44b-1f3fc',
      uc_match: '1f44b-1f3fc',
      uc_greedy: '1f44b-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':wave_tone3:': {
      uc_base: '1f44b-1f3fd',
      uc_output: '1f44b-1f3fd',
      uc_match: '1f44b-1f3fd',
      uc_greedy: '1f44b-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':wave_tone4:': {
      uc_base: '1f44b-1f3fe',
      uc_output: '1f44b-1f3fe',
      uc_match: '1f44b-1f3fe',
      uc_greedy: '1f44b-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':wave_tone5:': {
      uc_base: '1f44b-1f3ff',
      uc_output: '1f44b-1f3ff',
      uc_match: '1f44b-1f3ff',
      uc_greedy: '1f44b-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':woman_tone1:': {
      uc_base: '1f469-1f3fb',
      uc_output: '1f469-1f3fb',
      uc_match: '1f469-1f3fb',
      uc_greedy: '1f469-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':woman_tone2:': {
      uc_base: '1f469-1f3fc',
      uc_output: '1f469-1f3fc',
      uc_match: '1f469-1f3fc',
      uc_greedy: '1f469-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':woman_tone3:': {
      uc_base: '1f469-1f3fd',
      uc_output: '1f469-1f3fd',
      uc_match: '1f469-1f3fd',
      uc_greedy: '1f469-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':woman_tone4:': {
      uc_base: '1f469-1f3fe',
      uc_output: '1f469-1f3fe',
      uc_match: '1f469-1f3fe',
      uc_greedy: '1f469-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':woman_tone5:': {
      uc_base: '1f469-1f3ff',
      uc_output: '1f469-1f3ff',
      uc_match: '1f469-1f3ff',
      uc_greedy: '1f469-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':woman_with_headscarf_tone1:': {
      uc_base: '1f9d5-1f3fb',
      uc_output: '1f9d5-1f3fb',
      uc_match: '1f9d5-1f3fb',
      uc_greedy: '1f9d5-1f3fb',
      shortnames: [':woman_with_headscarf_light_skin_tone:'],
      category: 'people'
    },
    ':woman_with_headscarf_tone2:': {
      uc_base: '1f9d5-1f3fc',
      uc_output: '1f9d5-1f3fc',
      uc_match: '1f9d5-1f3fc',
      uc_greedy: '1f9d5-1f3fc',
      shortnames: [':woman_with_headscarf_medium_light_skin_tone:'],
      category: 'people'
    },
    ':woman_with_headscarf_tone3:': {
      uc_base: '1f9d5-1f3fd',
      uc_output: '1f9d5-1f3fd',
      uc_match: '1f9d5-1f3fd',
      uc_greedy: '1f9d5-1f3fd',
      shortnames: [':woman_with_headscarf_medium_skin_tone:'],
      category: 'people'
    },
    ':woman_with_headscarf_tone4:': {
      uc_base: '1f9d5-1f3fe',
      uc_output: '1f9d5-1f3fe',
      uc_match: '1f9d5-1f3fe',
      uc_greedy: '1f9d5-1f3fe',
      shortnames: [':woman_with_headscarf_medium_dark_skin_tone:'],
      category: 'people'
    },
    ':woman_with_headscarf_tone5:': {
      uc_base: '1f9d5-1f3ff',
      uc_output: '1f9d5-1f3ff',
      uc_match: '1f9d5-1f3ff',
      uc_greedy: '1f9d5-1f3ff',
      shortnames: [':woman_with_headscarf_dark_skin_tone:'],
      category: 'people'
    },
    ':fist_tone1:': {
      uc_base: '270a-1f3fb',
      uc_output: '270a-1f3fb',
      uc_match: '270a-1f3fb',
      uc_greedy: '270a-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':fist_tone2:': {
      uc_base: '270a-1f3fc',
      uc_output: '270a-1f3fc',
      uc_match: '270a-1f3fc',
      uc_greedy: '270a-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':fist_tone3:': {
      uc_base: '270a-1f3fd',
      uc_output: '270a-1f3fd',
      uc_match: '270a-1f3fd',
      uc_greedy: '270a-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':fist_tone4:': {
      uc_base: '270a-1f3fe',
      uc_output: '270a-1f3fe',
      uc_match: '270a-1f3fe',
      uc_greedy: '270a-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':fist_tone5:': {
      uc_base: '270a-1f3ff',
      uc_output: '270a-1f3ff',
      uc_match: '270a-1f3ff',
      uc_greedy: '270a-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':person_bouncing_ball_tone1:': {
      uc_base: '26f9-1f3fb',
      uc_output: '26f9-1f3fb',
      uc_match: '26f9-fe0f-1f3fb',
      uc_greedy: '26f9-fe0f-1f3fb',
      shortnames: [':basketball_player_tone1:', ':person_with_ball_tone1:'],
      category: 'activity'
    },
    ':person_bouncing_ball_tone2:': {
      uc_base: '26f9-1f3fc',
      uc_output: '26f9-1f3fc',
      uc_match: '26f9-fe0f-1f3fc',
      uc_greedy: '26f9-fe0f-1f3fc',
      shortnames: [':basketball_player_tone2:', ':person_with_ball_tone2:'],
      category: 'activity'
    },
    ':person_bouncing_ball_tone3:': {
      uc_base: '26f9-1f3fd',
      uc_output: '26f9-1f3fd',
      uc_match: '26f9-fe0f-1f3fd',
      uc_greedy: '26f9-fe0f-1f3fd',
      shortnames: [':basketball_player_tone3:', ':person_with_ball_tone3:'],
      category: 'activity'
    },
    ':person_bouncing_ball_tone4:': {
      uc_base: '26f9-1f3fe',
      uc_output: '26f9-1f3fe',
      uc_match: '26f9-fe0f-1f3fe',
      uc_greedy: '26f9-fe0f-1f3fe',
      shortnames: [':basketball_player_tone4:', ':person_with_ball_tone4:'],
      category: 'activity'
    },
    ':person_bouncing_ball_tone5:': {
      uc_base: '26f9-1f3ff',
      uc_output: '26f9-1f3ff',
      uc_match: '26f9-fe0f-1f3ff',
      uc_greedy: '26f9-fe0f-1f3ff',
      shortnames: [':basketball_player_tone5:', ':person_with_ball_tone5:'],
      category: 'activity'
    },
    ':point_up_tone1:': {
      uc_base: '261d-1f3fb',
      uc_output: '261d-1f3fb',
      uc_match: '261d-fe0f-1f3fb',
      uc_greedy: '261d-fe0f-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':point_up_tone2:': {
      uc_base: '261d-1f3fc',
      uc_output: '261d-1f3fc',
      uc_match: '261d-fe0f-1f3fc',
      uc_greedy: '261d-fe0f-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':point_up_tone3:': {
      uc_base: '261d-1f3fd',
      uc_output: '261d-1f3fd',
      uc_match: '261d-fe0f-1f3fd',
      uc_greedy: '261d-fe0f-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':point_up_tone4:': {
      uc_base: '261d-1f3fe',
      uc_output: '261d-1f3fe',
      uc_match: '261d-fe0f-1f3fe',
      uc_greedy: '261d-fe0f-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':point_up_tone5:': {
      uc_base: '261d-1f3ff',
      uc_output: '261d-1f3ff',
      uc_match: '261d-fe0f-1f3ff',
      uc_greedy: '261d-fe0f-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':raised_hand_tone1:': {
      uc_base: '270b-1f3fb',
      uc_output: '270b-1f3fb',
      uc_match: '270b-1f3fb',
      uc_greedy: '270b-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':raised_hand_tone2:': {
      uc_base: '270b-1f3fc',
      uc_output: '270b-1f3fc',
      uc_match: '270b-1f3fc',
      uc_greedy: '270b-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':raised_hand_tone3:': {
      uc_base: '270b-1f3fd',
      uc_output: '270b-1f3fd',
      uc_match: '270b-1f3fd',
      uc_greedy: '270b-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':raised_hand_tone4:': {
      uc_base: '270b-1f3fe',
      uc_output: '270b-1f3fe',
      uc_match: '270b-1f3fe',
      uc_greedy: '270b-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':raised_hand_tone5:': {
      uc_base: '270b-1f3ff',
      uc_output: '270b-1f3ff',
      uc_match: '270b-1f3ff',
      uc_greedy: '270b-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':v_tone1:': {
      uc_base: '270c-1f3fb',
      uc_output: '270c-1f3fb',
      uc_match: '270c-fe0f-1f3fb',
      uc_greedy: '270c-fe0f-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':v_tone2:': {
      uc_base: '270c-1f3fc',
      uc_output: '270c-1f3fc',
      uc_match: '270c-fe0f-1f3fc',
      uc_greedy: '270c-fe0f-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':v_tone3:': {
      uc_base: '270c-1f3fd',
      uc_output: '270c-1f3fd',
      uc_match: '270c-fe0f-1f3fd',
      uc_greedy: '270c-fe0f-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':v_tone4:': {
      uc_base: '270c-1f3fe',
      uc_output: '270c-1f3fe',
      uc_match: '270c-fe0f-1f3fe',
      uc_greedy: '270c-fe0f-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':v_tone5:': {
      uc_base: '270c-1f3ff',
      uc_output: '270c-1f3ff',
      uc_match: '270c-fe0f-1f3ff',
      uc_greedy: '270c-fe0f-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':writing_hand_tone1:': {
      uc_base: '270d-1f3fb',
      uc_output: '270d-1f3fb',
      uc_match: '270d-fe0f-1f3fb',
      uc_greedy: '270d-fe0f-1f3fb',
      shortnames: [],
      category: 'people'
    },
    ':writing_hand_tone2:': {
      uc_base: '270d-1f3fc',
      uc_output: '270d-1f3fc',
      uc_match: '270d-fe0f-1f3fc',
      uc_greedy: '270d-fe0f-1f3fc',
      shortnames: [],
      category: 'people'
    },
    ':writing_hand_tone3:': {
      uc_base: '270d-1f3fd',
      uc_output: '270d-1f3fd',
      uc_match: '270d-fe0f-1f3fd',
      uc_greedy: '270d-fe0f-1f3fd',
      shortnames: [],
      category: 'people'
    },
    ':writing_hand_tone4:': {
      uc_base: '270d-1f3fe',
      uc_output: '270d-1f3fe',
      uc_match: '270d-fe0f-1f3fe',
      uc_greedy: '270d-fe0f-1f3fe',
      shortnames: [],
      category: 'people'
    },
    ':writing_hand_tone5:': {
      uc_base: '270d-1f3ff',
      uc_output: '270d-1f3ff',
      uc_match: '270d-fe0f-1f3ff',
      uc_greedy: '270d-fe0f-1f3ff',
      shortnames: [],
      category: 'people'
    },
    ':100:': {
      uc_base: '1f4af',
      uc_output: '1f4af',
      uc_match: '1f4af',
      uc_greedy: '1f4af',
      shortnames: [],
      category: 'symbols'
    },
    ':1234:': {
      uc_base: '1f522',
      uc_output: '1f522',
      uc_match: '1f522',
      uc_greedy: '1f522',
      shortnames: [],
      category: 'symbols'
    },
    ':8ball:': {
      uc_base: '1f3b1',
      uc_output: '1f3b1',
      uc_match: '1f3b1',
      uc_greedy: '1f3b1',
      shortnames: [],
      category: 'activity'
    },
    ':a:': {
      uc_base: '1f170',
      uc_output: '1f170',
      uc_match: '1f170-fe0f',
      uc_greedy: '1f170-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':ab:': {
      uc_base: '1f18e',
      uc_output: '1f18e',
      uc_match: '1f18e',
      uc_greedy: '1f18e',
      shortnames: [],
      category: 'symbols'
    },
    ':abc:': {
      uc_base: '1f524',
      uc_output: '1f524',
      uc_match: '1f524',
      uc_greedy: '1f524',
      shortnames: [],
      category: 'symbols'
    },
    ':abcd:': {
      uc_base: '1f521',
      uc_output: '1f521',
      uc_match: '1f521',
      uc_greedy: '1f521',
      shortnames: [],
      category: 'symbols'
    },
    ':accept:': {
      uc_base: '1f251',
      uc_output: '1f251',
      uc_match: '1f251',
      uc_greedy: '1f251',
      shortnames: [],
      category: 'symbols'
    },
    ':adult:': {
      uc_base: '1f9d1',
      uc_output: '1f9d1',
      uc_match: '1f9d1',
      uc_greedy: '1f9d1',
      shortnames: [],
      category: 'people'
    },
    ':aerial_tramway:': {
      uc_base: '1f6a1',
      uc_output: '1f6a1',
      uc_match: '1f6a1',
      uc_greedy: '1f6a1',
      shortnames: [],
      category: 'travel'
    },
    ':airplane_arriving:': {
      uc_base: '1f6ec',
      uc_output: '1f6ec',
      uc_match: '1f6ec',
      uc_greedy: '1f6ec',
      shortnames: [],
      category: 'travel'
    },
    ':airplane_departure:': {
      uc_base: '1f6eb',
      uc_output: '1f6eb',
      uc_match: '1f6eb',
      uc_greedy: '1f6eb',
      shortnames: [],
      category: 'travel'
    },
    ':airplane_small:': {
      uc_base: '1f6e9',
      uc_output: '1f6e9',
      uc_match: '1f6e9-fe0f',
      uc_greedy: '1f6e9-fe0f',
      shortnames: [':small_airplane:'],
      category: 'travel'
    },
    ':alien:': {
      uc_base: '1f47d',
      uc_output: '1f47d',
      uc_match: '1f47d-fe0f',
      uc_greedy: '1f47d-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':ambulance:': {
      uc_base: '1f691',
      uc_output: '1f691',
      uc_match: '1f691-fe0f',
      uc_greedy: '1f691-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':amphora:': {
      uc_base: '1f3fa',
      uc_output: '1f3fa',
      uc_match: '1f3fa',
      uc_greedy: '1f3fa',
      shortnames: [],
      category: 'objects'
    },
    ':angel:': {
      uc_base: '1f47c',
      uc_output: '1f47c',
      uc_match: '1f47c',
      uc_greedy: '1f47c',
      shortnames: [],
      category: 'people'
    },
    ':anger:': {
      uc_base: '1f4a2',
      uc_output: '1f4a2',
      uc_match: '1f4a2',
      uc_greedy: '1f4a2',
      shortnames: [],
      category: 'symbols'
    },
    ':anger_right:': {
      uc_base: '1f5ef',
      uc_output: '1f5ef',
      uc_match: '1f5ef-fe0f',
      uc_greedy: '1f5ef-fe0f',
      shortnames: [':right_anger_bubble:'],
      category: 'symbols'
    },
    ':angry:': {
      uc_base: '1f620',
      uc_output: '1f620',
      uc_match: '1f620',
      uc_greedy: '1f620',
      shortnames: [],
      category: 'people'
    },
    ':anguished:': {
      uc_base: '1f627',
      uc_output: '1f627',
      uc_match: '1f627',
      uc_greedy: '1f627',
      shortnames: [],
      category: 'people'
    },
    ':ant:': {
      uc_base: '1f41c',
      uc_output: '1f41c',
      uc_match: '1f41c',
      uc_greedy: '1f41c',
      shortnames: [],
      category: 'nature'
    },
    ':apple:': {
      uc_base: '1f34e',
      uc_output: '1f34e',
      uc_match: '1f34e',
      uc_greedy: '1f34e',
      shortnames: [],
      category: 'food'
    },
    ':arrow_down_small:': {
      uc_base: '1f53d',
      uc_output: '1f53d',
      uc_match: '1f53d',
      uc_greedy: '1f53d',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_up_small:': {
      uc_base: '1f53c',
      uc_output: '1f53c',
      uc_match: '1f53c',
      uc_greedy: '1f53c',
      shortnames: [],
      category: 'symbols'
    },
    ':arrows_clockwise:': {
      uc_base: '1f503',
      uc_output: '1f503',
      uc_match: '1f503',
      uc_greedy: '1f503',
      shortnames: [],
      category: 'symbols'
    },
    ':arrows_counterclockwise:': {
      uc_base: '1f504',
      uc_output: '1f504',
      uc_match: '1f504',
      uc_greedy: '1f504',
      shortnames: [],
      category: 'symbols'
    },
    ':art:': {
      uc_base: '1f3a8',
      uc_output: '1f3a8',
      uc_match: '1f3a8',
      uc_greedy: '1f3a8',
      shortnames: [],
      category: 'activity'
    },
    ':articulated_lorry:': {
      uc_base: '1f69b',
      uc_output: '1f69b',
      uc_match: '1f69b',
      uc_greedy: '1f69b',
      shortnames: [],
      category: 'travel'
    },
    ':astonished:': {
      uc_base: '1f632',
      uc_output: '1f632',
      uc_match: '1f632',
      uc_greedy: '1f632',
      shortnames: [],
      category: 'people'
    },
    ':athletic_shoe:': {
      uc_base: '1f45f',
      uc_output: '1f45f',
      uc_match: '1f45f',
      uc_greedy: '1f45f',
      shortnames: [],
      category: 'people'
    },
    ':atm:': {
      uc_base: '1f3e7',
      uc_output: '1f3e7',
      uc_match: '1f3e7',
      uc_greedy: '1f3e7',
      shortnames: [],
      category: 'symbols'
    },
    ':avocado:': {
      uc_base: '1f951',
      uc_output: '1f951',
      uc_match: '1f951',
      uc_greedy: '1f951',
      shortnames: [],
      category: 'food'
    },
    ':b:': {
      uc_base: '1f171',
      uc_output: '1f171',
      uc_match: '1f171-fe0f',
      uc_greedy: '1f171-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':baby:': {
      uc_base: '1f476',
      uc_output: '1f476',
      uc_match: '1f476',
      uc_greedy: '1f476',
      shortnames: [],
      category: 'people'
    },
    ':baby_bottle:': {
      uc_base: '1f37c',
      uc_output: '1f37c',
      uc_match: '1f37c',
      uc_greedy: '1f37c',
      shortnames: [],
      category: 'food'
    },
    ':baby_chick:': {
      uc_base: '1f424',
      uc_output: '1f424',
      uc_match: '1f424',
      uc_greedy: '1f424',
      shortnames: [],
      category: 'nature'
    },
    ':baby_symbol:': {
      uc_base: '1f6bc',
      uc_output: '1f6bc',
      uc_match: '1f6bc-fe0f',
      uc_greedy: '1f6bc-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':back:': {
      uc_base: '1f519',
      uc_output: '1f519',
      uc_match: '1f519',
      uc_greedy: '1f519',
      shortnames: [],
      category: 'symbols'
    },
    ':bacon:': {
      uc_base: '1f953',
      uc_output: '1f953',
      uc_match: '1f953',
      uc_greedy: '1f953',
      shortnames: [],
      category: 'food'
    },
    ':badminton:': {
      uc_base: '1f3f8',
      uc_output: '1f3f8',
      uc_match: '1f3f8',
      uc_greedy: '1f3f8',
      shortnames: [],
      category: 'activity'
    },
    ':baggage_claim:': {
      uc_base: '1f6c4',
      uc_output: '1f6c4',
      uc_match: '1f6c4',
      uc_greedy: '1f6c4',
      shortnames: [],
      category: 'symbols'
    },
    ':balloon:': {
      uc_base: '1f388',
      uc_output: '1f388',
      uc_match: '1f388',
      uc_greedy: '1f388',
      shortnames: [],
      category: 'objects'
    },
    ':ballot_box:': {
      uc_base: '1f5f3',
      uc_output: '1f5f3',
      uc_match: '1f5f3-fe0f',
      uc_greedy: '1f5f3-fe0f',
      shortnames: [':ballot_box_with_ballot:'],
      category: 'objects'
    },
    ':bamboo:': {
      uc_base: '1f38d',
      uc_output: '1f38d',
      uc_match: '1f38d',
      uc_greedy: '1f38d',
      shortnames: [],
      category: 'nature'
    },
    ':banana:': {
      uc_base: '1f34c',
      uc_output: '1f34c',
      uc_match: '1f34c',
      uc_greedy: '1f34c',
      shortnames: [],
      category: 'food'
    },
    ':bank:': {
      uc_base: '1f3e6',
      uc_output: '1f3e6',
      uc_match: '1f3e6',
      uc_greedy: '1f3e6',
      shortnames: [],
      category: 'travel'
    },
    ':bar_chart:': {
      uc_base: '1f4ca',
      uc_output: '1f4ca',
      uc_match: '1f4ca',
      uc_greedy: '1f4ca',
      shortnames: [],
      category: 'objects'
    },
    ':barber:': {
      uc_base: '1f488',
      uc_output: '1f488',
      uc_match: '1f488',
      uc_greedy: '1f488',
      shortnames: [],
      category: 'objects'
    },
    ':basketball:': {
      uc_base: '1f3c0',
      uc_output: '1f3c0',
      uc_match: '1f3c0',
      uc_greedy: '1f3c0',
      shortnames: [],
      category: 'activity'
    },
    ':bat:': {
      uc_base: '1f987',
      uc_output: '1f987',
      uc_match: '1f987',
      uc_greedy: '1f987',
      shortnames: [],
      category: 'nature'
    },
    ':bath:': {
      uc_base: '1f6c0',
      uc_output: '1f6c0',
      uc_match: '1f6c0',
      uc_greedy: '1f6c0',
      shortnames: [],
      category: 'objects'
    },
    ':bathtub:': {
      uc_base: '1f6c1',
      uc_output: '1f6c1',
      uc_match: '1f6c1',
      uc_greedy: '1f6c1',
      shortnames: [],
      category: 'objects'
    },
    ':battery:': {
      uc_base: '1f50b',
      uc_output: '1f50b',
      uc_match: '1f50b',
      uc_greedy: '1f50b',
      shortnames: [],
      category: 'objects'
    },
    ':beach:': {
      uc_base: '1f3d6',
      uc_output: '1f3d6',
      uc_match: '1f3d6-fe0f',
      uc_greedy: '1f3d6-fe0f',
      shortnames: [':beach_with_umbrella:'],
      category: 'travel'
    },
    ':bear:': {
      uc_base: '1f43b',
      uc_output: '1f43b',
      uc_match: '1f43b',
      uc_greedy: '1f43b',
      shortnames: [],
      category: 'nature'
    },
    ':bearded_person:': {
      uc_base: '1f9d4',
      uc_output: '1f9d4',
      uc_match: '1f9d4',
      uc_greedy: '1f9d4',
      shortnames: [],
      category: 'people'
    },
    ':bed:': {
      uc_base: '1f6cf',
      uc_output: '1f6cf',
      uc_match: '1f6cf-fe0f',
      uc_greedy: '1f6cf-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':bee:': {
      uc_base: '1f41d',
      uc_output: '1f41d',
      uc_match: '1f41d',
      uc_greedy: '1f41d',
      shortnames: [],
      category: 'nature'
    },
    ':beer:': {
      uc_base: '1f37a',
      uc_output: '1f37a',
      uc_match: '1f37a',
      uc_greedy: '1f37a',
      shortnames: [],
      category: 'food'
    },
    ':beers:': {
      uc_base: '1f37b',
      uc_output: '1f37b',
      uc_match: '1f37b',
      uc_greedy: '1f37b',
      shortnames: [],
      category: 'food'
    },
    ':beetle:': {
      uc_base: '1f41e',
      uc_output: '1f41e',
      uc_match: '1f41e',
      uc_greedy: '1f41e',
      shortnames: [],
      category: 'nature'
    },
    ':beginner:': {
      uc_base: '1f530',
      uc_output: '1f530',
      uc_match: '1f530',
      uc_greedy: '1f530',
      shortnames: [],
      category: 'symbols'
    },
    ':bell:': {
      uc_base: '1f514',
      uc_output: '1f514',
      uc_match: '1f514',
      uc_greedy: '1f514',
      shortnames: [],
      category: 'symbols'
    },
    ':bellhop:': {
      uc_base: '1f6ce',
      uc_output: '1f6ce',
      uc_match: '1f6ce-fe0f',
      uc_greedy: '1f6ce-fe0f',
      shortnames: [':bellhop_bell:'],
      category: 'objects'
    },
    ':bento:': {
      uc_base: '1f371',
      uc_output: '1f371',
      uc_match: '1f371',
      uc_greedy: '1f371',
      shortnames: [],
      category: 'food'
    },
    ':bike:': {
      uc_base: '1f6b2',
      uc_output: '1f6b2',
      uc_match: '1f6b2-fe0f',
      uc_greedy: '1f6b2-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':bikini:': {
      uc_base: '1f459',
      uc_output: '1f459',
      uc_match: '1f459',
      uc_greedy: '1f459',
      shortnames: [],
      category: 'people'
    },
    ':billed_cap:': {
      uc_base: '1f9e2',
      uc_output: '1f9e2',
      uc_match: '1f9e2',
      uc_greedy: '1f9e2',
      shortnames: [],
      category: 'people'
    },
    ':bird:': {
      uc_base: '1f426',
      uc_output: '1f426',
      uc_match: '1f426-fe0f',
      uc_greedy: '1f426-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':birthday:': {
      uc_base: '1f382',
      uc_output: '1f382',
      uc_match: '1f382',
      uc_greedy: '1f382',
      shortnames: [],
      category: 'food'
    },
    ':black_heart:': {
      uc_base: '1f5a4',
      uc_output: '1f5a4',
      uc_match: '1f5a4',
      uc_greedy: '1f5a4',
      shortnames: [],
      category: 'symbols'
    },
    ':black_joker:': {
      uc_base: '1f0cf',
      uc_output: '1f0cf',
      uc_match: '1f0cf',
      uc_greedy: '1f0cf',
      shortnames: [],
      category: 'symbols'
    },
    ':black_square_button:': {
      uc_base: '1f532',
      uc_output: '1f532',
      uc_match: '1f532',
      uc_greedy: '1f532',
      shortnames: [],
      category: 'symbols'
    },
    ':blond_haired_person:': {
      uc_base: '1f471',
      uc_output: '1f471',
      uc_match: '1f471',
      uc_greedy: '1f471',
      shortnames: [':person_with_blond_hair:'],
      category: 'people'
    },
    ':blossom:': {
      uc_base: '1f33c',
      uc_output: '1f33c',
      uc_match: '1f33c',
      uc_greedy: '1f33c',
      shortnames: [],
      category: 'nature'
    },
    ':blowfish:': {
      uc_base: '1f421',
      uc_output: '1f421',
      uc_match: '1f421',
      uc_greedy: '1f421',
      shortnames: [],
      category: 'nature'
    },
    ':blue_book:': {
      uc_base: '1f4d8',
      uc_output: '1f4d8',
      uc_match: '1f4d8',
      uc_greedy: '1f4d8',
      shortnames: [],
      category: 'objects'
    },
    ':blue_car:': {
      uc_base: '1f699',
      uc_output: '1f699',
      uc_match: '1f699',
      uc_greedy: '1f699',
      shortnames: [],
      category: 'travel'
    },
    ':blue_circle:': {
      uc_base: '1f535',
      uc_output: '1f535',
      uc_match: '1f535',
      uc_greedy: '1f535',
      shortnames: [],
      category: 'symbols'
    },
    ':blue_heart:': {
      uc_base: '1f499',
      uc_output: '1f499',
      uc_match: '1f499',
      uc_greedy: '1f499',
      shortnames: [],
      category: 'symbols'
    },
    ':blush:': {
      uc_base: '1f60a',
      uc_output: '1f60a',
      uc_match: '1f60a',
      uc_greedy: '1f60a',
      shortnames: [],
      category: 'people'
    },
    ':boar:': {
      uc_base: '1f417',
      uc_output: '1f417',
      uc_match: '1f417',
      uc_greedy: '1f417',
      shortnames: [],
      category: 'nature'
    },
    ':bomb:': {
      uc_base: '1f4a3',
      uc_output: '1f4a3',
      uc_match: '1f4a3-fe0f',
      uc_greedy: '1f4a3-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':book:': {
      uc_base: '1f4d6',
      uc_output: '1f4d6',
      uc_match: '1f4d6',
      uc_greedy: '1f4d6',
      shortnames: [],
      category: 'objects'
    },
    ':bookmark:': {
      uc_base: '1f516',
      uc_output: '1f516',
      uc_match: '1f516',
      uc_greedy: '1f516',
      shortnames: [],
      category: 'objects'
    },
    ':bookmark_tabs:': {
      uc_base: '1f4d1',
      uc_output: '1f4d1',
      uc_match: '1f4d1',
      uc_greedy: '1f4d1',
      shortnames: [],
      category: 'objects'
    },
    ':books:': {
      uc_base: '1f4da',
      uc_output: '1f4da',
      uc_match: '1f4da-fe0f',
      uc_greedy: '1f4da-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':boom:': {
      uc_base: '1f4a5',
      uc_output: '1f4a5',
      uc_match: '1f4a5',
      uc_greedy: '1f4a5',
      shortnames: [],
      category: 'nature'
    },
    ':boot:': {
      uc_base: '1f462',
      uc_output: '1f462',
      uc_match: '1f462',
      uc_greedy: '1f462',
      shortnames: [],
      category: 'people'
    },
    ':bouquet:': {
      uc_base: '1f490',
      uc_output: '1f490',
      uc_match: '1f490',
      uc_greedy: '1f490',
      shortnames: [],
      category: 'nature'
    },
    ':bow_and_arrow:': {
      uc_base: '1f3f9',
      uc_output: '1f3f9',
      uc_match: '1f3f9',
      uc_greedy: '1f3f9',
      shortnames: [':archery:'],
      category: 'activity'
    },
    ':bowl_with_spoon:': {
      uc_base: '1f963',
      uc_output: '1f963',
      uc_match: '1f963',
      uc_greedy: '1f963',
      shortnames: [],
      category: 'food'
    },
    ':bowling:': {
      uc_base: '1f3b3',
      uc_output: '1f3b3',
      uc_match: '1f3b3',
      uc_greedy: '1f3b3',
      shortnames: [],
      category: 'activity'
    },
    ':boxing_glove:': {
      uc_base: '1f94a',
      uc_output: '1f94a',
      uc_match: '1f94a',
      uc_greedy: '1f94a',
      shortnames: [':boxing_gloves:'],
      category: 'activity'
    },
    ':boy:': {
      uc_base: '1f466',
      uc_output: '1f466',
      uc_match: '1f466',
      uc_greedy: '1f466',
      shortnames: [],
      category: 'people'
    },
    ':brain:': {
      uc_base: '1f9e0',
      uc_output: '1f9e0',
      uc_match: '1f9e0',
      uc_greedy: '1f9e0',
      shortnames: [],
      category: 'people'
    },
    ':bread:': {
      uc_base: '1f35e',
      uc_output: '1f35e',
      uc_match: '1f35e',
      uc_greedy: '1f35e',
      shortnames: [],
      category: 'food'
    },
    ':breast_feeding:': {
      uc_base: '1f931',
      uc_output: '1f931',
      uc_match: '1f931',
      uc_greedy: '1f931',
      shortnames: [],
      category: 'people'
    },
    ':bride_with_veil:': {
      uc_base: '1f470',
      uc_output: '1f470',
      uc_match: '1f470',
      uc_greedy: '1f470',
      shortnames: [],
      category: 'people'
    },
    ':bridge_at_night:': {
      uc_base: '1f309',
      uc_output: '1f309',
      uc_match: '1f309',
      uc_greedy: '1f309',
      shortnames: [],
      category: 'travel'
    },
    ':briefcase:': {
      uc_base: '1f4bc',
      uc_output: '1f4bc',
      uc_match: '1f4bc',
      uc_greedy: '1f4bc',
      shortnames: [],
      category: 'people'
    },
    ':broccoli:': {
      uc_base: '1f966',
      uc_output: '1f966',
      uc_match: '1f966',
      uc_greedy: '1f966',
      shortnames: [],
      category: 'food'
    },
    ':broken_heart:': {
      uc_base: '1f494',
      uc_output: '1f494',
      uc_match: '1f494',
      uc_greedy: '1f494',
      shortnames: [],
      category: 'symbols'
    },
    ':bug:': {
      uc_base: '1f41b',
      uc_output: '1f41b',
      uc_match: '1f41b',
      uc_greedy: '1f41b',
      shortnames: [],
      category: 'nature'
    },
    ':bulb:': {
      uc_base: '1f4a1',
      uc_output: '1f4a1',
      uc_match: '1f4a1',
      uc_greedy: '1f4a1',
      shortnames: [],
      category: 'objects'
    },
    ':bullettrain_front:': {
      uc_base: '1f685',
      uc_output: '1f685',
      uc_match: '1f685',
      uc_greedy: '1f685',
      shortnames: [],
      category: 'travel'
    },
    ':bullettrain_side:': {
      uc_base: '1f684',
      uc_output: '1f684',
      uc_match: '1f684',
      uc_greedy: '1f684',
      shortnames: [],
      category: 'travel'
    },
    ':burrito:': {
      uc_base: '1f32f',
      uc_output: '1f32f',
      uc_match: '1f32f',
      uc_greedy: '1f32f',
      shortnames: [],
      category: 'food'
    },
    ':bus:': {
      uc_base: '1f68c',
      uc_output: '1f68c',
      uc_match: '1f68c',
      uc_greedy: '1f68c',
      shortnames: [],
      category: 'travel'
    },
    ':busstop:': {
      uc_base: '1f68f',
      uc_output: '1f68f',
      uc_match: '1f68f',
      uc_greedy: '1f68f',
      shortnames: [],
      category: 'travel'
    },
    ':bust_in_silhouette:': {
      uc_base: '1f464',
      uc_output: '1f464',
      uc_match: '1f464',
      uc_greedy: '1f464',
      shortnames: [],
      category: 'people'
    },
    ':busts_in_silhouette:': {
      uc_base: '1f465',
      uc_output: '1f465',
      uc_match: '1f465',
      uc_greedy: '1f465',
      shortnames: [],
      category: 'people'
    },
    ':butterfly:': {
      uc_base: '1f98b',
      uc_output: '1f98b',
      uc_match: '1f98b',
      uc_greedy: '1f98b',
      shortnames: [],
      category: 'nature'
    },
    ':cactus:': {
      uc_base: '1f335',
      uc_output: '1f335',
      uc_match: '1f335',
      uc_greedy: '1f335',
      shortnames: [],
      category: 'nature'
    },
    ':cake:': {
      uc_base: '1f370',
      uc_output: '1f370',
      uc_match: '1f370',
      uc_greedy: '1f370',
      shortnames: [],
      category: 'food'
    },
    ':calendar:': {
      uc_base: '1f4c6',
      uc_output: '1f4c6',
      uc_match: '1f4c6',
      uc_greedy: '1f4c6',
      shortnames: [],
      category: 'objects'
    },
    ':calendar_spiral:': {
      uc_base: '1f5d3',
      uc_output: '1f5d3',
      uc_match: '1f5d3-fe0f',
      uc_greedy: '1f5d3-fe0f',
      shortnames: [':spiral_calendar_pad:'],
      category: 'objects'
    },
    ':call_me:': {
      uc_base: '1f919',
      uc_output: '1f919',
      uc_match: '1f919',
      uc_greedy: '1f919',
      shortnames: [':call_me_hand:'],
      category: 'people'
    },
    ':calling:': {
      uc_base: '1f4f2',
      uc_output: '1f4f2',
      uc_match: '1f4f2',
      uc_greedy: '1f4f2',
      shortnames: [],
      category: 'objects'
    },
    ':camel:': {
      uc_base: '1f42b',
      uc_output: '1f42b',
      uc_match: '1f42b',
      uc_greedy: '1f42b',
      shortnames: [],
      category: 'nature'
    },
    ':camera:': {
      uc_base: '1f4f7',
      uc_output: '1f4f7',
      uc_match: '1f4f7-fe0f',
      uc_greedy: '1f4f7-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':camera_with_flash:': {
      uc_base: '1f4f8',
      uc_output: '1f4f8',
      uc_match: '1f4f8',
      uc_greedy: '1f4f8',
      shortnames: [],
      category: 'objects'
    },
    ':camping:': {
      uc_base: '1f3d5',
      uc_output: '1f3d5',
      uc_match: '1f3d5-fe0f',
      uc_greedy: '1f3d5-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':candle:': {
      uc_base: '1f56f',
      uc_output: '1f56f',
      uc_match: '1f56f-fe0f',
      uc_greedy: '1f56f-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':candy:': {
      uc_base: '1f36c',
      uc_output: '1f36c',
      uc_match: '1f36c',
      uc_greedy: '1f36c',
      shortnames: [],
      category: 'food'
    },
    ':canned_food:': {
      uc_base: '1f96b',
      uc_output: '1f96b',
      uc_match: '1f96b',
      uc_greedy: '1f96b',
      shortnames: [],
      category: 'food'
    },
    ':canoe:': {
      uc_base: '1f6f6',
      uc_output: '1f6f6',
      uc_match: '1f6f6',
      uc_greedy: '1f6f6',
      shortnames: [':kayak:'],
      category: 'travel'
    },
    ':capital_abcd:': {
      uc_base: '1f520',
      uc_output: '1f520',
      uc_match: '1f520',
      uc_greedy: '1f520',
      shortnames: [],
      category: 'symbols'
    },
    ':card_box:': {
      uc_base: '1f5c3',
      uc_output: '1f5c3',
      uc_match: '1f5c3-fe0f',
      uc_greedy: '1f5c3-fe0f',
      shortnames: [':card_file_box:'],
      category: 'objects'
    },
    ':card_index:': {
      uc_base: '1f4c7',
      uc_output: '1f4c7',
      uc_match: '1f4c7',
      uc_greedy: '1f4c7',
      shortnames: [],
      category: 'objects'
    },
    ':carousel_horse:': {
      uc_base: '1f3a0',
      uc_output: '1f3a0',
      uc_match: '1f3a0',
      uc_greedy: '1f3a0',
      shortnames: [],
      category: 'travel'
    },
    ':carrot:': {
      uc_base: '1f955',
      uc_output: '1f955',
      uc_match: '1f955',
      uc_greedy: '1f955',
      shortnames: [],
      category: 'food'
    },
    ':cat2:': {
      uc_base: '1f408',
      uc_output: '1f408',
      uc_match: '1f408-fe0f',
      uc_greedy: '1f408-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':cat:': {
      uc_base: '1f431',
      uc_output: '1f431',
      uc_match: '1f431',
      uc_greedy: '1f431',
      shortnames: [],
      category: 'nature'
    },
    ':cd:': {
      uc_base: '1f4bf',
      uc_output: '1f4bf',
      uc_match: '1f4bf-fe0f',
      uc_greedy: '1f4bf-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':champagne:': {
      uc_base: '1f37e',
      uc_output: '1f37e',
      uc_match: '1f37e',
      uc_greedy: '1f37e',
      shortnames: [':bottle_with_popping_cork:'],
      category: 'food'
    },
    ':champagne_glass:': {
      uc_base: '1f942',
      uc_output: '1f942',
      uc_match: '1f942',
      uc_greedy: '1f942',
      shortnames: [':clinking_glass:'],
      category: 'food'
    },
    ':chart:': {
      uc_base: '1f4b9',
      uc_output: '1f4b9',
      uc_match: '1f4b9',
      uc_greedy: '1f4b9',
      shortnames: [],
      category: 'symbols'
    },
    ':chart_with_downwards_trend:': {
      uc_base: '1f4c9',
      uc_output: '1f4c9',
      uc_match: '1f4c9',
      uc_greedy: '1f4c9',
      shortnames: [],
      category: 'objects'
    },
    ':chart_with_upwards_trend:': {
      uc_base: '1f4c8',
      uc_output: '1f4c8',
      uc_match: '1f4c8',
      uc_greedy: '1f4c8',
      shortnames: [],
      category: 'objects'
    },
    ':checkered_flag:': {
      uc_base: '1f3c1',
      uc_output: '1f3c1',
      uc_match: '1f3c1',
      uc_greedy: '1f3c1',
      shortnames: [],
      category: 'flags'
    },
    ':cheese:': {
      uc_base: '1f9c0',
      uc_output: '1f9c0',
      uc_match: '1f9c0',
      uc_greedy: '1f9c0',
      shortnames: [':cheese_wedge:'],
      category: 'food'
    },
    ':cherries:': {
      uc_base: '1f352',
      uc_output: '1f352',
      uc_match: '1f352',
      uc_greedy: '1f352',
      shortnames: [],
      category: 'food'
    },
    ':cherry_blossom:': {
      uc_base: '1f338',
      uc_output: '1f338',
      uc_match: '1f338',
      uc_greedy: '1f338',
      shortnames: [],
      category: 'nature'
    },
    ':chestnut:': {
      uc_base: '1f330',
      uc_output: '1f330',
      uc_match: '1f330',
      uc_greedy: '1f330',
      shortnames: [],
      category: 'food'
    },
    ':chicken:': {
      uc_base: '1f414',
      uc_output: '1f414',
      uc_match: '1f414',
      uc_greedy: '1f414',
      shortnames: [],
      category: 'nature'
    },
    ':child:': {
      uc_base: '1f9d2',
      uc_output: '1f9d2',
      uc_match: '1f9d2',
      uc_greedy: '1f9d2',
      shortnames: [],
      category: 'people'
    },
    ':children_crossing:': {
      uc_base: '1f6b8',
      uc_output: '1f6b8',
      uc_match: '1f6b8',
      uc_greedy: '1f6b8',
      shortnames: [],
      category: 'symbols'
    },
    ':chipmunk:': {
      uc_base: '1f43f',
      uc_output: '1f43f',
      uc_match: '1f43f-fe0f',
      uc_greedy: '1f43f-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':chocolate_bar:': {
      uc_base: '1f36b',
      uc_output: '1f36b',
      uc_match: '1f36b',
      uc_greedy: '1f36b',
      shortnames: [],
      category: 'food'
    },
    ':chopsticks:': {
      uc_base: '1f962',
      uc_output: '1f962',
      uc_match: '1f962',
      uc_greedy: '1f962',
      shortnames: [],
      category: 'food'
    },
    ':christmas_tree:': {
      uc_base: '1f384',
      uc_output: '1f384',
      uc_match: '1f384',
      uc_greedy: '1f384',
      shortnames: [],
      category: 'nature'
    },
    ':cinema:': {
      uc_base: '1f3a6',
      uc_output: '1f3a6',
      uc_match: '1f3a6',
      uc_greedy: '1f3a6',
      shortnames: [],
      category: 'symbols'
    },
    ':circus_tent:': {
      uc_base: '1f3aa',
      uc_output: '1f3aa',
      uc_match: '1f3aa',
      uc_greedy: '1f3aa',
      shortnames: [],
      category: 'activity'
    },
    ':city_dusk:': {
      uc_base: '1f306',
      uc_output: '1f306',
      uc_match: '1f306',
      uc_greedy: '1f306',
      shortnames: [],
      category: 'travel'
    },
    ':city_sunset:': {
      uc_base: '1f307',
      uc_output: '1f307',
      uc_match: '1f307',
      uc_greedy: '1f307',
      shortnames: [':city_sunrise:'],
      category: 'travel'
    },
    ':cityscape:': {
      uc_base: '1f3d9',
      uc_output: '1f3d9',
      uc_match: '1f3d9-fe0f',
      uc_greedy: '1f3d9-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':cl:': {
      uc_base: '1f191',
      uc_output: '1f191',
      uc_match: '1f191',
      uc_greedy: '1f191',
      shortnames: [],
      category: 'symbols'
    },
    ':clap:': {
      uc_base: '1f44f',
      uc_output: '1f44f',
      uc_match: '1f44f',
      uc_greedy: '1f44f',
      shortnames: [],
      category: 'people'
    },
    ':clapper:': {
      uc_base: '1f3ac',
      uc_output: '1f3ac',
      uc_match: '1f3ac-fe0f',
      uc_greedy: '1f3ac-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':classical_building:': {
      uc_base: '1f3db',
      uc_output: '1f3db',
      uc_match: '1f3db-fe0f',
      uc_greedy: '1f3db-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':clipboard:': {
      uc_base: '1f4cb',
      uc_output: '1f4cb',
      uc_match: '1f4cb-fe0f',
      uc_greedy: '1f4cb-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':clock1030:': {
      uc_base: '1f565',
      uc_output: '1f565',
      uc_match: '1f565-fe0f',
      uc_greedy: '1f565-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock10:': {
      uc_base: '1f559',
      uc_output: '1f559',
      uc_match: '1f559-fe0f',
      uc_greedy: '1f559-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock1130:': {
      uc_base: '1f566',
      uc_output: '1f566',
      uc_match: '1f566-fe0f',
      uc_greedy: '1f566-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock11:': {
      uc_base: '1f55a',
      uc_output: '1f55a',
      uc_match: '1f55a-fe0f',
      uc_greedy: '1f55a-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock1230:': {
      uc_base: '1f567',
      uc_output: '1f567',
      uc_match: '1f567-fe0f',
      uc_greedy: '1f567-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock12:': {
      uc_base: '1f55b',
      uc_output: '1f55b',
      uc_match: '1f55b-fe0f',
      uc_greedy: '1f55b-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock130:': {
      uc_base: '1f55c',
      uc_output: '1f55c',
      uc_match: '1f55c-fe0f',
      uc_greedy: '1f55c-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock1:': {
      uc_base: '1f550',
      uc_output: '1f550',
      uc_match: '1f550-fe0f',
      uc_greedy: '1f550-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock230:': {
      uc_base: '1f55d',
      uc_output: '1f55d',
      uc_match: '1f55d-fe0f',
      uc_greedy: '1f55d-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock2:': {
      uc_base: '1f551',
      uc_output: '1f551',
      uc_match: '1f551-fe0f',
      uc_greedy: '1f551-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock330:': {
      uc_base: '1f55e',
      uc_output: '1f55e',
      uc_match: '1f55e-fe0f',
      uc_greedy: '1f55e-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock3:': {
      uc_base: '1f552',
      uc_output: '1f552',
      uc_match: '1f552-fe0f',
      uc_greedy: '1f552-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock430:': {
      uc_base: '1f55f',
      uc_output: '1f55f',
      uc_match: '1f55f-fe0f',
      uc_greedy: '1f55f-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock4:': {
      uc_base: '1f553',
      uc_output: '1f553',
      uc_match: '1f553-fe0f',
      uc_greedy: '1f553-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock530:': {
      uc_base: '1f560',
      uc_output: '1f560',
      uc_match: '1f560-fe0f',
      uc_greedy: '1f560-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock5:': {
      uc_base: '1f554',
      uc_output: '1f554',
      uc_match: '1f554-fe0f',
      uc_greedy: '1f554-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock630:': {
      uc_base: '1f561',
      uc_output: '1f561',
      uc_match: '1f561-fe0f',
      uc_greedy: '1f561-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock6:': {
      uc_base: '1f555',
      uc_output: '1f555',
      uc_match: '1f555-fe0f',
      uc_greedy: '1f555-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock730:': {
      uc_base: '1f562',
      uc_output: '1f562',
      uc_match: '1f562-fe0f',
      uc_greedy: '1f562-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock7:': {
      uc_base: '1f556',
      uc_output: '1f556',
      uc_match: '1f556-fe0f',
      uc_greedy: '1f556-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock830:': {
      uc_base: '1f563',
      uc_output: '1f563',
      uc_match: '1f563-fe0f',
      uc_greedy: '1f563-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock8:': {
      uc_base: '1f557',
      uc_output: '1f557',
      uc_match: '1f557-fe0f',
      uc_greedy: '1f557-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock930:': {
      uc_base: '1f564',
      uc_output: '1f564',
      uc_match: '1f564-fe0f',
      uc_greedy: '1f564-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock9:': {
      uc_base: '1f558',
      uc_output: '1f558',
      uc_match: '1f558-fe0f',
      uc_greedy: '1f558-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':clock:': {
      uc_base: '1f570',
      uc_output: '1f570',
      uc_match: '1f570-fe0f',
      uc_greedy: '1f570-fe0f',
      shortnames: [':mantlepiece_clock:'],
      category: 'objects'
    },
    ':closed_book:': {
      uc_base: '1f4d5',
      uc_output: '1f4d5',
      uc_match: '1f4d5',
      uc_greedy: '1f4d5',
      shortnames: [],
      category: 'objects'
    },
    ':closed_lock_with_key:': {
      uc_base: '1f510',
      uc_output: '1f510',
      uc_match: '1f510',
      uc_greedy: '1f510',
      shortnames: [],
      category: 'objects'
    },
    ':closed_umbrella:': {
      uc_base: '1f302',
      uc_output: '1f302',
      uc_match: '1f302',
      uc_greedy: '1f302',
      shortnames: [],
      category: 'people'
    },
    ':cloud_lightning:': {
      uc_base: '1f329',
      uc_output: '1f329',
      uc_match: '1f329-fe0f',
      uc_greedy: '1f329-fe0f',
      shortnames: [':cloud_with_lightning:'],
      category: 'nature'
    },
    ':cloud_rain:': {
      uc_base: '1f327',
      uc_output: '1f327',
      uc_match: '1f327-fe0f',
      uc_greedy: '1f327-fe0f',
      shortnames: [':cloud_with_rain:'],
      category: 'nature'
    },
    ':cloud_snow:': {
      uc_base: '1f328',
      uc_output: '1f328',
      uc_match: '1f328-fe0f',
      uc_greedy: '1f328-fe0f',
      shortnames: [':cloud_with_snow:'],
      category: 'nature'
    },
    ':cloud_tornado:': {
      uc_base: '1f32a',
      uc_output: '1f32a',
      uc_match: '1f32a-fe0f',
      uc_greedy: '1f32a-fe0f',
      shortnames: [':cloud_with_tornado:'],
      category: 'nature'
    },
    ':clown:': {
      uc_base: '1f921',
      uc_output: '1f921',
      uc_match: '1f921',
      uc_greedy: '1f921',
      shortnames: [':clown_face:'],
      category: 'people'
    },
    ':coat:': {
      uc_base: '1f9e5',
      uc_output: '1f9e5',
      uc_match: '1f9e5',
      uc_greedy: '1f9e5',
      shortnames: [],
      category: 'people'
    },
    ':cocktail:': {
      uc_base: '1f378',
      uc_output: '1f378',
      uc_match: '1f378-fe0f',
      uc_greedy: '1f378-fe0f',
      shortnames: [],
      category: 'food'
    },
    ':coconut:': {
      uc_base: '1f965',
      uc_output: '1f965',
      uc_match: '1f965',
      uc_greedy: '1f965',
      shortnames: [],
      category: 'food'
    },
    ':cold_sweat:': {
      uc_base: '1f630',
      uc_output: '1f630',
      uc_match: '1f630',
      uc_greedy: '1f630',
      shortnames: [],
      category: 'people'
    },
    ':compression:': {
      uc_base: '1f5dc',
      uc_output: '1f5dc',
      uc_match: '1f5dc-fe0f',
      uc_greedy: '1f5dc-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':computer:': {
      uc_base: '1f4bb',
      uc_output: '1f4bb',
      uc_match: '1f4bb-fe0f',
      uc_greedy: '1f4bb-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':confetti_ball:': {
      uc_base: '1f38a',
      uc_output: '1f38a',
      uc_match: '1f38a',
      uc_greedy: '1f38a',
      shortnames: [],
      category: 'objects'
    },
    ':confounded:': {
      uc_base: '1f616',
      uc_output: '1f616',
      uc_match: '1f616',
      uc_greedy: '1f616',
      shortnames: [],
      category: 'people'
    },
    ':confused:': {
      uc_base: '1f615',
      uc_output: '1f615',
      uc_match: '1f615',
      uc_greedy: '1f615',
      shortnames: [],
      category: 'people'
    },
    ':construction:': {
      uc_base: '1f6a7',
      uc_output: '1f6a7',
      uc_match: '1f6a7',
      uc_greedy: '1f6a7',
      shortnames: [],
      category: 'travel'
    },
    ':construction_site:': {
      uc_base: '1f3d7',
      uc_output: '1f3d7',
      uc_match: '1f3d7-fe0f',
      uc_greedy: '1f3d7-fe0f',
      shortnames: [':building_construction:'],
      category: 'travel'
    },
    ':construction_worker:': {
      uc_base: '1f477',
      uc_output: '1f477',
      uc_match: '1f477',
      uc_greedy: '1f477',
      shortnames: [],
      category: 'people'
    },
    ':control_knobs:': {
      uc_base: '1f39b',
      uc_output: '1f39b',
      uc_match: '1f39b-fe0f',
      uc_greedy: '1f39b-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':convenience_store:': {
      uc_base: '1f3ea',
      uc_output: '1f3ea',
      uc_match: '1f3ea',
      uc_greedy: '1f3ea',
      shortnames: [],
      category: 'travel'
    },
    ':cookie:': {
      uc_base: '1f36a',
      uc_output: '1f36a',
      uc_match: '1f36a',
      uc_greedy: '1f36a',
      shortnames: [],
      category: 'food'
    },
    ':cooking:': {
      uc_base: '1f373',
      uc_output: '1f373',
      uc_match: '1f373',
      uc_greedy: '1f373',
      shortnames: [],
      category: 'food'
    },
    ':cool:': {
      uc_base: '1f192',
      uc_output: '1f192',
      uc_match: '1f192',
      uc_greedy: '1f192',
      shortnames: [],
      category: 'symbols'
    },
    ':corn:': {
      uc_base: '1f33d',
      uc_output: '1f33d',
      uc_match: '1f33d',
      uc_greedy: '1f33d',
      shortnames: [],
      category: 'food'
    },
    ':couch:': {
      uc_base: '1f6cb',
      uc_output: '1f6cb',
      uc_match: '1f6cb-fe0f',
      uc_greedy: '1f6cb-fe0f',
      shortnames: [':couch_and_lamp:'],
      category: 'objects'
    },
    ':couple:': {
      uc_base: '1f46b',
      uc_output: '1f46b',
      uc_match: '1f46b',
      uc_greedy: '1f46b',
      shortnames: [],
      category: 'people'
    },
    ':couple_with_heart:': {
      uc_base: '1f491',
      uc_output: '1f491',
      uc_match: '1f491',
      uc_greedy: '1f491',
      shortnames: [],
      category: 'people'
    },
    ':couplekiss:': {
      uc_base: '1f48f',
      uc_output: '1f48f',
      uc_match: '1f48f',
      uc_greedy: '1f48f',
      shortnames: [],
      category: 'people'
    },
    ':cow2:': {
      uc_base: '1f404',
      uc_output: '1f404',
      uc_match: '1f404',
      uc_greedy: '1f404',
      shortnames: [],
      category: 'nature'
    },
    ':cow:': {
      uc_base: '1f42e',
      uc_output: '1f42e',
      uc_match: '1f42e',
      uc_greedy: '1f42e',
      shortnames: [],
      category: 'nature'
    },
    ':cowboy:': {
      uc_base: '1f920',
      uc_output: '1f920',
      uc_match: '1f920',
      uc_greedy: '1f920',
      shortnames: [':face_with_cowboy_hat:'],
      category: 'people'
    },
    ':crab:': {
      uc_base: '1f980',
      uc_output: '1f980',
      uc_match: '1f980',
      uc_greedy: '1f980',
      shortnames: [],
      category: 'nature'
    },
    ':crayon:': {
      uc_base: '1f58d',
      uc_output: '1f58d',
      uc_match: '1f58d-fe0f',
      uc_greedy: '1f58d-fe0f',
      shortnames: [':lower_left_crayon:'],
      category: 'objects'
    },
    ':crazy_face:': {
      uc_base: '1f92a',
      uc_output: '1f92a',
      uc_match: '1f92a',
      uc_greedy: '1f92a',
      shortnames: [],
      category: 'people'
    },
    ':credit_card:': {
      uc_base: '1f4b3',
      uc_output: '1f4b3',
      uc_match: '1f4b3-fe0f',
      uc_greedy: '1f4b3-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':crescent_moon:': {
      uc_base: '1f319',
      uc_output: '1f319',
      uc_match: '1f319',
      uc_greedy: '1f319',
      shortnames: [],
      category: 'nature'
    },
    ':cricket:': {
      uc_base: '1f997',
      uc_output: '1f997',
      uc_match: '1f997',
      uc_greedy: '1f997',
      shortnames: [],
      category: 'nature'
    },
    ':cricket_game:': {
      uc_base: '1f3cf',
      uc_output: '1f3cf',
      uc_match: '1f3cf',
      uc_greedy: '1f3cf',
      shortnames: [':cricket_bat_ball:'],
      category: 'activity'
    },
    ':crocodile:': {
      uc_base: '1f40a',
      uc_output: '1f40a',
      uc_match: '1f40a',
      uc_greedy: '1f40a',
      shortnames: [],
      category: 'nature'
    },
    ':croissant:': {
      uc_base: '1f950',
      uc_output: '1f950',
      uc_match: '1f950',
      uc_greedy: '1f950',
      shortnames: [],
      category: 'food'
    },
    ':crossed_flags:': {
      uc_base: '1f38c',
      uc_output: '1f38c',
      uc_match: '1f38c',
      uc_greedy: '1f38c',
      shortnames: [],
      category: 'flags'
    },
    ':crown:': {
      uc_base: '1f451',
      uc_output: '1f451',
      uc_match: '1f451',
      uc_greedy: '1f451',
      shortnames: [],
      category: 'people'
    },
    ':cruise_ship:': {
      uc_base: '1f6f3',
      uc_output: '1f6f3',
      uc_match: '1f6f3-fe0f',
      uc_greedy: '1f6f3-fe0f',
      shortnames: [':passenger_ship:'],
      category: 'travel'
    },
    ':cry:': {
      uc_base: '1f622',
      uc_output: '1f622',
      uc_match: '1f622',
      uc_greedy: '1f622',
      shortnames: [],
      category: 'people'
    },
    ':crying_cat_face:': {
      uc_base: '1f63f',
      uc_output: '1f63f',
      uc_match: '1f63f',
      uc_greedy: '1f63f',
      shortnames: [],
      category: 'people'
    },
    ':crystal_ball:': {
      uc_base: '1f52e',
      uc_output: '1f52e',
      uc_match: '1f52e',
      uc_greedy: '1f52e',
      shortnames: [],
      category: 'objects'
    },
    ':cucumber:': {
      uc_base: '1f952',
      uc_output: '1f952',
      uc_match: '1f952',
      uc_greedy: '1f952',
      shortnames: [],
      category: 'food'
    },
    ':cup_with_straw:': {
      uc_base: '1f964',
      uc_output: '1f964',
      uc_match: '1f964',
      uc_greedy: '1f964',
      shortnames: [],
      category: 'food'
    },
    ':cupid:': {
      uc_base: '1f498',
      uc_output: '1f498',
      uc_match: '1f498',
      uc_greedy: '1f498',
      shortnames: [],
      category: 'symbols'
    },
    ':curling_stone:': {
      uc_base: '1f94c',
      uc_output: '1f94c',
      uc_match: '1f94c',
      uc_greedy: '1f94c',
      shortnames: [],
      category: 'activity'
    },
    ':currency_exchange:': {
      uc_base: '1f4b1',
      uc_output: '1f4b1',
      uc_match: '1f4b1',
      uc_greedy: '1f4b1',
      shortnames: [],
      category: 'symbols'
    },
    ':curry:': {
      uc_base: '1f35b',
      uc_output: '1f35b',
      uc_match: '1f35b',
      uc_greedy: '1f35b',
      shortnames: [],
      category: 'food'
    },
    ':custard:': {
      uc_base: '1f36e',
      uc_output: '1f36e',
      uc_match: '1f36e',
      uc_greedy: '1f36e',
      shortnames: [':pudding:', ':flan:'],
      category: 'food'
    },
    ':customs:': {
      uc_base: '1f6c3',
      uc_output: '1f6c3',
      uc_match: '1f6c3',
      uc_greedy: '1f6c3',
      shortnames: [],
      category: 'symbols'
    },
    ':cut_of_meat:': {
      uc_base: '1f969',
      uc_output: '1f969',
      uc_match: '1f969',
      uc_greedy: '1f969',
      shortnames: [],
      category: 'food'
    },
    ':cyclone:': {
      uc_base: '1f300',
      uc_output: '1f300',
      uc_match: '1f300',
      uc_greedy: '1f300',
      shortnames: [],
      category: 'symbols'
    },
    ':dagger:': {
      uc_base: '1f5e1',
      uc_output: '1f5e1',
      uc_match: '1f5e1-fe0f',
      uc_greedy: '1f5e1-fe0f',
      shortnames: [':dagger_knife:'],
      category: 'objects'
    },
    ':dancer:': {
      uc_base: '1f483',
      uc_output: '1f483',
      uc_match: '1f483',
      uc_greedy: '1f483',
      shortnames: [],
      category: 'people'
    },
    ':dango:': {
      uc_base: '1f361',
      uc_output: '1f361',
      uc_match: '1f361',
      uc_greedy: '1f361',
      shortnames: [],
      category: 'food'
    },
    ':dark_sunglasses:': {
      uc_base: '1f576',
      uc_output: '1f576',
      uc_match: '1f576-fe0f',
      uc_greedy: '1f576-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':dart:': {
      uc_base: '1f3af',
      uc_output: '1f3af',
      uc_match: '1f3af',
      uc_greedy: '1f3af',
      shortnames: [],
      category: 'activity'
    },
    ':dash:': {
      uc_base: '1f4a8',
      uc_output: '1f4a8',
      uc_match: '1f4a8',
      uc_greedy: '1f4a8',
      shortnames: [],
      category: 'nature'
    },
    ':date:': {
      uc_base: '1f4c5',
      uc_output: '1f4c5',
      uc_match: '1f4c5',
      uc_greedy: '1f4c5',
      shortnames: [],
      category: 'objects'
    },
    ':deciduous_tree:': {
      uc_base: '1f333',
      uc_output: '1f333',
      uc_match: '1f333',
      uc_greedy: '1f333',
      shortnames: [],
      category: 'nature'
    },
    ':deer:': {
      uc_base: '1f98c',
      uc_output: '1f98c',
      uc_match: '1f98c',
      uc_greedy: '1f98c',
      shortnames: [],
      category: 'nature'
    },
    ':department_store:': {
      uc_base: '1f3ec',
      uc_output: '1f3ec',
      uc_match: '1f3ec',
      uc_greedy: '1f3ec',
      shortnames: [],
      category: 'travel'
    },
    ':desert:': {
      uc_base: '1f3dc',
      uc_output: '1f3dc',
      uc_match: '1f3dc-fe0f',
      uc_greedy: '1f3dc-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':desktop:': {
      uc_base: '1f5a5',
      uc_output: '1f5a5',
      uc_match: '1f5a5-fe0f',
      uc_greedy: '1f5a5-fe0f',
      shortnames: [':desktop_computer:'],
      category: 'objects'
    },
    ':detective:': {
      uc_base: '1f575',
      uc_output: '1f575',
      uc_match: '1f575-fe0f',
      uc_greedy: '1f575-fe0f',
      shortnames: [':spy:', ':sleuth_or_spy:'],
      category: 'people'
    },
    ':diamond_shape_with_a_dot_inside:': {
      uc_base: '1f4a0',
      uc_output: '1f4a0',
      uc_match: '1f4a0',
      uc_greedy: '1f4a0',
      shortnames: [],
      category: 'symbols'
    },
    ':disappointed:': {
      uc_base: '1f61e',
      uc_output: '1f61e',
      uc_match: '1f61e',
      uc_greedy: '1f61e',
      shortnames: [],
      category: 'people'
    },
    ':disappointed_relieved:': {
      uc_base: '1f625',
      uc_output: '1f625',
      uc_match: '1f625',
      uc_greedy: '1f625',
      shortnames: [],
      category: 'people'
    },
    ':dividers:': {
      uc_base: '1f5c2',
      uc_output: '1f5c2',
      uc_match: '1f5c2-fe0f',
      uc_greedy: '1f5c2-fe0f',
      shortnames: [':card_index_dividers:'],
      category: 'objects'
    },
    ':dizzy:': {
      uc_base: '1f4ab',
      uc_output: '1f4ab',
      uc_match: '1f4ab',
      uc_greedy: '1f4ab',
      shortnames: [],
      category: 'nature'
    },
    ':dizzy_face:': {
      uc_base: '1f635',
      uc_output: '1f635',
      uc_match: '1f635',
      uc_greedy: '1f635',
      shortnames: [],
      category: 'people'
    },
    ':do_not_litter:': {
      uc_base: '1f6af',
      uc_output: '1f6af',
      uc_match: '1f6af',
      uc_greedy: '1f6af',
      shortnames: [],
      category: 'symbols'
    },
    ':dog2:': {
      uc_base: '1f415',
      uc_output: '1f415',
      uc_match: '1f415-fe0f',
      uc_greedy: '1f415-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':dog:': {
      uc_base: '1f436',
      uc_output: '1f436',
      uc_match: '1f436',
      uc_greedy: '1f436',
      shortnames: [],
      category: 'nature'
    },
    ':dollar:': {
      uc_base: '1f4b5',
      uc_output: '1f4b5',
      uc_match: '1f4b5',
      uc_greedy: '1f4b5',
      shortnames: [],
      category: 'objects'
    },
    ':dolls:': {
      uc_base: '1f38e',
      uc_output: '1f38e',
      uc_match: '1f38e',
      uc_greedy: '1f38e',
      shortnames: [],
      category: 'objects'
    },
    ':dolphin:': {
      uc_base: '1f42c',
      uc_output: '1f42c',
      uc_match: '1f42c',
      uc_greedy: '1f42c',
      shortnames: [],
      category: 'nature'
    },
    ':door:': {
      uc_base: '1f6aa',
      uc_output: '1f6aa',
      uc_match: '1f6aa',
      uc_greedy: '1f6aa',
      shortnames: [],
      category: 'objects'
    },
    ':doughnut:': {
      uc_base: '1f369',
      uc_output: '1f369',
      uc_match: '1f369',
      uc_greedy: '1f369',
      shortnames: [],
      category: 'food'
    },
    ':dove:': {
      uc_base: '1f54a',
      uc_output: '1f54a',
      uc_match: '1f54a-fe0f',
      uc_greedy: '1f54a-fe0f',
      shortnames: [':dove_of_peace:'],
      category: 'nature'
    },
    ':dragon:': {
      uc_base: '1f409',
      uc_output: '1f409',
      uc_match: '1f409',
      uc_greedy: '1f409',
      shortnames: [],
      category: 'nature'
    },
    ':dragon_face:': {
      uc_base: '1f432',
      uc_output: '1f432',
      uc_match: '1f432',
      uc_greedy: '1f432',
      shortnames: [],
      category: 'nature'
    },
    ':dress:': {
      uc_base: '1f457',
      uc_output: '1f457',
      uc_match: '1f457',
      uc_greedy: '1f457',
      shortnames: [],
      category: 'people'
    },
    ':dromedary_camel:': {
      uc_base: '1f42a',
      uc_output: '1f42a',
      uc_match: '1f42a',
      uc_greedy: '1f42a',
      shortnames: [],
      category: 'nature'
    },
    ':drooling_face:': {
      uc_base: '1f924',
      uc_output: '1f924',
      uc_match: '1f924',
      uc_greedy: '1f924',
      shortnames: [':drool:'],
      category: 'people'
    },
    ':droplet:': {
      uc_base: '1f4a7',
      uc_output: '1f4a7',
      uc_match: '1f4a7',
      uc_greedy: '1f4a7',
      shortnames: [],
      category: 'nature'
    },
    ':drum:': {
      uc_base: '1f941',
      uc_output: '1f941',
      uc_match: '1f941',
      uc_greedy: '1f941',
      shortnames: [':drum_with_drumsticks:'],
      category: 'activity'
    },
    ':duck:': {
      uc_base: '1f986',
      uc_output: '1f986',
      uc_match: '1f986',
      uc_greedy: '1f986',
      shortnames: [],
      category: 'nature'
    },
    ':dumpling:': {
      uc_base: '1f95f',
      uc_output: '1f95f',
      uc_match: '1f95f',
      uc_greedy: '1f95f',
      shortnames: [],
      category: 'food'
    },
    ':dvd:': {
      uc_base: '1f4c0',
      uc_output: '1f4c0',
      uc_match: '1f4c0',
      uc_greedy: '1f4c0',
      shortnames: [],
      category: 'objects'
    },
    ':e-mail:': {
      uc_base: '1f4e7',
      uc_output: '1f4e7',
      uc_match: '1f4e7',
      uc_greedy: '1f4e7',
      shortnames: [':email:'],
      category: 'objects'
    },
    ':eagle:': {
      uc_base: '1f985',
      uc_output: '1f985',
      uc_match: '1f985',
      uc_greedy: '1f985',
      shortnames: [],
      category: 'nature'
    },
    ':ear:': {
      uc_base: '1f442',
      uc_output: '1f442',
      uc_match: '1f442-fe0f',
      uc_greedy: '1f442-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':ear_of_rice:': {
      uc_base: '1f33e',
      uc_output: '1f33e',
      uc_match: '1f33e',
      uc_greedy: '1f33e',
      shortnames: [],
      category: 'nature'
    },
    ':earth_africa:': {
      uc_base: '1f30d',
      uc_output: '1f30d',
      uc_match: '1f30d-fe0f',
      uc_greedy: '1f30d-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':earth_americas:': {
      uc_base: '1f30e',
      uc_output: '1f30e',
      uc_match: '1f30e-fe0f',
      uc_greedy: '1f30e-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':earth_asia:': {
      uc_base: '1f30f',
      uc_output: '1f30f',
      uc_match: '1f30f-fe0f',
      uc_greedy: '1f30f-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':egg:': {
      uc_base: '1f95a',
      uc_output: '1f95a',
      uc_match: '1f95a',
      uc_greedy: '1f95a',
      shortnames: [],
      category: 'food'
    },
    ':eggplant:': {
      uc_base: '1f346',
      uc_output: '1f346',
      uc_match: '1f346',
      uc_greedy: '1f346',
      shortnames: [],
      category: 'food'
    },
    ':electric_plug:': {
      uc_base: '1f50c',
      uc_output: '1f50c',
      uc_match: '1f50c',
      uc_greedy: '1f50c',
      shortnames: [],
      category: 'objects'
    },
    ':elephant:': {
      uc_base: '1f418',
      uc_output: '1f418',
      uc_match: '1f418',
      uc_greedy: '1f418',
      shortnames: [],
      category: 'nature'
    },
    ':elf:': {
      uc_base: '1f9dd',
      uc_output: '1f9dd',
      uc_match: '1f9dd',
      uc_greedy: '1f9dd',
      shortnames: [],
      category: 'people'
    },
    ':end:': {
      uc_base: '1f51a',
      uc_output: '1f51a',
      uc_match: '1f51a',
      uc_greedy: '1f51a',
      shortnames: [],
      category: 'symbols'
    },
    ':envelope_with_arrow:': {
      uc_base: '1f4e9',
      uc_output: '1f4e9',
      uc_match: '1f4e9',
      uc_greedy: '1f4e9',
      shortnames: [],
      category: 'objects'
    },
    ':euro:': {
      uc_base: '1f4b6',
      uc_output: '1f4b6',
      uc_match: '1f4b6',
      uc_greedy: '1f4b6',
      shortnames: [],
      category: 'objects'
    },
    ':european_castle:': {
      uc_base: '1f3f0',
      uc_output: '1f3f0',
      uc_match: '1f3f0',
      uc_greedy: '1f3f0',
      shortnames: [],
      category: 'travel'
    },
    ':european_post_office:': {
      uc_base: '1f3e4',
      uc_output: '1f3e4',
      uc_match: '1f3e4',
      uc_greedy: '1f3e4',
      shortnames: [],
      category: 'travel'
    },
    ':evergreen_tree:': {
      uc_base: '1f332',
      uc_output: '1f332',
      uc_match: '1f332',
      uc_greedy: '1f332',
      shortnames: [],
      category: 'nature'
    },
    ':exploding_head:': {
      uc_base: '1f92f',
      uc_output: '1f92f',
      uc_match: '1f92f',
      uc_greedy: '1f92f',
      shortnames: [],
      category: 'people'
    },
    ':expressionless:': {
      uc_base: '1f611',
      uc_output: '1f611',
      uc_match: '1f611',
      uc_greedy: '1f611',
      shortnames: [],
      category: 'people'
    },
    ':eye:': {
      uc_base: '1f441',
      uc_output: '1f441',
      uc_match: '1f441-fe0f',
      uc_greedy: '1f441-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':eyeglasses:': {
      uc_base: '1f453',
      uc_output: '1f453',
      uc_match: '1f453-fe0f',
      uc_greedy: '1f453-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':eyes:': {
      uc_base: '1f440',
      uc_output: '1f440',
      uc_match: '1f440',
      uc_greedy: '1f440',
      shortnames: [],
      category: 'people'
    },
    ':face_vomiting:': {
      uc_base: '1f92e',
      uc_output: '1f92e',
      uc_match: '1f92e',
      uc_greedy: '1f92e',
      shortnames: [],
      category: 'people'
    },
    ':face_with_hand_over_mouth:': {
      uc_base: '1f92d',
      uc_output: '1f92d',
      uc_match: '1f92d',
      uc_greedy: '1f92d',
      shortnames: [],
      category: 'people'
    },
    ':face_with_monocle:': {
      uc_base: '1f9d0',
      uc_output: '1f9d0',
      uc_match: '1f9d0',
      uc_greedy: '1f9d0',
      shortnames: [],
      category: 'people'
    },
    ':face_with_raised_eyebrow:': {
      uc_base: '1f928',
      uc_output: '1f928',
      uc_match: '1f928',
      uc_greedy: '1f928',
      shortnames: [],
      category: 'people'
    },
    ':face_with_symbols_over_mouth:': {
      uc_base: '1f92c',
      uc_output: '1f92c',
      uc_match: '1f92c',
      uc_greedy: '1f92c',
      shortnames: [],
      category: 'people'
    },
    ':factory:': {
      uc_base: '1f3ed',
      uc_output: '1f3ed',
      uc_match: '1f3ed-fe0f',
      uc_greedy: '1f3ed-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':fairy:': {
      uc_base: '1f9da',
      uc_output: '1f9da',
      uc_match: '1f9da',
      uc_greedy: '1f9da',
      shortnames: [],
      category: 'people'
    },
    ':fallen_leaf:': {
      uc_base: '1f342',
      uc_output: '1f342',
      uc_match: '1f342',
      uc_greedy: '1f342',
      shortnames: [],
      category: 'nature'
    },
    ':family:': {
      uc_base: '1f46a',
      uc_output: '1f46a',
      uc_match: '1f46a-fe0f',
      uc_greedy: '1f46a-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':fax:': {
      uc_base: '1f4e0',
      uc_output: '1f4e0',
      uc_match: '1f4e0',
      uc_greedy: '1f4e0',
      shortnames: [],
      category: 'objects'
    },
    ':fearful:': {
      uc_base: '1f628',
      uc_output: '1f628',
      uc_match: '1f628',
      uc_greedy: '1f628',
      shortnames: [],
      category: 'people'
    },
    ':feet:': {
      uc_base: '1f43e',
      uc_output: '1f43e',
      uc_match: '1f43e',
      uc_greedy: '1f43e',
      shortnames: [':paw_prints:'],
      category: 'nature'
    },
    ':ferris_wheel:': {
      uc_base: '1f3a1',
      uc_output: '1f3a1',
      uc_match: '1f3a1',
      uc_greedy: '1f3a1',
      shortnames: [],
      category: 'travel'
    },
    ':field_hockey:': {
      uc_base: '1f3d1',
      uc_output: '1f3d1',
      uc_match: '1f3d1',
      uc_greedy: '1f3d1',
      shortnames: [],
      category: 'activity'
    },
    ':file_cabinet:': {
      uc_base: '1f5c4',
      uc_output: '1f5c4',
      uc_match: '1f5c4-fe0f',
      uc_greedy: '1f5c4-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':file_folder:': {
      uc_base: '1f4c1',
      uc_output: '1f4c1',
      uc_match: '1f4c1',
      uc_greedy: '1f4c1',
      shortnames: [],
      category: 'objects'
    },
    ':film_frames:': {
      uc_base: '1f39e',
      uc_output: '1f39e',
      uc_match: '1f39e-fe0f',
      uc_greedy: '1f39e-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':fingers_crossed:': {
      uc_base: '1f91e',
      uc_output: '1f91e',
      uc_match: '1f91e',
      uc_greedy: '1f91e',
      shortnames: [':hand_with_index_and_middle_finger_crossed:'],
      category: 'people'
    },
    ':fire:': {
      uc_base: '1f525',
      uc_output: '1f525',
      uc_match: '1f525',
      uc_greedy: '1f525',
      shortnames: [':flame:'],
      category: 'nature'
    },
    ':fire_engine:': {
      uc_base: '1f692',
      uc_output: '1f692',
      uc_match: '1f692',
      uc_greedy: '1f692',
      shortnames: [],
      category: 'travel'
    },
    ':fireworks:': {
      uc_base: '1f386',
      uc_output: '1f386',
      uc_match: '1f386',
      uc_greedy: '1f386',
      shortnames: [],
      category: 'travel'
    },
    ':first_place:': {
      uc_base: '1f947',
      uc_output: '1f947',
      uc_match: '1f947',
      uc_greedy: '1f947',
      shortnames: [':first_place_medal:'],
      category: 'activity'
    },
    ':first_quarter_moon:': {
      uc_base: '1f313',
      uc_output: '1f313',
      uc_match: '1f313',
      uc_greedy: '1f313',
      shortnames: [],
      category: 'nature'
    },
    ':first_quarter_moon_with_face:': {
      uc_base: '1f31b',
      uc_output: '1f31b',
      uc_match: '1f31b',
      uc_greedy: '1f31b',
      shortnames: [],
      category: 'nature'
    },
    ':fish:': {
      uc_base: '1f41f',
      uc_output: '1f41f',
      uc_match: '1f41f-fe0f',
      uc_greedy: '1f41f-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':fish_cake:': {
      uc_base: '1f365',
      uc_output: '1f365',
      uc_match: '1f365',
      uc_greedy: '1f365',
      shortnames: [],
      category: 'food'
    },
    ':fishing_pole_and_fish:': {
      uc_base: '1f3a3',
      uc_output: '1f3a3',
      uc_match: '1f3a3',
      uc_greedy: '1f3a3',
      shortnames: [],
      category: 'activity'
    },
    ':flag_black:': {
      uc_base: '1f3f4',
      uc_output: '1f3f4',
      uc_match: '1f3f4',
      uc_greedy: '1f3f4',
      shortnames: [':waving_black_flag:'],
      category: 'flags'
    },
    ':flag_white:': {
      uc_base: '1f3f3',
      uc_output: '1f3f3',
      uc_match: '1f3f3-fe0f',
      uc_greedy: '1f3f3-fe0f',
      shortnames: [':waving_white_flag:'],
      category: 'flags'
    },
    ':flags:': {
      uc_base: '1f38f',
      uc_output: '1f38f',
      uc_match: '1f38f',
      uc_greedy: '1f38f',
      shortnames: [],
      category: 'objects'
    },
    ':flashlight:': {
      uc_base: '1f526',
      uc_output: '1f526',
      uc_match: '1f526',
      uc_greedy: '1f526',
      shortnames: [],
      category: 'objects'
    },
    ':floppy_disk:': {
      uc_base: '1f4be',
      uc_output: '1f4be',
      uc_match: '1f4be',
      uc_greedy: '1f4be',
      shortnames: [],
      category: 'objects'
    },
    ':flower_playing_cards:': {
      uc_base: '1f3b4',
      uc_output: '1f3b4',
      uc_match: '1f3b4',
      uc_greedy: '1f3b4',
      shortnames: [],
      category: 'symbols'
    },
    ':flushed:': {
      uc_base: '1f633',
      uc_output: '1f633',
      uc_match: '1f633',
      uc_greedy: '1f633',
      shortnames: [],
      category: 'people'
    },
    ':flying_saucer:': {
      uc_base: '1f6f8',
      uc_output: '1f6f8',
      uc_match: '1f6f8',
      uc_greedy: '1f6f8',
      shortnames: [],
      category: 'travel'
    },
    ':fog:': {
      uc_base: '1f32b',
      uc_output: '1f32b',
      uc_match: '1f32b-fe0f',
      uc_greedy: '1f32b-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':foggy:': {
      uc_base: '1f301',
      uc_output: '1f301',
      uc_match: '1f301',
      uc_greedy: '1f301',
      shortnames: [],
      category: 'travel'
    },
    ':football:': {
      uc_base: '1f3c8',
      uc_output: '1f3c8',
      uc_match: '1f3c8',
      uc_greedy: '1f3c8',
      shortnames: [],
      category: 'activity'
    },
    ':footprints:': {
      uc_base: '1f463',
      uc_output: '1f463',
      uc_match: '1f463',
      uc_greedy: '1f463',
      shortnames: [],
      category: 'people'
    },
    ':fork_and_knife:': {
      uc_base: '1f374',
      uc_output: '1f374',
      uc_match: '1f374',
      uc_greedy: '1f374',
      shortnames: [],
      category: 'food'
    },
    ':fork_knife_plate:': {
      uc_base: '1f37d',
      uc_output: '1f37d',
      uc_match: '1f37d-fe0f',
      uc_greedy: '1f37d-fe0f',
      shortnames: [':fork_and_knife_with_plate:'],
      category: 'food'
    },
    ':fortune_cookie:': {
      uc_base: '1f960',
      uc_output: '1f960',
      uc_match: '1f960',
      uc_greedy: '1f960',
      shortnames: [],
      category: 'food'
    },
    ':four_leaf_clover:': {
      uc_base: '1f340',
      uc_output: '1f340',
      uc_match: '1f340',
      uc_greedy: '1f340',
      shortnames: [],
      category: 'nature'
    },
    ':fox:': {
      uc_base: '1f98a',
      uc_output: '1f98a',
      uc_match: '1f98a',
      uc_greedy: '1f98a',
      shortnames: [':fox_face:'],
      category: 'nature'
    },
    ':frame_photo:': {
      uc_base: '1f5bc',
      uc_output: '1f5bc',
      uc_match: '1f5bc-fe0f',
      uc_greedy: '1f5bc-fe0f',
      shortnames: [':frame_with_picture:'],
      category: 'objects'
    },
    ':free:': {
      uc_base: '1f193',
      uc_output: '1f193',
      uc_match: '1f193',
      uc_greedy: '1f193',
      shortnames: [],
      category: 'symbols'
    },
    ':french_bread:': {
      uc_base: '1f956',
      uc_output: '1f956',
      uc_match: '1f956',
      uc_greedy: '1f956',
      shortnames: [':baguette_bread:'],
      category: 'food'
    },
    ':fried_shrimp:': {
      uc_base: '1f364',
      uc_output: '1f364',
      uc_match: '1f364',
      uc_greedy: '1f364',
      shortnames: [],
      category: 'food'
    },
    ':fries:': {
      uc_base: '1f35f',
      uc_output: '1f35f',
      uc_match: '1f35f',
      uc_greedy: '1f35f',
      shortnames: [],
      category: 'food'
    },
    ':frog:': {
      uc_base: '1f438',
      uc_output: '1f438',
      uc_match: '1f438',
      uc_greedy: '1f438',
      shortnames: [],
      category: 'nature'
    },
    ':frowning:': {
      uc_base: '1f626',
      uc_output: '1f626',
      uc_match: '1f626',
      uc_greedy: '1f626',
      shortnames: [],
      category: 'people'
    },
    ':full_moon:': {
      uc_base: '1f315',
      uc_output: '1f315',
      uc_match: '1f315-fe0f',
      uc_greedy: '1f315-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':full_moon_with_face:': {
      uc_base: '1f31d',
      uc_output: '1f31d',
      uc_match: '1f31d',
      uc_greedy: '1f31d',
      shortnames: [],
      category: 'nature'
    },
    ':game_die:': {
      uc_base: '1f3b2',
      uc_output: '1f3b2',
      uc_match: '1f3b2',
      uc_greedy: '1f3b2',
      shortnames: [],
      category: 'activity'
    },
    ':gem:': {
      uc_base: '1f48e',
      uc_output: '1f48e',
      uc_match: '1f48e',
      uc_greedy: '1f48e',
      shortnames: [],
      category: 'objects'
    },
    ':genie:': {
      uc_base: '1f9de',
      uc_output: '1f9de',
      uc_match: '1f9de',
      uc_greedy: '1f9de',
      shortnames: [],
      category: 'people'
    },
    ':ghost:': {
      uc_base: '1f47b',
      uc_output: '1f47b',
      uc_match: '1f47b',
      uc_greedy: '1f47b',
      shortnames: [],
      category: 'people'
    },
    ':gift:': {
      uc_base: '1f381',
      uc_output: '1f381',
      uc_match: '1f381',
      uc_greedy: '1f381',
      shortnames: [],
      category: 'objects'
    },
    ':gift_heart:': {
      uc_base: '1f49d',
      uc_output: '1f49d',
      uc_match: '1f49d',
      uc_greedy: '1f49d',
      shortnames: [],
      category: 'symbols'
    },
    ':giraffe:': {
      uc_base: '1f992',
      uc_output: '1f992',
      uc_match: '1f992',
      uc_greedy: '1f992',
      shortnames: [],
      category: 'nature'
    },
    ':girl:': {
      uc_base: '1f467',
      uc_output: '1f467',
      uc_match: '1f467',
      uc_greedy: '1f467',
      shortnames: [],
      category: 'people'
    },
    ':globe_with_meridians:': {
      uc_base: '1f310',
      uc_output: '1f310',
      uc_match: '1f310',
      uc_greedy: '1f310',
      shortnames: [],
      category: 'symbols'
    },
    ':gloves:': {
      uc_base: '1f9e4',
      uc_output: '1f9e4',
      uc_match: '1f9e4',
      uc_greedy: '1f9e4',
      shortnames: [],
      category: 'people'
    },
    ':goal:': {
      uc_base: '1f945',
      uc_output: '1f945',
      uc_match: '1f945',
      uc_greedy: '1f945',
      shortnames: [':goal_net:'],
      category: 'activity'
    },
    ':goat:': {
      uc_base: '1f410',
      uc_output: '1f410',
      uc_match: '1f410',
      uc_greedy: '1f410',
      shortnames: [],
      category: 'nature'
    },
    ':gorilla:': {
      uc_base: '1f98d',
      uc_output: '1f98d',
      uc_match: '1f98d',
      uc_greedy: '1f98d',
      shortnames: [],
      category: 'nature'
    },
    ':grapes:': {
      uc_base: '1f347',
      uc_output: '1f347',
      uc_match: '1f347',
      uc_greedy: '1f347',
      shortnames: [],
      category: 'food'
    },
    ':green_apple:': {
      uc_base: '1f34f',
      uc_output: '1f34f',
      uc_match: '1f34f',
      uc_greedy: '1f34f',
      shortnames: [],
      category: 'food'
    },
    ':green_book:': {
      uc_base: '1f4d7',
      uc_output: '1f4d7',
      uc_match: '1f4d7',
      uc_greedy: '1f4d7',
      shortnames: [],
      category: 'objects'
    },
    ':green_heart:': {
      uc_base: '1f49a',
      uc_output: '1f49a',
      uc_match: '1f49a',
      uc_greedy: '1f49a',
      shortnames: [],
      category: 'symbols'
    },
    ':grimacing:': {
      uc_base: '1f62c',
      uc_output: '1f62c',
      uc_match: '1f62c',
      uc_greedy: '1f62c',
      shortnames: [],
      category: 'people'
    },
    ':grin:': {
      uc_base: '1f601',
      uc_output: '1f601',
      uc_match: '1f601',
      uc_greedy: '1f601',
      shortnames: [],
      category: 'people'
    },
    ':grinning:': {
      uc_base: '1f600',
      uc_output: '1f600',
      uc_match: '1f600',
      uc_greedy: '1f600',
      shortnames: [],
      category: 'people'
    },
    ':guard:': {
      uc_base: '1f482',
      uc_output: '1f482',
      uc_match: '1f482',
      uc_greedy: '1f482',
      shortnames: [':guardsman:'],
      category: 'people'
    },
    ':guitar:': {
      uc_base: '1f3b8',
      uc_output: '1f3b8',
      uc_match: '1f3b8',
      uc_greedy: '1f3b8',
      shortnames: [],
      category: 'activity'
    },
    ':gun:': {
      uc_base: '1f52b',
      uc_output: '1f52b',
      uc_match: '1f52b',
      uc_greedy: '1f52b',
      shortnames: [],
      category: 'objects'
    },
    ':hamburger:': {
      uc_base: '1f354',
      uc_output: '1f354',
      uc_match: '1f354',
      uc_greedy: '1f354',
      shortnames: [],
      category: 'food'
    },
    ':hammer:': {
      uc_base: '1f528',
      uc_output: '1f528',
      uc_match: '1f528',
      uc_greedy: '1f528',
      shortnames: [],
      category: 'objects'
    },
    ':hamster:': {
      uc_base: '1f439',
      uc_output: '1f439',
      uc_match: '1f439',
      uc_greedy: '1f439',
      shortnames: [],
      category: 'nature'
    },
    ':hand_splayed:': {
      uc_base: '1f590',
      uc_output: '1f590',
      uc_match: '1f590-fe0f',
      uc_greedy: '1f590-fe0f',
      shortnames: [':raised_hand_with_fingers_splayed:'],
      category: 'people'
    },
    ':handbag:': {
      uc_base: '1f45c',
      uc_output: '1f45c',
      uc_match: '1f45c',
      uc_greedy: '1f45c',
      shortnames: [],
      category: 'people'
    },
    ':handshake:': {
      uc_base: '1f91d',
      uc_output: '1f91d',
      uc_match: '1f91d',
      uc_greedy: '1f91d',
      shortnames: [':shaking_hands:'],
      category: 'people'
    },
    ':hatched_chick:': {
      uc_base: '1f425',
      uc_output: '1f425',
      uc_match: '1f425',
      uc_greedy: '1f425',
      shortnames: [],
      category: 'nature'
    },
    ':hatching_chick:': {
      uc_base: '1f423',
      uc_output: '1f423',
      uc_match: '1f423',
      uc_greedy: '1f423',
      shortnames: [],
      category: 'nature'
    },
    ':head_bandage:': {
      uc_base: '1f915',
      uc_output: '1f915',
      uc_match: '1f915',
      uc_greedy: '1f915',
      shortnames: [':face_with_head_bandage:'],
      category: 'people'
    },
    ':headphones:': {
      uc_base: '1f3a7',
      uc_output: '1f3a7',
      uc_match: '1f3a7-fe0f',
      uc_greedy: '1f3a7-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':hear_no_evil:': {
      uc_base: '1f649',
      uc_output: '1f649',
      uc_match: '1f649',
      uc_greedy: '1f649',
      shortnames: [],
      category: 'nature'
    },
    ':heart_decoration:': {
      uc_base: '1f49f',
      uc_output: '1f49f',
      uc_match: '1f49f',
      uc_greedy: '1f49f',
      shortnames: [],
      category: 'symbols'
    },
    ':heart_eyes:': {
      uc_base: '1f60d',
      uc_output: '1f60d',
      uc_match: '1f60d',
      uc_greedy: '1f60d',
      shortnames: [],
      category: 'people'
    },
    ':heart_eyes_cat:': {
      uc_base: '1f63b',
      uc_output: '1f63b',
      uc_match: '1f63b',
      uc_greedy: '1f63b',
      shortnames: [],
      category: 'people'
    },
    ':heartbeat:': {
      uc_base: '1f493',
      uc_output: '1f493',
      uc_match: '1f493',
      uc_greedy: '1f493',
      shortnames: [],
      category: 'symbols'
    },
    ':heartpulse:': {
      uc_base: '1f497',
      uc_output: '1f497',
      uc_match: '1f497',
      uc_greedy: '1f497',
      shortnames: [],
      category: 'symbols'
    },
    ':heavy_dollar_sign:': {
      uc_base: '1f4b2',
      uc_output: '1f4b2',
      uc_match: '1f4b2',
      uc_greedy: '1f4b2',
      shortnames: [],
      category: 'symbols'
    },
    ':hedgehog:': {
      uc_base: '1f994',
      uc_output: '1f994',
      uc_match: '1f994',
      uc_greedy: '1f994',
      shortnames: [],
      category: 'nature'
    },
    ':helicopter:': {
      uc_base: '1f681',
      uc_output: '1f681',
      uc_match: '1f681',
      uc_greedy: '1f681',
      shortnames: [],
      category: 'travel'
    },
    ':herb:': {
      uc_base: '1f33f',
      uc_output: '1f33f',
      uc_match: '1f33f',
      uc_greedy: '1f33f',
      shortnames: [],
      category: 'nature'
    },
    ':hibiscus:': {
      uc_base: '1f33a',
      uc_output: '1f33a',
      uc_match: '1f33a',
      uc_greedy: '1f33a',
      shortnames: [],
      category: 'nature'
    },
    ':high_brightness:': {
      uc_base: '1f506',
      uc_output: '1f506',
      uc_match: '1f506',
      uc_greedy: '1f506',
      shortnames: [],
      category: 'symbols'
    },
    ':high_heel:': {
      uc_base: '1f460',
      uc_output: '1f460',
      uc_match: '1f460',
      uc_greedy: '1f460',
      shortnames: [],
      category: 'people'
    },
    ':hockey:': {
      uc_base: '1f3d2',
      uc_output: '1f3d2',
      uc_match: '1f3d2',
      uc_greedy: '1f3d2',
      shortnames: [],
      category: 'activity'
    },
    ':hole:': {
      uc_base: '1f573',
      uc_output: '1f573',
      uc_match: '1f573-fe0f',
      uc_greedy: '1f573-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':homes:': {
      uc_base: '1f3d8',
      uc_output: '1f3d8',
      uc_match: '1f3d8-fe0f',
      uc_greedy: '1f3d8-fe0f',
      shortnames: [':house_buildings:'],
      category: 'travel'
    },
    ':honey_pot:': {
      uc_base: '1f36f',
      uc_output: '1f36f',
      uc_match: '1f36f',
      uc_greedy: '1f36f',
      shortnames: [],
      category: 'food'
    },
    ':horse:': {
      uc_base: '1f434',
      uc_output: '1f434',
      uc_match: '1f434',
      uc_greedy: '1f434',
      shortnames: [],
      category: 'nature'
    },
    ':horse_racing:': {
      uc_base: '1f3c7',
      uc_output: '1f3c7',
      uc_match: '1f3c7',
      uc_greedy: '1f3c7',
      shortnames: [],
      category: 'activity'
    },
    ':hospital:': {
      uc_base: '1f3e5',
      uc_output: '1f3e5',
      uc_match: '1f3e5',
      uc_greedy: '1f3e5',
      shortnames: [],
      category: 'travel'
    },
    ':hot_pepper:': {
      uc_base: '1f336',
      uc_output: '1f336',
      uc_match: '1f336-fe0f',
      uc_greedy: '1f336-fe0f',
      shortnames: [],
      category: 'food'
    },
    ':hotdog:': {
      uc_base: '1f32d',
      uc_output: '1f32d',
      uc_match: '1f32d',
      uc_greedy: '1f32d',
      shortnames: [':hot_dog:'],
      category: 'food'
    },
    ':hotel:': {
      uc_base: '1f3e8',
      uc_output: '1f3e8',
      uc_match: '1f3e8',
      uc_greedy: '1f3e8',
      shortnames: [],
      category: 'travel'
    },
    ':house:': {
      uc_base: '1f3e0',
      uc_output: '1f3e0',
      uc_match: '1f3e0-fe0f',
      uc_greedy: '1f3e0-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':house_abandoned:': {
      uc_base: '1f3da',
      uc_output: '1f3da',
      uc_match: '1f3da-fe0f',
      uc_greedy: '1f3da-fe0f',
      shortnames: [':derelict_house_building:'],
      category: 'travel'
    },
    ':house_with_garden:': {
      uc_base: '1f3e1',
      uc_output: '1f3e1',
      uc_match: '1f3e1',
      uc_greedy: '1f3e1',
      shortnames: [],
      category: 'travel'
    },
    ':hugging:': {
      uc_base: '1f917',
      uc_output: '1f917',
      uc_match: '1f917',
      uc_greedy: '1f917',
      shortnames: [':hugging_face:'],
      category: 'people'
    },
    ':hushed:': {
      uc_base: '1f62f',
      uc_output: '1f62f',
      uc_match: '1f62f',
      uc_greedy: '1f62f',
      shortnames: [],
      category: 'people'
    },
    ':ice_cream:': {
      uc_base: '1f368',
      uc_output: '1f368',
      uc_match: '1f368',
      uc_greedy: '1f368',
      shortnames: [],
      category: 'food'
    },
    ':icecream:': {
      uc_base: '1f366',
      uc_output: '1f366',
      uc_match: '1f366',
      uc_greedy: '1f366',
      shortnames: [],
      category: 'food'
    },
    ':id:': {
      uc_base: '1f194',
      uc_output: '1f194',
      uc_match: '1f194',
      uc_greedy: '1f194',
      shortnames: [],
      category: 'symbols'
    },
    ':ideograph_advantage:': {
      uc_base: '1f250',
      uc_output: '1f250',
      uc_match: '1f250',
      uc_greedy: '1f250',
      shortnames: [],
      category: 'symbols'
    },
    ':imp:': {
      uc_base: '1f47f',
      uc_output: '1f47f',
      uc_match: '1f47f',
      uc_greedy: '1f47f',
      shortnames: [],
      category: 'people'
    },
    ':inbox_tray:': {
      uc_base: '1f4e5',
      uc_output: '1f4e5',
      uc_match: '1f4e5-fe0f',
      uc_greedy: '1f4e5-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':incoming_envelope:': {
      uc_base: '1f4e8',
      uc_output: '1f4e8',
      uc_match: '1f4e8',
      uc_greedy: '1f4e8',
      shortnames: [],
      category: 'objects'
    },
    ':innocent:': {
      uc_base: '1f607',
      uc_output: '1f607',
      uc_match: '1f607',
      uc_greedy: '1f607',
      shortnames: [],
      category: 'people'
    },
    ':iphone:': {
      uc_base: '1f4f1',
      uc_output: '1f4f1',
      uc_match: '1f4f1',
      uc_greedy: '1f4f1',
      shortnames: [],
      category: 'objects'
    },
    ':island:': {
      uc_base: '1f3dd',
      uc_output: '1f3dd',
      uc_match: '1f3dd-fe0f',
      uc_greedy: '1f3dd-fe0f',
      shortnames: [':desert_island:'],
      category: 'travel'
    },
    ':izakaya_lantern:': {
      uc_base: '1f3ee',
      uc_output: '1f3ee',
      uc_match: '1f3ee',
      uc_greedy: '1f3ee',
      shortnames: [],
      category: 'objects'
    },
    ':jack_o_lantern:': {
      uc_base: '1f383',
      uc_output: '1f383',
      uc_match: '1f383',
      uc_greedy: '1f383',
      shortnames: [],
      category: 'people'
    },
    ':japan:': {
      uc_base: '1f5fe',
      uc_output: '1f5fe',
      uc_match: '1f5fe',
      uc_greedy: '1f5fe',
      shortnames: [],
      category: 'travel'
    },
    ':japanese_castle:': {
      uc_base: '1f3ef',
      uc_output: '1f3ef',
      uc_match: '1f3ef',
      uc_greedy: '1f3ef',
      shortnames: [],
      category: 'travel'
    },
    ':japanese_goblin:': {
      uc_base: '1f47a',
      uc_output: '1f47a',
      uc_match: '1f47a',
      uc_greedy: '1f47a',
      shortnames: [],
      category: 'people'
    },
    ':japanese_ogre:': {
      uc_base: '1f479',
      uc_output: '1f479',
      uc_match: '1f479',
      uc_greedy: '1f479',
      shortnames: [],
      category: 'people'
    },
    ':jeans:': {
      uc_base: '1f456',
      uc_output: '1f456',
      uc_match: '1f456',
      uc_greedy: '1f456',
      shortnames: [],
      category: 'people'
    },
    ':joy:': {
      uc_base: '1f602',
      uc_output: '1f602',
      uc_match: '1f602',
      uc_greedy: '1f602',
      shortnames: [],
      category: 'people'
    },
    ':joy_cat:': {
      uc_base: '1f639',
      uc_output: '1f639',
      uc_match: '1f639',
      uc_greedy: '1f639',
      shortnames: [],
      category: 'people'
    },
    ':joystick:': {
      uc_base: '1f579',
      uc_output: '1f579',
      uc_match: '1f579-fe0f',
      uc_greedy: '1f579-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':kaaba:': {
      uc_base: '1f54b',
      uc_output: '1f54b',
      uc_match: '1f54b',
      uc_greedy: '1f54b',
      shortnames: [],
      category: 'travel'
    },
    ':key2:': {
      uc_base: '1f5dd',
      uc_output: '1f5dd',
      uc_match: '1f5dd-fe0f',
      uc_greedy: '1f5dd',
      shortnames: [':old_key:'],
      category: 'objects'
    },
    ':key:': {
      uc_base: '1f511',
      uc_output: '1f511',
      uc_match: '1f511',
      uc_greedy: '1f511',
      shortnames: [],
      category: 'objects'
    },
    ':keycap_ten:': {
      uc_base: '1f51f',
      uc_output: '1f51f',
      uc_match: '1f51f',
      uc_greedy: '1f51f',
      shortnames: [],
      category: 'symbols'
    },
    ':kimono:': {
      uc_base: '1f458',
      uc_output: '1f458',
      uc_match: '1f458',
      uc_greedy: '1f458',
      shortnames: [],
      category: 'people'
    },
    ':kiss:': {
      uc_base: '1f48b',
      uc_output: '1f48b',
      uc_match: '1f48b',
      uc_greedy: '1f48b',
      shortnames: [],
      category: 'people'
    },
    ':kissing:': {
      uc_base: '1f617',
      uc_output: '1f617',
      uc_match: '1f617',
      uc_greedy: '1f617',
      shortnames: [],
      category: 'people'
    },
    ':kissing_cat:': {
      uc_base: '1f63d',
      uc_output: '1f63d',
      uc_match: '1f63d',
      uc_greedy: '1f63d',
      shortnames: [],
      category: 'people'
    },
    ':kissing_closed_eyes:': {
      uc_base: '1f61a',
      uc_output: '1f61a',
      uc_match: '1f61a',
      uc_greedy: '1f61a',
      shortnames: [],
      category: 'people'
    },
    ':kissing_heart:': {
      uc_base: '1f618',
      uc_output: '1f618',
      uc_match: '1f618',
      uc_greedy: '1f618',
      shortnames: [],
      category: 'people'
    },
    ':kissing_smiling_eyes:': {
      uc_base: '1f619',
      uc_output: '1f619',
      uc_match: '1f619',
      uc_greedy: '1f619',
      shortnames: [],
      category: 'people'
    },
    ':kiwi:': {
      uc_base: '1f95d',
      uc_output: '1f95d',
      uc_match: '1f95d',
      uc_greedy: '1f95d',
      shortnames: [':kiwifruit:'],
      category: 'food'
    },
    ':knife:': {
      uc_base: '1f52a',
      uc_output: '1f52a',
      uc_match: '1f52a',
      uc_greedy: '1f52a',
      shortnames: [],
      category: 'objects'
    },
    ':koala:': {
      uc_base: '1f428',
      uc_output: '1f428',
      uc_match: '1f428',
      uc_greedy: '1f428',
      shortnames: [],
      category: 'nature'
    },
    ':koko:': {
      uc_base: '1f201',
      uc_output: '1f201',
      uc_match: '1f201',
      uc_greedy: '1f201',
      shortnames: [],
      category: 'symbols'
    },
    ':label:': {
      uc_base: '1f3f7',
      uc_output: '1f3f7',
      uc_match: '1f3f7-fe0f',
      uc_greedy: '1f3f7-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':large_blue_diamond:': {
      uc_base: '1f537',
      uc_output: '1f537',
      uc_match: '1f537',
      uc_greedy: '1f537',
      shortnames: [],
      category: 'symbols'
    },
    ':large_orange_diamond:': {
      uc_base: '1f536',
      uc_output: '1f536',
      uc_match: '1f536',
      uc_greedy: '1f536',
      shortnames: [],
      category: 'symbols'
    },
    ':last_quarter_moon:': {
      uc_base: '1f317',
      uc_output: '1f317',
      uc_match: '1f317',
      uc_greedy: '1f317',
      shortnames: [],
      category: 'nature'
    },
    ':last_quarter_moon_with_face:': {
      uc_base: '1f31c',
      uc_output: '1f31c',
      uc_match: '1f31c-fe0f',
      uc_greedy: '1f31c-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':laughing:': {
      uc_base: '1f606',
      uc_output: '1f606',
      uc_match: '1f606',
      uc_greedy: '1f606',
      shortnames: [':satisfied:'],
      category: 'people'
    },
    ':leaves:': {
      uc_base: '1f343',
      uc_output: '1f343',
      uc_match: '1f343',
      uc_greedy: '1f343',
      shortnames: [],
      category: 'nature'
    },
    ':ledger:': {
      uc_base: '1f4d2',
      uc_output: '1f4d2',
      uc_match: '1f4d2',
      uc_greedy: '1f4d2',
      shortnames: [],
      category: 'objects'
    },
    ':left_facing_fist:': {
      uc_base: '1f91b',
      uc_output: '1f91b',
      uc_match: '1f91b',
      uc_greedy: '1f91b',
      shortnames: [':left_fist:'],
      category: 'people'
    },
    ':left_luggage:': {
      uc_base: '1f6c5',
      uc_output: '1f6c5',
      uc_match: '1f6c5',
      uc_greedy: '1f6c5',
      shortnames: [],
      category: 'symbols'
    },
    ':lemon:': {
      uc_base: '1f34b',
      uc_output: '1f34b',
      uc_match: '1f34b',
      uc_greedy: '1f34b',
      shortnames: [],
      category: 'food'
    },
    ':leopard:': {
      uc_base: '1f406',
      uc_output: '1f406',
      uc_match: '1f406',
      uc_greedy: '1f406',
      shortnames: [],
      category: 'nature'
    },
    ':level_slider:': {
      uc_base: '1f39a',
      uc_output: '1f39a',
      uc_match: '1f39a-fe0f',
      uc_greedy: '1f39a-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':levitate:': {
      uc_base: '1f574',
      uc_output: '1f574',
      uc_match: '1f574-fe0f',
      uc_greedy: '1f574-fe0f',
      shortnames: [':man_in_business_suit_levitating:'],
      category: 'people'
    },
    ':light_rail:': {
      uc_base: '1f688',
      uc_output: '1f688',
      uc_match: '1f688',
      uc_greedy: '1f688',
      shortnames: [],
      category: 'travel'
    },
    ':link:': {
      uc_base: '1f517',
      uc_output: '1f517',
      uc_match: '1f517',
      uc_greedy: '1f517',
      shortnames: [],
      category: 'objects'
    },
    ':lion_face:': {
      uc_base: '1f981',
      uc_output: '1f981',
      uc_match: '1f981',
      uc_greedy: '1f981',
      shortnames: [':lion:'],
      category: 'nature'
    },
    ':lips:': {
      uc_base: '1f444',
      uc_output: '1f444',
      uc_match: '1f444',
      uc_greedy: '1f444',
      shortnames: [],
      category: 'people'
    },
    ':lipstick:': {
      uc_base: '1f484',
      uc_output: '1f484',
      uc_match: '1f484',
      uc_greedy: '1f484',
      shortnames: [],
      category: 'people'
    },
    ':lizard:': {
      uc_base: '1f98e',
      uc_output: '1f98e',
      uc_match: '1f98e',
      uc_greedy: '1f98e',
      shortnames: [],
      category: 'nature'
    },
    ':lock:': {
      uc_base: '1f512',
      uc_output: '1f512',
      uc_match: '1f512-fe0f',
      uc_greedy: '1f512-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':lock_with_ink_pen:': {
      uc_base: '1f50f',
      uc_output: '1f50f',
      uc_match: '1f50f',
      uc_greedy: '1f50f',
      shortnames: [],
      category: 'objects'
    },
    ':lollipop:': {
      uc_base: '1f36d',
      uc_output: '1f36d',
      uc_match: '1f36d',
      uc_greedy: '1f36d',
      shortnames: [],
      category: 'food'
    },
    ':loud_sound:': {
      uc_base: '1f50a',
      uc_output: '1f50a',
      uc_match: '1f50a',
      uc_greedy: '1f50a',
      shortnames: [],
      category: 'symbols'
    },
    ':loudspeaker:': {
      uc_base: '1f4e2',
      uc_output: '1f4e2',
      uc_match: '1f4e2',
      uc_greedy: '1f4e2',
      shortnames: [],
      category: 'symbols'
    },
    ':love_hotel:': {
      uc_base: '1f3e9',
      uc_output: '1f3e9',
      uc_match: '1f3e9',
      uc_greedy: '1f3e9',
      shortnames: [],
      category: 'travel'
    },
    ':love_letter:': {
      uc_base: '1f48c',
      uc_output: '1f48c',
      uc_match: '1f48c',
      uc_greedy: '1f48c',
      shortnames: [],
      category: 'objects'
    },
    ':love_you_gesture:': {
      uc_base: '1f91f',
      uc_output: '1f91f',
      uc_match: '1f91f',
      uc_greedy: '1f91f',
      shortnames: [],
      category: 'people'
    },
    ':low_brightness:': {
      uc_base: '1f505',
      uc_output: '1f505',
      uc_match: '1f505',
      uc_greedy: '1f505',
      shortnames: [],
      category: 'symbols'
    },
    ':lying_face:': {
      uc_base: '1f925',
      uc_output: '1f925',
      uc_match: '1f925',
      uc_greedy: '1f925',
      shortnames: [':liar:'],
      category: 'people'
    },
    ':mag:': {
      uc_base: '1f50d',
      uc_output: '1f50d',
      uc_match: '1f50d-fe0f',
      uc_greedy: '1f50d-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':mag_right:': {
      uc_base: '1f50e',
      uc_output: '1f50e',
      uc_match: '1f50e',
      uc_greedy: '1f50e',
      shortnames: [],
      category: 'objects'
    },
    ':mage:': {
      uc_base: '1f9d9',
      uc_output: '1f9d9',
      uc_match: '1f9d9',
      uc_greedy: '1f9d9',
      shortnames: [],
      category: 'people'
    },
    ':mahjong:': {
      uc_base: '1f004',
      uc_output: '1f004',
      uc_match: '1f004-fe0f',
      uc_greedy: '1f004-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':mailbox:': {
      uc_base: '1f4eb',
      uc_output: '1f4eb',
      uc_match: '1f4eb-fe0f',
      uc_greedy: '1f4eb-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':mailbox_closed:': {
      uc_base: '1f4ea',
      uc_output: '1f4ea',
      uc_match: '1f4ea-fe0f',
      uc_greedy: '1f4ea-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':mailbox_with_mail:': {
      uc_base: '1f4ec',
      uc_output: '1f4ec',
      uc_match: '1f4ec-fe0f',
      uc_greedy: '1f4ec-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':mailbox_with_no_mail:': {
      uc_base: '1f4ed',
      uc_output: '1f4ed',
      uc_match: '1f4ed-fe0f',
      uc_greedy: '1f4ed-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':man:': {
      uc_base: '1f468',
      uc_output: '1f468',
      uc_match: '1f468',
      uc_greedy: '1f468',
      shortnames: [],
      category: 'people'
    },
    ':man_dancing:': {
      uc_base: '1f57a',
      uc_output: '1f57a',
      uc_match: '1f57a',
      uc_greedy: '1f57a',
      shortnames: [':male_dancer:'],
      category: 'people'
    },
    ':man_in_tuxedo:': {
      uc_base: '1f935',
      uc_output: '1f935',
      uc_match: '1f935',
      uc_greedy: '1f935',
      shortnames: [],
      category: 'people'
    },
    ':man_with_chinese_cap:': {
      uc_base: '1f472',
      uc_output: '1f472',
      uc_match: '1f472',
      uc_greedy: '1f472',
      shortnames: [':man_with_gua_pi_mao:'],
      category: 'people'
    },
    ':mans_shoe:': {
      uc_base: '1f45e',
      uc_output: '1f45e',
      uc_match: '1f45e',
      uc_greedy: '1f45e',
      shortnames: [],
      category: 'people'
    },
    ':map:': {
      uc_base: '1f5fa',
      uc_output: '1f5fa',
      uc_match: '1f5fa-fe0f',
      uc_greedy: '1f5fa-fe0f',
      shortnames: [':world_map:'],
      category: 'travel'
    },
    ':maple_leaf:': {
      uc_base: '1f341',
      uc_output: '1f341',
      uc_match: '1f341',
      uc_greedy: '1f341',
      shortnames: [],
      category: 'nature'
    },
    ':martial_arts_uniform:': {
      uc_base: '1f94b',
      uc_output: '1f94b',
      uc_match: '1f94b',
      uc_greedy: '1f94b',
      shortnames: [':karate_uniform:'],
      category: 'activity'
    },
    ':mask:': {
      uc_base: '1f637',
      uc_output: '1f637',
      uc_match: '1f637',
      uc_greedy: '1f637',
      shortnames: [],
      category: 'people'
    },
    ':meat_on_bone:': {
      uc_base: '1f356',
      uc_output: '1f356',
      uc_match: '1f356',
      uc_greedy: '1f356',
      shortnames: [],
      category: 'food'
    },
    ':medal:': {
      uc_base: '1f3c5',
      uc_output: '1f3c5',
      uc_match: '1f3c5',
      uc_greedy: '1f3c5',
      shortnames: [':sports_medal:'],
      category: 'activity'
    },
    ':mega:': {
      uc_base: '1f4e3',
      uc_output: '1f4e3',
      uc_match: '1f4e3',
      uc_greedy: '1f4e3',
      shortnames: [],
      category: 'symbols'
    },
    ':melon:': {
      uc_base: '1f348',
      uc_output: '1f348',
      uc_match: '1f348',
      uc_greedy: '1f348',
      shortnames: [],
      category: 'food'
    },
    ':menorah:': {
      uc_base: '1f54e',
      uc_output: '1f54e',
      uc_match: '1f54e',
      uc_greedy: '1f54e',
      shortnames: [],
      category: 'symbols'
    },
    ':mens:': {
      uc_base: '1f6b9',
      uc_output: '1f6b9',
      uc_match: '1f6b9-fe0f',
      uc_greedy: '1f6b9-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':merperson:': {
      uc_base: '1f9dc',
      uc_output: '1f9dc',
      uc_match: '1f9dc',
      uc_greedy: '1f9dc',
      shortnames: [],
      category: 'people'
    },
    ':metal:': {
      uc_base: '1f918',
      uc_output: '1f918',
      uc_match: '1f918',
      uc_greedy: '1f918',
      shortnames: [':sign_of_the_horns:'],
      category: 'people'
    },
    ':metro:': {
      uc_base: '1f687',
      uc_output: '1f687',
      uc_match: '1f687-fe0f',
      uc_greedy: '1f687-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':microphone2:': {
      uc_base: '1f399',
      uc_output: '1f399',
      uc_match: '1f399-fe0f',
      uc_greedy: '1f399-fe0f',
      shortnames: [':studio_microphone:'],
      category: 'objects'
    },
    ':microphone:': {
      uc_base: '1f3a4',
      uc_output: '1f3a4',
      uc_match: '1f3a4',
      uc_greedy: '1f3a4',
      shortnames: [],
      category: 'activity'
    },
    ':microscope:': {
      uc_base: '1f52c',
      uc_output: '1f52c',
      uc_match: '1f52c',
      uc_greedy: '1f52c',
      shortnames: [],
      category: 'objects'
    },
    ':middle_finger:': {
      uc_base: '1f595',
      uc_output: '1f595',
      uc_match: '1f595',
      uc_greedy: '1f595',
      shortnames: [':reversed_hand_with_middle_finger_extended:'],
      category: 'people'
    },
    ':military_medal:': {
      uc_base: '1f396',
      uc_output: '1f396',
      uc_match: '1f396-fe0f',
      uc_greedy: '1f396-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':milk:': {
      uc_base: '1f95b',
      uc_output: '1f95b',
      uc_match: '1f95b',
      uc_greedy: '1f95b',
      shortnames: [':glass_of_milk:'],
      category: 'food'
    },
    ':milky_way:': {
      uc_base: '1f30c',
      uc_output: '1f30c',
      uc_match: '1f30c',
      uc_greedy: '1f30c',
      shortnames: [],
      category: 'travel'
    },
    ':minibus:': {
      uc_base: '1f690',
      uc_output: '1f690',
      uc_match: '1f690',
      uc_greedy: '1f690',
      shortnames: [],
      category: 'travel'
    },
    ':minidisc:': {
      uc_base: '1f4bd',
      uc_output: '1f4bd',
      uc_match: '1f4bd',
      uc_greedy: '1f4bd',
      shortnames: [],
      category: 'objects'
    },
    ':mobile_phone_off:': {
      uc_base: '1f4f4',
      uc_output: '1f4f4',
      uc_match: '1f4f4',
      uc_greedy: '1f4f4',
      shortnames: [],
      category: 'symbols'
    },
    ':money_mouth:': {
      uc_base: '1f911',
      uc_output: '1f911',
      uc_match: '1f911',
      uc_greedy: '1f911',
      shortnames: [':money_mouth_face:'],
      category: 'people'
    },
    ':money_with_wings:': {
      uc_base: '1f4b8',
      uc_output: '1f4b8',
      uc_match: '1f4b8',
      uc_greedy: '1f4b8',
      shortnames: [],
      category: 'objects'
    },
    ':moneybag:': {
      uc_base: '1f4b0',
      uc_output: '1f4b0',
      uc_match: '1f4b0-fe0f',
      uc_greedy: '1f4b0-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':monkey:': {
      uc_base: '1f412',
      uc_output: '1f412',
      uc_match: '1f412',
      uc_greedy: '1f412',
      shortnames: [],
      category: 'nature'
    },
    ':monkey_face:': {
      uc_base: '1f435',
      uc_output: '1f435',
      uc_match: '1f435',
      uc_greedy: '1f435',
      shortnames: [],
      category: 'nature'
    },
    ':monorail:': {
      uc_base: '1f69d',
      uc_output: '1f69d',
      uc_match: '1f69d',
      uc_greedy: '1f69d',
      shortnames: [],
      category: 'travel'
    },
    ':mortar_board:': {
      uc_base: '1f393',
      uc_output: '1f393',
      uc_match: '1f393-fe0f',
      uc_greedy: '1f393-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':mosque:': {
      uc_base: '1f54c',
      uc_output: '1f54c',
      uc_match: '1f54c',
      uc_greedy: '1f54c',
      shortnames: [],
      category: 'travel'
    },
    ':motor_scooter:': {
      uc_base: '1f6f5',
      uc_output: '1f6f5',
      uc_match: '1f6f5',
      uc_greedy: '1f6f5',
      shortnames: [':motorbike:'],
      category: 'travel'
    },
    ':motorboat:': {
      uc_base: '1f6e5',
      uc_output: '1f6e5',
      uc_match: '1f6e5-fe0f',
      uc_greedy: '1f6e5-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':motorcycle:': {
      uc_base: '1f3cd',
      uc_output: '1f3cd',
      uc_match: '1f3cd-fe0f',
      uc_greedy: '1f3cd-fe0f',
      shortnames: [':racing_motorcycle:'],
      category: 'travel'
    },
    ':motorway:': {
      uc_base: '1f6e3',
      uc_output: '1f6e3',
      uc_match: '1f6e3-fe0f',
      uc_greedy: '1f6e3-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':mount_fuji:': {
      uc_base: '1f5fb',
      uc_output: '1f5fb',
      uc_match: '1f5fb',
      uc_greedy: '1f5fb',
      shortnames: [],
      category: 'travel'
    },
    ':mountain_cableway:': {
      uc_base: '1f6a0',
      uc_output: '1f6a0',
      uc_match: '1f6a0',
      uc_greedy: '1f6a0',
      shortnames: [],
      category: 'travel'
    },
    ':mountain_railway:': {
      uc_base: '1f69e',
      uc_output: '1f69e',
      uc_match: '1f69e',
      uc_greedy: '1f69e',
      shortnames: [],
      category: 'travel'
    },
    ':mountain_snow:': {
      uc_base: '1f3d4',
      uc_output: '1f3d4',
      uc_match: '1f3d4-fe0f',
      uc_greedy: '1f3d4-fe0f',
      shortnames: [':snow_capped_mountain:'],
      category: 'travel'
    },
    ':mouse2:': {
      uc_base: '1f401',
      uc_output: '1f401',
      uc_match: '1f401',
      uc_greedy: '1f401',
      shortnames: [],
      category: 'nature'
    },
    ':mouse:': {
      uc_base: '1f42d',
      uc_output: '1f42d',
      uc_match: '1f42d',
      uc_greedy: '1f42d',
      shortnames: [],
      category: 'nature'
    },
    ':mouse_three_button:': {
      uc_base: '1f5b1',
      uc_output: '1f5b1',
      uc_match: '1f5b1-fe0f',
      uc_greedy: '1f5b1-fe0f',
      shortnames: [':three_button_mouse:'],
      category: 'objects'
    },
    ':movie_camera:': {
      uc_base: '1f3a5',
      uc_output: '1f3a5',
      uc_match: '1f3a5',
      uc_greedy: '1f3a5',
      shortnames: [],
      category: 'objects'
    },
    ':moyai:': {
      uc_base: '1f5ff',
      uc_output: '1f5ff',
      uc_match: '1f5ff',
      uc_greedy: '1f5ff',
      shortnames: [],
      category: 'travel'
    },
    ':mrs_claus:': {
      uc_base: '1f936',
      uc_output: '1f936',
      uc_match: '1f936',
      uc_greedy: '1f936',
      shortnames: [':mother_christmas:'],
      category: 'people'
    },
    ':muscle:': {
      uc_base: '1f4aa',
      uc_output: '1f4aa',
      uc_match: '1f4aa',
      uc_greedy: '1f4aa',
      shortnames: [],
      category: 'people'
    },
    ':mushroom:': {
      uc_base: '1f344',
      uc_output: '1f344',
      uc_match: '1f344',
      uc_greedy: '1f344',
      shortnames: [],
      category: 'nature'
    },
    ':musical_keyboard:': {
      uc_base: '1f3b9',
      uc_output: '1f3b9',
      uc_match: '1f3b9',
      uc_greedy: '1f3b9',
      shortnames: [],
      category: 'activity'
    },
    ':musical_note:': {
      uc_base: '1f3b5',
      uc_output: '1f3b5',
      uc_match: '1f3b5',
      uc_greedy: '1f3b5',
      shortnames: [],
      category: 'symbols'
    },
    ':musical_score:': {
      uc_base: '1f3bc',
      uc_output: '1f3bc',
      uc_match: '1f3bc',
      uc_greedy: '1f3bc',
      shortnames: [],
      category: 'activity'
    },
    ':mute:': {
      uc_base: '1f507',
      uc_output: '1f507',
      uc_match: '1f507',
      uc_greedy: '1f507',
      shortnames: [],
      category: 'symbols'
    },
    ':nail_care:': {
      uc_base: '1f485',
      uc_output: '1f485',
      uc_match: '1f485',
      uc_greedy: '1f485',
      shortnames: [],
      category: 'people'
    },
    ':name_badge:': {
      uc_base: '1f4db',
      uc_output: '1f4db',
      uc_match: '1f4db',
      uc_greedy: '1f4db',
      shortnames: [],
      category: 'symbols'
    },
    ':nauseated_face:': {
      uc_base: '1f922',
      uc_output: '1f922',
      uc_match: '1f922',
      uc_greedy: '1f922',
      shortnames: [':sick:'],
      category: 'people'
    },
    ':necktie:': {
      uc_base: '1f454',
      uc_output: '1f454',
      uc_match: '1f454',
      uc_greedy: '1f454',
      shortnames: [],
      category: 'people'
    },
    ':nerd:': {
      uc_base: '1f913',
      uc_output: '1f913',
      uc_match: '1f913',
      uc_greedy: '1f913',
      shortnames: [':nerd_face:'],
      category: 'people'
    },
    ':neutral_face:': {
      uc_base: '1f610',
      uc_output: '1f610',
      uc_match: '1f610-fe0f',
      uc_greedy: '1f610-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':new:': {
      uc_base: '1f195',
      uc_output: '1f195',
      uc_match: '1f195',
      uc_greedy: '1f195',
      shortnames: [],
      category: 'symbols'
    },
    ':new_moon:': {
      uc_base: '1f311',
      uc_output: '1f311',
      uc_match: '1f311',
      uc_greedy: '1f311',
      shortnames: [],
      category: 'nature'
    },
    ':new_moon_with_face:': {
      uc_base: '1f31a',
      uc_output: '1f31a',
      uc_match: '1f31a',
      uc_greedy: '1f31a',
      shortnames: [],
      category: 'nature'
    },
    ':newspaper2:': {
      uc_base: '1f5de',
      uc_output: '1f5de',
      uc_match: '1f5de-fe0f',
      uc_greedy: '1f5de-fe0f',
      shortnames: [':rolled_up_newspaper:'],
      category: 'objects'
    },
    ':newspaper:': {
      uc_base: '1f4f0',
      uc_output: '1f4f0',
      uc_match: '1f4f0',
      uc_greedy: '1f4f0',
      shortnames: [],
      category: 'objects'
    },
    ':ng:': {
      uc_base: '1f196',
      uc_output: '1f196',
      uc_match: '1f196',
      uc_greedy: '1f196',
      shortnames: [],
      category: 'symbols'
    },
    ':night_with_stars:': {
      uc_base: '1f303',
      uc_output: '1f303',
      uc_match: '1f303',
      uc_greedy: '1f303',
      shortnames: [],
      category: 'travel'
    },
    ':no_bell:': {
      uc_base: '1f515',
      uc_output: '1f515',
      uc_match: '1f515',
      uc_greedy: '1f515',
      shortnames: [],
      category: 'symbols'
    },
    ':no_bicycles:': {
      uc_base: '1f6b3',
      uc_output: '1f6b3',
      uc_match: '1f6b3',
      uc_greedy: '1f6b3',
      shortnames: [],
      category: 'symbols'
    },
    ':no_entry_sign:': {
      uc_base: '1f6ab',
      uc_output: '1f6ab',
      uc_match: '1f6ab',
      uc_greedy: '1f6ab',
      shortnames: [],
      category: 'symbols'
    },
    ':no_mobile_phones:': {
      uc_base: '1f4f5',
      uc_output: '1f4f5',
      uc_match: '1f4f5',
      uc_greedy: '1f4f5',
      shortnames: [],
      category: 'symbols'
    },
    ':no_mouth:': {
      uc_base: '1f636',
      uc_output: '1f636',
      uc_match: '1f636',
      uc_greedy: '1f636',
      shortnames: [],
      category: 'people'
    },
    ':no_pedestrians:': {
      uc_base: '1f6b7',
      uc_output: '1f6b7',
      uc_match: '1f6b7',
      uc_greedy: '1f6b7',
      shortnames: [],
      category: 'symbols'
    },
    ':no_smoking:': {
      uc_base: '1f6ad',
      uc_output: '1f6ad',
      uc_match: '1f6ad-fe0f',
      uc_greedy: '1f6ad-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':non-potable_water:': {
      uc_base: '1f6b1',
      uc_output: '1f6b1',
      uc_match: '1f6b1',
      uc_greedy: '1f6b1',
      shortnames: [],
      category: 'symbols'
    },
    ':nose:': {
      uc_base: '1f443',
      uc_output: '1f443',
      uc_match: '1f443',
      uc_greedy: '1f443',
      shortnames: [],
      category: 'people'
    },
    ':notebook:': {
      uc_base: '1f4d3',
      uc_output: '1f4d3',
      uc_match: '1f4d3',
      uc_greedy: '1f4d3',
      shortnames: [],
      category: 'objects'
    },
    ':notebook_with_decorative_cover:': {
      uc_base: '1f4d4',
      uc_output: '1f4d4',
      uc_match: '1f4d4',
      uc_greedy: '1f4d4',
      shortnames: [],
      category: 'objects'
    },
    ':notepad_spiral:': {
      uc_base: '1f5d2',
      uc_output: '1f5d2',
      uc_match: '1f5d2-fe0f',
      uc_greedy: '1f5d2-fe0f',
      shortnames: [':spiral_note_pad:'],
      category: 'objects'
    },
    ':notes:': {
      uc_base: '1f3b6',
      uc_output: '1f3b6',
      uc_match: '1f3b6',
      uc_greedy: '1f3b6',
      shortnames: [],
      category: 'symbols'
    },
    ':nut_and_bolt:': {
      uc_base: '1f529',
      uc_output: '1f529',
      uc_match: '1f529',
      uc_greedy: '1f529',
      shortnames: [],
      category: 'objects'
    },
    ':o2:': {
      uc_base: '1f17e',
      uc_output: '1f17e',
      uc_match: '1f17e-fe0f',
      uc_greedy: '1f17e-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':ocean:': {
      uc_base: '1f30a',
      uc_output: '1f30a',
      uc_match: '1f30a',
      uc_greedy: '1f30a',
      shortnames: [],
      category: 'nature'
    },
    ':octagonal_sign:': {
      uc_base: '1f6d1',
      uc_output: '1f6d1',
      uc_match: '1f6d1',
      uc_greedy: '1f6d1',
      shortnames: [':stop_sign:'],
      category: 'symbols'
    },
    ':octopus:': {
      uc_base: '1f419',
      uc_output: '1f419',
      uc_match: '1f419',
      uc_greedy: '1f419',
      shortnames: [],
      category: 'nature'
    },
    ':oden:': {
      uc_base: '1f362',
      uc_output: '1f362',
      uc_match: '1f362',
      uc_greedy: '1f362',
      shortnames: [],
      category: 'food'
    },
    ':office:': {
      uc_base: '1f3e2',
      uc_output: '1f3e2',
      uc_match: '1f3e2',
      uc_greedy: '1f3e2',
      shortnames: [],
      category: 'travel'
    },
    ':oil:': {
      uc_base: '1f6e2',
      uc_output: '1f6e2',
      uc_match: '1f6e2-fe0f',
      uc_greedy: '1f6e2-fe0f',
      shortnames: [':oil_drum:'],
      category: 'objects'
    },
    ':ok:': {
      uc_base: '1f197',
      uc_output: '1f197',
      uc_match: '1f197',
      uc_greedy: '1f197',
      shortnames: [],
      category: 'symbols'
    },
    ':ok_hand:': {
      uc_base: '1f44c',
      uc_output: '1f44c',
      uc_match: '1f44c',
      uc_greedy: '1f44c',
      shortnames: [],
      category: 'people'
    },
    ':older_adult:': {
      uc_base: '1f9d3',
      uc_output: '1f9d3',
      uc_match: '1f9d3',
      uc_greedy: '1f9d3',
      shortnames: [],
      category: 'people'
    },
    ':older_man:': {
      uc_base: '1f474',
      uc_output: '1f474',
      uc_match: '1f474',
      uc_greedy: '1f474',
      shortnames: [],
      category: 'people'
    },
    ':older_woman:': {
      uc_base: '1f475',
      uc_output: '1f475',
      uc_match: '1f475',
      uc_greedy: '1f475',
      shortnames: [':grandma:'],
      category: 'people'
    },
    ':om_symbol:': {
      uc_base: '1f549',
      uc_output: '1f549',
      uc_match: '1f549-fe0f',
      uc_greedy: '1f549',
      shortnames: [],
      category: 'symbols'
    },
    ':on:': {
      uc_base: '1f51b',
      uc_output: '1f51b',
      uc_match: '1f51b',
      uc_greedy: '1f51b',
      shortnames: [],
      category: 'symbols'
    },
    ':oncoming_automobile:': {
      uc_base: '1f698',
      uc_output: '1f698',
      uc_match: '1f698-fe0f',
      uc_greedy: '1f698-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':oncoming_bus:': {
      uc_base: '1f68d',
      uc_output: '1f68d',
      uc_match: '1f68d-fe0f',
      uc_greedy: '1f68d-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':oncoming_police_car:': {
      uc_base: '1f694',
      uc_output: '1f694',
      uc_match: '1f694-fe0f',
      uc_greedy: '1f694-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':oncoming_taxi:': {
      uc_base: '1f696',
      uc_output: '1f696',
      uc_match: '1f696',
      uc_greedy: '1f696',
      shortnames: [],
      category: 'travel'
    },
    ':open_file_folder:': {
      uc_base: '1f4c2',
      uc_output: '1f4c2',
      uc_match: '1f4c2',
      uc_greedy: '1f4c2',
      shortnames: [],
      category: 'objects'
    },
    ':open_hands:': {
      uc_base: '1f450',
      uc_output: '1f450',
      uc_match: '1f450',
      uc_greedy: '1f450',
      shortnames: [],
      category: 'people'
    },
    ':open_mouth:': {
      uc_base: '1f62e',
      uc_output: '1f62e',
      uc_match: '1f62e',
      uc_greedy: '1f62e',
      shortnames: [],
      category: 'people'
    },
    ':orange_book:': {
      uc_base: '1f4d9',
      uc_output: '1f4d9',
      uc_match: '1f4d9',
      uc_greedy: '1f4d9',
      shortnames: [],
      category: 'objects'
    },
    ':orange_heart:': {
      uc_base: '1f9e1',
      uc_output: '1f9e1',
      uc_match: '1f9e1',
      uc_greedy: '1f9e1',
      shortnames: [],
      category: 'symbols'
    },
    ':outbox_tray:': {
      uc_base: '1f4e4',
      uc_output: '1f4e4',
      uc_match: '1f4e4-fe0f',
      uc_greedy: '1f4e4-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':owl:': {
      uc_base: '1f989',
      uc_output: '1f989',
      uc_match: '1f989',
      uc_greedy: '1f989',
      shortnames: [],
      category: 'nature'
    },
    ':ox:': {
      uc_base: '1f402',
      uc_output: '1f402',
      uc_match: '1f402',
      uc_greedy: '1f402',
      shortnames: [],
      category: 'nature'
    },
    ':package:': {
      uc_base: '1f4e6',
      uc_output: '1f4e6',
      uc_match: '1f4e6-fe0f',
      uc_greedy: '1f4e6-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':page_facing_up:': {
      uc_base: '1f4c4',
      uc_output: '1f4c4',
      uc_match: '1f4c4',
      uc_greedy: '1f4c4',
      shortnames: [],
      category: 'objects'
    },
    ':page_with_curl:': {
      uc_base: '1f4c3',
      uc_output: '1f4c3',
      uc_match: '1f4c3',
      uc_greedy: '1f4c3',
      shortnames: [],
      category: 'objects'
    },
    ':pager:': {
      uc_base: '1f4df',
      uc_output: '1f4df',
      uc_match: '1f4df-fe0f',
      uc_greedy: '1f4df-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':paintbrush:': {
      uc_base: '1f58c',
      uc_output: '1f58c',
      uc_match: '1f58c-fe0f',
      uc_greedy: '1f58c-fe0f',
      shortnames: [':lower_left_paintbrush:'],
      category: 'objects'
    },
    ':palm_tree:': {
      uc_base: '1f334',
      uc_output: '1f334',
      uc_match: '1f334',
      uc_greedy: '1f334',
      shortnames: [],
      category: 'nature'
    },
    ':palms_up_together:': {
      uc_base: '1f932',
      uc_output: '1f932',
      uc_match: '1f932',
      uc_greedy: '1f932',
      shortnames: [],
      category: 'people'
    },
    ':pancakes:': {
      uc_base: '1f95e',
      uc_output: '1f95e',
      uc_match: '1f95e',
      uc_greedy: '1f95e',
      shortnames: [],
      category: 'food'
    },
    ':panda_face:': {
      uc_base: '1f43c',
      uc_output: '1f43c',
      uc_match: '1f43c',
      uc_greedy: '1f43c',
      shortnames: [],
      category: 'nature'
    },
    ':paperclip:': {
      uc_base: '1f4ce',
      uc_output: '1f4ce',
      uc_match: '1f4ce',
      uc_greedy: '1f4ce',
      shortnames: [],
      category: 'objects'
    },
    ':paperclips:': {
      uc_base: '1f587',
      uc_output: '1f587',
      uc_match: '1f587-fe0f',
      uc_greedy: '1f587-fe0f',
      shortnames: [':linked_paperclips:'],
      category: 'objects'
    },
    ':park:': {
      uc_base: '1f3de',
      uc_output: '1f3de',
      uc_match: '1f3de-fe0f',
      uc_greedy: '1f3de-fe0f',
      shortnames: [':national_park:'],
      category: 'travel'
    },
    ':parking:': {
      uc_base: '1f17f',
      uc_output: '1f17f',
      uc_match: '1f17f-fe0f',
      uc_greedy: '1f17f-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':passport_control:': {
      uc_base: '1f6c2',
      uc_output: '1f6c2',
      uc_match: '1f6c2',
      uc_greedy: '1f6c2',
      shortnames: [],
      category: 'symbols'
    },
    ':peach:': {
      uc_base: '1f351',
      uc_output: '1f351',
      uc_match: '1f351',
      uc_greedy: '1f351',
      shortnames: [],
      category: 'food'
    },
    ':peanuts:': {
      uc_base: '1f95c',
      uc_output: '1f95c',
      uc_match: '1f95c',
      uc_greedy: '1f95c',
      shortnames: [':shelled_peanut:'],
      category: 'food'
    },
    ':pear:': {
      uc_base: '1f350',
      uc_output: '1f350',
      uc_match: '1f350',
      uc_greedy: '1f350',
      shortnames: [],
      category: 'food'
    },
    ':pen_ballpoint:': {
      uc_base: '1f58a',
      uc_output: '1f58a',
      uc_match: '1f58a-fe0f',
      uc_greedy: '1f58a-fe0f',
      shortnames: [':lower_left_ballpoint_pen:'],
      category: 'objects'
    },
    ':pen_fountain:': {
      uc_base: '1f58b',
      uc_output: '1f58b',
      uc_match: '1f58b-fe0f',
      uc_greedy: '1f58b-fe0f',
      shortnames: [':lower_left_fountain_pen:'],
      category: 'objects'
    },
    ':pencil:': {
      uc_base: '1f4dd',
      uc_output: '1f4dd',
      uc_match: '1f4dd',
      uc_greedy: '1f4dd',
      shortnames: [':memo:'],
      category: 'objects'
    },
    ':penguin:': {
      uc_base: '1f427',
      uc_output: '1f427',
      uc_match: '1f427',
      uc_greedy: '1f427',
      shortnames: [],
      category: 'nature'
    },
    ':pensive:': {
      uc_base: '1f614',
      uc_output: '1f614',
      uc_match: '1f614',
      uc_greedy: '1f614',
      shortnames: [],
      category: 'people'
    },
    ':people_with_bunny_ears_partying:': {
      uc_base: '1f46f',
      uc_output: '1f46f',
      uc_match: '1f46f',
      uc_greedy: '1f46f',
      shortnames: [':dancers:'],
      category: 'people'
    },
    ':people_wrestling:': {
      uc_base: '1f93c',
      uc_output: '1f93c',
      uc_match: '1f93c',
      uc_greedy: '1f93c',
      shortnames: [':wrestlers:', ':wrestling:'],
      category: 'activity'
    },
    ':performing_arts:': {
      uc_base: '1f3ad',
      uc_output: '1f3ad',
      uc_match: '1f3ad-fe0f',
      uc_greedy: '1f3ad-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':persevere:': {
      uc_base: '1f623',
      uc_output: '1f623',
      uc_match: '1f623',
      uc_greedy: '1f623',
      shortnames: [],
      category: 'people'
    },
    ':person_biking:': {
      uc_base: '1f6b4',
      uc_output: '1f6b4',
      uc_match: '1f6b4',
      uc_greedy: '1f6b4',
      shortnames: [':bicyclist:'],
      category: 'activity'
    },
    ':person_bowing:': {
      uc_base: '1f647',
      uc_output: '1f647',
      uc_match: '1f647',
      uc_greedy: '1f647',
      shortnames: [':bow:'],
      category: 'people'
    },
    ':person_climbing:': {
      uc_base: '1f9d7',
      uc_output: '1f9d7',
      uc_match: '1f9d7',
      uc_greedy: '1f9d7',
      shortnames: [],
      category: 'activity'
    },
    ':person_doing_cartwheel:': {
      uc_base: '1f938',
      uc_output: '1f938',
      uc_match: '1f938',
      uc_greedy: '1f938',
      shortnames: [':cartwheel:'],
      category: 'activity'
    },
    ':person_facepalming:': {
      uc_base: '1f926',
      uc_output: '1f926',
      uc_match: '1f926',
      uc_greedy: '1f926',
      shortnames: [':face_palm:', ':facepalm:'],
      category: 'people'
    },
    ':person_fencing:': {
      uc_base: '1f93a',
      uc_output: '1f93a',
      uc_match: '1f93a',
      uc_greedy: '1f93a',
      shortnames: [':fencer:', ':fencing:'],
      category: 'activity'
    },
    ':person_frowning:': {
      uc_base: '1f64d',
      uc_output: '1f64d',
      uc_match: '1f64d',
      uc_greedy: '1f64d',
      shortnames: [],
      category: 'people'
    },
    ':person_gesturing_no:': {
      uc_base: '1f645',
      uc_output: '1f645',
      uc_match: '1f645',
      uc_greedy: '1f645',
      shortnames: [':no_good:'],
      category: 'people'
    },
    ':person_gesturing_ok:': {
      uc_base: '1f646',
      uc_output: '1f646',
      uc_match: '1f646',
      uc_greedy: '1f646',
      shortnames: [':ok_woman:'],
      category: 'people'
    },
    ':person_getting_haircut:': {
      uc_base: '1f487',
      uc_output: '1f487',
      uc_match: '1f487',
      uc_greedy: '1f487',
      shortnames: [':haircut:'],
      category: 'people'
    },
    ':person_getting_massage:': {
      uc_base: '1f486',
      uc_output: '1f486',
      uc_match: '1f486',
      uc_greedy: '1f486',
      shortnames: [':massage:'],
      category: 'people'
    },
    ':person_golfing:': {
      uc_base: '1f3cc',
      uc_output: '1f3cc',
      uc_match: '1f3cc-fe0f',
      uc_greedy: '1f3cc-fe0f',
      shortnames: [':golfer:'],
      category: 'activity'
    },
    ':person_in_lotus_position:': {
      uc_base: '1f9d8',
      uc_output: '1f9d8',
      uc_match: '1f9d8',
      uc_greedy: '1f9d8',
      shortnames: [],
      category: 'activity'
    },
    ':person_in_steamy_room:': {
      uc_base: '1f9d6',
      uc_output: '1f9d6',
      uc_match: '1f9d6',
      uc_greedy: '1f9d6',
      shortnames: [],
      category: 'people'
    },
    ':person_juggling:': {
      uc_base: '1f939',
      uc_output: '1f939',
      uc_match: '1f939',
      uc_greedy: '1f939',
      shortnames: [':juggling:', ':juggler:'],
      category: 'activity'
    },
    ':person_lifting_weights:': {
      uc_base: '1f3cb',
      uc_output: '1f3cb',
      uc_match: '1f3cb-fe0f',
      uc_greedy: '1f3cb-fe0f',
      shortnames: [':lifter:', ':weight_lifter:'],
      category: 'activity'
    },
    ':person_mountain_biking:': {
      uc_base: '1f6b5',
      uc_output: '1f6b5',
      uc_match: '1f6b5',
      uc_greedy: '1f6b5',
      shortnames: [':mountain_bicyclist:'],
      category: 'activity'
    },
    ':person_playing_handball:': {
      uc_base: '1f93e',
      uc_output: '1f93e',
      uc_match: '1f93e',
      uc_greedy: '1f93e',
      shortnames: [':handball:'],
      category: 'activity'
    },
    ':person_playing_water_polo:': {
      uc_base: '1f93d',
      uc_output: '1f93d',
      uc_match: '1f93d',
      uc_greedy: '1f93d',
      shortnames: [':water_polo:'],
      category: 'activity'
    },
    ':person_pouting:': {
      uc_base: '1f64e',
      uc_output: '1f64e',
      uc_match: '1f64e',
      uc_greedy: '1f64e',
      shortnames: [':person_with_pouting_face:'],
      category: 'people'
    },
    ':person_raising_hand:': {
      uc_base: '1f64b',
      uc_output: '1f64b',
      uc_match: '1f64b',
      uc_greedy: '1f64b',
      shortnames: [':raising_hand:'],
      category: 'people'
    },
    ':person_rowing_boat:': {
      uc_base: '1f6a3',
      uc_output: '1f6a3',
      uc_match: '1f6a3',
      uc_greedy: '1f6a3',
      shortnames: [':rowboat:'],
      category: 'activity'
    },
    ':person_running:': {
      uc_base: '1f3c3',
      uc_output: '1f3c3',
      uc_match: '1f3c3',
      uc_greedy: '1f3c3',
      shortnames: [':runner:'],
      category: 'people'
    },
    ':person_shrugging:': {
      uc_base: '1f937',
      uc_output: '1f937',
      uc_match: '1f937',
      uc_greedy: '1f937',
      shortnames: [':shrug:'],
      category: 'people'
    },
    ':person_surfing:': {
      uc_base: '1f3c4',
      uc_output: '1f3c4',
      uc_match: '1f3c4-fe0f',
      uc_greedy: '1f3c4-fe0f',
      shortnames: [':surfer:'],
      category: 'activity'
    },
    ':person_swimming:': {
      uc_base: '1f3ca',
      uc_output: '1f3ca',
      uc_match: '1f3ca-fe0f',
      uc_greedy: '1f3ca-fe0f',
      shortnames: [':swimmer:'],
      category: 'activity'
    },
    ':person_tipping_hand:': {
      uc_base: '1f481',
      uc_output: '1f481',
      uc_match: '1f481',
      uc_greedy: '1f481',
      shortnames: [':information_desk_person:'],
      category: 'people'
    },
    ':person_walking:': {
      uc_base: '1f6b6',
      uc_output: '1f6b6',
      uc_match: '1f6b6',
      uc_greedy: '1f6b6',
      shortnames: [':walking:'],
      category: 'people'
    },
    ':person_wearing_turban:': {
      uc_base: '1f473',
      uc_output: '1f473',
      uc_match: '1f473',
      uc_greedy: '1f473',
      shortnames: [':man_with_turban:'],
      category: 'people'
    },
    ':pie:': {
      uc_base: '1f967',
      uc_output: '1f967',
      uc_match: '1f967',
      uc_greedy: '1f967',
      shortnames: [],
      category: 'food'
    },
    ':pig2:': {
      uc_base: '1f416',
      uc_output: '1f416',
      uc_match: '1f416',
      uc_greedy: '1f416',
      shortnames: [],
      category: 'nature'
    },
    ':pig:': {
      uc_base: '1f437',
      uc_output: '1f437',
      uc_match: '1f437',
      uc_greedy: '1f437',
      shortnames: [],
      category: 'nature'
    },
    ':pig_nose:': {
      uc_base: '1f43d',
      uc_output: '1f43d',
      uc_match: '1f43d',
      uc_greedy: '1f43d',
      shortnames: [],
      category: 'nature'
    },
    ':pill:': {
      uc_base: '1f48a',
      uc_output: '1f48a',
      uc_match: '1f48a',
      uc_greedy: '1f48a',
      shortnames: [],
      category: 'objects'
    },
    ':pineapple:': {
      uc_base: '1f34d',
      uc_output: '1f34d',
      uc_match: '1f34d',
      uc_greedy: '1f34d',
      shortnames: [],
      category: 'food'
    },
    ':ping_pong:': {
      uc_base: '1f3d3',
      uc_output: '1f3d3',
      uc_match: '1f3d3',
      uc_greedy: '1f3d3',
      shortnames: [':table_tennis:'],
      category: 'activity'
    },
    ':pizza:': {
      uc_base: '1f355',
      uc_output: '1f355',
      uc_match: '1f355',
      uc_greedy: '1f355',
      shortnames: [],
      category: 'food'
    },
    ':place_of_worship:': {
      uc_base: '1f6d0',
      uc_output: '1f6d0',
      uc_match: '1f6d0',
      uc_greedy: '1f6d0',
      shortnames: [':worship_symbol:'],
      category: 'symbols'
    },
    ':point_down:': {
      uc_base: '1f447',
      uc_output: '1f447',
      uc_match: '1f447-fe0f',
      uc_greedy: '1f447-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':point_left:': {
      uc_base: '1f448',
      uc_output: '1f448',
      uc_match: '1f448-fe0f',
      uc_greedy: '1f448-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':point_right:': {
      uc_base: '1f449',
      uc_output: '1f449',
      uc_match: '1f449-fe0f',
      uc_greedy: '1f449-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':point_up_2:': {
      uc_base: '1f446',
      uc_output: '1f446',
      uc_match: '1f446-fe0f',
      uc_greedy: '1f446-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':police_car:': {
      uc_base: '1f693',
      uc_output: '1f693',
      uc_match: '1f693',
      uc_greedy: '1f693',
      shortnames: [],
      category: 'travel'
    },
    ':police_officer:': {
      uc_base: '1f46e',
      uc_output: '1f46e',
      uc_match: '1f46e',
      uc_greedy: '1f46e',
      shortnames: [':cop:'],
      category: 'people'
    },
    ':poodle:': {
      uc_base: '1f429',
      uc_output: '1f429',
      uc_match: '1f429',
      uc_greedy: '1f429',
      shortnames: [],
      category: 'nature'
    },
    ':poop:': {
      uc_base: '1f4a9',
      uc_output: '1f4a9',
      uc_match: '1f4a9',
      uc_greedy: '1f4a9',
      shortnames: [':shit:', ':hankey:', ':poo:'],
      category: 'people'
    },
    ':popcorn:': {
      uc_base: '1f37f',
      uc_output: '1f37f',
      uc_match: '1f37f',
      uc_greedy: '1f37f',
      shortnames: [],
      category: 'food'
    },
    ':post_office:': {
      uc_base: '1f3e3',
      uc_output: '1f3e3',
      uc_match: '1f3e3',
      uc_greedy: '1f3e3',
      shortnames: [],
      category: 'travel'
    },
    ':postal_horn:': {
      uc_base: '1f4ef',
      uc_output: '1f4ef',
      uc_match: '1f4ef',
      uc_greedy: '1f4ef',
      shortnames: [],
      category: 'objects'
    },
    ':postbox:': {
      uc_base: '1f4ee',
      uc_output: '1f4ee',
      uc_match: '1f4ee',
      uc_greedy: '1f4ee',
      shortnames: [],
      category: 'objects'
    },
    ':potable_water:': {
      uc_base: '1f6b0',
      uc_output: '1f6b0',
      uc_match: '1f6b0',
      uc_greedy: '1f6b0',
      shortnames: [],
      category: 'objects'
    },
    ':potato:': {
      uc_base: '1f954',
      uc_output: '1f954',
      uc_match: '1f954',
      uc_greedy: '1f954',
      shortnames: [],
      category: 'food'
    },
    ':pouch:': {
      uc_base: '1f45d',
      uc_output: '1f45d',
      uc_match: '1f45d',
      uc_greedy: '1f45d',
      shortnames: [],
      category: 'people'
    },
    ':poultry_leg:': {
      uc_base: '1f357',
      uc_output: '1f357',
      uc_match: '1f357',
      uc_greedy: '1f357',
      shortnames: [],
      category: 'food'
    },
    ':pound:': {
      uc_base: '1f4b7',
      uc_output: '1f4b7',
      uc_match: '1f4b7',
      uc_greedy: '1f4b7',
      shortnames: [],
      category: 'objects'
    },
    ':pouting_cat:': {
      uc_base: '1f63e',
      uc_output: '1f63e',
      uc_match: '1f63e',
      uc_greedy: '1f63e',
      shortnames: [],
      category: 'people'
    },
    ':pray:': {
      uc_base: '1f64f',
      uc_output: '1f64f',
      uc_match: '1f64f',
      uc_greedy: '1f64f',
      shortnames: [],
      category: 'people'
    },
    ':prayer_beads:': {
      uc_base: '1f4ff',
      uc_output: '1f4ff',
      uc_match: '1f4ff',
      uc_greedy: '1f4ff',
      shortnames: [],
      category: 'objects'
    },
    ':pregnant_woman:': {
      uc_base: '1f930',
      uc_output: '1f930',
      uc_match: '1f930',
      uc_greedy: '1f930',
      shortnames: [':expecting_woman:'],
      category: 'people'
    },
    ':pretzel:': {
      uc_base: '1f968',
      uc_output: '1f968',
      uc_match: '1f968',
      uc_greedy: '1f968',
      shortnames: [],
      category: 'food'
    },
    ':prince:': {
      uc_base: '1f934',
      uc_output: '1f934',
      uc_match: '1f934',
      uc_greedy: '1f934',
      shortnames: [],
      category: 'people'
    },
    ':princess:': {
      uc_base: '1f478',
      uc_output: '1f478',
      uc_match: '1f478',
      uc_greedy: '1f478',
      shortnames: [],
      category: 'people'
    },
    ':printer:': {
      uc_base: '1f5a8',
      uc_output: '1f5a8',
      uc_match: '1f5a8-fe0f',
      uc_greedy: '1f5a8-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':projector:': {
      uc_base: '1f4fd',
      uc_output: '1f4fd',
      uc_match: '1f4fd-fe0f',
      uc_greedy: '1f4fd-fe0f',
      shortnames: [':film_projector:'],
      category: 'objects'
    },
    ':punch:': {
      uc_base: '1f44a',
      uc_output: '1f44a',
      uc_match: '1f44a',
      uc_greedy: '1f44a',
      shortnames: [],
      category: 'people'
    },
    ':purple_heart:': {
      uc_base: '1f49c',
      uc_output: '1f49c',
      uc_match: '1f49c',
      uc_greedy: '1f49c',
      shortnames: [],
      category: 'symbols'
    },
    ':purse:': {
      uc_base: '1f45b',
      uc_output: '1f45b',
      uc_match: '1f45b',
      uc_greedy: '1f45b',
      shortnames: [],
      category: 'people'
    },
    ':pushpin:': {
      uc_base: '1f4cc',
      uc_output: '1f4cc',
      uc_match: '1f4cc',
      uc_greedy: '1f4cc',
      shortnames: [],
      category: 'objects'
    },
    ':put_litter_in_its_place:': {
      uc_base: '1f6ae',
      uc_output: '1f6ae',
      uc_match: '1f6ae',
      uc_greedy: '1f6ae',
      shortnames: [],
      category: 'symbols'
    },
    ':rabbit2:': {
      uc_base: '1f407',
      uc_output: '1f407',
      uc_match: '1f407',
      uc_greedy: '1f407',
      shortnames: [],
      category: 'nature'
    },
    ':rabbit:': {
      uc_base: '1f430',
      uc_output: '1f430',
      uc_match: '1f430',
      uc_greedy: '1f430',
      shortnames: [],
      category: 'nature'
    },
    ':race_car:': {
      uc_base: '1f3ce',
      uc_output: '1f3ce',
      uc_match: '1f3ce-fe0f',
      uc_greedy: '1f3ce-fe0f',
      shortnames: [':racing_car:'],
      category: 'travel'
    },
    ':racehorse:': {
      uc_base: '1f40e',
      uc_output: '1f40e',
      uc_match: '1f40e',
      uc_greedy: '1f40e',
      shortnames: [],
      category: 'nature'
    },
    ':radio:': {
      uc_base: '1f4fb',
      uc_output: '1f4fb',
      uc_match: '1f4fb-fe0f',
      uc_greedy: '1f4fb-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':radio_button:': {
      uc_base: '1f518',
      uc_output: '1f518',
      uc_match: '1f518',
      uc_greedy: '1f518',
      shortnames: [],
      category: 'symbols'
    },
    ':rage:': {
      uc_base: '1f621',
      uc_output: '1f621',
      uc_match: '1f621',
      uc_greedy: '1f621',
      shortnames: [],
      category: 'people'
    },
    ':railway_car:': {
      uc_base: '1f683',
      uc_output: '1f683',
      uc_match: '1f683',
      uc_greedy: '1f683',
      shortnames: [],
      category: 'travel'
    },
    ':railway_track:': {
      uc_base: '1f6e4',
      uc_output: '1f6e4',
      uc_match: '1f6e4-fe0f',
      uc_greedy: '1f6e4-fe0f',
      shortnames: [':railroad_track:'],
      category: 'travel'
    },
    ':rainbow:': {
      uc_base: '1f308',
      uc_output: '1f308',
      uc_match: '1f308',
      uc_greedy: '1f308',
      shortnames: [],
      category: 'nature'
    },
    ':raised_back_of_hand:': {
      uc_base: '1f91a',
      uc_output: '1f91a',
      uc_match: '1f91a',
      uc_greedy: '1f91a',
      shortnames: [':back_of_hand:'],
      category: 'people'
    },
    ':raised_hands:': {
      uc_base: '1f64c',
      uc_output: '1f64c',
      uc_match: '1f64c',
      uc_greedy: '1f64c',
      shortnames: [],
      category: 'people'
    },
    ':ram:': {
      uc_base: '1f40f',
      uc_output: '1f40f',
      uc_match: '1f40f',
      uc_greedy: '1f40f',
      shortnames: [],
      category: 'nature'
    },
    ':ramen:': {
      uc_base: '1f35c',
      uc_output: '1f35c',
      uc_match: '1f35c',
      uc_greedy: '1f35c',
      shortnames: [],
      category: 'food'
    },
    ':rat:': {
      uc_base: '1f400',
      uc_output: '1f400',
      uc_match: '1f400',
      uc_greedy: '1f400',
      shortnames: [],
      category: 'nature'
    },
    ':red_car:': {
      uc_base: '1f697',
      uc_output: '1f697',
      uc_match: '1f697',
      uc_greedy: '1f697',
      shortnames: [],
      category: 'travel'
    },
    ':red_circle:': {
      uc_base: '1f534',
      uc_output: '1f534',
      uc_match: '1f534',
      uc_greedy: '1f534',
      shortnames: [],
      category: 'symbols'
    },
    ':regional_indicator_a:': {
      uc_base: '1f1e6',
      uc_output: '1f1e6',
      uc_match: '1f1e6',
      uc_greedy: '1f1e6',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_b:': {
      uc_base: '1f1e7',
      uc_output: '1f1e7',
      uc_match: '1f1e7',
      uc_greedy: '1f1e7',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_c:': {
      uc_base: '1f1e8',
      uc_output: '1f1e8',
      uc_match: '1f1e8',
      uc_greedy: '1f1e8',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_d:': {
      uc_base: '1f1e9',
      uc_output: '1f1e9',
      uc_match: '1f1e9',
      uc_greedy: '1f1e9',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_e:': {
      uc_base: '1f1ea',
      uc_output: '1f1ea',
      uc_match: '1f1ea',
      uc_greedy: '1f1ea',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_f:': {
      uc_base: '1f1eb',
      uc_output: '1f1eb',
      uc_match: '1f1eb',
      uc_greedy: '1f1eb',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_g:': {
      uc_base: '1f1ec',
      uc_output: '1f1ec',
      uc_match: '1f1ec',
      uc_greedy: '1f1ec',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_h:': {
      uc_base: '1f1ed',
      uc_output: '1f1ed',
      uc_match: '1f1ed',
      uc_greedy: '1f1ed',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_i:': {
      uc_base: '1f1ee',
      uc_output: '1f1ee',
      uc_match: '1f1ee',
      uc_greedy: '1f1ee',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_j:': {
      uc_base: '1f1ef',
      uc_output: '1f1ef',
      uc_match: '1f1ef',
      uc_greedy: '1f1ef',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_k:': {
      uc_base: '1f1f0',
      uc_output: '1f1f0',
      uc_match: '1f1f0',
      uc_greedy: '1f1f0',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_l:': {
      uc_base: '1f1f1',
      uc_output: '1f1f1',
      uc_match: '1f1f1',
      uc_greedy: '1f1f1',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_m:': {
      uc_base: '1f1f2',
      uc_output: '1f1f2',
      uc_match: '1f1f2',
      uc_greedy: '1f1f2',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_n:': {
      uc_base: '1f1f3',
      uc_output: '1f1f3',
      uc_match: '1f1f3',
      uc_greedy: '1f1f3',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_o:': {
      uc_base: '1f1f4',
      uc_output: '1f1f4',
      uc_match: '1f1f4',
      uc_greedy: '1f1f4',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_p:': {
      uc_base: '1f1f5',
      uc_output: '1f1f5',
      uc_match: '1f1f5',
      uc_greedy: '1f1f5',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_q:': {
      uc_base: '1f1f6',
      uc_output: '1f1f6',
      uc_match: '1f1f6',
      uc_greedy: '1f1f6',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_r:': {
      uc_base: '1f1f7',
      uc_output: '1f1f7',
      uc_match: '1f1f7',
      uc_greedy: '1f1f7',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_s:': {
      uc_base: '1f1f8',
      uc_output: '1f1f8',
      uc_match: '1f1f8',
      uc_greedy: '1f1f8',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_t:': {
      uc_base: '1f1f9',
      uc_output: '1f1f9',
      uc_match: '1f1f9',
      uc_greedy: '1f1f9',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_u:': {
      uc_base: '1f1fa',
      uc_output: '1f1fa',
      uc_match: '1f1fa',
      uc_greedy: '1f1fa',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_v:': {
      uc_base: '1f1fb',
      uc_output: '1f1fb',
      uc_match: '1f1fb',
      uc_greedy: '1f1fb',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_w:': {
      uc_base: '1f1fc',
      uc_output: '1f1fc',
      uc_match: '1f1fc',
      uc_greedy: '1f1fc',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_x:': {
      uc_base: '1f1fd',
      uc_output: '1f1fd',
      uc_match: '1f1fd',
      uc_greedy: '1f1fd',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_y:': {
      uc_base: '1f1fe',
      uc_output: '1f1fe',
      uc_match: '1f1fe',
      uc_greedy: '1f1fe',
      shortnames: [],
      category: 'regional'
    },
    ':regional_indicator_z:': {
      uc_base: '1f1ff',
      uc_output: '1f1ff',
      uc_match: '1f1ff',
      uc_greedy: '1f1ff',
      shortnames: [],
      category: 'regional'
    },
    ':relieved:': {
      uc_base: '1f60c',
      uc_output: '1f60c',
      uc_match: '1f60c',
      uc_greedy: '1f60c',
      shortnames: [],
      category: 'people'
    },
    ':reminder_ribbon:': {
      uc_base: '1f397',
      uc_output: '1f397',
      uc_match: '1f397-fe0f',
      uc_greedy: '1f397-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':repeat:': {
      uc_base: '1f501',
      uc_output: '1f501',
      uc_match: '1f501',
      uc_greedy: '1f501',
      shortnames: [],
      category: 'symbols'
    },
    ':repeat_one:': {
      uc_base: '1f502',
      uc_output: '1f502',
      uc_match: '1f502',
      uc_greedy: '1f502',
      shortnames: [],
      category: 'symbols'
    },
    ':restroom:': {
      uc_base: '1f6bb',
      uc_output: '1f6bb',
      uc_match: '1f6bb',
      uc_greedy: '1f6bb',
      shortnames: [],
      category: 'symbols'
    },
    ':revolving_hearts:': {
      uc_base: '1f49e',
      uc_output: '1f49e',
      uc_match: '1f49e',
      uc_greedy: '1f49e',
      shortnames: [],
      category: 'symbols'
    },
    ':rhino:': {
      uc_base: '1f98f',
      uc_output: '1f98f',
      uc_match: '1f98f',
      uc_greedy: '1f98f',
      shortnames: [':rhinoceros:'],
      category: 'nature'
    },
    ':ribbon:': {
      uc_base: '1f380',
      uc_output: '1f380',
      uc_match: '1f380',
      uc_greedy: '1f380',
      shortnames: [],
      category: 'objects'
    },
    ':rice:': {
      uc_base: '1f35a',
      uc_output: '1f35a',
      uc_match: '1f35a',
      uc_greedy: '1f35a',
      shortnames: [],
      category: 'food'
    },
    ':rice_ball:': {
      uc_base: '1f359',
      uc_output: '1f359',
      uc_match: '1f359',
      uc_greedy: '1f359',
      shortnames: [],
      category: 'food'
    },
    ':rice_cracker:': {
      uc_base: '1f358',
      uc_output: '1f358',
      uc_match: '1f358',
      uc_greedy: '1f358',
      shortnames: [],
      category: 'food'
    },
    ':rice_scene:': {
      uc_base: '1f391',
      uc_output: '1f391',
      uc_match: '1f391',
      uc_greedy: '1f391',
      shortnames: [],
      category: 'travel'
    },
    ':right_facing_fist:': {
      uc_base: '1f91c',
      uc_output: '1f91c',
      uc_match: '1f91c',
      uc_greedy: '1f91c',
      shortnames: [':right_fist:'],
      category: 'people'
    },
    ':ring:': {
      uc_base: '1f48d',
      uc_output: '1f48d',
      uc_match: '1f48d',
      uc_greedy: '1f48d',
      shortnames: [],
      category: 'people'
    },
    ':robot:': {
      uc_base: '1f916',
      uc_output: '1f916',
      uc_match: '1f916',
      uc_greedy: '1f916',
      shortnames: [':robot_face:'],
      category: 'people'
    },
    ':rocket:': {
      uc_base: '1f680',
      uc_output: '1f680',
      uc_match: '1f680',
      uc_greedy: '1f680',
      shortnames: [],
      category: 'travel'
    },
    ':rofl:': {
      uc_base: '1f923',
      uc_output: '1f923',
      uc_match: '1f923',
      uc_greedy: '1f923',
      shortnames: [':rolling_on_the_floor_laughing:'],
      category: 'people'
    },
    ':roller_coaster:': {
      uc_base: '1f3a2',
      uc_output: '1f3a2',
      uc_match: '1f3a2',
      uc_greedy: '1f3a2',
      shortnames: [],
      category: 'travel'
    },
    ':rolling_eyes:': {
      uc_base: '1f644',
      uc_output: '1f644',
      uc_match: '1f644',
      uc_greedy: '1f644',
      shortnames: [':face_with_rolling_eyes:'],
      category: 'people'
    },
    ':rooster:': {
      uc_base: '1f413',
      uc_output: '1f413',
      uc_match: '1f413',
      uc_greedy: '1f413',
      shortnames: [],
      category: 'nature'
    },
    ':rose:': {
      uc_base: '1f339',
      uc_output: '1f339',
      uc_match: '1f339',
      uc_greedy: '1f339',
      shortnames: [],
      category: 'nature'
    },
    ':rosette:': {
      uc_base: '1f3f5',
      uc_output: '1f3f5',
      uc_match: '1f3f5-fe0f',
      uc_greedy: '1f3f5-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':rotating_light:': {
      uc_base: '1f6a8',
      uc_output: '1f6a8',
      uc_match: '1f6a8',
      uc_greedy: '1f6a8',
      shortnames: [],
      category: 'travel'
    },
    ':round_pushpin:': {
      uc_base: '1f4cd',
      uc_output: '1f4cd',
      uc_match: '1f4cd',
      uc_greedy: '1f4cd',
      shortnames: [],
      category: 'objects'
    },
    ':rugby_football:': {
      uc_base: '1f3c9',
      uc_output: '1f3c9',
      uc_match: '1f3c9',
      uc_greedy: '1f3c9',
      shortnames: [],
      category: 'activity'
    },
    ':running_shirt_with_sash:': {
      uc_base: '1f3bd',
      uc_output: '1f3bd',
      uc_match: '1f3bd',
      uc_greedy: '1f3bd',
      shortnames: [],
      category: 'activity'
    },
    ':sa:': {
      uc_base: '1f202',
      uc_output: '1f202',
      uc_match: '1f202-fe0f',
      uc_greedy: '1f202-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':sake:': {
      uc_base: '1f376',
      uc_output: '1f376',
      uc_match: '1f376',
      uc_greedy: '1f376',
      shortnames: [],
      category: 'food'
    },
    ':salad:': {
      uc_base: '1f957',
      uc_output: '1f957',
      uc_match: '1f957',
      uc_greedy: '1f957',
      shortnames: [':green_salad:'],
      category: 'food'
    },
    ':sandal:': {
      uc_base: '1f461',
      uc_output: '1f461',
      uc_match: '1f461',
      uc_greedy: '1f461',
      shortnames: [],
      category: 'people'
    },
    ':sandwich:': {
      uc_base: '1f96a',
      uc_output: '1f96a',
      uc_match: '1f96a',
      uc_greedy: '1f96a',
      shortnames: [],
      category: 'food'
    },
    ':santa:': {
      uc_base: '1f385',
      uc_output: '1f385',
      uc_match: '1f385',
      uc_greedy: '1f385',
      shortnames: [],
      category: 'people'
    },
    ':satellite:': {
      uc_base: '1f4e1',
      uc_output: '1f4e1',
      uc_match: '1f4e1',
      uc_greedy: '1f4e1',
      shortnames: [],
      category: 'objects'
    },
    ':satellite_orbital:': {
      uc_base: '1f6f0',
      uc_output: '1f6f0',
      uc_match: '1f6f0-fe0f',
      uc_greedy: '1f6f0-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':sauropod:': {
      uc_base: '1f995',
      uc_output: '1f995',
      uc_match: '1f995',
      uc_greedy: '1f995',
      shortnames: [],
      category: 'nature'
    },
    ':saxophone:': {
      uc_base: '1f3b7',
      uc_output: '1f3b7',
      uc_match: '1f3b7',
      uc_greedy: '1f3b7',
      shortnames: [],
      category: 'activity'
    },
    ':scarf:': {
      uc_base: '1f9e3',
      uc_output: '1f9e3',
      uc_match: '1f9e3',
      uc_greedy: '1f9e3',
      shortnames: [],
      category: 'people'
    },
    ':school:': {
      uc_base: '1f3eb',
      uc_output: '1f3eb',
      uc_match: '1f3eb',
      uc_greedy: '1f3eb',
      shortnames: [],
      category: 'travel'
    },
    ':school_satchel:': {
      uc_base: '1f392',
      uc_output: '1f392',
      uc_match: '1f392',
      uc_greedy: '1f392',
      shortnames: [],
      category: 'people'
    },
    ':scooter:': {
      uc_base: '1f6f4',
      uc_output: '1f6f4',
      uc_match: '1f6f4',
      uc_greedy: '1f6f4',
      shortnames: [],
      category: 'travel'
    },
    ':scorpion:': {
      uc_base: '1f982',
      uc_output: '1f982',
      uc_match: '1f982',
      uc_greedy: '1f982',
      shortnames: [],
      category: 'nature'
    },
    ':scream:': {
      uc_base: '1f631',
      uc_output: '1f631',
      uc_match: '1f631',
      uc_greedy: '1f631',
      shortnames: [],
      category: 'people'
    },
    ':scream_cat:': {
      uc_base: '1f640',
      uc_output: '1f640',
      uc_match: '1f640',
      uc_greedy: '1f640',
      shortnames: [],
      category: 'people'
    },
    ':scroll:': {
      uc_base: '1f4dc',
      uc_output: '1f4dc',
      uc_match: '1f4dc',
      uc_greedy: '1f4dc',
      shortnames: [],
      category: 'objects'
    },
    ':seat:': {
      uc_base: '1f4ba',
      uc_output: '1f4ba',
      uc_match: '1f4ba',
      uc_greedy: '1f4ba',
      shortnames: [],
      category: 'travel'
    },
    ':second_place:': {
      uc_base: '1f948',
      uc_output: '1f948',
      uc_match: '1f948',
      uc_greedy: '1f948',
      shortnames: [':second_place_medal:'],
      category: 'activity'
    },
    ':see_no_evil:': {
      uc_base: '1f648',
      uc_output: '1f648',
      uc_match: '1f648',
      uc_greedy: '1f648',
      shortnames: [],
      category: 'nature'
    },
    ':seedling:': {
      uc_base: '1f331',
      uc_output: '1f331',
      uc_match: '1f331',
      uc_greedy: '1f331',
      shortnames: [],
      category: 'nature'
    },
    ':selfie:': {
      uc_base: '1f933',
      uc_output: '1f933',
      uc_match: '1f933',
      uc_greedy: '1f933',
      shortnames: [],
      category: 'people'
    },
    ':shallow_pan_of_food:': {
      uc_base: '1f958',
      uc_output: '1f958',
      uc_match: '1f958',
      uc_greedy: '1f958',
      shortnames: [':paella:'],
      category: 'food'
    },
    ':shark:': {
      uc_base: '1f988',
      uc_output: '1f988',
      uc_match: '1f988',
      uc_greedy: '1f988',
      shortnames: [],
      category: 'nature'
    },
    ':shaved_ice:': {
      uc_base: '1f367',
      uc_output: '1f367',
      uc_match: '1f367',
      uc_greedy: '1f367',
      shortnames: [],
      category: 'food'
    },
    ':sheep:': {
      uc_base: '1f411',
      uc_output: '1f411',
      uc_match: '1f411',
      uc_greedy: '1f411',
      shortnames: [],
      category: 'nature'
    },
    ':shell:': {
      uc_base: '1f41a',
      uc_output: '1f41a',
      uc_match: '1f41a',
      uc_greedy: '1f41a',
      shortnames: [],
      category: 'nature'
    },
    ':shield:': {
      uc_base: '1f6e1',
      uc_output: '1f6e1',
      uc_match: '1f6e1-fe0f',
      uc_greedy: '1f6e1-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':ship:': {
      uc_base: '1f6a2',
      uc_output: '1f6a2',
      uc_match: '1f6a2',
      uc_greedy: '1f6a2',
      shortnames: [],
      category: 'travel'
    },
    ':shirt:': {
      uc_base: '1f455',
      uc_output: '1f455',
      uc_match: '1f455',
      uc_greedy: '1f455',
      shortnames: [],
      category: 'people'
    },
    ':shopping_bags:': {
      uc_base: '1f6cd',
      uc_output: '1f6cd',
      uc_match: '1f6cd-fe0f',
      uc_greedy: '1f6cd-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':shopping_cart:': {
      uc_base: '1f6d2',
      uc_output: '1f6d2',
      uc_match: '1f6d2',
      uc_greedy: '1f6d2',
      shortnames: [':shopping_trolley:'],
      category: 'objects'
    },
    ':shower:': {
      uc_base: '1f6bf',
      uc_output: '1f6bf',
      uc_match: '1f6bf',
      uc_greedy: '1f6bf',
      shortnames: [],
      category: 'objects'
    },
    ':shrimp:': {
      uc_base: '1f990',
      uc_output: '1f990',
      uc_match: '1f990',
      uc_greedy: '1f990',
      shortnames: [],
      category: 'nature'
    },
    ':shushing_face:': {
      uc_base: '1f92b',
      uc_output: '1f92b',
      uc_match: '1f92b',
      uc_greedy: '1f92b',
      shortnames: [],
      category: 'people'
    },
    ':signal_strength:': {
      uc_base: '1f4f6',
      uc_output: '1f4f6',
      uc_match: '1f4f6',
      uc_greedy: '1f4f6',
      shortnames: [],
      category: 'symbols'
    },
    ':six_pointed_star:': {
      uc_base: '1f52f',
      uc_output: '1f52f',
      uc_match: '1f52f',
      uc_greedy: '1f52f',
      shortnames: [],
      category: 'symbols'
    },
    ':ski:': {
      uc_base: '1f3bf',
      uc_output: '1f3bf',
      uc_match: '1f3bf',
      uc_greedy: '1f3bf',
      shortnames: [],
      category: 'activity'
    },
    ':skull:': {
      uc_base: '1f480',
      uc_output: '1f480',
      uc_match: '1f480',
      uc_greedy: '1f480',
      shortnames: [':skeleton:'],
      category: 'people'
    },
    ':sled:': {
      uc_base: '1f6f7',
      uc_output: '1f6f7',
      uc_match: '1f6f7',
      uc_greedy: '1f6f7',
      shortnames: [],
      category: 'activity'
    },
    ':sleeping:': {
      uc_base: '1f634',
      uc_output: '1f634',
      uc_match: '1f634',
      uc_greedy: '1f634',
      shortnames: [],
      category: 'people'
    },
    ':sleeping_accommodation:': {
      uc_base: '1f6cc',
      uc_output: '1f6cc',
      uc_match: '1f6cc',
      uc_greedy: '1f6cc',
      shortnames: [],
      category: 'objects'
    },
    ':sleepy:': {
      uc_base: '1f62a',
      uc_output: '1f62a',
      uc_match: '1f62a',
      uc_greedy: '1f62a',
      shortnames: [],
      category: 'people'
    },
    ':slight_frown:': {
      uc_base: '1f641',
      uc_output: '1f641',
      uc_match: '1f641',
      uc_greedy: '1f641',
      shortnames: [':slightly_frowning_face:'],
      category: 'people'
    },
    ':slight_smile:': {
      uc_base: '1f642',
      uc_output: '1f642',
      uc_match: '1f642',
      uc_greedy: '1f642',
      shortnames: [':slightly_smiling_face:'],
      category: 'people'
    },
    ':slot_machine:': {
      uc_base: '1f3b0',
      uc_output: '1f3b0',
      uc_match: '1f3b0',
      uc_greedy: '1f3b0',
      shortnames: [],
      category: 'activity'
    },
    ':small_blue_diamond:': {
      uc_base: '1f539',
      uc_output: '1f539',
      uc_match: '1f539',
      uc_greedy: '1f539',
      shortnames: [],
      category: 'symbols'
    },
    ':small_orange_diamond:': {
      uc_base: '1f538',
      uc_output: '1f538',
      uc_match: '1f538',
      uc_greedy: '1f538',
      shortnames: [],
      category: 'symbols'
    },
    ':small_red_triangle:': {
      uc_base: '1f53a',
      uc_output: '1f53a',
      uc_match: '1f53a',
      uc_greedy: '1f53a',
      shortnames: [],
      category: 'symbols'
    },
    ':small_red_triangle_down:': {
      uc_base: '1f53b',
      uc_output: '1f53b',
      uc_match: '1f53b',
      uc_greedy: '1f53b',
      shortnames: [],
      category: 'symbols'
    },
    ':smile:': {
      uc_base: '1f604',
      uc_output: '1f604',
      uc_match: '1f604',
      uc_greedy: '1f604',
      shortnames: [],
      category: 'people'
    },
    ':smile_cat:': {
      uc_base: '1f638',
      uc_output: '1f638',
      uc_match: '1f638',
      uc_greedy: '1f638',
      shortnames: [],
      category: 'people'
    },
    ':smiley:': {
      uc_base: '1f603',
      uc_output: '1f603',
      uc_match: '1f603',
      uc_greedy: '1f603',
      shortnames: [],
      category: 'people'
    },
    ':smiley_cat:': {
      uc_base: '1f63a',
      uc_output: '1f63a',
      uc_match: '1f63a',
      uc_greedy: '1f63a',
      shortnames: [],
      category: 'people'
    },
    ':smiling_imp:': {
      uc_base: '1f608',
      uc_output: '1f608',
      uc_match: '1f608',
      uc_greedy: '1f608',
      shortnames: [],
      category: 'people'
    },
    ':smirk:': {
      uc_base: '1f60f',
      uc_output: '1f60f',
      uc_match: '1f60f',
      uc_greedy: '1f60f',
      shortnames: [],
      category: 'people'
    },
    ':smirk_cat:': {
      uc_base: '1f63c',
      uc_output: '1f63c',
      uc_match: '1f63c',
      uc_greedy: '1f63c',
      shortnames: [],
      category: 'people'
    },
    ':smoking:': {
      uc_base: '1f6ac',
      uc_output: '1f6ac',
      uc_match: '1f6ac',
      uc_greedy: '1f6ac',
      shortnames: [],
      category: 'objects'
    },
    ':snail:': {
      uc_base: '1f40c',
      uc_output: '1f40c',
      uc_match: '1f40c',
      uc_greedy: '1f40c',
      shortnames: [],
      category: 'nature'
    },
    ':snake:': {
      uc_base: '1f40d',
      uc_output: '1f40d',
      uc_match: '1f40d',
      uc_greedy: '1f40d',
      shortnames: [],
      category: 'nature'
    },
    ':sneezing_face:': {
      uc_base: '1f927',
      uc_output: '1f927',
      uc_match: '1f927',
      uc_greedy: '1f927',
      shortnames: [':sneeze:'],
      category: 'people'
    },
    ':snowboarder:': {
      uc_base: '1f3c2',
      uc_output: '1f3c2',
      uc_match: '1f3c2-fe0f',
      uc_greedy: '1f3c2-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':sob:': {
      uc_base: '1f62d',
      uc_output: '1f62d',
      uc_match: '1f62d',
      uc_greedy: '1f62d',
      shortnames: [],
      category: 'people'
    },
    ':socks:': {
      uc_base: '1f9e6',
      uc_output: '1f9e6',
      uc_match: '1f9e6',
      uc_greedy: '1f9e6',
      shortnames: [],
      category: 'people'
    },
    ':soon:': {
      uc_base: '1f51c',
      uc_output: '1f51c',
      uc_match: '1f51c',
      uc_greedy: '1f51c',
      shortnames: [],
      category: 'symbols'
    },
    ':sos:': {
      uc_base: '1f198',
      uc_output: '1f198',
      uc_match: '1f198',
      uc_greedy: '1f198',
      shortnames: [],
      category: 'symbols'
    },
    ':sound:': {
      uc_base: '1f509',
      uc_output: '1f509',
      uc_match: '1f509',
      uc_greedy: '1f509',
      shortnames: [],
      category: 'symbols'
    },
    ':space_invader:': {
      uc_base: '1f47e',
      uc_output: '1f47e',
      uc_match: '1f47e',
      uc_greedy: '1f47e',
      shortnames: [],
      category: 'people'
    },
    ':spaghetti:': {
      uc_base: '1f35d',
      uc_output: '1f35d',
      uc_match: '1f35d',
      uc_greedy: '1f35d',
      shortnames: [],
      category: 'food'
    },
    ':sparkler:': {
      uc_base: '1f387',
      uc_output: '1f387',
      uc_match: '1f387',
      uc_greedy: '1f387',
      shortnames: [],
      category: 'travel'
    },
    ':sparkling_heart:': {
      uc_base: '1f496',
      uc_output: '1f496',
      uc_match: '1f496',
      uc_greedy: '1f496',
      shortnames: [],
      category: 'symbols'
    },
    ':speak_no_evil:': {
      uc_base: '1f64a',
      uc_output: '1f64a',
      uc_match: '1f64a',
      uc_greedy: '1f64a',
      shortnames: [],
      category: 'nature'
    },
    ':speaker:': {
      uc_base: '1f508',
      uc_output: '1f508',
      uc_match: '1f508-fe0f',
      uc_greedy: '1f508-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':speaking_head:': {
      uc_base: '1f5e3',
      uc_output: '1f5e3',
      uc_match: '1f5e3-fe0f',
      uc_greedy: '1f5e3-fe0f',
      shortnames: [':speaking_head_in_silhouette:'],
      category: 'people'
    },
    ':speech_balloon:': {
      uc_base: '1f4ac',
      uc_output: '1f4ac',
      uc_match: '1f4ac',
      uc_greedy: '1f4ac',
      shortnames: [],
      category: 'symbols'
    },
    ':speech_left:': {
      uc_base: '1f5e8',
      uc_output: '1f5e8',
      uc_match: '1f5e8-fe0f',
      uc_greedy: '1f5e8-fe0f',
      shortnames: [':left_speech_bubble:'],
      category: 'symbols'
    },
    ':speedboat:': {
      uc_base: '1f6a4',
      uc_output: '1f6a4',
      uc_match: '1f6a4',
      uc_greedy: '1f6a4',
      shortnames: [],
      category: 'travel'
    },
    ':spider:': {
      uc_base: '1f577',
      uc_output: '1f577',
      uc_match: '1f577-fe0f',
      uc_greedy: '1f577-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':spider_web:': {
      uc_base: '1f578',
      uc_output: '1f578',
      uc_match: '1f578-fe0f',
      uc_greedy: '1f578-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':spoon:': {
      uc_base: '1f944',
      uc_output: '1f944',
      uc_match: '1f944',
      uc_greedy: '1f944',
      shortnames: [],
      category: 'food'
    },
    ':squid:': {
      uc_base: '1f991',
      uc_output: '1f991',
      uc_match: '1f991',
      uc_greedy: '1f991',
      shortnames: [],
      category: 'nature'
    },
    ':stadium:': {
      uc_base: '1f3df',
      uc_output: '1f3df',
      uc_match: '1f3df-fe0f',
      uc_greedy: '1f3df-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':star2:': {
      uc_base: '1f31f',
      uc_output: '1f31f',
      uc_match: '1f31f',
      uc_greedy: '1f31f',
      shortnames: [],
      category: 'nature'
    },
    ':star_struck:': {
      uc_base: '1f929',
      uc_output: '1f929',
      uc_match: '1f929',
      uc_greedy: '1f929',
      shortnames: [],
      category: 'people'
    },
    ':stars:': {
      uc_base: '1f320',
      uc_output: '1f320',
      uc_match: '1f320',
      uc_greedy: '1f320',
      shortnames: [],
      category: 'travel'
    },
    ':station:': {
      uc_base: '1f689',
      uc_output: '1f689',
      uc_match: '1f689',
      uc_greedy: '1f689',
      shortnames: [],
      category: 'travel'
    },
    ':statue_of_liberty:': {
      uc_base: '1f5fd',
      uc_output: '1f5fd',
      uc_match: '1f5fd',
      uc_greedy: '1f5fd',
      shortnames: [],
      category: 'travel'
    },
    ':steam_locomotive:': {
      uc_base: '1f682',
      uc_output: '1f682',
      uc_match: '1f682',
      uc_greedy: '1f682',
      shortnames: [],
      category: 'travel'
    },
    ':stew:': {
      uc_base: '1f372',
      uc_output: '1f372',
      uc_match: '1f372',
      uc_greedy: '1f372',
      shortnames: [],
      category: 'food'
    },
    ':straight_ruler:': {
      uc_base: '1f4cf',
      uc_output: '1f4cf',
      uc_match: '1f4cf',
      uc_greedy: '1f4cf',
      shortnames: [],
      category: 'objects'
    },
    ':strawberry:': {
      uc_base: '1f353',
      uc_output: '1f353',
      uc_match: '1f353',
      uc_greedy: '1f353',
      shortnames: [],
      category: 'food'
    },
    ':stuck_out_tongue:': {
      uc_base: '1f61b',
      uc_output: '1f61b',
      uc_match: '1f61b',
      uc_greedy: '1f61b',
      shortnames: [],
      category: 'people'
    },
    ':stuck_out_tongue_closed_eyes:': {
      uc_base: '1f61d',
      uc_output: '1f61d',
      uc_match: '1f61d',
      uc_greedy: '1f61d',
      shortnames: [],
      category: 'people'
    },
    ':stuck_out_tongue_winking_eye:': {
      uc_base: '1f61c',
      uc_output: '1f61c',
      uc_match: '1f61c',
      uc_greedy: '1f61c',
      shortnames: [],
      category: 'people'
    },
    ':stuffed_flatbread:': {
      uc_base: '1f959',
      uc_output: '1f959',
      uc_match: '1f959',
      uc_greedy: '1f959',
      shortnames: [':stuffed_pita:'],
      category: 'food'
    },
    ':sun_with_face:': {
      uc_base: '1f31e',
      uc_output: '1f31e',
      uc_match: '1f31e',
      uc_greedy: '1f31e',
      shortnames: [],
      category: 'nature'
    },
    ':sunflower:': {
      uc_base: '1f33b',
      uc_output: '1f33b',
      uc_match: '1f33b',
      uc_greedy: '1f33b',
      shortnames: [],
      category: 'nature'
    },
    ':sunglasses:': {
      uc_base: '1f60e',
      uc_output: '1f60e',
      uc_match: '1f60e',
      uc_greedy: '1f60e',
      shortnames: [],
      category: 'people'
    },
    ':sunrise:': {
      uc_base: '1f305',
      uc_output: '1f305',
      uc_match: '1f305',
      uc_greedy: '1f305',
      shortnames: [],
      category: 'travel'
    },
    ':sunrise_over_mountains:': {
      uc_base: '1f304',
      uc_output: '1f304',
      uc_match: '1f304',
      uc_greedy: '1f304',
      shortnames: [],
      category: 'travel'
    },
    ':sushi:': {
      uc_base: '1f363',
      uc_output: '1f363',
      uc_match: '1f363',
      uc_greedy: '1f363',
      shortnames: [],
      category: 'food'
    },
    ':suspension_railway:': {
      uc_base: '1f69f',
      uc_output: '1f69f',
      uc_match: '1f69f',
      uc_greedy: '1f69f',
      shortnames: [],
      category: 'travel'
    },
    ':sweat:': {
      uc_base: '1f613',
      uc_output: '1f613',
      uc_match: '1f613',
      uc_greedy: '1f613',
      shortnames: [],
      category: 'people'
    },
    ':sweat_drops:': {
      uc_base: '1f4a6',
      uc_output: '1f4a6',
      uc_match: '1f4a6',
      uc_greedy: '1f4a6',
      shortnames: [],
      category: 'nature'
    },
    ':sweat_smile:': {
      uc_base: '1f605',
      uc_output: '1f605',
      uc_match: '1f605',
      uc_greedy: '1f605',
      shortnames: [],
      category: 'people'
    },
    ':sweet_potato:': {
      uc_base: '1f360',
      uc_output: '1f360',
      uc_match: '1f360',
      uc_greedy: '1f360',
      shortnames: [],
      category: 'food'
    },
    ':symbols:': {
      uc_base: '1f523',
      uc_output: '1f523',
      uc_match: '1f523',
      uc_greedy: '1f523',
      shortnames: [],
      category: 'symbols'
    },
    ':synagogue:': {
      uc_base: '1f54d',
      uc_output: '1f54d',
      uc_match: '1f54d',
      uc_greedy: '1f54d',
      shortnames: [],
      category: 'travel'
    },
    ':syringe:': {
      uc_base: '1f489',
      uc_output: '1f489',
      uc_match: '1f489',
      uc_greedy: '1f489',
      shortnames: [],
      category: 'objects'
    },
    ':t_rex:': {
      uc_base: '1f996',
      uc_output: '1f996',
      uc_match: '1f996',
      uc_greedy: '1f996',
      shortnames: [],
      category: 'nature'
    },
    ':taco:': {
      uc_base: '1f32e',
      uc_output: '1f32e',
      uc_match: '1f32e',
      uc_greedy: '1f32e',
      shortnames: [],
      category: 'food'
    },
    ':tada:': {
      uc_base: '1f389',
      uc_output: '1f389',
      uc_match: '1f389',
      uc_greedy: '1f389',
      shortnames: [],
      category: 'objects'
    },
    ':takeout_box:': {
      uc_base: '1f961',
      uc_output: '1f961',
      uc_match: '1f961',
      uc_greedy: '1f961',
      shortnames: [],
      category: 'food'
    },
    ':tanabata_tree:': {
      uc_base: '1f38b',
      uc_output: '1f38b',
      uc_match: '1f38b',
      uc_greedy: '1f38b',
      shortnames: [],
      category: 'nature'
    },
    ':tangerine:': {
      uc_base: '1f34a',
      uc_output: '1f34a',
      uc_match: '1f34a',
      uc_greedy: '1f34a',
      shortnames: [],
      category: 'food'
    },
    ':taxi:': {
      uc_base: '1f695',
      uc_output: '1f695',
      uc_match: '1f695',
      uc_greedy: '1f695',
      shortnames: [],
      category: 'travel'
    },
    ':tea:': {
      uc_base: '1f375',
      uc_output: '1f375',
      uc_match: '1f375',
      uc_greedy: '1f375',
      shortnames: [],
      category: 'food'
    },
    ':telephone_receiver:': {
      uc_base: '1f4de',
      uc_output: '1f4de',
      uc_match: '1f4de',
      uc_greedy: '1f4de',
      shortnames: [],
      category: 'objects'
    },
    ':telescope:': {
      uc_base: '1f52d',
      uc_output: '1f52d',
      uc_match: '1f52d',
      uc_greedy: '1f52d',
      shortnames: [],
      category: 'objects'
    },
    ':tennis:': {
      uc_base: '1f3be',
      uc_output: '1f3be',
      uc_match: '1f3be',
      uc_greedy: '1f3be',
      shortnames: [],
      category: 'activity'
    },
    ':thermometer:': {
      uc_base: '1f321',
      uc_output: '1f321',
      uc_match: '1f321-fe0f',
      uc_greedy: '1f321-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':thermometer_face:': {
      uc_base: '1f912',
      uc_output: '1f912',
      uc_match: '1f912',
      uc_greedy: '1f912',
      shortnames: [':face_with_thermometer:'],
      category: 'people'
    },
    ':thinking:': {
      uc_base: '1f914',
      uc_output: '1f914',
      uc_match: '1f914',
      uc_greedy: '1f914',
      shortnames: [':thinking_face:'],
      category: 'people'
    },
    ':third_place:': {
      uc_base: '1f949',
      uc_output: '1f949',
      uc_match: '1f949',
      uc_greedy: '1f949',
      shortnames: [':third_place_medal:'],
      category: 'activity'
    },
    ':thought_balloon:': {
      uc_base: '1f4ad',
      uc_output: '1f4ad',
      uc_match: '1f4ad',
      uc_greedy: '1f4ad',
      shortnames: [],
      category: 'symbols'
    },
    ':thumbsdown:': {
      uc_base: '1f44e',
      uc_output: '1f44e',
      uc_match: '1f44e-fe0f',
      uc_greedy: '1f44e-fe0f',
      shortnames: [':-1:', ':thumbdown:'],
      category: 'people'
    },
    ':thumbsup:': {
      uc_base: '1f44d',
      uc_output: '1f44d',
      uc_match: '1f44d-fe0f',
      uc_greedy: '1f44d-fe0f',
      shortnames: [':+1:', ':thumbup:'],
      category: 'people'
    },
    ':ticket:': {
      uc_base: '1f3ab',
      uc_output: '1f3ab',
      uc_match: '1f3ab',
      uc_greedy: '1f3ab',
      shortnames: [],
      category: 'activity'
    },
    ':tickets:': {
      uc_base: '1f39f',
      uc_output: '1f39f',
      uc_match: '1f39f-fe0f',
      uc_greedy: '1f39f-fe0f',
      shortnames: [':admission_tickets:'],
      category: 'activity'
    },
    ':tiger2:': {
      uc_base: '1f405',
      uc_output: '1f405',
      uc_match: '1f405',
      uc_greedy: '1f405',
      shortnames: [],
      category: 'nature'
    },
    ':tiger:': {
      uc_base: '1f42f',
      uc_output: '1f42f',
      uc_match: '1f42f',
      uc_greedy: '1f42f',
      shortnames: [],
      category: 'nature'
    },
    ':tired_face:': {
      uc_base: '1f62b',
      uc_output: '1f62b',
      uc_match: '1f62b',
      uc_greedy: '1f62b',
      shortnames: [],
      category: 'people'
    },
    ':toilet:': {
      uc_base: '1f6bd',
      uc_output: '1f6bd',
      uc_match: '1f6bd',
      uc_greedy: '1f6bd',
      shortnames: [],
      category: 'objects'
    },
    ':tokyo_tower:': {
      uc_base: '1f5fc',
      uc_output: '1f5fc',
      uc_match: '1f5fc',
      uc_greedy: '1f5fc',
      shortnames: [],
      category: 'travel'
    },
    ':tomato:': {
      uc_base: '1f345',
      uc_output: '1f345',
      uc_match: '1f345',
      uc_greedy: '1f345',
      shortnames: [],
      category: 'food'
    },
    ':tone1:': {
      uc_base: '1f3fb',
      uc_output: '1f3fb',
      uc_match: '1f3fb',
      uc_greedy: '1f3fb',
      shortnames: [],
      category: 'modifier'
    },
    ':tone2:': {
      uc_base: '1f3fc',
      uc_output: '1f3fc',
      uc_match: '1f3fc',
      uc_greedy: '1f3fc',
      shortnames: [],
      category: 'modifier'
    },
    ':tone3:': {
      uc_base: '1f3fd',
      uc_output: '1f3fd',
      uc_match: '1f3fd',
      uc_greedy: '1f3fd',
      shortnames: [],
      category: 'modifier'
    },
    ':tone4:': {
      uc_base: '1f3fe',
      uc_output: '1f3fe',
      uc_match: '1f3fe',
      uc_greedy: '1f3fe',
      shortnames: [],
      category: 'modifier'
    },
    ':tone5:': {
      uc_base: '1f3ff',
      uc_output: '1f3ff',
      uc_match: '1f3ff',
      uc_greedy: '1f3ff',
      shortnames: [],
      category: 'modifier'
    },
    ':tongue:': {
      uc_base: '1f445',
      uc_output: '1f445',
      uc_match: '1f445',
      uc_greedy: '1f445',
      shortnames: [],
      category: 'people'
    },
    ':tools:': {
      uc_base: '1f6e0',
      uc_output: '1f6e0',
      uc_match: '1f6e0-fe0f',
      uc_greedy: '1f6e0-fe0f',
      shortnames: [':hammer_and_wrench:'],
      category: 'objects'
    },
    ':top:': {
      uc_base: '1f51d',
      uc_output: '1f51d',
      uc_match: '1f51d',
      uc_greedy: '1f51d',
      shortnames: [],
      category: 'symbols'
    },
    ':tophat:': {
      uc_base: '1f3a9',
      uc_output: '1f3a9',
      uc_match: '1f3a9',
      uc_greedy: '1f3a9',
      shortnames: [],
      category: 'people'
    },
    ':trackball:': {
      uc_base: '1f5b2',
      uc_output: '1f5b2',
      uc_match: '1f5b2-fe0f',
      uc_greedy: '1f5b2-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':tractor:': {
      uc_base: '1f69c',
      uc_output: '1f69c',
      uc_match: '1f69c',
      uc_greedy: '1f69c',
      shortnames: [],
      category: 'travel'
    },
    ':traffic_light:': {
      uc_base: '1f6a5',
      uc_output: '1f6a5',
      uc_match: '1f6a5',
      uc_greedy: '1f6a5',
      shortnames: [],
      category: 'travel'
    },
    ':train2:': {
      uc_base: '1f686',
      uc_output: '1f686',
      uc_match: '1f686',
      uc_greedy: '1f686',
      shortnames: [],
      category: 'travel'
    },
    ':train:': {
      uc_base: '1f68b',
      uc_output: '1f68b',
      uc_match: '1f68b',
      uc_greedy: '1f68b',
      shortnames: [],
      category: 'travel'
    },
    ':tram:': {
      uc_base: '1f68a',
      uc_output: '1f68a',
      uc_match: '1f68a',
      uc_greedy: '1f68a',
      shortnames: [],
      category: 'travel'
    },
    ':triangular_flag_on_post:': {
      uc_base: '1f6a9',
      uc_output: '1f6a9',
      uc_match: '1f6a9',
      uc_greedy: '1f6a9',
      shortnames: [],
      category: 'flags'
    },
    ':triangular_ruler:': {
      uc_base: '1f4d0',
      uc_output: '1f4d0',
      uc_match: '1f4d0',
      uc_greedy: '1f4d0',
      shortnames: [],
      category: 'objects'
    },
    ':trident:': {
      uc_base: '1f531',
      uc_output: '1f531',
      uc_match: '1f531',
      uc_greedy: '1f531',
      shortnames: [],
      category: 'symbols'
    },
    ':triumph:': {
      uc_base: '1f624',
      uc_output: '1f624',
      uc_match: '1f624',
      uc_greedy: '1f624',
      shortnames: [],
      category: 'people'
    },
    ':trolleybus:': {
      uc_base: '1f68e',
      uc_output: '1f68e',
      uc_match: '1f68e',
      uc_greedy: '1f68e',
      shortnames: [],
      category: 'travel'
    },
    ':trophy:': {
      uc_base: '1f3c6',
      uc_output: '1f3c6',
      uc_match: '1f3c6-fe0f',
      uc_greedy: '1f3c6-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':tropical_drink:': {
      uc_base: '1f379',
      uc_output: '1f379',
      uc_match: '1f379',
      uc_greedy: '1f379',
      shortnames: [],
      category: 'food'
    },
    ':tropical_fish:': {
      uc_base: '1f420',
      uc_output: '1f420',
      uc_match: '1f420',
      uc_greedy: '1f420',
      shortnames: [],
      category: 'nature'
    },
    ':truck:': {
      uc_base: '1f69a',
      uc_output: '1f69a',
      uc_match: '1f69a',
      uc_greedy: '1f69a',
      shortnames: [],
      category: 'travel'
    },
    ':trumpet:': {
      uc_base: '1f3ba',
      uc_output: '1f3ba',
      uc_match: '1f3ba',
      uc_greedy: '1f3ba',
      shortnames: [],
      category: 'activity'
    },
    ':tulip:': {
      uc_base: '1f337',
      uc_output: '1f337',
      uc_match: '1f337',
      uc_greedy: '1f337',
      shortnames: [],
      category: 'nature'
    },
    ':tumbler_glass:': {
      uc_base: '1f943',
      uc_output: '1f943',
      uc_match: '1f943',
      uc_greedy: '1f943',
      shortnames: [':whisky:'],
      category: 'food'
    },
    ':turkey:': {
      uc_base: '1f983',
      uc_output: '1f983',
      uc_match: '1f983',
      uc_greedy: '1f983',
      shortnames: [],
      category: 'nature'
    },
    ':turtle:': {
      uc_base: '1f422',
      uc_output: '1f422',
      uc_match: '1f422',
      uc_greedy: '1f422',
      shortnames: [],
      category: 'nature'
    },
    ':tv:': {
      uc_base: '1f4fa',
      uc_output: '1f4fa',
      uc_match: '1f4fa-fe0f',
      uc_greedy: '1f4fa-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':twisted_rightwards_arrows:': {
      uc_base: '1f500',
      uc_output: '1f500',
      uc_match: '1f500',
      uc_greedy: '1f500',
      shortnames: [],
      category: 'symbols'
    },
    ':two_hearts:': {
      uc_base: '1f495',
      uc_output: '1f495',
      uc_match: '1f495',
      uc_greedy: '1f495',
      shortnames: [],
      category: 'symbols'
    },
    ':two_men_holding_hands:': {
      uc_base: '1f46c',
      uc_output: '1f46c',
      uc_match: '1f46c',
      uc_greedy: '1f46c',
      shortnames: [],
      category: 'people'
    },
    ':two_women_holding_hands:': {
      uc_base: '1f46d',
      uc_output: '1f46d',
      uc_match: '1f46d',
      uc_greedy: '1f46d',
      shortnames: [],
      category: 'people'
    },
    ':u5272:': {
      uc_base: '1f239',
      uc_output: '1f239',
      uc_match: '1f239',
      uc_greedy: '1f239',
      shortnames: [],
      category: 'symbols'
    },
    ':u5408:': {
      uc_base: '1f234',
      uc_output: '1f234',
      uc_match: '1f234',
      uc_greedy: '1f234',
      shortnames: [],
      category: 'symbols'
    },
    ':u55b6:': {
      uc_base: '1f23a',
      uc_output: '1f23a',
      uc_match: '1f23a',
      uc_greedy: '1f23a',
      shortnames: [],
      category: 'symbols'
    },
    ':u6307:': {
      uc_base: '1f22f',
      uc_output: '1f22f',
      uc_match: '1f22f-fe0f',
      uc_greedy: '1f22f-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':u6708:': {
      uc_base: '1f237',
      uc_output: '1f237',
      uc_match: '1f237-fe0f',
      uc_greedy: '1f237-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':u6709:': {
      uc_base: '1f236',
      uc_output: '1f236',
      uc_match: '1f236',
      uc_greedy: '1f236',
      shortnames: [],
      category: 'symbols'
    },
    ':u6e80:': {
      uc_base: '1f235',
      uc_output: '1f235',
      uc_match: '1f235',
      uc_greedy: '1f235',
      shortnames: [],
      category: 'symbols'
    },
    ':u7121:': {
      uc_base: '1f21a',
      uc_output: '1f21a',
      uc_match: '1f21a-fe0f',
      uc_greedy: '1f21a-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':u7533:': {
      uc_base: '1f238',
      uc_output: '1f238',
      uc_match: '1f238',
      uc_greedy: '1f238',
      shortnames: [],
      category: 'symbols'
    },
    ':u7981:': {
      uc_base: '1f232',
      uc_output: '1f232',
      uc_match: '1f232',
      uc_greedy: '1f232',
      shortnames: [],
      category: 'symbols'
    },
    ':u7a7a:': {
      uc_base: '1f233',
      uc_output: '1f233',
      uc_match: '1f233',
      uc_greedy: '1f233',
      shortnames: [],
      category: 'symbols'
    },
    ':unamused:': {
      uc_base: '1f612',
      uc_output: '1f612',
      uc_match: '1f612',
      uc_greedy: '1f612',
      shortnames: [],
      category: 'people'
    },
    ':underage:': {
      uc_base: '1f51e',
      uc_output: '1f51e',
      uc_match: '1f51e',
      uc_greedy: '1f51e',
      shortnames: [],
      category: 'symbols'
    },
    ':unicorn:': {
      uc_base: '1f984',
      uc_output: '1f984',
      uc_match: '1f984',
      uc_greedy: '1f984',
      shortnames: [':unicorn_face:'],
      category: 'nature'
    },
    ':unlock:': {
      uc_base: '1f513',
      uc_output: '1f513',
      uc_match: '1f513-fe0f',
      uc_greedy: '1f513-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':up:': {
      uc_base: '1f199',
      uc_output: '1f199',
      uc_match: '1f199',
      uc_greedy: '1f199',
      shortnames: [],
      category: 'symbols'
    },
    ':upside_down:': {
      uc_base: '1f643',
      uc_output: '1f643',
      uc_match: '1f643',
      uc_greedy: '1f643',
      shortnames: [':upside_down_face:'],
      category: 'people'
    },
    ':vampire:': {
      uc_base: '1f9db',
      uc_output: '1f9db',
      uc_match: '1f9db',
      uc_greedy: '1f9db',
      shortnames: [],
      category: 'people'
    },
    ':vertical_traffic_light:': {
      uc_base: '1f6a6',
      uc_output: '1f6a6',
      uc_match: '1f6a6',
      uc_greedy: '1f6a6',
      shortnames: [],
      category: 'travel'
    },
    ':vhs:': {
      uc_base: '1f4fc',
      uc_output: '1f4fc',
      uc_match: '1f4fc',
      uc_greedy: '1f4fc',
      shortnames: [],
      category: 'objects'
    },
    ':vibration_mode:': {
      uc_base: '1f4f3',
      uc_output: '1f4f3',
      uc_match: '1f4f3',
      uc_greedy: '1f4f3',
      shortnames: [],
      category: 'symbols'
    },
    ':video_camera:': {
      uc_base: '1f4f9',
      uc_output: '1f4f9',
      uc_match: '1f4f9-fe0f',
      uc_greedy: '1f4f9-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':video_game:': {
      uc_base: '1f3ae',
      uc_output: '1f3ae',
      uc_match: '1f3ae-fe0f',
      uc_greedy: '1f3ae-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':violin:': {
      uc_base: '1f3bb',
      uc_output: '1f3bb',
      uc_match: '1f3bb',
      uc_greedy: '1f3bb',
      shortnames: [],
      category: 'activity'
    },
    ':volcano:': {
      uc_base: '1f30b',
      uc_output: '1f30b',
      uc_match: '1f30b',
      uc_greedy: '1f30b',
      shortnames: [],
      category: 'travel'
    },
    ':volleyball:': {
      uc_base: '1f3d0',
      uc_output: '1f3d0',
      uc_match: '1f3d0',
      uc_greedy: '1f3d0',
      shortnames: [],
      category: 'activity'
    },
    ':vs:': {
      uc_base: '1f19a',
      uc_output: '1f19a',
      uc_match: '1f19a',
      uc_greedy: '1f19a',
      shortnames: [],
      category: 'symbols'
    },
    ':vulcan:': {
      uc_base: '1f596',
      uc_output: '1f596',
      uc_match: '1f596',
      uc_greedy: '1f596',
      shortnames: [':raised_hand_with_part_between_middle_and_ring_fingers:'],
      category: 'people'
    },
    ':waning_crescent_moon:': {
      uc_base: '1f318',
      uc_output: '1f318',
      uc_match: '1f318',
      uc_greedy: '1f318',
      shortnames: [],
      category: 'nature'
    },
    ':waning_gibbous_moon:': {
      uc_base: '1f316',
      uc_output: '1f316',
      uc_match: '1f316',
      uc_greedy: '1f316',
      shortnames: [],
      category: 'nature'
    },
    ':wastebasket:': {
      uc_base: '1f5d1',
      uc_output: '1f5d1',
      uc_match: '1f5d1-fe0f',
      uc_greedy: '1f5d1-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':water_buffalo:': {
      uc_base: '1f403',
      uc_output: '1f403',
      uc_match: '1f403',
      uc_greedy: '1f403',
      shortnames: [],
      category: 'nature'
    },
    ':watermelon:': {
      uc_base: '1f349',
      uc_output: '1f349',
      uc_match: '1f349',
      uc_greedy: '1f349',
      shortnames: [],
      category: 'food'
    },
    ':wave:': {
      uc_base: '1f44b',
      uc_output: '1f44b',
      uc_match: '1f44b',
      uc_greedy: '1f44b',
      shortnames: [],
      category: 'people'
    },
    ':waxing_crescent_moon:': {
      uc_base: '1f312',
      uc_output: '1f312',
      uc_match: '1f312',
      uc_greedy: '1f312',
      shortnames: [],
      category: 'nature'
    },
    ':waxing_gibbous_moon:': {
      uc_base: '1f314',
      uc_output: '1f314',
      uc_match: '1f314',
      uc_greedy: '1f314',
      shortnames: [],
      category: 'nature'
    },
    ':wc:': {
      uc_base: '1f6be',
      uc_output: '1f6be',
      uc_match: '1f6be',
      uc_greedy: '1f6be',
      shortnames: [],
      category: 'symbols'
    },
    ':weary:': {
      uc_base: '1f629',
      uc_output: '1f629',
      uc_match: '1f629',
      uc_greedy: '1f629',
      shortnames: [],
      category: 'people'
    },
    ':wedding:': {
      uc_base: '1f492',
      uc_output: '1f492',
      uc_match: '1f492',
      uc_greedy: '1f492',
      shortnames: [],
      category: 'travel'
    },
    ':whale2:': {
      uc_base: '1f40b',
      uc_output: '1f40b',
      uc_match: '1f40b',
      uc_greedy: '1f40b',
      shortnames: [],
      category: 'nature'
    },
    ':whale:': {
      uc_base: '1f433',
      uc_output: '1f433',
      uc_match: '1f433',
      uc_greedy: '1f433',
      shortnames: [],
      category: 'nature'
    },
    ':white_flower:': {
      uc_base: '1f4ae',
      uc_output: '1f4ae',
      uc_match: '1f4ae',
      uc_greedy: '1f4ae',
      shortnames: [],
      category: 'symbols'
    },
    ':white_square_button:': {
      uc_base: '1f533',
      uc_output: '1f533',
      uc_match: '1f533',
      uc_greedy: '1f533',
      shortnames: [],
      category: 'symbols'
    },
    ':white_sun_cloud:': {
      uc_base: '1f325',
      uc_output: '1f325',
      uc_match: '1f325-fe0f',
      uc_greedy: '1f325-fe0f',
      shortnames: [':white_sun_behind_cloud:'],
      category: 'nature'
    },
    ':white_sun_rain_cloud:': {
      uc_base: '1f326',
      uc_output: '1f326',
      uc_match: '1f326-fe0f',
      uc_greedy: '1f326-fe0f',
      shortnames: [':white_sun_behind_cloud_with_rain:'],
      category: 'nature'
    },
    ':white_sun_small_cloud:': {
      uc_base: '1f324',
      uc_output: '1f324',
      uc_match: '1f324-fe0f',
      uc_greedy: '1f324-fe0f',
      shortnames: [':white_sun_with_small_cloud:'],
      category: 'nature'
    },
    ':wilted_rose:': {
      uc_base: '1f940',
      uc_output: '1f940',
      uc_match: '1f940',
      uc_greedy: '1f940',
      shortnames: [':wilted_flower:'],
      category: 'nature'
    },
    ':wind_blowing_face:': {
      uc_base: '1f32c',
      uc_output: '1f32c',
      uc_match: '1f32c-fe0f',
      uc_greedy: '1f32c-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':wind_chime:': {
      uc_base: '1f390',
      uc_output: '1f390',
      uc_match: '1f390',
      uc_greedy: '1f390',
      shortnames: [],
      category: 'objects'
    },
    ':wine_glass:': {
      uc_base: '1f377',
      uc_output: '1f377',
      uc_match: '1f377',
      uc_greedy: '1f377',
      shortnames: [],
      category: 'food'
    },
    ':wink:': {
      uc_base: '1f609',
      uc_output: '1f609',
      uc_match: '1f609',
      uc_greedy: '1f609',
      shortnames: [],
      category: 'people'
    },
    ':wolf:': {
      uc_base: '1f43a',
      uc_output: '1f43a',
      uc_match: '1f43a',
      uc_greedy: '1f43a',
      shortnames: [],
      category: 'nature'
    },
    ':woman:': {
      uc_base: '1f469',
      uc_output: '1f469',
      uc_match: '1f469',
      uc_greedy: '1f469',
      shortnames: [],
      category: 'people'
    },
    ':woman_with_headscarf:': {
      uc_base: '1f9d5',
      uc_output: '1f9d5',
      uc_match: '1f9d5',
      uc_greedy: '1f9d5',
      shortnames: [],
      category: 'people'
    },
    ':womans_clothes:': {
      uc_base: '1f45a',
      uc_output: '1f45a',
      uc_match: '1f45a',
      uc_greedy: '1f45a',
      shortnames: [],
      category: 'people'
    },
    ':womans_hat:': {
      uc_base: '1f452',
      uc_output: '1f452',
      uc_match: '1f452',
      uc_greedy: '1f452',
      shortnames: [],
      category: 'people'
    },
    ':womens:': {
      uc_base: '1f6ba',
      uc_output: '1f6ba',
      uc_match: '1f6ba-fe0f',
      uc_greedy: '1f6ba-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':worried:': {
      uc_base: '1f61f',
      uc_output: '1f61f',
      uc_match: '1f61f',
      uc_greedy: '1f61f',
      shortnames: [],
      category: 'people'
    },
    ':wrench:': {
      uc_base: '1f527',
      uc_output: '1f527',
      uc_match: '1f527',
      uc_greedy: '1f527',
      shortnames: [],
      category: 'objects'
    },
    ':yellow_heart:': {
      uc_base: '1f49b',
      uc_output: '1f49b',
      uc_match: '1f49b',
      uc_greedy: '1f49b',
      shortnames: [],
      category: 'symbols'
    },
    ':yen:': {
      uc_base: '1f4b4',
      uc_output: '1f4b4',
      uc_match: '1f4b4',
      uc_greedy: '1f4b4',
      shortnames: [],
      category: 'objects'
    },
    ':yum:': {
      uc_base: '1f60b',
      uc_output: '1f60b',
      uc_match: '1f60b',
      uc_greedy: '1f60b',
      shortnames: [],
      category: 'people'
    },
    ':zebra:': {
      uc_base: '1f993',
      uc_output: '1f993',
      uc_match: '1f993',
      uc_greedy: '1f993',
      shortnames: [],
      category: 'nature'
    },
    ':zipper_mouth:': {
      uc_base: '1f910',
      uc_output: '1f910',
      uc_match: '1f910',
      uc_greedy: '1f910',
      shortnames: [':zipper_mouth_face:'],
      category: 'people'
    },
    ':zombie:': {
      uc_base: '1f9df',
      uc_output: '1f9df',
      uc_match: '1f9df',
      uc_greedy: '1f9df',
      shortnames: [],
      category: 'people'
    },
    ':zzz:': {
      uc_base: '1f4a4',
      uc_output: '1f4a4',
      uc_match: '1f4a4',
      uc_greedy: '1f4a4',
      shortnames: [],
      category: 'symbols'
    },
    ':airplane:': {
      uc_base: '2708',
      uc_output: '2708',
      uc_match: '2708-fe0f',
      uc_greedy: '2708-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':alarm_clock:': {
      uc_base: '23f0',
      uc_output: '23f0',
      uc_match: '23f0',
      uc_greedy: '23f0',
      shortnames: [],
      category: 'objects'
    },
    ':alembic:': {
      uc_base: '2697',
      uc_output: '2697',
      uc_match: '2697-fe0f',
      uc_greedy: '2697-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':anchor:': {
      uc_base: '2693',
      uc_output: '2693',
      uc_match: '2693-fe0f',
      uc_greedy: '2693-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':aquarius:': {
      uc_base: '2652',
      uc_output: '2652',
      uc_match: '2652-fe0f',
      uc_greedy: '2652-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':aries:': {
      uc_base: '2648',
      uc_output: '2648',
      uc_match: '2648-fe0f',
      uc_greedy: '2648-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_backward:': {
      uc_base: '25c0',
      uc_output: '25c0',
      uc_match: '25c0-fe0f',
      uc_greedy: '25c0',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_double_down:': {
      uc_base: '23ec',
      uc_output: '23ec',
      uc_match: '23ec',
      uc_greedy: '23ec',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_double_up:': {
      uc_base: '23eb',
      uc_output: '23eb',
      uc_match: '23eb',
      uc_greedy: '23eb',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_down:': {
      uc_base: '2b07',
      uc_output: '2b07',
      uc_match: '2b07-fe0f',
      uc_greedy: '2b07',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_forward:': {
      uc_base: '25b6',
      uc_output: '25b6',
      uc_match: '25b6-fe0f',
      uc_greedy: '25b6',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_heading_down:': {
      uc_base: '2935',
      uc_output: '2935',
      uc_match: '2935-fe0f',
      uc_greedy: '2935',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_heading_up:': {
      uc_base: '2934',
      uc_output: '2934',
      uc_match: '2934-fe0f',
      uc_greedy: '2934',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_left:': {
      uc_base: '2b05',
      uc_output: '2b05',
      uc_match: '2b05-fe0f',
      uc_greedy: '2b05',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_lower_left:': {
      uc_base: '2199',
      uc_output: '2199',
      uc_match: '2199-fe0f',
      uc_greedy: '2199',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_lower_right:': {
      uc_base: '2198',
      uc_output: '2198',
      uc_match: '2198-fe0f',
      uc_greedy: '2198',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_right:': {
      uc_base: '27a1',
      uc_output: '27a1',
      uc_match: '27a1-fe0f',
      uc_greedy: '27a1',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_right_hook:': {
      uc_base: '21aa',
      uc_output: '21aa',
      uc_match: '21aa-fe0f',
      uc_greedy: '21aa',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_up:': {
      uc_base: '2b06',
      uc_output: '2b06',
      uc_match: '2b06-fe0f',
      uc_greedy: '2b06',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_up_down:': {
      uc_base: '2195',
      uc_output: '2195',
      uc_match: '2195-fe0f',
      uc_greedy: '2195',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_upper_left:': {
      uc_base: '2196',
      uc_output: '2196',
      uc_match: '2196-fe0f',
      uc_greedy: '2196',
      shortnames: [],
      category: 'symbols'
    },
    ':arrow_upper_right:': {
      uc_base: '2197',
      uc_output: '2197',
      uc_match: '2197-fe0f',
      uc_greedy: '2197',
      shortnames: [],
      category: 'symbols'
    },
    ':atom:': {
      uc_base: '269b',
      uc_output: '269b',
      uc_match: '269b-fe0f',
      uc_greedy: '269b',
      shortnames: [':atom_symbol:'],
      category: 'symbols'
    },
    ':ballot_box_with_check:': {
      uc_base: '2611',
      uc_output: '2611',
      uc_match: '2611-fe0f',
      uc_greedy: '2611',
      shortnames: [],
      category: 'symbols'
    },
    ':bangbang:': {
      uc_base: '203c',
      uc_output: '203c',
      uc_match: '203c-fe0f',
      uc_greedy: '203c',
      shortnames: [],
      category: 'symbols'
    },
    ':baseball:': {
      uc_base: '26be',
      uc_output: '26be',
      uc_match: '26be-fe0f',
      uc_greedy: '26be-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':beach_umbrella:': {
      uc_base: '26f1',
      uc_output: '26f1',
      uc_match: '26f1-fe0f',
      uc_greedy: '26f1-fe0f',
      shortnames: [':umbrella_on_ground:'],
      category: 'travel'
    },
    ':biohazard:': {
      uc_base: '2623',
      uc_output: '2623',
      uc_match: '2623-fe0f',
      uc_greedy: '2623',
      shortnames: [':biohazard_sign:'],
      category: 'symbols'
    },
    ':black_circle:': {
      uc_base: '26ab',
      uc_output: '26ab',
      uc_match: '26ab-fe0f',
      uc_greedy: '26ab-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':black_large_square:': {
      uc_base: '2b1b',
      uc_output: '2b1b',
      uc_match: '2b1b-fe0f',
      uc_greedy: '2b1b-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':black_medium_small_square:': {
      uc_base: '25fe',
      uc_output: '25fe',
      uc_match: '25fe-fe0f',
      uc_greedy: '25fe-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':black_medium_square:': {
      uc_base: '25fc',
      uc_output: '25fc',
      uc_match: '25fc-fe0f',
      uc_greedy: '25fc',
      shortnames: [],
      category: 'symbols'
    },
    ':black_nib:': {
      uc_base: '2712',
      uc_output: '2712',
      uc_match: '2712-fe0f',
      uc_greedy: '2712-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':black_small_square:': {
      uc_base: '25aa',
      uc_output: '25aa',
      uc_match: '25aa-fe0f',
      uc_greedy: '25aa',
      shortnames: [],
      category: 'symbols'
    },
    ':cancer:': {
      uc_base: '264b',
      uc_output: '264b',
      uc_match: '264b-fe0f',
      uc_greedy: '264b-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':capricorn:': {
      uc_base: '2651',
      uc_output: '2651',
      uc_match: '2651-fe0f',
      uc_greedy: '2651-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':chains:': {
      uc_base: '26d3',
      uc_output: '26d3',
      uc_match: '26d3-fe0f',
      uc_greedy: '26d3-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':church:': {
      uc_base: '26ea',
      uc_output: '26ea',
      uc_match: '26ea-fe0f',
      uc_greedy: '26ea-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':cloud:': {
      uc_base: '2601',
      uc_output: '2601',
      uc_match: '2601-fe0f',
      uc_greedy: '2601-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':clubs:': {
      uc_base: '2663',
      uc_output: '2663',
      uc_match: '2663-fe0f',
      uc_greedy: '2663-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':coffee:': {
      uc_base: '2615',
      uc_output: '2615',
      uc_match: '2615-fe0f',
      uc_greedy: '2615-fe0f',
      shortnames: [],
      category: 'food'
    },
    ':coffin:': {
      uc_base: '26b0',
      uc_output: '26b0',
      uc_match: '26b0-fe0f',
      uc_greedy: '26b0-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':comet:': {
      uc_base: '2604',
      uc_output: '2604',
      uc_match: '2604-fe0f',
      uc_greedy: '2604-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':congratulations:': {
      uc_base: '3297',
      uc_output: '3297',
      uc_match: '3297-fe0f',
      uc_greedy: '3297-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':copyright:': {
      uc_base: '00a9',
      uc_output: '00a9',
      uc_match: '00a9-fe0f',
      uc_greedy: '00a9',
      shortnames: [],
      category: 'symbols'
    },
    ':cross:': {
      uc_base: '271d',
      uc_output: '271d',
      uc_match: '271d-fe0f',
      uc_greedy: '271d',
      shortnames: [':latin_cross:'],
      category: 'symbols'
    },
    ':crossed_swords:': {
      uc_base: '2694',
      uc_output: '2694',
      uc_match: '2694-fe0f',
      uc_greedy: '2694-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':curly_loop:': {
      uc_base: '27b0',
      uc_output: '27b0',
      uc_match: '27b0',
      uc_greedy: '27b0',
      shortnames: [],
      category: 'symbols'
    },
    ':diamonds:': {
      uc_base: '2666',
      uc_output: '2666',
      uc_match: '2666-fe0f',
      uc_greedy: '2666-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':eight_pointed_black_star:': {
      uc_base: '2734',
      uc_output: '2734',
      uc_match: '2734-fe0f',
      uc_greedy: '2734-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':eight_spoked_asterisk:': {
      uc_base: '2733',
      uc_output: '2733',
      uc_match: '2733-fe0f',
      uc_greedy: '2733-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':eject:': {
      uc_base: '23cf',
      uc_output: '23cf',
      uc_match: '23cf-fe0f',
      uc_greedy: '23cf',
      shortnames: [':eject_symbol:'],
      category: 'symbols'
    },
    ':envelope:': {
      uc_base: '2709',
      uc_output: '2709',
      uc_match: '2709-fe0f',
      uc_greedy: '2709-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':exclamation:': {
      uc_base: '2757',
      uc_output: '2757',
      uc_match: '2757-fe0f',
      uc_greedy: '2757-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':fast_forward:': {
      uc_base: '23e9',
      uc_output: '23e9',
      uc_match: '23e9-fe0f',
      uc_greedy: '23e9-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':female_sign:': {
      uc_base: '2640',
      uc_output: '2640',
      uc_match: '2640-fe0f',
      uc_greedy: '2640',
      shortnames: [],
      category: 'symbols'
    },
    ':ferry:': {
      uc_base: '26f4',
      uc_output: '26f4',
      uc_match: '26f4-fe0f',
      uc_greedy: '26f4-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':fist:': {
      uc_base: '270a',
      uc_output: '270a',
      uc_match: '270a',
      uc_greedy: '270a',
      shortnames: [],
      category: 'people'
    },
    ':fleur-de-lis:': {
      uc_base: '269c',
      uc_output: '269c',
      uc_match: '269c-fe0f',
      uc_greedy: '269c-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':fountain:': {
      uc_base: '26f2',
      uc_output: '26f2',
      uc_match: '26f2-fe0f',
      uc_greedy: '26f2-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':frowning2:': {
      uc_base: '2639',
      uc_output: '2639',
      uc_match: '2639-fe0f',
      uc_greedy: '2639-fe0f',
      shortnames: [':white_frowning_face:'],
      category: 'people'
    },
    ':fuelpump:': {
      uc_base: '26fd',
      uc_output: '26fd',
      uc_match: '26fd-fe0f',
      uc_greedy: '26fd-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':gear:': {
      uc_base: '2699',
      uc_output: '2699',
      uc_match: '2699-fe0f',
      uc_greedy: '2699-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':gemini:': {
      uc_base: '264a',
      uc_output: '264a',
      uc_match: '264a-fe0f',
      uc_greedy: '264a-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':golf:': {
      uc_base: '26f3',
      uc_output: '26f3',
      uc_match: '26f3-fe0f',
      uc_greedy: '26f3-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':grey_exclamation:': {
      uc_base: '2755',
      uc_output: '2755',
      uc_match: '2755',
      uc_greedy: '2755',
      shortnames: [],
      category: 'symbols'
    },
    ':grey_question:': {
      uc_base: '2754',
      uc_output: '2754',
      uc_match: '2754',
      uc_greedy: '2754',
      shortnames: [],
      category: 'symbols'
    },
    ':hammer_pick:': {
      uc_base: '2692',
      uc_output: '2692',
      uc_match: '2692-fe0f',
      uc_greedy: '2692-fe0f',
      shortnames: [':hammer_and_pick:'],
      category: 'objects'
    },
    ':heart:': {
      uc_base: '2764',
      uc_output: '2764',
      uc_match: '2764-fe0f',
      uc_greedy: '2764-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':heart_exclamation:': {
      uc_base: '2763',
      uc_output: '2763',
      uc_match: '2763-fe0f',
      uc_greedy: '2763-fe0f',
      shortnames: [':heavy_heart_exclamation_mark_ornament:'],
      category: 'symbols'
    },
    ':hearts:': {
      uc_base: '2665',
      uc_output: '2665',
      uc_match: '2665-fe0f',
      uc_greedy: '2665-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':heavy_check_mark:': {
      uc_base: '2714',
      uc_output: '2714',
      uc_match: '2714-fe0f',
      uc_greedy: '2714',
      shortnames: [],
      category: 'symbols'
    },
    ':heavy_division_sign:': {
      uc_base: '2797',
      uc_output: '2797',
      uc_match: '2797',
      uc_greedy: '2797',
      shortnames: [],
      category: 'symbols'
    },
    ':heavy_minus_sign:': {
      uc_base: '2796',
      uc_output: '2796',
      uc_match: '2796',
      uc_greedy: '2796',
      shortnames: [],
      category: 'symbols'
    },
    ':heavy_multiplication_x:': {
      uc_base: '2716',
      uc_output: '2716',
      uc_match: '2716-fe0f',
      uc_greedy: '2716',
      shortnames: [],
      category: 'symbols'
    },
    ':heavy_plus_sign:': {
      uc_base: '2795',
      uc_output: '2795',
      uc_match: '2795',
      uc_greedy: '2795',
      shortnames: [],
      category: 'symbols'
    },
    ':helmet_with_cross:': {
      uc_base: '26d1',
      uc_output: '26d1',
      uc_match: '26d1-fe0f',
      uc_greedy: '26d1-fe0f',
      shortnames: [':helmet_with_white_cross:'],
      category: 'people'
    },
    ':hotsprings:': {
      uc_base: '2668',
      uc_output: '2668',
      uc_match: '2668-fe0f',
      uc_greedy: '2668-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':hourglass:': {
      uc_base: '231b',
      uc_output: '231b',
      uc_match: '231b-fe0f',
      uc_greedy: '231b-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':hourglass_flowing_sand:': {
      uc_base: '23f3',
      uc_output: '23f3',
      uc_match: '23f3-fe0f',
      uc_greedy: '23f3-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':ice_skate:': {
      uc_base: '26f8',
      uc_output: '26f8',
      uc_match: '26f8-fe0f',
      uc_greedy: '26f8-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':information_source:': {
      uc_base: '2139',
      uc_output: '2139',
      uc_match: '2139-fe0f',
      uc_greedy: '2139',
      shortnames: [],
      category: 'symbols'
    },
    ':interrobang:': {
      uc_base: '2049',
      uc_output: '2049',
      uc_match: '2049-fe0f',
      uc_greedy: '2049',
      shortnames: [],
      category: 'symbols'
    },
    ':keyboard:': {
      uc_base: '2328',
      uc_output: '2328',
      uc_match: '2328-fe0f',
      uc_greedy: '2328-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':left_right_arrow:': {
      uc_base: '2194',
      uc_output: '2194',
      uc_match: '2194-fe0f',
      uc_greedy: '2194',
      shortnames: [],
      category: 'symbols'
    },
    ':leftwards_arrow_with_hook:': {
      uc_base: '21a9',
      uc_output: '21a9',
      uc_match: '21a9-fe0f',
      uc_greedy: '21a9',
      shortnames: [],
      category: 'symbols'
    },
    ':leo:': {
      uc_base: '264c',
      uc_output: '264c',
      uc_match: '264c-fe0f',
      uc_greedy: '264c-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':libra:': {
      uc_base: '264e',
      uc_output: '264e',
      uc_match: '264e-fe0f',
      uc_greedy: '264e-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':loop:': {
      uc_base: '27bf',
      uc_output: '27bf',
      uc_match: '27bf',
      uc_greedy: '27bf',
      shortnames: [],
      category: 'symbols'
    },
    ':m:': {
      uc_base: '24c2',
      uc_output: '24c2',
      uc_match: '24c2-fe0f',
      uc_greedy: '24c2-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':male_sign:': {
      uc_base: '2642',
      uc_output: '2642',
      uc_match: '2642-fe0f',
      uc_greedy: '2642',
      shortnames: [],
      category: 'symbols'
    },
    ':medical_symbol:': {
      uc_base: '2695',
      uc_output: '2695',
      uc_match: '2695-fe0f',
      uc_greedy: '2695',
      shortnames: [],
      category: 'symbols'
    },
    ':mountain:': {
      uc_base: '26f0',
      uc_output: '26f0',
      uc_match: '26f0-fe0f',
      uc_greedy: '26f0-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':negative_squared_cross_mark:': {
      uc_base: '274e',
      uc_output: '274e',
      uc_match: '274e',
      uc_greedy: '274e',
      shortnames: [],
      category: 'symbols'
    },
    ':no_entry:': {
      uc_base: '26d4',
      uc_output: '26d4',
      uc_match: '26d4-fe0f',
      uc_greedy: '26d4-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':o:': {
      uc_base: '2b55',
      uc_output: '2b55',
      uc_match: '2b55-fe0f',
      uc_greedy: '2b55-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':ophiuchus:': {
      uc_base: '26ce',
      uc_output: '26ce',
      uc_match: '26ce',
      uc_greedy: '26ce',
      shortnames: [],
      category: 'symbols'
    },
    ':orthodox_cross:': {
      uc_base: '2626',
      uc_output: '2626',
      uc_match: '2626-fe0f',
      uc_greedy: '2626',
      shortnames: [],
      category: 'symbols'
    },
    ':part_alternation_mark:': {
      uc_base: '303d',
      uc_output: '303d',
      uc_match: '303d-fe0f',
      uc_greedy: '303d-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':partly_sunny:': {
      uc_base: '26c5',
      uc_output: '26c5',
      uc_match: '26c5-fe0f',
      uc_greedy: '26c5-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':pause_button:': {
      uc_base: '23f8',
      uc_output: '23f8',
      uc_match: '23f8-fe0f',
      uc_greedy: '23f8',
      shortnames: [':double_vertical_bar:'],
      category: 'symbols'
    },
    ':peace:': {
      uc_base: '262e',
      uc_output: '262e',
      uc_match: '262e-fe0f',
      uc_greedy: '262e',
      shortnames: [':peace_symbol:'],
      category: 'symbols'
    },
    ':pencil2:': {
      uc_base: '270f',
      uc_output: '270f',
      uc_match: '270f-fe0f',
      uc_greedy: '270f-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':person_bouncing_ball:': {
      uc_base: '26f9',
      uc_output: '26f9',
      uc_match: '26f9-fe0f',
      uc_greedy: '26f9-fe0f',
      shortnames: [':basketball_player:', ':person_with_ball:'],
      category: 'activity'
    },
    ':pick:': {
      uc_base: '26cf',
      uc_output: '26cf',
      uc_match: '26cf-fe0f',
      uc_greedy: '26cf-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':pisces:': {
      uc_base: '2653',
      uc_output: '2653',
      uc_match: '2653-fe0f',
      uc_greedy: '2653-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':play_pause:': {
      uc_base: '23ef',
      uc_output: '23ef',
      uc_match: '23ef-fe0f',
      uc_greedy: '23ef',
      shortnames: [],
      category: 'symbols'
    },
    ':point_up:': {
      uc_base: '261d',
      uc_output: '261d',
      uc_match: '261d-fe0f',
      uc_greedy: '261d-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':question:': {
      uc_base: '2753',
      uc_output: '2753',
      uc_match: '2753-fe0f',
      uc_greedy: '2753-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':radioactive:': {
      uc_base: '2622',
      uc_output: '2622',
      uc_match: '2622-fe0f',
      uc_greedy: '2622',
      shortnames: [':radioactive_sign:'],
      category: 'symbols'
    },
    ':raised_hand:': {
      uc_base: '270b',
      uc_output: '270b',
      uc_match: '270b',
      uc_greedy: '270b',
      shortnames: [],
      category: 'people'
    },
    ':record_button:': {
      uc_base: '23fa',
      uc_output: '23fa',
      uc_match: '23fa-fe0f',
      uc_greedy: '23fa',
      shortnames: [],
      category: 'symbols'
    },
    ':recycle:': {
      uc_base: '267b',
      uc_output: '267b',
      uc_match: '267b-fe0f',
      uc_greedy: '267b-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':registered:': {
      uc_base: '00ae',
      uc_output: '00ae',
      uc_match: '00ae-fe0f',
      uc_greedy: '00ae',
      shortnames: [],
      category: 'symbols'
    },
    ':relaxed:': {
      uc_base: '263a',
      uc_output: '263a',
      uc_match: '263a-fe0f',
      uc_greedy: '263a-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':rewind:': {
      uc_base: '23ea',
      uc_output: '23ea',
      uc_match: '23ea-fe0f',
      uc_greedy: '23ea-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':sagittarius:': {
      uc_base: '2650',
      uc_output: '2650',
      uc_match: '2650-fe0f',
      uc_greedy: '2650-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':sailboat:': {
      uc_base: '26f5',
      uc_output: '26f5',
      uc_match: '26f5-fe0f',
      uc_greedy: '26f5-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':scales:': {
      uc_base: '2696',
      uc_output: '2696',
      uc_match: '2696-fe0f',
      uc_greedy: '2696-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':scissors:': {
      uc_base: '2702',
      uc_output: '2702',
      uc_match: '2702-fe0f',
      uc_greedy: '2702-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':scorpius:': {
      uc_base: '264f',
      uc_output: '264f',
      uc_match: '264f-fe0f',
      uc_greedy: '264f-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':secret:': {
      uc_base: '3299',
      uc_output: '3299',
      uc_match: '3299-fe0f',
      uc_greedy: '3299-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':shamrock:': {
      uc_base: '2618',
      uc_output: '2618',
      uc_match: '2618-fe0f',
      uc_greedy: '2618-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':shinto_shrine:': {
      uc_base: '26e9',
      uc_output: '26e9',
      uc_match: '26e9-fe0f',
      uc_greedy: '26e9-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':skier:': {
      uc_base: '26f7',
      uc_output: '26f7',
      uc_match: '26f7-fe0f',
      uc_greedy: '26f7-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':skull_crossbones:': {
      uc_base: '2620',
      uc_output: '2620',
      uc_match: '2620-fe0f',
      uc_greedy: '2620-fe0f',
      shortnames: [':skull_and_crossbones:'],
      category: 'people'
    },
    ':snowflake:': {
      uc_base: '2744',
      uc_output: '2744',
      uc_match: '2744-fe0f',
      uc_greedy: '2744-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':snowman2:': {
      uc_base: '2603',
      uc_output: '2603',
      uc_match: '2603-fe0f',
      uc_greedy: '2603-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':snowman:': {
      uc_base: '26c4',
      uc_output: '26c4',
      uc_match: '26c4-fe0f',
      uc_greedy: '26c4-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':soccer:': {
      uc_base: '26bd',
      uc_output: '26bd',
      uc_match: '26bd-fe0f',
      uc_greedy: '26bd-fe0f',
      shortnames: [],
      category: 'activity'
    },
    ':spades:': {
      uc_base: '2660',
      uc_output: '2660',
      uc_match: '2660-fe0f',
      uc_greedy: '2660-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':sparkle:': {
      uc_base: '2747',
      uc_output: '2747',
      uc_match: '2747-fe0f',
      uc_greedy: '2747-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':sparkles:': {
      uc_base: '2728',
      uc_output: '2728',
      uc_match: '2728',
      uc_greedy: '2728',
      shortnames: [],
      category: 'nature'
    },
    ':star:': {
      uc_base: '2b50',
      uc_output: '2b50',
      uc_match: '2b50-fe0f',
      uc_greedy: '2b50-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':star_and_crescent:': {
      uc_base: '262a',
      uc_output: '262a',
      uc_match: '262a-fe0f',
      uc_greedy: '262a',
      shortnames: [],
      category: 'symbols'
    },
    ':star_of_david:': {
      uc_base: '2721',
      uc_output: '2721',
      uc_match: '2721-fe0f',
      uc_greedy: '2721',
      shortnames: [],
      category: 'symbols'
    },
    ':stop_button:': {
      uc_base: '23f9',
      uc_output: '23f9',
      uc_match: '23f9-fe0f',
      uc_greedy: '23f9',
      shortnames: [],
      category: 'symbols'
    },
    ':stopwatch:': {
      uc_base: '23f1',
      uc_output: '23f1',
      uc_match: '23f1-fe0f',
      uc_greedy: '23f1-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':sunny:': {
      uc_base: '2600',
      uc_output: '2600',
      uc_match: '2600-fe0f',
      uc_greedy: '2600-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':taurus:': {
      uc_base: '2649',
      uc_output: '2649',
      uc_match: '2649-fe0f',
      uc_greedy: '2649-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':telephone:': {
      uc_base: '260e',
      uc_output: '260e',
      uc_match: '260e-fe0f',
      uc_greedy: '260e-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':tent:': {
      uc_base: '26fa',
      uc_output: '26fa',
      uc_match: '26fa-fe0f',
      uc_greedy: '26fa-fe0f',
      shortnames: [],
      category: 'travel'
    },
    ':thunder_cloud_rain:': {
      uc_base: '26c8',
      uc_output: '26c8',
      uc_match: '26c8-fe0f',
      uc_greedy: '26c8-fe0f',
      shortnames: [':thunder_cloud_and_rain:'],
      category: 'nature'
    },
    ':timer:': {
      uc_base: '23f2',
      uc_output: '23f2',
      uc_match: '23f2-fe0f',
      uc_greedy: '23f2-fe0f',
      shortnames: [':timer_clock:'],
      category: 'objects'
    },
    ':tm:': {
      uc_base: '2122',
      uc_output: '2122',
      uc_match: '2122-fe0f',
      uc_greedy: '2122',
      shortnames: [],
      category: 'symbols'
    },
    ':track_next:': {
      uc_base: '23ed',
      uc_output: '23ed',
      uc_match: '23ed-fe0f',
      uc_greedy: '23ed',
      shortnames: [':next_track:'],
      category: 'symbols'
    },
    ':track_previous:': {
      uc_base: '23ee',
      uc_output: '23ee',
      uc_match: '23ee-fe0f',
      uc_greedy: '23ee',
      shortnames: [':previous_track:'],
      category: 'symbols'
    },
    ':umbrella2:': {
      uc_base: '2602',
      uc_output: '2602',
      uc_match: '2602-fe0f',
      uc_greedy: '2602-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':umbrella:': {
      uc_base: '2614',
      uc_output: '2614',
      uc_match: '2614-fe0f',
      uc_greedy: '2614-fe0f',
      shortnames: [],
      category: 'nature'
    },
    ':urn:': {
      uc_base: '26b1',
      uc_output: '26b1',
      uc_match: '26b1-fe0f',
      uc_greedy: '26b1-fe0f',
      shortnames: [':funeral_urn:'],
      category: 'objects'
    },
    ':v:': {
      uc_base: '270c',
      uc_output: '270c',
      uc_match: '270c-fe0f',
      uc_greedy: '270c-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':virgo:': {
      uc_base: '264d',
      uc_output: '264d',
      uc_match: '264d-fe0f',
      uc_greedy: '264d-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':warning:': {
      uc_base: '26a0',
      uc_output: '26a0',
      uc_match: '26a0-fe0f',
      uc_greedy: '26a0',
      shortnames: [],
      category: 'symbols'
    },
    ':watch:': {
      uc_base: '231a',
      uc_output: '231a',
      uc_match: '231a-fe0f',
      uc_greedy: '231a-fe0f',
      shortnames: [],
      category: 'objects'
    },
    ':wavy_dash:': {
      uc_base: '3030',
      uc_output: '3030',
      uc_match: '3030-fe0f',
      uc_greedy: '3030',
      shortnames: [],
      category: 'symbols'
    },
    ':wheel_of_dharma:': {
      uc_base: '2638',
      uc_output: '2638',
      uc_match: '2638-fe0f',
      uc_greedy: '2638',
      shortnames: [],
      category: 'symbols'
    },
    ':wheelchair:': {
      uc_base: '267f',
      uc_output: '267f',
      uc_match: '267f-fe0f',
      uc_greedy: '267f-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':white_check_mark:': {
      uc_base: '2705',
      uc_output: '2705',
      uc_match: '2705',
      uc_greedy: '2705',
      shortnames: [],
      category: 'symbols'
    },
    ':white_circle:': {
      uc_base: '26aa',
      uc_output: '26aa',
      uc_match: '26aa-fe0f',
      uc_greedy: '26aa-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':white_large_square:': {
      uc_base: '2b1c',
      uc_output: '2b1c',
      uc_match: '2b1c-fe0f',
      uc_greedy: '2b1c-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':white_medium_small_square:': {
      uc_base: '25fd',
      uc_output: '25fd',
      uc_match: '25fd-fe0f',
      uc_greedy: '25fd-fe0f',
      shortnames: [],
      category: 'symbols'
    },
    ':white_medium_square:': {
      uc_base: '25fb',
      uc_output: '25fb',
      uc_match: '25fb-fe0f',
      uc_greedy: '25fb',
      shortnames: [],
      category: 'symbols'
    },
    ':white_small_square:': {
      uc_base: '25ab',
      uc_output: '25ab',
      uc_match: '25ab-fe0f',
      uc_greedy: '25ab',
      shortnames: [],
      category: 'symbols'
    },
    ':writing_hand:': {
      uc_base: '270d',
      uc_output: '270d',
      uc_match: '270d-fe0f',
      uc_greedy: '270d-fe0f',
      shortnames: [],
      category: 'people'
    },
    ':x:': {
      uc_base: '274c',
      uc_output: '274c',
      uc_match: '274c',
      uc_greedy: '274c',
      shortnames: [],
      category: 'symbols'
    },
    ':yin_yang:': {
      uc_base: '262f',
      uc_output: '262f',
      uc_match: '262f-fe0f',
      uc_greedy: '262f',
      shortnames: [],
      category: 'symbols'
    },
    ':zap:': {
      uc_base: '26a1',
      uc_output: '26a1',
      uc_match: '26a1-fe0f',
      uc_greedy: '26a1-fe0f',
      shortnames: [],
      category: 'nature'
    }
  };
  Femoji.peopleList = [
    ':grinning:',
    ':smiley:',
    ':smile:',
    ':grin:',
    ':laughing:',
    ':sweat_smile:',
    ':joy:',
    ':rofl:',
    ':relaxed:',
    ':blush:',
    ':innocent:',
    ':slight_smile:',
    ':upside_down:',
    ':wink:',
    ':relieved:',
    ':heart_eyes:',
    ':kissing_heart:',
    ':kissing:',
    ':kissing_smiling_eyes:',
    ':kissing_closed_eyes:',
    ':yum:',
    ':stuck_out_tongue:',
    ':stuck_out_tongue_closed_eyes:',
    ':stuck_out_tongue_winking_eye:',
    ':crazy_face:',
    ':face_with_raised_eyebrow:',
    ':face_with_monocle:',
    ':nerd:',
    ':sunglasses:',
    ':star_struck:',
    ':smirk:',
    ':unamused:',
    ':disappointed:',
    ':pensive:',
    ':worried:',
    ':confused:',
    ':slight_frown:',
    ':frowning2:',
    ':persevere:',
    ':confounded:',
    ':tired_face:',
    ':weary:',
    ':cry:',
    ':sob:',
    ':triumph:',
    ':angry:',
    ':rage:',
    ':face_with_symbols_over_mouth:',
    ':exploding_head:',
    ':flushed:',
    ':scream:',
    ':fearful:',
    ':cold_sweat:',
    ':disappointed_relieved:',
    ':sweat:',
    ':hugging:',
    ':thinking:',
    ':face_with_hand_over_mouth:',
    ':shushing_face:',
    ':lying_face:',
    ':no_mouth:',
    ':neutral_face:',
    ':expressionless:',
    ':grimacing:',
    ':rolling_eyes:',
    ':hushed:',
    ':frowning:',
    ':anguished:',
    ':open_mouth:',
    ':astonished:',
    ':sleeping:',
    ':drooling_face:',
    ':sleepy:',
    ':dizzy_face:',
    ':zipper_mouth:',
    ':nauseated_face:',
    ':face_vomiting:',
    ':sneezing_face:',
    ':mask:',
    ':thermometer_face:',
    ':head_bandage:',
    ':money_mouth:',
    ':cowboy:',
    ':smiling_imp:',
    ':imp:',
    ':japanese_ogre:',
    ':japanese_goblin:',
    ':clown:',
    ':poop:',
    ':ghost:',
    ':skull:',
    ':skull_crossbones:',
    ':alien:',
    ':space_invader:',
    ':robot:',
    ':jack_o_lantern:',
    ':smiley_cat:',
    ':smile_cat:',
    ':joy_cat:',
    ':heart_eyes_cat:',
    ':smirk_cat:',
    ':kissing_cat:',
    ':scream_cat:',
    ':crying_cat_face:',
    ':pouting_cat:',
    ':palms_up_together:',
    ':open_hands:',
    ':raised_hands:',
    ':clap:',
    ':handshake:',
    ':thumbsup:',
    ':thumbsdown:',
    ':punch:',
    ':fist:',
    ':left_facing_fist:',
    ':right_facing_fist:',
    ':fingers_crossed:',
    ':v:',
    ':love_you_gesture:',
    ':metal:',
    ':ok_hand:',
    ':point_left:',
    ':point_right:',
    ':point_up_2:',
    ':point_down:',
    ':point_up:',
    ':raised_hand:',
    ':raised_back_of_hand:',
    ':hand_splayed:',
    ':vulcan:',
    ':wave:',
    ':call_me:',
    ':muscle:',
    ':middle_finger:',
    ':writing_hand:',
    ':pray:',
    ':ring:',
    ':lipstick:',
    ':kiss:',
    ':lips:',
    ':tongue:',
    ':ear:',
    ':nose:',
    ':footprints:',
    ':eye:',
    ':eyes:',
    ':brain:',
    ':speaking_head:',
    ':bust_in_silhouette:',
    ':busts_in_silhouette:',
    ':baby:',
    ':girl:',
    ':child:',
    ':boy:',
    ':woman:',
    ':adult:',
    ':man:',
    ':blond_haired_person:',
    ':blond-haired_woman:',
    ':blond-haired_man:',
    ':bearded_person:',
    ':older_woman:',
    ':older_adult:',
    ':older_man:',
    ':man_with_chinese_cap:',
    ':person_wearing_turban:',
    ':woman_wearing_turban:',
    ':man_wearing_turban:',
    ':woman_with_headscarf:',
    ':police_officer:',
    ':woman_police_officer:',
    ':man_police_officer:',
    ':construction_worker:',
    ':woman_construction_worker:',
    ':man_construction_worker:',
    ':guard:',
    ':woman_guard:',
    ':man_guard:',
    ':detective:',
    ':woman_detective:',
    ':man_detective:',
    ':woman_health_worker:',
    ':man_health_worker:',
    ':woman_farmer:',
    ':man_farmer:',
    ':woman_cook:',
    ':man_cook:',
    ':woman_student:',
    ':man_student:',
    ':woman_singer:',
    ':man_singer:',
    ':woman_teacher:',
    ':man_teacher:',
    ':woman_factory_worker:',
    ':man_factory_worker:',
    ':woman_technologist:',
    ':man_technologist:',
    ':woman_office_worker:',
    ':man_office_worker:',
    ':woman_mechanic:',
    ':man_mechanic:',
    ':woman_scientist:',
    ':man_scientist:',
    ':woman_artist:',
    ':man_artist:',
    ':woman_firefighter:',
    ':man_firefighter:',
    ':woman_pilot:',
    ':man_pilot:',
    ':woman_astronaut:',
    ':man_astronaut:',
    ':woman_judge:',
    ':man_judge:',
    ':bride_with_veil:',
    ':man_in_tuxedo:',
    ':princess:',
    ':prince:',
    ':mrs_claus:',
    ':santa:',
    ':mage:',
    ':woman_mage:',
    ':man_mage:',
    ':elf:',
    ':woman_elf:',
    ':man_elf:',
    ':vampire:',
    ':woman_vampire:',
    ':man_vampire:',
    ':zombie:',
    ':woman_zombie:',
    ':man_zombie:',
    ':genie:',
    ':woman_genie:',
    ':man_genie:',
    ':merperson:',
    ':mermaid:',
    ':merman:',
    ':fairy:',
    ':woman_fairy:',
    ':man_fairy:',
    ':angel:',
    ':pregnant_woman:',
    ':breast_feeding:',
    ':person_bowing:',
    ':woman_bowing:',
    ':man_bowing:',
    ':person_tipping_hand:',
    ':woman_tipping_hand:',
    ':man_tipping_hand:',
    ':person_gesturing_no:',
    ':woman_gesturing_no:',
    ':man_gesturing_no:',
    ':person_gesturing_ok:',
    ':woman_gesturing_ok:',
    ':man_gesturing_ok:',
    ':person_raising_hand:',
    ':woman_raising_hand:',
    ':man_raising_hand:',
    ':person_facepalming:',
    ':woman_facepalming:',
    ':man_facepalming:',
    ':person_shrugging:',
    ':woman_shrugging:',
    ':man_shrugging:',
    ':person_pouting:',
    ':woman_pouting:',
    ':man_pouting:',
    ':person_frowning:',
    ':woman_frowning:',
    ':man_frowning:',
    ':person_getting_haircut:',
    ':woman_getting_haircut:',
    ':man_getting_haircut:',
    ':person_getting_massage:',
    ':woman_getting_face_massage:',
    ':man_getting_face_massage:',
    ':person_in_steamy_room:',
    ':woman_in_steamy_room:',
    ':man_in_steamy_room:',
    ':nail_care:',
    ':selfie:',
    ':dancer:',
    ':man_dancing:',
    ':people_with_bunny_ears_partying:',
    ':women_with_bunny_ears_partying:',
    ':men_with_bunny_ears_partying:',
    ':levitate:',
    ':person_walking:',
    ':woman_walking:',
    ':man_walking:',
    ':person_running:',
    ':woman_running:',
    ':man_running:',
    ':couple:',
    ':two_women_holding_hands:',
    ':two_men_holding_hands:',
    ':couple_with_heart:',
    ':couple_with_heart_woman_man:',
    ':couple_ww:',
    ':couple_mm:',
    ':couplekiss:',
    ':kiss_woman_man:',
    ':kiss_ww:',
    ':kiss_mm:',
    ':family:',
    ':family_man_woman_boy:',
    ':family_mwg:',
    ':family_mwgb:',
    ':family_mwbb:',
    ':family_mwgg:',
    ':family_wwb:',
    ':family_wwg:',
    ':family_wwgb:',
    ':family_wwbb:',
    ':family_wwgg:',
    ':family_mmb:',
    ':family_mmg:',
    ':family_mmgb:',
    ':family_mmbb:',
    ':family_mmgg:',
    ':family_woman_boy:',
    ':family_woman_girl:',
    ':family_woman_girl_boy:',
    ':family_woman_boy_boy:',
    ':family_woman_girl_girl:',
    ':family_man_boy:',
    ':family_man_girl:',
    ':family_man_girl_boy:',
    ':family_man_boy_boy:',
    ':family_man_girl_girl:',
    ':coat:',
    ':womans_clothes:',
    ':shirt:',
    ':jeans:',
    ':necktie:',
    ':dress:',
    ':bikini:',
    ':kimono:',
    ':high_heel:',
    ':sandal:',
    ':boot:',
    ':mans_shoe:',
    ':athletic_shoe:',
    ':socks:',
    ':gloves:',
    ':scarf:',
    ':tophat:',
    ':billed_cap:',
    ':womans_hat:',
    ':mortar_board:',
    ':helmet_with_cross:',
    ':crown:',
    ':pouch:',
    ':purse:',
    ':handbag:',
    ':briefcase:',
    ':school_satchel:',
    ':eyeglasses:',
    ':dark_sunglasses:',
    ':closed_umbrella:'
  ];
  Femoji.natureList = [
    ':dog:',
    ':cat:',
    ':mouse:',
    ':hamster:',
    ':rabbit:',
    ':fox:',
    ':bear:',
    ':panda_face:',
    ':koala:',
    ':tiger:',
    ':lion_face:',
    ':cow:',
    ':pig:',
    ':pig_nose:',
    ':frog:',
    ':monkey_face:',
    ':see_no_evil:',
    ':hear_no_evil:',
    ':speak_no_evil:',
    ':monkey:',
    ':chicken:',
    ':penguin:',
    ':bird:',
    ':baby_chick:',
    ':hatching_chick:',
    ':hatched_chick:',
    ':duck:',
    ':eagle:',
    ':owl:',
    ':bat:',
    ':wolf:',
    ':boar:',
    ':horse:',
    ':unicorn:',
    ':bee:',
    ':bug:',
    ':butterfly:',
    ':snail:',
    ':shell:',
    ':beetle:',
    ':ant:',
    ':cricket:',
    ':spider:',
    ':spider_web:',
    ':scorpion:',
    ':turtle:',
    ':snake:',
    ':lizard:',
    ':t_rex:',
    ':sauropod:',
    ':octopus:',
    ':squid:',
    ':shrimp:',
    ':crab:',
    ':blowfish:',
    ':tropical_fish:',
    ':fish:',
    ':dolphin:',
    ':whale:',
    ':whale2:',
    ':shark:',
    ':crocodile:',
    ':tiger2:',
    ':leopard:',
    ':zebra:',
    ':gorilla:',
    ':elephant:',
    ':rhino:',
    ':dromedary_camel:',
    ':camel:',
    ':giraffe:',
    ':water_buffalo:',
    ':ox:',
    ':cow2:',
    ':racehorse:',
    ':pig2:',
    ':ram:',
    ':sheep:',
    ':goat:',
    ':deer:',
    ':dog2:',
    ':poodle:',
    ':cat2:',
    ':rooster:',
    ':turkey:',
    ':dove:',
    ':rabbit2:',
    ':mouse2:',
    ':rat:',
    ':chipmunk:',
    ':hedgehog:',
    ':feet:',
    ':dragon:',
    ':dragon_face:',
    ':cactus:',
    ':christmas_tree:',
    ':evergreen_tree:',
    ':deciduous_tree:',
    ':palm_tree:',
    ':seedling:',
    ':herb:',
    ':shamrock:',
    ':four_leaf_clover:',
    ':bamboo:',
    ':tanabata_tree:',
    ':leaves:',
    ':fallen_leaf:',
    ':maple_leaf:',
    ':mushroom:',
    ':ear_of_rice:',
    ':bouquet:',
    ':tulip:',
    ':rose:',
    ':wilted_rose:',
    ':hibiscus:',
    ':cherry_blossom:',
    ':blossom:',
    ':sunflower:',
    ':sun_with_face:',
    ':full_moon_with_face:',
    ':first_quarter_moon_with_face:',
    ':last_quarter_moon_with_face:',
    ':new_moon_with_face:',
    ':full_moon:',
    ':waning_gibbous_moon:',
    ':last_quarter_moon:',
    ':waning_crescent_moon:',
    ':new_moon:',
    ':waxing_crescent_moon:',
    ':first_quarter_moon:',
    ':waxing_gibbous_moon:',
    ':crescent_moon:',
    ':earth_americas:',
    ':earth_africa:',
    ':earth_asia:',
    ':dizzy:',
    ':star:',
    ':star2:',
    ':sparkles:',
    ':zap:',
    ':comet:',
    ':boom:',
    ':fire:',
    ':cloud_tornado:',
    ':rainbow:',
    ':sunny:',
    ':white_sun_small_cloud:',
    ':partly_sunny:',
    ':white_sun_cloud:',
    ':cloud:',
    ':white_sun_rain_cloud:',
    ':cloud_rain:',
    ':thunder_cloud_rain:',
    ':cloud_lightning:',
    ':cloud_snow:',
    ':snowflake:',
    ':snowman2:',
    ':snowman:',
    ':wind_blowing_face:',
    ':dash:',
    ':droplet:',
    ':sweat_drops:',
    ':umbrella:',
    ':umbrella2:',
    ':ocean:',
    ':fog:'
  ];
  Femoji.foodList = [
    ':green_apple:',
    ':apple:',
    ':pear:',
    ':tangerine:',
    ':lemon:',
    ':banana:',
    ':watermelon:',
    ':grapes:',
    ':strawberry:',
    ':melon:',
    ':cherries:',
    ':peach:',
    ':pineapple:',
    ':coconut:',
    ':kiwi:',
    ':tomato:',
    ':eggplant:',
    ':avocado:',
    ':broccoli:',
    ':cucumber:',
    ':hot_pepper:',
    ':corn:',
    ':carrot:',
    ':potato:',
    ':sweet_potato:',
    ':croissant:',
    ':bread:',
    ':french_bread:',
    ':pretzel:',
    ':cheese:',
    ':egg:',
    ':cooking:',
    ':pancakes:',
    ':bacon:',
    ':cut_of_meat:',
    ':poultry_leg:',
    ':meat_on_bone:',
    ':hotdog:',
    ':hamburger:',
    ':fries:',
    ':pizza:',
    ':sandwich:',
    ':stuffed_flatbread:',
    ':taco:',
    ':burrito:',
    ':salad:',
    ':shallow_pan_of_food:',
    ':canned_food:',
    ':spaghetti:',
    ':ramen:',
    ':stew:',
    ':curry:',
    ':sushi:',
    ':bento:',
    ':fried_shrimp:',
    ':rice_ball:',
    ':rice:',
    ':rice_cracker:',
    ':fish_cake:',
    ':fortune_cookie:',
    ':oden:',
    ':dango:',
    ':shaved_ice:',
    ':ice_cream:',
    ':icecream:',
    ':pie:',
    ':cake:',
    ':birthday:',
    ':custard:',
    ':lollipop:',
    ':candy:',
    ':chocolate_bar:',
    ':popcorn:',
    ':doughnut:',
    ':dumpling:',
    ':cookie:',
    ':chestnut:',
    ':peanuts:',
    ':honey_pot:',
    ':milk:',
    ':baby_bottle:',
    ':coffee:',
    ':tea:',
    ':cup_with_straw:',
    ':sake:',
    ':beer:',
    ':beers:',
    ':champagne_glass:',
    ':wine_glass:',
    ':tumbler_glass:',
    ':cocktail:',
    ':tropical_drink:',
    ':champagne:',
    ':spoon:',
    ':fork_and_knife:',
    ':fork_knife_plate:',
    ':bowl_with_spoon:',
    ':takeout_box:',
    ':chopsticks:'
  ];
  Femoji.activityList = [
    ':soccer:',
    ':basketball:',
    ':football:',
    ':baseball:',
    ':tennis:',
    ':volleyball:',
    ':rugby_football:',
    ':8ball:',
    ':ping_pong:',
    ':badminton:',
    ':goal:',
    ':hockey:',
    ':field_hockey:',
    ':cricket_game:',
    ':golf:',
    ':bow_and_arrow:',
    ':fishing_pole_and_fish:',
    ':boxing_glove:',
    ':martial_arts_uniform:',
    ':running_shirt_with_sash:',
    ':ice_skate:',
    ':curling_stone:',
    ':sled:',
    ':ski:',
    ':skier:',
    ':snowboarder:',
    ':person_lifting_weights:',
    ':woman_lifting_weights:',
    ':man_lifting_weights:',
    ':people_wrestling:',
    ':women_wrestling:',
    ':men_wrestling:',
    ':person_doing_cartwheel:',
    ':woman_cartwheeling:',
    ':man_cartwheeling:',
    ':person_bouncing_ball:',
    ':woman_bouncing_ball:',
    ':man_bouncing_ball:',
    ':person_fencing:',
    ':person_playing_handball:',
    ':woman_playing_handball:',
    ':man_playing_handball:',
    ':person_golfing:',
    ':woman_golfing:',
    ':man_golfing:',
    ':horse_racing:',
    ':person_in_lotus_position:',
    ':woman_in_lotus_position:',
    ':man_in_lotus_position:',
    ':person_surfing:',
    ':woman_surfing:',
    ':man_surfing:',
    ':person_swimming:',
    ':woman_swimming:',
    ':man_swimming:',
    ':person_playing_water_polo:',
    ':woman_playing_water_polo:',
    ':man_playing_water_polo:',
    ':person_rowing_boat:',
    ':woman_rowing_boat:',
    ':man_rowing_boat:',
    ':person_climbing:',
    ':woman_climbing:',
    ':man_climbing:',
    ':person_mountain_biking:',
    ':woman_mountain_biking:',
    ':man_mountain_biking:',
    ':person_biking:',
    ':woman_biking:',
    ':man_biking:',
    ':trophy:',
    ':first_place:',
    ':second_place:',
    ':third_place:',
    ':medal:',
    ':military_medal:',
    ':rosette:',
    ':reminder_ribbon:',
    ':ticket:',
    ':tickets:',
    ':circus_tent:',
    ':person_juggling:',
    ':woman_juggling:',
    ':man_juggling:',
    ':performing_arts:',
    ':art:',
    ':clapper:',
    ':microphone:',
    ':headphones:',
    ':musical_score:',
    ':musical_keyboard:',
    ':drum:',
    ':saxophone:',
    ':trumpet:',
    ':guitar:',
    ':violin:',
    ':game_die:',
    ':dart:',
    ':bowling:',
    ':video_game:',
    ':slot_machine:'
  ];
  Femoji.travelList = [
    ':red_car:',
    ':taxi:',
    ':blue_car:',
    ':bus:',
    ':trolleybus:',
    ':race_car:',
    ':police_car:',
    ':ambulance:',
    ':fire_engine:',
    ':minibus:',
    ':truck:',
    ':articulated_lorry:',
    ':tractor:',
    ':scooter:',
    ':bike:',
    ':motor_scooter:',
    ':motorcycle:',
    ':rotating_light:',
    ':oncoming_police_car:',
    ':oncoming_bus:',
    ':oncoming_automobile:',
    ':oncoming_taxi:',
    ':aerial_tramway:',
    ':mountain_cableway:',
    ':suspension_railway:',
    ':railway_car:',
    ':train:',
    ':mountain_railway:',
    ':monorail:',
    ':bullettrain_side:',
    ':bullettrain_front:',
    ':light_rail:',
    ':steam_locomotive:',
    ':train2:',
    ':metro:',
    ':tram:',
    ':station:',
    ':airplane:',
    ':airplane_departure:',
    ':airplane_arriving:',
    ':airplane_small:',
    ':seat:',
    ':satellite_orbital:',
    ':rocket:',
    ':flying_saucer:',
    ':helicopter:',
    ':canoe:',
    ':sailboat:',
    ':speedboat:',
    ':motorboat:',
    ':cruise_ship:',
    ':ferry:',
    ':ship:',
    ':anchor:',
    ':fuelpump:',
    ':construction:',
    ':vertical_traffic_light:',
    ':traffic_light:',
    ':busstop:',
    ':map:',
    ':moyai:',
    ':statue_of_liberty:',
    ':tokyo_tower:',
    ':european_castle:',
    ':japanese_castle:',
    ':stadium:',
    ':ferris_wheel:',
    ':roller_coaster:',
    ':carousel_horse:',
    ':fountain:',
    ':beach_umbrella:',
    ':beach:',
    ':island:',
    ':desert:',
    ':volcano:',
    ':mountain:',
    ':mountain_snow:',
    ':mount_fuji:',
    ':camping:',
    ':tent:',
    ':house:',
    ':house_with_garden:',
    ':homes:',
    ':house_abandoned:',
    ':construction_site:',
    ':factory:',
    ':office:',
    ':department_store:',
    ':post_office:',
    ':european_post_office:',
    ':hospital:',
    ':bank:',
    ':hotel:',
    ':convenience_store:',
    ':school:',
    ':love_hotel:',
    ':wedding:',
    ':classical_building:',
    ':church:',
    ':mosque:',
    ':synagogue:',
    ':kaaba:',
    ':shinto_shrine:',
    ':railway_track:',
    ':motorway:',
    ':japan:',
    ':rice_scene:',
    ':park:',
    ':sunrise:',
    ':sunrise_over_mountains:',
    ':stars:',
    ':sparkler:',
    ':fireworks:',
    ':city_sunset:',
    ':city_dusk:',
    ':cityscape:',
    ':night_with_stars:',
    ':milky_way:',
    ':bridge_at_night:',
    ':foggy:'
  ];
  Femoji.objectsList = [
    ':watch:',
    ':iphone:',
    ':calling:',
    ':computer:',
    ':keyboard:',
    ':desktop:',
    ':printer:',
    ':mouse_three_button:',
    ':trackball:',
    ':joystick:',
    ':compression:',
    ':minidisc:',
    ':floppy_disk:',
    ':cd:',
    ':dvd:',
    ':vhs:',
    ':camera:',
    ':camera_with_flash:',
    ':video_camera:',
    ':movie_camera:',
    ':projector:',
    ':film_frames:',
    ':telephone_receiver:',
    ':telephone:',
    ':pager:',
    ':fax:',
    ':tv:',
    ':radio:',
    ':microphone2:',
    ':level_slider:',
    ':control_knobs:',
    ':stopwatch:',
    ':timer:',
    ':alarm_clock:',
    ':clock:',
    ':hourglass:',
    ':hourglass_flowing_sand:',
    ':satellite:',
    ':battery:',
    ':electric_plug:',
    ':bulb:',
    ':flashlight:',
    ':candle:',
    ':wastebasket:',
    ':oil:',
    ':money_with_wings:',
    ':dollar:',
    ':yen:',
    ':euro:',
    ':pound:',
    ':moneybag:',
    ':credit_card:',
    ':gem:',
    ':scales:',
    ':wrench:',
    ':hammer:',
    ':hammer_pick:',
    ':tools:',
    ':pick:',
    ':nut_and_bolt:',
    ':gear:',
    ':chains:',
    ':gun:',
    ':bomb:',
    ':knife:',
    ':dagger:',
    ':crossed_swords:',
    ':shield:',
    ':smoking:',
    ':coffin:',
    ':urn:',
    ':amphora:',
    ':crystal_ball:',
    ':prayer_beads:',
    ':barber:',
    ':alembic:',
    ':telescope:',
    ':microscope:',
    ':hole:',
    ':pill:',
    ':syringe:',
    ':thermometer:',
    ':toilet:',
    ':potable_water:',
    ':shower:',
    ':bathtub:',
    ':bath:',
    ':bellhop:',
    ':key:',
    ':key2:',
    ':door:',
    ':couch:',
    ':bed:',
    ':sleeping_accommodation:',
    ':frame_photo:',
    ':shopping_bags:',
    ':shopping_cart:',
    ':gift:',
    ':balloon:',
    ':flags:',
    ':ribbon:',
    ':confetti_ball:',
    ':tada:',
    ':dolls:',
    ':izakaya_lantern:',
    ':wind_chime:',
    ':envelope:',
    ':envelope_with_arrow:',
    ':incoming_envelope:',
    ':e-mail:',
    ':love_letter:',
    ':inbox_tray:',
    ':outbox_tray:',
    ':package:',
    ':label:',
    ':mailbox_closed:',
    ':mailbox:',
    ':mailbox_with_mail:',
    ':mailbox_with_no_mail:',
    ':postbox:',
    ':postal_horn:',
    ':scroll:',
    ':page_with_curl:',
    ':page_facing_up:',
    ':bookmark_tabs:',
    ':bar_chart:',
    ':chart_with_upwards_trend:',
    ':chart_with_downwards_trend:',
    ':notepad_spiral:',
    ':calendar_spiral:',
    ':calendar:',
    ':date:',
    ':card_index:',
    ':card_box:',
    ':ballot_box:',
    ':file_cabinet:',
    ':clipboard:',
    ':file_folder:',
    ':open_file_folder:',
    ':dividers:',
    ':newspaper2:',
    ':newspaper:',
    ':notebook:',
    ':notebook_with_decorative_cover:',
    ':ledger:',
    ':closed_book:',
    ':green_book:',
    ':blue_book:',
    ':orange_book:',
    ':books:',
    ':book:',
    ':bookmark:',
    ':link:',
    ':paperclip:',
    ':paperclips:',
    ':triangular_ruler:',
    ':straight_ruler:',
    ':pushpin:',
    ':round_pushpin:',
    ':scissors:',
    ':pen_ballpoint:',
    ':pen_fountain:',
    ':black_nib:',
    ':paintbrush:',
    ':crayon:',
    ':pencil:',
    ':pencil2:',
    ':mag:',
    ':mag_right:',
    ':lock_with_ink_pen:',
    ':closed_lock_with_key:',
    ':lock:',
    ':unlock:'
  ];
  Femoji.symbolsList = [
    ':heart:',
    ':orange_heart:',
    ':yellow_heart:',
    ':green_heart:',
    ':blue_heart:',
    ':purple_heart:',
    ':black_heart:',
    ':broken_heart:',
    ':heart_exclamation:',
    ':two_hearts:',
    ':revolving_hearts:',
    ':heartbeat:',
    ':heartpulse:',
    ':sparkling_heart:',
    ':cupid:',
    ':gift_heart:',
    ':heart_decoration:',
    ':peace:',
    ':cross:',
    ':star_and_crescent:',
    ':om_symbol:',
    ':wheel_of_dharma:',
    ':star_of_david:',
    ':six_pointed_star:',
    ':menorah:',
    ':yin_yang:',
    ':orthodox_cross:',
    ':place_of_worship:',
    ':ophiuchus:',
    ':aries:',
    ':taurus:',
    ':gemini:',
    ':cancer:',
    ':leo:',
    ':virgo:',
    ':libra:',
    ':scorpius:',
    ':sagittarius:',
    ':capricorn:',
    ':aquarius:',
    ':pisces:',
    ':id:',
    ':atom:',
    ':accept:',
    ':radioactive:',
    ':biohazard:',
    ':mobile_phone_off:',
    ':vibration_mode:',
    ':u6709:',
    ':u7121:',
    ':u7533:',
    ':u55b6:',
    ':u6708:',
    ':eight_pointed_black_star:',
    ':vs:',
    ':white_flower:',
    ':ideograph_advantage:',
    ':secret:',
    ':congratulations:',
    ':u5408:',
    ':u6e80:',
    ':u5272:',
    ':u7981:',
    ':a:',
    ':b:',
    ':ab:',
    ':cl:',
    ':o2:',
    ':sos:',
    ':x:',
    ':o:',
    ':octagonal_sign:',
    ':no_entry:',
    ':name_badge:',
    ':no_entry_sign:',
    ':100:',
    ':anger:',
    ':hotsprings:',
    ':no_pedestrians:',
    ':do_not_litter:',
    ':no_bicycles:',
    ':non-potable_water:',
    ':underage:',
    ':no_mobile_phones:',
    ':no_smoking:',
    ':exclamation:',
    ':grey_exclamation:',
    ':question:',
    ':grey_question:',
    ':bangbang:',
    ':interrobang:',
    ':low_brightness:',
    ':high_brightness:',
    ':part_alternation_mark:',
    ':warning:',
    ':children_crossing:',
    ':trident:',
    ':fleur-de-lis:',
    ':beginner:',
    ':recycle:',
    ':white_check_mark:',
    ':u6307:',
    ':chart:',
    ':sparkle:',
    ':eight_spoked_asterisk:',
    ':negative_squared_cross_mark:',
    ':globe_with_meridians:',
    ':diamond_shape_with_a_dot_inside:',
    ':m:',
    ':cyclone:',
    ':zzz:',
    ':atm:',
    ':wc:',
    ':wheelchair:',
    ':parking:',
    ':u7a7a:',
    ':sa:',
    ':passport_control:',
    ':customs:',
    ':baggage_claim:',
    ':left_luggage:',
    ':mens:',
    ':womens:',
    ':baby_symbol:',
    ':restroom:',
    ':put_litter_in_its_place:',
    ':cinema:',
    ':signal_strength:',
    ':koko:',
    ':symbols:',
    ':information_source:',
    ':abc:',
    ':abcd:',
    ':capital_abcd:',
    ':ng:',
    ':ok:',
    ':up:',
    ':cool:',
    ':new:',
    ':free:',
    ':zero:',
    ':one:',
    ':two:',
    ':three:',
    ':four:',
    ':five:',
    ':six:',
    ':seven:',
    ':eight:',
    ':nine:',
    ':keycap_ten:',
    ':1234:',
    ':hash:',
    ':asterisk:',
    ':eject:',
    ':arrow_forward:',
    ':pause_button:',
    ':play_pause:',
    ':stop_button:',
    ':record_button:',
    ':track_next:',
    ':track_previous:',
    ':fast_forward:',
    ':rewind:',
    ':arrow_double_up:',
    ':arrow_double_down:',
    ':arrow_backward:',
    ':arrow_up_small:',
    ':arrow_down_small:',
    ':arrow_right:',
    ':arrow_left:',
    ':arrow_up:',
    ':arrow_down:',
    ':arrow_upper_right:',
    ':arrow_lower_right:',
    ':arrow_lower_left:',
    ':arrow_upper_left:',
    ':arrow_up_down:',
    ':left_right_arrow:',
    ':arrow_right_hook:',
    ':leftwards_arrow_with_hook:',
    ':arrow_heading_up:',
    ':arrow_heading_down:',
    ':twisted_rightwards_arrows:',
    ':repeat:',
    ':repeat_one:',
    ':arrows_counterclockwise:',
    ':arrows_clockwise:',
    ':musical_note:',
    ':notes:',
    ':heavy_plus_sign:',
    ':heavy_minus_sign:',
    ':heavy_division_sign:',
    ':heavy_multiplication_x:',
    ':heavy_dollar_sign:',
    ':currency_exchange:',
    ':tm:',
    ':copyright:',
    ':registered:',
    ':wavy_dash:',
    ':curly_loop:',
    ':loop:',
    ':end:',
    ':back:',
    ':on:',
    ':top:',
    ':soon:',
    ':heavy_check_mark:',
    ':ballot_box_with_check:',
    ':radio_button:',
    ':white_circle:',
    ':black_circle:',
    ':red_circle:',
    ':blue_circle:',
    ':small_red_triangle:',
    ':small_red_triangle_down:',
    ':small_orange_diamond:',
    ':small_blue_diamond:',
    ':large_orange_diamond:',
    ':large_blue_diamond:',
    ':white_square_button:',
    ':black_square_button:',
    ':black_small_square:',
    ':white_small_square:',
    ':black_medium_small_square:',
    ':white_medium_small_square:',
    ':black_medium_square:',
    ':white_medium_square:',
    ':black_large_square:',
    ':white_large_square:',
    ':speaker:',
    ':mute:',
    ':sound:',
    ':loud_sound:',
    ':bell:',
    ':no_bell:',
    ':mega:',
    ':loudspeaker:',
    ':speech_left:',
    ':eye_in_speech_bubble:',
    ':speech_balloon:',
    ':thought_balloon:',
    ':anger_right:',
    ':spades:',
    ':clubs:',
    ':hearts:',
    ':diamonds:',
    ':black_joker:',
    ':flower_playing_cards:',
    ':mahjong:',
    ':clock1:',
    ':clock2:',
    ':clock3:',
    ':clock4:',
    ':clock5:',
    ':clock6:',
    ':clock7:',
    ':clock8:',
    ':clock9:',
    ':clock10:',
    ':clock11:',
    ':clock12:',
    ':clock130:',
    ':clock230:',
    ':clock330:',
    ':clock430:',
    ':clock530:',
    ':clock630:',
    ':clock730:',
    ':clock830:',
    ':clock930:',
    ':clock1030:',
    ':clock1130:',
    ':clock1230:',
    ':digit_zero:',
    ':digit_one:',
    ':digit_two:',
    ':digit_three:',
    ':digit_four:',
    ':digit_five:',
    ':digit_six:',
    ':digit_seven:',
    ':digit_eight:',
    ':digit_nine:',
    ':pound_symbol:',
    ':asterisk_symbol:',
    ':female_sign:',
    ':male_sign:',
    ':medical_symbol:'
  ];
  Femoji.flagsList = [
    ':flag_white:',
    ':flag_black:',
    ':checkered_flag:',
    ':triangular_flag_on_post:',
    ':rainbow_flag:',
    ':flag_af:',
    ':flag_ax:',
    ':flag_al:',
    ':flag_dz:',
    ':flag_as:',
    ':flag_ad:',
    ':flag_ao:',
    ':flag_ai:',
    ':flag_aq:',
    ':flag_ag:',
    ':flag_ar:',
    ':flag_am:',
    ':flag_aw:',
    ':flag_au:',
    ':flag_at:',
    ':flag_az:',
    ':flag_bs:',
    ':flag_bh:',
    ':flag_bd:',
    ':flag_bb:',
    ':flag_by:',
    ':flag_be:',
    ':flag_bz:',
    ':flag_bj:',
    ':flag_bm:',
    ':flag_bt:',
    ':flag_bo:',
    ':flag_ba:',
    ':flag_bw:',
    ':flag_br:',
    ':flag_io:',
    ':flag_vg:',
    ':flag_bn:',
    ':flag_bg:',
    ':flag_bf:',
    ':flag_bi:',
    ':flag_kh:',
    ':flag_cm:',
    ':flag_ca:',
    ':flag_ic:',
    ':flag_cv:',
    ':flag_bq:',
    ':flag_ky:',
    ':flag_cf:',
    ':flag_td:',
    ':flag_cl:',
    ':flag_cn:',
    ':flag_cx:',
    ':flag_cc:',
    ':flag_co:',
    ':flag_km:',
    ':flag_cg:',
    ':flag_cd:',
    ':flag_ck:',
    ':flag_cr:',
    ':flag_ci:',
    ':flag_hr:',
    ':flag_cu:',
    ':flag_cw:',
    ':flag_cy:',
    ':flag_cz:',
    ':flag_dk:',
    ':flag_dj:',
    ':flag_dm:',
    ':flag_do:',
    ':flag_ec:',
    ':flag_eg:',
    ':flag_sv:',
    ':flag_gq:',
    ':flag_er:',
    ':flag_ee:',
    ':flag_et:',
    ':flag_eu:',
    ':flag_fk:',
    ':flag_fo:',
    ':flag_fj:',
    ':flag_fi:',
    ':flag_fr:',
    ':flag_gf:',
    ':flag_pf:',
    ':flag_tf:',
    ':flag_ga:',
    ':flag_gm:',
    ':flag_ge:',
    ':flag_de:',
    ':flag_gh:',
    ':flag_gi:',
    ':flag_gr:',
    ':flag_gl:',
    ':flag_gd:',
    ':flag_gp:',
    ':flag_gu:',
    ':flag_gt:',
    ':flag_gg:',
    ':flag_gn:',
    ':flag_gw:',
    ':flag_gy:',
    ':flag_ht:',
    ':flag_hn:',
    ':flag_hk:',
    ':flag_hu:',
    ':flag_is:',
    ':flag_in:',
    ':flag_id:',
    ':flag_ir:',
    ':flag_iq:',
    ':flag_ie:',
    ':flag_im:',
    ':flag_il:',
    ':flag_it:',
    ':flag_jm:',
    ':flag_jp:',
    ':crossed_flags:',
    ':flag_je:',
    ':flag_jo:',
    ':flag_kz:',
    ':flag_ke:',
    ':flag_ki:',
    ':flag_xk:',
    ':flag_kw:',
    ':flag_kg:',
    ':flag_la:',
    ':flag_lv:',
    ':flag_lb:',
    ':flag_ls:',
    ':flag_lr:',
    ':flag_ly:',
    ':flag_li:',
    ':flag_lt:',
    ':flag_lu:',
    ':flag_mo:',
    ':flag_mk:',
    ':flag_mg:',
    ':flag_mw:',
    ':flag_my:',
    ':flag_mv:',
    ':flag_ml:',
    ':flag_mt:',
    ':flag_mh:',
    ':flag_mq:',
    ':flag_mr:',
    ':flag_mu:',
    ':flag_yt:',
    ':flag_mx:',
    ':flag_fm:',
    ':flag_md:',
    ':flag_mc:',
    ':flag_mn:',
    ':flag_me:',
    ':flag_ms:',
    ':flag_ma:',
    ':flag_mz:',
    ':flag_mm:',
    ':flag_na:',
    ':flag_nr:',
    ':flag_np:',
    ':flag_nl:',
    ':flag_nc:',
    ':flag_nz:',
    ':flag_ni:',
    ':flag_ne:',
    ':flag_ng:',
    ':flag_nu:',
    ':flag_nf:',
    ':flag_kp:',
    ':flag_mp:',
    ':flag_no:',
    ':flag_om:',
    ':flag_pk:',
    ':flag_pw:',
    ':flag_ps:',
    ':flag_pa:',
    ':flag_pg:',
    ':flag_py:',
    ':flag_pe:',
    ':flag_ph:',
    ':flag_pn:',
    ':flag_pl:',
    ':flag_pt:',
    ':flag_pr:',
    ':flag_qa:',
    ':flag_re:',
    ':flag_ro:',
    ':flag_ru:',
    ':flag_rw:',
    ':flag_ws:',
    ':flag_sm:',
    ':flag_st:',
    ':flag_sa:',
    ':flag_sn:',
    ':flag_rs:',
    ':flag_sc:',
    ':flag_sl:',
    ':flag_sg:',
    ':flag_sx:',
    ':flag_sk:',
    ':flag_si:',
    ':flag_gs:',
    ':flag_sb:',
    ':flag_so:',
    ':flag_za:',
    ':flag_kr:',
    ':flag_ss:',
    ':flag_es:',
    ':flag_lk:',
    ':flag_bl:',
    ':flag_sh:',
    ':flag_kn:',
    ':flag_lc:',
    ':flag_pm:',
    ':flag_vc:',
    ':flag_sd:',
    ':flag_sr:',
    ':flag_sz:',
    ':flag_se:',
    ':flag_ch:',
    ':flag_sy:',
    ':flag_tw:',
    ':flag_tj:',
    ':flag_tz:',
    ':flag_th:',
    ':flag_tl:',
    ':flag_tg:',
    ':flag_tk:',
    ':flag_to:',
    ':flag_tt:',
    ':flag_tn:',
    ':flag_tr:',
    ':flag_tm:',
    ':flag_tc:',
    ':flag_vi:',
    ':flag_tv:',
    ':flag_ug:',
    ':flag_ua:',
    ':flag_ae:',
    ':flag_gb:',
    ':england:',
    ':scotland:',
    ':wales:',
    ':flag_us:',
    ':flag_uy:',
    ':flag_uz:',
    ':flag_vu:',
    ':flag_va:',
    ':flag_ve:',
    ':flag_vn:',
    ':flag_wf:',
    ':flag_eh:',
    ':flag_ye:',
    ':flag_zm:',
    ':flag_zw:',
    ':flag_ac:',
    ':flag_bv:',
    ':flag_cp:',
    ':flag_ea:',
    ':flag_dg:',
    ':flag_hm:',
    ':flag_mf:',
    ':flag_sj:',
    ':flag_ta:',
    ':flag_um:',
    ':united_nations:'
  ];
  var tmpShortNames = [],
    emoji;
  Femoji.shortEmojioneList = {};
  for (var i = 0; i < Femoji.peopleList.length; i++) {
    if (Femoji.emojioneList[Femoji.peopleList[i]]) {
      tmpShortNames.push(Femoji.peopleList[i].replace(/[+]/g, '\\$&'));
      for (
        var j = 0;
        j < Femoji.emojioneList[Femoji.peopleList[i]].shortnames.length;
        j++
      ) {
        tmpShortNames.push(
          Femoji.emojioneList[Femoji.peopleList[i]].shortnames[j].replace(
            /[+]/g,
            '\\$&'
          )
        );
      } // Note: uncomment below code to integrate dynamic emoji suggestions
      Femoji.shortEmojioneList[Femoji.peopleList[i]] = Femoji.emojioneList[Femoji.peopleList[i]];
    }
  }
  for (var i = 0; i < Femoji.natureList.length; i++) {
    if (Femoji.emojioneList[Femoji.natureList[i]]) {
      tmpShortNames.push(Femoji.natureList[i].replace(/[+]/g, '\\$&'));
      for (
        var j = 0;
        j < Femoji.emojioneList[Femoji.natureList[i]].shortnames.length;
        j++
      ) {
        tmpShortNames.push(
          Femoji.emojioneList[Femoji.natureList[i]].shortnames[j].replace(
            /[+]/g,
            '\\$&'
          )
        );
      } // Note: uncomment below code to integrate dynamic emoji suggestions
      Femoji.shortEmojioneList[Femoji.natureList[i]] = Femoji.emojioneList[Femoji.natureList[i]];
    }
  }
  for (var i = 0; i < Femoji.foodList.length; i++) {
    if (Femoji.emojioneList[Femoji.foodList[i]]) {
      tmpShortNames.push(Femoji.foodList[i].replace(/[+]/g, '\\$&'));
      for (
        var j = 0;
        j < Femoji.emojioneList[Femoji.foodList[i]].shortnames.length;
        j++
      ) {
        tmpShortNames.push(
          Femoji.emojioneList[Femoji.foodList[i]].shortnames[j].replace(
            /[+]/g,
            '\\$&'
          )
        );
      } // Note: uncomment below code to integrate dynamic emoji suggestions
      Femoji.shortEmojioneList[Femoji.foodList[i]] = Femoji.emojioneList[Femoji.foodList[i]];
    }
  }
  for (var i = 0; i < Femoji.activityList.length; i++) {
    if (Femoji.emojioneList[Femoji.activityList[i]]) {
      tmpShortNames.push(Femoji.activityList[i].replace(/[+]/g, '\\$&'));
      for (
        var j = 0;
        j < Femoji.emojioneList[Femoji.activityList[i]].shortnames.length;
        j++
      ) {
        tmpShortNames.push(
          Femoji.emojioneList[Femoji.activityList[i]].shortnames[j].replace(
            /[+]/g,
            '\\$&'
          )
        );
      } // Note: uncomment below code to integrate dynamic emoji suggestions
      Femoji.shortEmojioneList[Femoji.activityList[i]] = Femoji.emojioneList[Femoji.activityList[i]];
    }
  }
  for (var i = 0; i < Femoji.travelList.length; i++) {
    if (Femoji.emojioneList[Femoji.travelList[i]]) {
      tmpShortNames.push(Femoji.travelList[i].replace(/[+]/g, '\\$&'));
      for (
        var j = 0;
        j < Femoji.emojioneList[Femoji.travelList[i]].shortnames.length;
        j++
      ) {
        tmpShortNames.push(
          Femoji.emojioneList[Femoji.travelList[i]].shortnames[j].replace(
            /[+]/g,
            '\\$&'
          )
        );
      } // Note: uncomment below code to integrate dynamic emoji suggestions
      Femoji.shortEmojioneList[Femoji.travelList[i]] = Femoji.emojioneList[Femoji.travelList[i]];
    }
  }
  for (var i = 0; i < Femoji.objectsList.length; i++) {
    if (Femoji.emojioneList[Femoji.objectsList[i]]) {
      tmpShortNames.push(Femoji.objectsList[i].replace(/[+]/g, '\\$&'));
      for (
        var j = 0;
        j < Femoji.emojioneList[Femoji.objectsList[i]].shortnames.length;
        j++
      ) {
        tmpShortNames.push(
          Femoji.emojioneList[Femoji.objectsList[i]].shortnames[j].replace(
            /[+]/g,
            '\\$&'
          )
        );
      } // Note: uncomment below code to integrate dynamic emoji suggestions
      Femoji.shortEmojioneList[Femoji.objectsList[i]] = Femoji.emojioneList[Femoji.objectsList[i]];
    }
  }
  for (var i = 0; i < Femoji.symbolsList.length; i++) {
    if (Femoji.emojioneList[Femoji.symbolsList[i]]) {
      tmpShortNames.push(Femoji.symbolsList[i].replace(/[+]/g, '\\$&'));
      for (
        var j = 0;
        j < Femoji.emojioneList[Femoji.symbolsList[i]].shortnames.length;
        j++
      ) {
        tmpShortNames.push(
          Femoji.emojioneList[Femoji.symbolsList[i]].shortnames[j].replace(
            /[+]/g,
            '\\$&'
          )
        );
      } // Note: uncomment below code to integrate dynamic emoji suggestions
      Femoji.shortEmojioneList[Femoji.symbolsList[i]] = Femoji.emojioneList[Femoji.symbolsList[i]];
    }
  }
  for (var i = 0; i < Femoji.flagsList.length; i++) {
    if (Femoji.emojioneList[Femoji.flagsList[i]]) {
      tmpShortNames.push(Femoji.flagsList[i].replace(/[+]/g, '\\$&'));
      for (
        var j = 0;
        j < Femoji.emojioneList[Femoji.flagsList[i]].shortnames.length;
        j++
      ) {
        tmpShortNames.push(
          Femoji.emojioneList[Femoji.flagsList[i]].shortnames[j].replace(
            /[+]/g,
            '\\$&'
          )
        );
      } // Note: uncomment below code to integrate dynamic emoji suggestions
      Femoji.shortEmojioneList[Femoji.flagsList[i]] = Femoji.emojioneList[Femoji.flagsList[i]];
    }
  } // Note: uncomment below code only if full-fledged emoji list (with tones) is required
  /*
     for (emoji in Femoji.emojioneList) {
         if (!Femoji.emojioneList.hasOwnProperty(emoji) || (emoji === '')) continue;
         tmpShortNames.push(emoji.replace(/[+]/g, "\\$&"));
         for (var i = 0; i < Femoji.emojioneList[emoji].shortnames.length; i++) {
             tmpShortNames.push(Femoji.emojioneList[emoji].shortnames[i].replace(/[+]/g, "\\$&"));
         }
     }
  */ Femoji.shortnames = tmpShortNames.join(
    '|'
  ); // javascript escapes here must be ordered from largest length to shortest
  Femoji.jsEscapeMap = {
    '\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69':
      '1f469-2764-1f48b-1f469',
    '\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68':
      '1f468-2764-1f48b-1f468',
    '\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68':
      '1f469-2764-1f48b-1f468',
    '\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F':
      '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
    '\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F':
      '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
    '\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F':
      '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
    '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66':
      '1f468-1f468-1f466-1f466',
    '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66':
      '1f468-1f468-1f467-1f466',
    '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67':
      '1f468-1f468-1f467-1f467',
    '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66':
      '1f468-1f469-1f466-1f466',
    '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66':
      '1f468-1f469-1f467-1f466',
    '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67':
      '1f468-1f469-1f467-1f467',
    '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66':
      '1f469-1f469-1f466-1f466',
    '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66':
      '1f469-1f469-1f467-1f466',
    '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67':
      '1f469-1f469-1f467-1f467',
    '\uD83D\uDC68\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC68':
      '1f468-2764-1f48b-1f468',
    '\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC68':
      '1f469-2764-1f48b-1f468',
    '\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC69':
      '1f469-2764-1f48b-1f469',
    '\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69': '1f469-2764-1f469',
    '\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68': '1f468-2764-1f468',
    '\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC68': '1f469-2764-1f468',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFB\u200D\u2640\uFE0F': '1f575-1f3fb-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFB\u200D\u2642\uFE0F': '1f575-1f3fb-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFC\u200D\u2640\uFE0F': '1f575-1f3fc-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFC\u200D\u2642\uFE0F': '1f575-1f3fc-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFD\u200D\u2640\uFE0F': '1f575-1f3fd-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFD\u200D\u2642\uFE0F': '1f575-1f3fd-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFE\u200D\u2640\uFE0F': '1f575-1f3fe-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFE\u200D\u2642\uFE0F': '1f575-1f3fe-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFF\u200D\u2640\uFE0F': '1f575-1f3ff-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFF\u200D\u2642\uFE0F': '1f575-1f3ff-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFB\u200D\u2640\uFE0F': '1f3cb-1f3fb-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFB\u200D\u2642\uFE0F': '1f3cb-1f3fb-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFC\u200D\u2640\uFE0F': '1f3cb-1f3fc-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFC\u200D\u2642\uFE0F': '1f3cb-1f3fc-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFD\u200D\u2640\uFE0F': '1f3cb-1f3fd-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFD\u200D\u2642\uFE0F': '1f3cb-1f3fd-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFE\u200D\u2640\uFE0F': '1f3cb-1f3fe-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFE\u200D\u2642\uFE0F': '1f3cb-1f3fe-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFF\u200D\u2640\uFE0F': '1f3cb-1f3ff-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFF\u200D\u2642\uFE0F': '1f3cb-1f3ff-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFB\u200D\u2640\uFE0F': '1f3cc-1f3fb-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFB\u200D\u2642\uFE0F': '1f3cc-1f3fb-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFC\u200D\u2640\uFE0F': '1f3cc-1f3fc-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFC\u200D\u2642\uFE0F': '1f3cc-1f3fc-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFD\u200D\u2640\uFE0F': '1f3cc-1f3fd-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFD\u200D\u2642\uFE0F': '1f3cc-1f3fd-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFE\u200D\u2640\uFE0F': '1f3cc-1f3fe-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFE\u200D\u2642\uFE0F': '1f3cc-1f3fe-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFF\u200D\u2640\uFE0F': '1f3cc-1f3ff-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFF\u200D\u2642\uFE0F': '1f3cc-1f3ff-2642',
    '\u26F9\uFE0F\uD83C\uDFFB\u200D\u2640\uFE0F': '26f9-1f3fb-2640',
    '\u26F9\uFE0F\uD83C\uDFFB\u200D\u2642\uFE0F': '26f9-1f3fb-2642',
    '\u26F9\uFE0F\uD83C\uDFFC\u200D\u2640\uFE0F': '26f9-1f3fc-2640',
    '\u26F9\uFE0F\uD83C\uDFFC\u200D\u2642\uFE0F': '26f9-1f3fc-2642',
    '\u26F9\uFE0F\uD83C\uDFFD\u200D\u2640\uFE0F': '26f9-1f3fd-2640',
    '\u26F9\uFE0F\uD83C\uDFFD\u200D\u2642\uFE0F': '26f9-1f3fd-2642',
    '\u26F9\uFE0F\uD83C\uDFFE\u200D\u2640\uFE0F': '26f9-1f3fe-2640',
    '\u26F9\uFE0F\uD83C\uDFFE\u200D\u2642\uFE0F': '26f9-1f3fe-2642',
    '\u26F9\uFE0F\uD83C\uDFFF\u200D\u2640\uFE0F': '26f9-1f3ff-2640',
    '\u26F9\uFE0F\uD83C\uDFFF\u200D\u2642\uFE0F': '26f9-1f3ff-2642',
    '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66': '1f468-1f468-1f466',
    '\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67': '1f468-1f468-1f467',
    '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67': '1f468-1f469-1f467',
    '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66': '1f469-1f469-1f466',
    '\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67': '1f469-1f469-1f467',
    '\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66': '1f468-1f466-1f466',
    '\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66': '1f468-1f467-1f466',
    '\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66': '1f469-1f466-1f466',
    '\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66': '1f469-1f467-1f466',
    '\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67': '1f469-1f467-1f467',
    '\uD83D\uDC68\u2764\uFE0F\uD83D\uDC8B\uD83D\uDC68':
      '1f468-2764-1f48b-1f468',
    '\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67': '1f468-1f467-1f467',
    '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66': '1f468-1f469-1f466',
    '\uD83D\uDC69\u2764\uFE0F\uD83D\uDC8B\uD83D\uDC68':
      '1f469-2764-1f48b-1f468',
    '\uD83D\uDC69\u2764\uFE0F\uD83D\uDC8B\uD83D\uDC69':
      '1f469-2764-1f48b-1f469',
    '\uD83D\uDC68\u200D\u2764\u200D\uD83D\uDC68': '1f468-2764-1f468',
    '\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC68': '1f469-2764-1f468',
    '\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC69': '1f469-2764-1f469',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\u2695\uFE0F': '1f468-1f3fb-2695',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\u2696\uFE0F': '1f468-1f3fb-2696',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\u2708\uFE0F': '1f468-1f3fb-2708',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\u2695\uFE0F': '1f468-1f3fc-2695',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\u2696\uFE0F': '1f468-1f3fc-2696',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\u2708\uFE0F': '1f468-1f3fc-2708',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\u2695\uFE0F': '1f468-1f3fd-2695',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\u2696\uFE0F': '1f468-1f3fd-2696',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\u2708\uFE0F': '1f468-1f3fd-2708',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\u2695\uFE0F': '1f468-1f3fe-2695',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\u2696\uFE0F': '1f468-1f3fe-2696',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\u2708\uFE0F': '1f468-1f3fe-2708',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\u2695\uFE0F': '1f468-1f3ff-2695',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\u2696\uFE0F': '1f468-1f3ff-2696',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\u2708\uFE0F': '1f468-1f3ff-2708',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\u2695\uFE0F': '1f469-1f3fb-2695',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\u2696\uFE0F': '1f469-1f3fb-2696',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\u2708\uFE0F': '1f469-1f3fb-2708',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\u2695\uFE0F': '1f469-1f3fc-2695',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\u2696\uFE0F': '1f469-1f3fc-2696',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\u2708\uFE0F': '1f469-1f3fc-2708',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\u2695\uFE0F': '1f469-1f3fd-2695',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\u2696\uFE0F': '1f469-1f3fd-2696',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\u2708\uFE0F': '1f469-1f3fd-2708',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\u2695\uFE0F': '1f469-1f3fe-2695',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\u2696\uFE0F': '1f469-1f3fe-2696',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\u2708\uFE0F': '1f469-1f3fe-2708',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\u2695\uFE0F': '1f469-1f3ff-2695',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\u2696\uFE0F': '1f469-1f3ff-2696',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\u2708\uFE0F': '1f469-1f3ff-2708',
    '\uD83D\uDC6E\uD83C\uDFFB\u200D\u2640\uFE0F': '1f46e-1f3fb-2640',
    '\uD83D\uDC6E\uD83C\uDFFB\u200D\u2642\uFE0F': '1f46e-1f3fb-2642',
    '\uD83D\uDC6E\uD83C\uDFFC\u200D\u2640\uFE0F': '1f46e-1f3fc-2640',
    '\uD83D\uDC6E\uD83C\uDFFC\u200D\u2642\uFE0F': '1f46e-1f3fc-2642',
    '\uD83D\uDC6E\uD83C\uDFFD\u200D\u2640\uFE0F': '1f46e-1f3fd-2640',
    '\uD83D\uDC6E\uD83C\uDFFD\u200D\u2642\uFE0F': '1f46e-1f3fd-2642',
    '\uD83D\uDC6E\uD83C\uDFFE\u200D\u2640\uFE0F': '1f46e-1f3fe-2640',
    '\uD83D\uDC6E\uD83C\uDFFE\u200D\u2642\uFE0F': '1f46e-1f3fe-2642',
    '\uD83D\uDC6E\uD83C\uDFFF\u200D\u2640\uFE0F': '1f46e-1f3ff-2640',
    '\uD83D\uDC6E\uD83C\uDFFF\u200D\u2642\uFE0F': '1f46e-1f3ff-2642',
    '\uD83D\uDC71\uD83C\uDFFB\u200D\u2640\uFE0F': '1f471-1f3fb-2640',
    '\uD83D\uDC71\uD83C\uDFFB\u200D\u2642\uFE0F': '1f471-1f3fb-2642',
    '\uD83D\uDC71\uD83C\uDFFC\u200D\u2640\uFE0F': '1f471-1f3fc-2640',
    '\uD83D\uDC71\uD83C\uDFFC\u200D\u2642\uFE0F': '1f471-1f3fc-2642',
    '\uD83D\uDC71\uD83C\uDFFD\u200D\u2640\uFE0F': '1f471-1f3fd-2640',
    '\uD83D\uDC71\uD83C\uDFFD\u200D\u2642\uFE0F': '1f471-1f3fd-2642',
    '\uD83D\uDC71\uD83C\uDFFE\u200D\u2640\uFE0F': '1f471-1f3fe-2640',
    '\uD83D\uDC71\uD83C\uDFFE\u200D\u2642\uFE0F': '1f471-1f3fe-2642',
    '\uD83D\uDC71\uD83C\uDFFF\u200D\u2640\uFE0F': '1f471-1f3ff-2640',
    '\uD83D\uDC71\uD83C\uDFFF\u200D\u2642\uFE0F': '1f471-1f3ff-2642',
    '\uD83D\uDC73\uD83C\uDFFB\u200D\u2640\uFE0F': '1f473-1f3fb-2640',
    '\uD83D\uDC73\uD83C\uDFFB\u200D\u2642\uFE0F': '1f473-1f3fb-2642',
    '\uD83D\uDC73\uD83C\uDFFC\u200D\u2640\uFE0F': '1f473-1f3fc-2640',
    '\uD83D\uDC73\uD83C\uDFFC\u200D\u2642\uFE0F': '1f473-1f3fc-2642',
    '\uD83D\uDC73\uD83C\uDFFD\u200D\u2640\uFE0F': '1f473-1f3fd-2640',
    '\uD83D\uDC73\uD83C\uDFFD\u200D\u2642\uFE0F': '1f473-1f3fd-2642',
    '\uD83D\uDC73\uD83C\uDFFE\u200D\u2640\uFE0F': '1f473-1f3fe-2640',
    '\uD83D\uDC73\uD83C\uDFFE\u200D\u2642\uFE0F': '1f473-1f3fe-2642',
    '\uD83D\uDC73\uD83C\uDFFF\u200D\u2640\uFE0F': '1f473-1f3ff-2640',
    '\uD83D\uDC73\uD83C\uDFFF\u200D\u2642\uFE0F': '1f473-1f3ff-2642',
    '\uD83D\uDC77\uD83C\uDFFB\u200D\u2640\uFE0F': '1f477-1f3fb-2640',
    '\uD83D\uDC77\uD83C\uDFFB\u200D\u2642\uFE0F': '1f477-1f3fb-2642',
    '\uD83D\uDC77\uD83C\uDFFC\u200D\u2640\uFE0F': '1f477-1f3fc-2640',
    '\uD83D\uDC77\uD83C\uDFFC\u200D\u2642\uFE0F': '1f477-1f3fc-2642',
    '\uD83D\uDC77\uD83C\uDFFD\u200D\u2640\uFE0F': '1f477-1f3fd-2640',
    '\uD83D\uDC77\uD83C\uDFFD\u200D\u2642\uFE0F': '1f477-1f3fd-2642',
    '\uD83D\uDC77\uD83C\uDFFE\u200D\u2640\uFE0F': '1f477-1f3fe-2640',
    '\uD83D\uDC77\uD83C\uDFFE\u200D\u2642\uFE0F': '1f477-1f3fe-2642',
    '\uD83D\uDC77\uD83C\uDFFF\u200D\u2640\uFE0F': '1f477-1f3ff-2640',
    '\uD83D\uDC77\uD83C\uDFFF\u200D\u2642\uFE0F': '1f477-1f3ff-2642',
    '\uD83D\uDC82\uD83C\uDFFB\u200D\u2640\uFE0F': '1f482-1f3fb-2640',
    '\uD83D\uDC82\uD83C\uDFFB\u200D\u2642\uFE0F': '1f482-1f3fb-2642',
    '\uD83D\uDC82\uD83C\uDFFC\u200D\u2640\uFE0F': '1f482-1f3fc-2640',
    '\uD83D\uDC82\uD83C\uDFFC\u200D\u2642\uFE0F': '1f482-1f3fc-2642',
    '\uD83D\uDC82\uD83C\uDFFD\u200D\u2640\uFE0F': '1f482-1f3fd-2640',
    '\uD83D\uDC82\uD83C\uDFFD\u200D\u2642\uFE0F': '1f482-1f3fd-2642',
    '\uD83D\uDC82\uD83C\uDFFE\u200D\u2640\uFE0F': '1f482-1f3fe-2640',
    '\uD83D\uDC82\uD83C\uDFFE\u200D\u2642\uFE0F': '1f482-1f3fe-2642',
    '\uD83D\uDC82\uD83C\uDFFF\u200D\u2640\uFE0F': '1f482-1f3ff-2640',
    '\uD83D\uDC82\uD83C\uDFFF\u200D\u2642\uFE0F': '1f482-1f3ff-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFB\u2640\uFE0F': '1f575-1f3fb-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFB\u2642\uFE0F': '1f575-1f3fb-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFC\u2640\uFE0F': '1f575-1f3fc-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFC\u2642\uFE0F': '1f575-1f3fc-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFD\u2640\uFE0F': '1f575-1f3fd-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFD\u2642\uFE0F': '1f575-1f3fd-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFE\u2640\uFE0F': '1f575-1f3fe-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFE\u2642\uFE0F': '1f575-1f3fe-2642',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFF\u2640\uFE0F': '1f575-1f3ff-2640',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFF\u2642\uFE0F': '1f575-1f3ff-2642',
    '\uD83C\uDFC3\uD83C\uDFFB\u200D\u2640\uFE0F': '1f3c3-1f3fb-2640',
    '\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F': '1f3c3-1f3fb-2642',
    '\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uFE0F': '1f3c3-1f3fc-2640',
    '\uD83C\uDFC3\uD83C\uDFFC\u200D\u2642\uFE0F': '1f3c3-1f3fc-2642',
    '\uD83C\uDFC3\uD83C\uDFFD\u200D\u2640\uFE0F': '1f3c3-1f3fd-2640',
    '\uD83C\uDFC3\uD83C\uDFFD\u200D\u2642\uFE0F': '1f3c3-1f3fd-2642',
    '\uD83C\uDFC3\uD83C\uDFFE\u200D\u2640\uFE0F': '1f3c3-1f3fe-2640',
    '\uD83C\uDFC3\uD83C\uDFFE\u200D\u2642\uFE0F': '1f3c3-1f3fe-2642',
    '\uD83C\uDFC3\uD83C\uDFFF\u200D\u2640\uFE0F': '1f3c3-1f3ff-2640',
    '\uD83C\uDFC3\uD83C\uDFFF\u200D\u2642\uFE0F': '1f3c3-1f3ff-2642',
    '\uD83C\uDFC4\uD83C\uDFFB\u200D\u2640\uFE0F': '1f3c4-1f3fb-2640',
    '\uD83C\uDFC4\uD83C\uDFFB\u200D\u2642\uFE0F': '1f3c4-1f3fb-2642',
    '\uD83C\uDFC4\uD83C\uDFFC\u200D\u2640\uFE0F': '1f3c4-1f3fc-2640',
    '\uD83C\uDFC4\uD83C\uDFFC\u200D\u2642\uFE0F': '1f3c4-1f3fc-2642',
    '\uD83C\uDFC4\uD83C\uDFFD\u200D\u2640\uFE0F': '1f3c4-1f3fd-2640',
    '\uD83C\uDFC4\uD83C\uDFFD\u200D\u2642\uFE0F': '1f3c4-1f3fd-2642',
    '\uD83C\uDFC4\uD83C\uDFFE\u200D\u2640\uFE0F': '1f3c4-1f3fe-2640',
    '\uD83C\uDFC4\uD83C\uDFFE\u200D\u2642\uFE0F': '1f3c4-1f3fe-2642',
    '\uD83C\uDFC4\uD83C\uDFFF\u200D\u2640\uFE0F': '1f3c4-1f3ff-2640',
    '\uD83C\uDFC4\uD83C\uDFFF\u200D\u2642\uFE0F': '1f3c4-1f3ff-2642',
    '\uD83C\uDFCA\uD83C\uDFFB\u200D\u2640\uFE0F': '1f3ca-1f3fb-2640',
    '\uD83C\uDFCA\uD83C\uDFFB\u200D\u2642\uFE0F': '1f3ca-1f3fb-2642',
    '\uD83C\uDFCA\uD83C\uDFFC\u200D\u2640\uFE0F': '1f3ca-1f3fc-2640',
    '\uD83C\uDFCA\uD83C\uDFFC\u200D\u2642\uFE0F': '1f3ca-1f3fc-2642',
    '\uD83C\uDFCA\uD83C\uDFFD\u200D\u2640\uFE0F': '1f3ca-1f3fd-2640',
    '\uD83C\uDFCA\uD83C\uDFFD\u200D\u2642\uFE0F': '1f3ca-1f3fd-2642',
    '\uD83C\uDFCA\uD83C\uDFFE\u200D\u2640\uFE0F': '1f3ca-1f3fe-2640',
    '\uD83C\uDFCA\uD83C\uDFFE\u200D\u2642\uFE0F': '1f3ca-1f3fe-2642',
    '\uD83C\uDFCA\uD83C\uDFFF\u200D\u2640\uFE0F': '1f3ca-1f3ff-2640',
    '\uD83C\uDFCA\uD83C\uDFFF\u200D\u2642\uFE0F': '1f3ca-1f3ff-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFB\u2640\uFE0F': '1f3cb-1f3fb-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFB\u2642\uFE0F': '1f3cb-1f3fb-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFC\u2640\uFE0F': '1f3cb-1f3fc-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFC\u2642\uFE0F': '1f3cb-1f3fc-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFD\u2640\uFE0F': '1f3cb-1f3fd-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFD\u2642\uFE0F': '1f3cb-1f3fd-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFE\u2640\uFE0F': '1f3cb-1f3fe-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFE\u2642\uFE0F': '1f3cb-1f3fe-2642',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFF\u2640\uFE0F': '1f3cb-1f3ff-2640',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFF\u2642\uFE0F': '1f3cb-1f3ff-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFB\u2640\uFE0F': '1f3cc-1f3fb-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFB\u2642\uFE0F': '1f3cc-1f3fb-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFC\u2640\uFE0F': '1f3cc-1f3fc-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFC\u2642\uFE0F': '1f3cc-1f3fc-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFD\u2640\uFE0F': '1f3cc-1f3fd-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFD\u2642\uFE0F': '1f3cc-1f3fd-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFE\u2640\uFE0F': '1f3cc-1f3fe-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFE\u2642\uFE0F': '1f3cc-1f3fe-2642',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFF\u2640\uFE0F': '1f3cc-1f3ff-2640',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFF\u2642\uFE0F': '1f3cc-1f3ff-2642',
    '\uD83D\uDC86\uD83C\uDFFB\u200D\u2640\uFE0F': '1f486-1f3fb-2640',
    '\uD83D\uDC86\uD83C\uDFFB\u200D\u2642\uFE0F': '1f486-1f3fb-2642',
    '\uD83D\uDC86\uD83C\uDFFC\u200D\u2640\uFE0F': '1f486-1f3fc-2640',
    '\uD83D\uDC86\uD83C\uDFFC\u200D\u2642\uFE0F': '1f486-1f3fc-2642',
    '\uD83D\uDC86\uD83C\uDFFD\u200D\u2640\uFE0F': '1f486-1f3fd-2640',
    '\uD83D\uDC86\uD83C\uDFFD\u200D\u2642\uFE0F': '1f486-1f3fd-2642',
    '\uD83D\uDC86\uD83C\uDFFE\u200D\u2640\uFE0F': '1f486-1f3fe-2640',
    '\uD83D\uDC86\uD83C\uDFFE\u200D\u2642\uFE0F': '1f486-1f3fe-2642',
    '\uD83D\uDC86\uD83C\uDFFF\u200D\u2640\uFE0F': '1f486-1f3ff-2640',
    '\uD83D\uDC86\uD83C\uDFFF\u200D\u2642\uFE0F': '1f486-1f3ff-2642',
    '\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F': '1f487-1f3fb-2640',
    '\uD83D\uDC87\uD83C\uDFFB\u200D\u2642\uFE0F': '1f487-1f3fb-2642',
    '\uD83D\uDC87\uD83C\uDFFC\u200D\u2640\uFE0F': '1f487-1f3fc-2640',
    '\uD83D\uDC87\uD83C\uDFFC\u200D\u2642\uFE0F': '1f487-1f3fc-2642',
    '\uD83D\uDC87\uD83C\uDFFD\u200D\u2640\uFE0F': '1f487-1f3fd-2640',
    '\uD83D\uDC87\uD83C\uDFFD\u200D\u2642\uFE0F': '1f487-1f3fd-2642',
    '\uD83D\uDC87\uD83C\uDFFE\u200D\u2640\uFE0F': '1f487-1f3fe-2640',
    '\uD83D\uDC87\uD83C\uDFFE\u200D\u2642\uFE0F': '1f487-1f3fe-2642',
    '\uD83D\uDC87\uD83C\uDFFF\u200D\u2640\uFE0F': '1f487-1f3ff-2640',
    '\uD83D\uDC87\uD83C\uDFFF\u200D\u2642\uFE0F': '1f487-1f3ff-2642',
    '\uD83D\uDEA3\uD83C\uDFFB\u200D\u2640\uFE0F': '1f6a3-1f3fb-2640',
    '\uD83D\uDEA3\uD83C\uDFFB\u200D\u2642\uFE0F': '1f6a3-1f3fb-2642',
    '\uD83D\uDEA3\uD83C\uDFFC\u200D\u2640\uFE0F': '1f6a3-1f3fc-2640',
    '\uD83D\uDEA3\uD83C\uDFFC\u200D\u2642\uFE0F': '1f6a3-1f3fc-2642',
    '\uD83D\uDEA3\uD83C\uDFFD\u200D\u2640\uFE0F': '1f6a3-1f3fd-2640',
    '\uD83D\uDEA3\uD83C\uDFFD\u200D\u2642\uFE0F': '1f6a3-1f3fd-2642',
    '\uD83D\uDEA3\uD83C\uDFFE\u200D\u2640\uFE0F': '1f6a3-1f3fe-2640',
    '\uD83D\uDEA3\uD83C\uDFFE\u200D\u2642\uFE0F': '1f6a3-1f3fe-2642',
    '\uD83D\uDEA3\uD83C\uDFFF\u200D\u2640\uFE0F': '1f6a3-1f3ff-2640',
    '\uD83D\uDEA3\uD83C\uDFFF\u200D\u2642\uFE0F': '1f6a3-1f3ff-2642',
    '\uD83D\uDEB4\uD83C\uDFFB\u200D\u2640\uFE0F': '1f6b4-1f3fb-2640',
    '\uD83D\uDEB4\uD83C\uDFFB\u200D\u2642\uFE0F': '1f6b4-1f3fb-2642',
    '\uD83D\uDEB4\uD83C\uDFFC\u200D\u2640\uFE0F': '1f6b4-1f3fc-2640',
    '\uD83D\uDEB4\uD83C\uDFFC\u200D\u2642\uFE0F': '1f6b4-1f3fc-2642',
    '\uD83D\uDEB4\uD83C\uDFFD\u200D\u2640\uFE0F': '1f6b4-1f3fd-2640',
    '\uD83D\uDEB4\uD83C\uDFFD\u200D\u2642\uFE0F': '1f6b4-1f3fd-2642',
    '\uD83D\uDEB4\uD83C\uDFFE\u200D\u2640\uFE0F': '1f6b4-1f3fe-2640',
    '\uD83D\uDEB4\uD83C\uDFFE\u200D\u2642\uFE0F': '1f6b4-1f3fe-2642',
    '\uD83D\uDEB4\uD83C\uDFFF\u200D\u2640\uFE0F': '1f6b4-1f3ff-2640',
    '\uD83D\uDEB4\uD83C\uDFFF\u200D\u2642\uFE0F': '1f6b4-1f3ff-2642',
    '\uD83D\uDEB5\uD83C\uDFFB\u200D\u2640\uFE0F': '1f6b5-1f3fb-2640',
    '\uD83D\uDEB5\uD83C\uDFFB\u200D\u2642\uFE0F': '1f6b5-1f3fb-2642',
    '\uD83D\uDEB5\uD83C\uDFFC\u200D\u2640\uFE0F': '1f6b5-1f3fc-2640',
    '\uD83D\uDEB5\uD83C\uDFFC\u200D\u2642\uFE0F': '1f6b5-1f3fc-2642',
    '\uD83D\uDEB5\uD83C\uDFFD\u200D\u2640\uFE0F': '1f6b5-1f3fd-2640',
    '\uD83D\uDEB5\uD83C\uDFFD\u200D\u2642\uFE0F': '1f6b5-1f3fd-2642',
    '\uD83D\uDEB5\uD83C\uDFFE\u200D\u2640\uFE0F': '1f6b5-1f3fe-2640',
    '\uD83D\uDEB5\uD83C\uDFFE\u200D\u2642\uFE0F': '1f6b5-1f3fe-2642',
    '\uD83D\uDEB5\uD83C\uDFFF\u200D\u2640\uFE0F': '1f6b5-1f3ff-2640',
    '\uD83D\uDEB5\uD83C\uDFFF\u200D\u2642\uFE0F': '1f6b5-1f3ff-2642',
    '\uD83D\uDEB6\uD83C\uDFFB\u200D\u2640\uFE0F': '1f6b6-1f3fb-2640',
    '\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F': '1f6b6-1f3fb-2642',
    '\uD83D\uDEB6\uD83C\uDFFC\u200D\u2640\uFE0F': '1f6b6-1f3fc-2640',
    '\uD83D\uDEB6\uD83C\uDFFC\u200D\u2642\uFE0F': '1f6b6-1f3fc-2642',
    '\uD83D\uDEB6\uD83C\uDFFD\u200D\u2640\uFE0F': '1f6b6-1f3fd-2640',
    '\uD83D\uDEB6\uD83C\uDFFD\u200D\u2642\uFE0F': '1f6b6-1f3fd-2642',
    '\uD83D\uDEB6\uD83C\uDFFE\u200D\u2640\uFE0F': '1f6b6-1f3fe-2640',
    '\uD83D\uDEB6\uD83C\uDFFE\u200D\u2642\uFE0F': '1f6b6-1f3fe-2642',
    '\uD83D\uDEB6\uD83C\uDFFF\u200D\u2640\uFE0F': '1f6b6-1f3ff-2640',
    '\uD83D\uDEB6\uD83C\uDFFF\u200D\u2642\uFE0F': '1f6b6-1f3ff-2642',
    '\uD83E\uDD38\uD83C\uDFFB\u200D\u2640\uFE0F': '1f938-1f3fb-2640',
    '\uD83E\uDD38\uD83C\uDFFB\u200D\u2642\uFE0F': '1f938-1f3fb-2642',
    '\uD83E\uDD38\uD83C\uDFFC\u200D\u2640\uFE0F': '1f938-1f3fc-2640',
    '\uD83E\uDD38\uD83C\uDFFC\u200D\u2642\uFE0F': '1f938-1f3fc-2642',
    '\uD83E\uDD38\uD83C\uDFFD\u200D\u2640\uFE0F': '1f938-1f3fd-2640',
    '\uD83E\uDD38\uD83C\uDFFD\u200D\u2642\uFE0F': '1f938-1f3fd-2642',
    '\uD83E\uDD38\uD83C\uDFFE\u200D\u2640\uFE0F': '1f938-1f3fe-2640',
    '\uD83E\uDD38\uD83C\uDFFE\u200D\u2642\uFE0F': '1f938-1f3fe-2642',
    '\uD83E\uDD38\uD83C\uDFFF\u200D\u2640\uFE0F': '1f938-1f3ff-2640',
    '\uD83E\uDD38\uD83C\uDFFF\u200D\u2642\uFE0F': '1f938-1f3ff-2642',
    '\uD83E\uDD39\uD83C\uDFFB\u200D\u2640\uFE0F': '1f939-1f3fb-2640',
    '\uD83E\uDD39\uD83C\uDFFB\u200D\u2642\uFE0F': '1f939-1f3fb-2642',
    '\uD83E\uDD39\uD83C\uDFFC\u200D\u2640\uFE0F': '1f939-1f3fc-2640',
    '\uD83E\uDD39\uD83C\uDFFC\u200D\u2642\uFE0F': '1f939-1f3fc-2642',
    '\uD83E\uDD39\uD83C\uDFFD\u200D\u2640\uFE0F': '1f939-1f3fd-2640',
    '\uD83E\uDD39\uD83C\uDFFD\u200D\u2642\uFE0F': '1f939-1f3fd-2642',
    '\uD83E\uDD39\uD83C\uDFFE\u200D\u2640\uFE0F': '1f939-1f3fe-2640',
    '\uD83E\uDD39\uD83C\uDFFE\u200D\u2642\uFE0F': '1f939-1f3fe-2642',
    '\uD83E\uDD39\uD83C\uDFFF\u200D\u2640\uFE0F': '1f939-1f3ff-2640',
    '\uD83E\uDD39\uD83C\uDFFF\u200D\u2642\uFE0F': '1f939-1f3ff-2642',
    '\uD83E\uDD3D\uD83C\uDFFB\u200D\u2640\uFE0F': '1f93d-1f3fb-2640',
    '\uD83E\uDD3D\uD83C\uDFFB\u200D\u2642\uFE0F': '1f93d-1f3fb-2642',
    '\uD83E\uDD3D\uD83C\uDFFC\u200D\u2640\uFE0F': '1f93d-1f3fc-2640',
    '\uD83E\uDD3D\uD83C\uDFFC\u200D\u2642\uFE0F': '1f93d-1f3fc-2642',
    '\uD83E\uDD3D\uD83C\uDFFD\u200D\u2640\uFE0F': '1f93d-1f3fd-2640',
    '\uD83E\uDD3D\uD83C\uDFFD\u200D\u2642\uFE0F': '1f93d-1f3fd-2642',
    '\uD83E\uDD3D\uD83C\uDFFE\u200D\u2640\uFE0F': '1f93d-1f3fe-2640',
    '\uD83E\uDD3D\uD83C\uDFFE\u200D\u2642\uFE0F': '1f93d-1f3fe-2642',
    '\uD83E\uDD3D\uD83C\uDFFF\u200D\u2640\uFE0F': '1f93d-1f3ff-2640',
    '\uD83E\uDD3D\uD83C\uDFFF\u200D\u2642\uFE0F': '1f93d-1f3ff-2642',
    '\uD83E\uDD3E\uD83C\uDFFB\u200D\u2640\uFE0F': '1f93e-1f3fb-2640',
    '\uD83E\uDD3E\uD83C\uDFFB\u200D\u2642\uFE0F': '1f93e-1f3fb-2642',
    '\uD83E\uDD3E\uD83C\uDFFC\u200D\u2640\uFE0F': '1f93e-1f3fc-2640',
    '\uD83E\uDD3E\uD83C\uDFFC\u200D\u2642\uFE0F': '1f93e-1f3fc-2642',
    '\uD83E\uDD3E\uD83C\uDFFD\u200D\u2640\uFE0F': '1f93e-1f3fd-2640',
    '\uD83E\uDD3E\uD83C\uDFFD\u200D\u2642\uFE0F': '1f93e-1f3fd-2642',
    '\uD83E\uDD3E\uD83C\uDFFE\u200D\u2640\uFE0F': '1f93e-1f3fe-2640',
    '\uD83E\uDD3E\uD83C\uDFFE\u200D\u2642\uFE0F': '1f93e-1f3fe-2642',
    '\uD83E\uDD3E\uD83C\uDFFF\u200D\u2640\uFE0F': '1f93e-1f3ff-2640',
    '\uD83E\uDD3E\uD83C\uDFFF\u200D\u2642\uFE0F': '1f93e-1f3ff-2642',
    '\uD83D\uDC81\uD83C\uDFFB\u200D\u2640\uFE0F': '1f481-1f3fb-2640',
    '\uD83D\uDC81\uD83C\uDFFB\u200D\u2642\uFE0F': '1f481-1f3fb-2642',
    '\uD83D\uDC81\uD83C\uDFFC\u200D\u2640\uFE0F': '1f481-1f3fc-2640',
    '\uD83D\uDC81\uD83C\uDFFC\u200D\u2642\uFE0F': '1f481-1f3fc-2642',
    '\uD83D\uDC81\uD83C\uDFFD\u200D\u2640\uFE0F': '1f481-1f3fd-2640',
    '\uD83D\uDC81\uD83C\uDFFD\u200D\u2642\uFE0F': '1f481-1f3fd-2642',
    '\uD83D\uDC81\uD83C\uDFFE\u200D\u2640\uFE0F': '1f481-1f3fe-2640',
    '\uD83D\uDC81\uD83C\uDFFE\u200D\u2642\uFE0F': '1f481-1f3fe-2642',
    '\uD83D\uDC81\uD83C\uDFFF\u200D\u2640\uFE0F': '1f481-1f3ff-2640',
    '\uD83D\uDC81\uD83C\uDFFF\u200D\u2642\uFE0F': '1f481-1f3ff-2642',
    '\uD83D\uDE45\uD83C\uDFFB\u200D\u2640\uFE0F': '1f645-1f3fb-2640',
    '\uD83D\uDE45\uD83C\uDFFB\u200D\u2642\uFE0F': '1f645-1f3fb-2642',
    '\uD83D\uDE45\uD83C\uDFFC\u200D\u2640\uFE0F': '1f645-1f3fc-2640',
    '\uD83D\uDE45\uD83C\uDFFC\u200D\u2642\uFE0F': '1f645-1f3fc-2642',
    '\uD83D\uDE45\uD83C\uDFFD\u200D\u2640\uFE0F': '1f645-1f3fd-2640',
    '\uD83D\uDE45\uD83C\uDFFD\u200D\u2642\uFE0F': '1f645-1f3fd-2642',
    '\uD83D\uDE45\uD83C\uDFFE\u200D\u2640\uFE0F': '1f645-1f3fe-2640',
    '\uD83D\uDE45\uD83C\uDFFE\u200D\u2642\uFE0F': '1f645-1f3fe-2642',
    '\uD83D\uDE45\uD83C\uDFFF\u200D\u2640\uFE0F': '1f645-1f3ff-2640',
    '\uD83D\uDE45\uD83C\uDFFF\u200D\u2642\uFE0F': '1f645-1f3ff-2642',
    '\uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F': '1f646-1f3fb-2640',
    '\uD83D\uDE46\uD83C\uDFFB\u200D\u2642\uFE0F': '1f646-1f3fb-2642',
    '\uD83D\uDE46\uD83C\uDFFC\u200D\u2640\uFE0F': '1f646-1f3fc-2640',
    '\uD83D\uDE46\uD83C\uDFFC\u200D\u2642\uFE0F': '1f646-1f3fc-2642',
    '\uD83D\uDE46\uD83C\uDFFD\u200D\u2640\uFE0F': '1f646-1f3fd-2640',
    '\uD83D\uDE46\uD83C\uDFFD\u200D\u2642\uFE0F': '1f646-1f3fd-2642',
    '\uD83D\uDE46\uD83C\uDFFE\u200D\u2640\uFE0F': '1f646-1f3fe-2640',
    '\uD83D\uDE46\uD83C\uDFFE\u200D\u2642\uFE0F': '1f646-1f3fe-2642',
    '\uD83D\uDE46\uD83C\uDFFF\u200D\u2640\uFE0F': '1f646-1f3ff-2640',
    '\uD83D\uDE46\uD83C\uDFFF\u200D\u2642\uFE0F': '1f646-1f3ff-2642',
    '\uD83D\uDE47\uD83C\uDFFB\u200D\u2640\uFE0F': '1f647-1f3fb-2640',
    '\uD83D\uDE47\uD83C\uDFFB\u200D\u2642\uFE0F': '1f647-1f3fb-2642',
    '\uD83D\uDE47\uD83C\uDFFC\u200D\u2640\uFE0F': '1f647-1f3fc-2640',
    '\uD83D\uDE47\uD83C\uDFFC\u200D\u2642\uFE0F': '1f647-1f3fc-2642',
    '\uD83D\uDE47\uD83C\uDFFD\u200D\u2640\uFE0F': '1f647-1f3fd-2640',
    '\uD83D\uDE47\uD83C\uDFFD\u200D\u2642\uFE0F': '1f647-1f3fd-2642',
    '\uD83D\uDE47\uD83C\uDFFE\u200D\u2640\uFE0F': '1f647-1f3fe-2640',
    '\uD83D\uDE47\uD83C\uDFFE\u200D\u2642\uFE0F': '1f647-1f3fe-2642',
    '\uD83D\uDE47\uD83C\uDFFF\u200D\u2640\uFE0F': '1f647-1f3ff-2640',
    '\uD83D\uDE47\uD83C\uDFFF\u200D\u2642\uFE0F': '1f647-1f3ff-2642',
    '\uD83D\uDE4B\uD83C\uDFFB\u200D\u2640\uFE0F': '1f64b-1f3fb-2640',
    '\uD83D\uDE4B\uD83C\uDFFB\u200D\u2642\uFE0F': '1f64b-1f3fb-2642',
    '\uD83D\uDE4B\uD83C\uDFFC\u200D\u2640\uFE0F': '1f64b-1f3fc-2640',
    '\uD83D\uDE4B\uD83C\uDFFC\u200D\u2642\uFE0F': '1f64b-1f3fc-2642',
    '\uD83D\uDE4B\uD83C\uDFFD\u200D\u2640\uFE0F': '1f64b-1f3fd-2640',
    '\uD83D\uDE4B\uD83C\uDFFD\u200D\u2642\uFE0F': '1f64b-1f3fd-2642',
    '\uD83D\uDE4B\uD83C\uDFFE\u200D\u2640\uFE0F': '1f64b-1f3fe-2640',
    '\uD83D\uDE4B\uD83C\uDFFE\u200D\u2642\uFE0F': '1f64b-1f3fe-2642',
    '\uD83D\uDE4B\uD83C\uDFFF\u200D\u2640\uFE0F': '1f64b-1f3ff-2640',
    '\uD83D\uDE4B\uD83C\uDFFF\u200D\u2642\uFE0F': '1f64b-1f3ff-2642',
    '\uD83D\uDE4D\uD83C\uDFFB\u200D\u2640\uFE0F': '1f64d-1f3fb-2640',
    '\uD83D\uDE4D\uD83C\uDFFB\u200D\u2642\uFE0F': '1f64d-1f3fb-2642',
    '\uD83D\uDE4D\uD83C\uDFFC\u200D\u2640\uFE0F': '1f64d-1f3fc-2640',
    '\uD83D\uDE4D\uD83C\uDFFC\u200D\u2642\uFE0F': '1f64d-1f3fc-2642',
    '\uD83D\uDE4D\uD83C\uDFFD\u200D\u2640\uFE0F': '1f64d-1f3fd-2640',
    '\uD83D\uDE4D\uD83C\uDFFD\u200D\u2642\uFE0F': '1f64d-1f3fd-2642',
    '\uD83D\uDE4D\uD83C\uDFFE\u200D\u2640\uFE0F': '1f64d-1f3fe-2640',
    '\uD83D\uDE4D\uD83C\uDFFE\u200D\u2642\uFE0F': '1f64d-1f3fe-2642',
    '\uD83D\uDE4D\uD83C\uDFFF\u200D\u2640\uFE0F': '1f64d-1f3ff-2640',
    '\uD83D\uDE4D\uD83C\uDFFF\u200D\u2642\uFE0F': '1f64d-1f3ff-2642',
    '\uD83D\uDE4E\uD83C\uDFFB\u200D\u2640\uFE0F': '1f64e-1f3fb-2640',
    '\uD83D\uDE4E\uD83C\uDFFB\u200D\u2642\uFE0F': '1f64e-1f3fb-2642',
    '\uD83D\uDE4E\uD83C\uDFFC\u200D\u2640\uFE0F': '1f64e-1f3fc-2640',
    '\uD83D\uDE4E\uD83C\uDFFC\u200D\u2642\uFE0F': '1f64e-1f3fc-2642',
    '\uD83D\uDE4E\uD83C\uDFFD\u200D\u2640\uFE0F': '1f64e-1f3fd-2640',
    '\uD83D\uDE4E\uD83C\uDFFD\u200D\u2642\uFE0F': '1f64e-1f3fd-2642',
    '\uD83D\uDE4E\uD83C\uDFFE\u200D\u2640\uFE0F': '1f64e-1f3fe-2640',
    '\uD83D\uDE4E\uD83C\uDFFE\u200D\u2642\uFE0F': '1f64e-1f3fe-2642',
    '\uD83D\uDE4E\uD83C\uDFFF\u200D\u2640\uFE0F': '1f64e-1f3ff-2640',
    '\uD83D\uDE4E\uD83C\uDFFF\u200D\u2642\uFE0F': '1f64e-1f3ff-2642',
    '\uD83E\uDD26\uD83C\uDFFB\u200D\u2640\uFE0F': '1f926-1f3fb-2640',
    '\uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F': '1f926-1f3fb-2642',
    '\uD83E\uDD26\uD83C\uDFFC\u200D\u2640\uFE0F': '1f926-1f3fc-2640',
    '\uD83E\uDD26\uD83C\uDFFC\u200D\u2642\uFE0F': '1f926-1f3fc-2642',
    '\uD83E\uDD26\uD83C\uDFFD\u200D\u2640\uFE0F': '1f926-1f3fd-2640',
    '\uD83E\uDD26\uD83C\uDFFD\u200D\u2642\uFE0F': '1f926-1f3fd-2642',
    '\uD83E\uDD26\uD83C\uDFFE\u200D\u2640\uFE0F': '1f926-1f3fe-2640',
    '\uD83E\uDD26\uD83C\uDFFE\u200D\u2642\uFE0F': '1f926-1f3fe-2642',
    '\uD83E\uDD26\uD83C\uDFFF\u200D\u2640\uFE0F': '1f926-1f3ff-2640',
    '\uD83E\uDD26\uD83C\uDFFF\u200D\u2642\uFE0F': '1f926-1f3ff-2642',
    '\uD83E\uDD37\uD83C\uDFFB\u200D\u2640\uFE0F': '1f937-1f3fb-2640',
    '\uD83E\uDD37\uD83C\uDFFB\u200D\u2642\uFE0F': '1f937-1f3fb-2642',
    '\uD83E\uDD37\uD83C\uDFFC\u200D\u2640\uFE0F': '1f937-1f3fc-2640',
    '\uD83E\uDD37\uD83C\uDFFC\u200D\u2642\uFE0F': '1f937-1f3fc-2642',
    '\uD83E\uDD37\uD83C\uDFFD\u200D\u2640\uFE0F': '1f937-1f3fd-2640',
    '\uD83E\uDD37\uD83C\uDFFD\u200D\u2642\uFE0F': '1f937-1f3fd-2642',
    '\uD83E\uDD37\uD83C\uDFFE\u200D\u2640\uFE0F': '1f937-1f3fe-2640',
    '\uD83E\uDD37\uD83C\uDFFE\u200D\u2642\uFE0F': '1f937-1f3fe-2642',
    '\uD83E\uDD37\uD83C\uDFFF\u200D\u2640\uFE0F': '1f937-1f3ff-2640',
    '\uD83E\uDD37\uD83C\uDFFF\u200D\u2642\uFE0F': '1f937-1f3ff-2642',
    '\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F': '1f441-1f5e8',
    '\uD83D\uDD75\uD83C\uDFFB\u200D\u2640\uFE0F': '1f575-1f3fb-2640',
    '\uD83D\uDD75\uD83C\uDFFB\u200D\u2642\uFE0F': '1f575-1f3fb-2642',
    '\uD83D\uDD75\uD83C\uDFFC\u200D\u2640\uFE0F': '1f575-1f3fc-2640',
    '\uD83D\uDD75\uD83C\uDFFC\u200D\u2642\uFE0F': '1f575-1f3fc-2642',
    '\uD83D\uDD75\uD83C\uDFFD\u200D\u2640\uFE0F': '1f575-1f3fd-2640',
    '\uD83D\uDD75\uD83C\uDFFD\u200D\u2642\uFE0F': '1f575-1f3fd-2642',
    '\uD83D\uDD75\uD83C\uDFFE\u200D\u2640\uFE0F': '1f575-1f3fe-2640',
    '\uD83D\uDD75\uD83C\uDFFE\u200D\u2642\uFE0F': '1f575-1f3fe-2642',
    '\uD83D\uDD75\uD83C\uDFFF\u200D\u2640\uFE0F': '1f575-1f3ff-2640',
    '\uD83D\uDD75\uD83C\uDFFF\u200D\u2642\uFE0F': '1f575-1f3ff-2642',
    '\uD83C\uDFCB\uD83C\uDFFB\u200D\u2640\uFE0F': '1f3cb-1f3fb-2640',
    '\uD83C\uDFCB\uD83C\uDFFB\u200D\u2642\uFE0F': '1f3cb-1f3fb-2642',
    '\uD83C\uDFCB\uD83C\uDFFC\u200D\u2640\uFE0F': '1f3cb-1f3fc-2640',
    '\uD83C\uDFCB\uD83C\uDFFC\u200D\u2642\uFE0F': '1f3cb-1f3fc-2642',
    '\uD83C\uDFCB\uD83C\uDFFD\u200D\u2640\uFE0F': '1f3cb-1f3fd-2640',
    '\uD83C\uDFCB\uD83C\uDFFD\u200D\u2642\uFE0F': '1f3cb-1f3fd-2642',
    '\uD83C\uDFCB\uD83C\uDFFE\u200D\u2640\uFE0F': '1f3cb-1f3fe-2640',
    '\uD83C\uDFCB\uD83C\uDFFE\u200D\u2642\uFE0F': '1f3cb-1f3fe-2642',
    '\uD83C\uDFCB\uD83C\uDFFF\u200D\u2640\uFE0F': '1f3cb-1f3ff-2640',
    '\uD83C\uDFCB\uD83C\uDFFF\u200D\u2642\uFE0F': '1f3cb-1f3ff-2642',
    '\uD83C\uDFCC\uD83C\uDFFB\u200D\u2640\uFE0F': '1f3cc-1f3fb-2640',
    '\uD83C\uDFCC\uD83C\uDFFB\u200D\u2642\uFE0F': '1f3cc-1f3fb-2642',
    '\uD83C\uDFCC\uD83C\uDFFC\u200D\u2640\uFE0F': '1f3cc-1f3fc-2640',
    '\uD83C\uDFCC\uD83C\uDFFC\u200D\u2642\uFE0F': '1f3cc-1f3fc-2642',
    '\uD83C\uDFCC\uD83C\uDFFD\u200D\u2640\uFE0F': '1f3cc-1f3fd-2640',
    '\uD83C\uDFCC\uD83C\uDFFD\u200D\u2642\uFE0F': '1f3cc-1f3fd-2642',
    '\uD83C\uDFCC\uD83C\uDFFE\u200D\u2640\uFE0F': '1f3cc-1f3fe-2640',
    '\uD83C\uDFCC\uD83C\uDFFE\u200D\u2642\uFE0F': '1f3cc-1f3fe-2642',
    '\uD83C\uDFCC\uD83C\uDFFF\u200D\u2640\uFE0F': '1f3cc-1f3ff-2640',
    '\uD83C\uDFCC\uD83C\uDFFF\u200D\u2642\uFE0F': '1f3cc-1f3ff-2642',
    '\uD83E\uDDD9\uD83C\uDFFB\u200D\u2640\uFE0F': '1f9d9-1f3fb-2640',
    '\uD83E\uDDD9\uD83C\uDFFB\u200D\u2642\uFE0F': '1f9d9-1f3fb-2642',
    '\uD83E\uDDD9\uD83C\uDFFC\u200D\u2640\uFE0F': '1f9d9-1f3fc-2640',
    '\uD83E\uDDD9\uD83C\uDFFC\u200D\u2642\uFE0F': '1f9d9-1f3fc-2642',
    '\uD83E\uDDD9\uD83C\uDFFD\u200D\u2640\uFE0F': '1f9d9-1f3fd-2640',
    '\uD83E\uDDD9\uD83C\uDFFD\u200D\u2642\uFE0F': '1f9d9-1f3fd-2642',
    '\uD83E\uDDD9\uD83C\uDFFE\u200D\u2640\uFE0F': '1f9d9-1f3fe-2640',
    '\uD83E\uDDD9\uD83C\uDFFE\u200D\u2642\uFE0F': '1f9d9-1f3fe-2642',
    '\uD83E\uDDD9\uD83C\uDFFF\u200D\u2640\uFE0F': '1f9d9-1f3ff-2640',
    '\uD83E\uDDD9\uD83C\uDFFF\u200D\u2642\uFE0F': '1f9d9-1f3ff-2642',
    '\uD83E\uDDDA\uD83C\uDFFB\u200D\u2640\uFE0F': '1f9da-1f3fb-2640',
    '\uD83E\uDDDA\uD83C\uDFFB\u200D\u2642\uFE0F': '1f9da-1f3fb-2642',
    '\uD83E\uDDDA\uD83C\uDFFC\u200D\u2640\uFE0F': '1f9da-1f3fc-2640',
    '\uD83E\uDDDA\uD83C\uDFFC\u200D\u2642\uFE0F': '1f9da-1f3fc-2642',
    '\uD83E\uDDDA\uD83C\uDFFD\u200D\u2640\uFE0F': '1f9da-1f3fd-2640',
    '\uD83E\uDDDA\uD83C\uDFFD\u200D\u2642\uFE0F': '1f9da-1f3fd-2642',
    '\uD83E\uDDDA\uD83C\uDFFE\u200D\u2640\uFE0F': '1f9da-1f3fe-2640',
    '\uD83E\uDDDA\uD83C\uDFFE\u200D\u2642\uFE0F': '1f9da-1f3fe-2642',
    '\uD83E\uDDDA\uD83C\uDFFF\u200D\u2640\uFE0F': '1f9da-1f3ff-2640',
    '\uD83E\uDDDA\uD83C\uDFFF\u200D\u2642\uFE0F': '1f9da-1f3ff-2642',
    '\uD83E\uDDDB\uD83C\uDFFB\u200D\u2640\uFE0F': '1f9db-1f3fb-2640',
    '\uD83E\uDDDB\uD83C\uDFFB\u200D\u2642\uFE0F': '1f9db-1f3fb-2642',
    '\uD83E\uDDDB\uD83C\uDFFC\u200D\u2640\uFE0F': '1f9db-1f3fc-2640',
    '\uD83E\uDDDB\uD83C\uDFFC\u200D\u2642\uFE0F': '1f9db-1f3fc-2642',
    '\uD83E\uDDDB\uD83C\uDFFD\u200D\u2640\uFE0F': '1f9db-1f3fd-2640',
    '\uD83E\uDDDB\uD83C\uDFFD\u200D\u2642\uFE0F': '1f9db-1f3fd-2642',
    '\uD83E\uDDDB\uD83C\uDFFE\u200D\u2640\uFE0F': '1f9db-1f3fe-2640',
    '\uD83E\uDDDB\uD83C\uDFFE\u200D\u2642\uFE0F': '1f9db-1f3fe-2642',
    '\uD83E\uDDDB\uD83C\uDFFF\u200D\u2640\uFE0F': '1f9db-1f3ff-2640',
    '\uD83E\uDDDB\uD83C\uDFFF\u200D\u2642\uFE0F': '1f9db-1f3ff-2642',
    '\uD83E\uDDDC\uD83C\uDFFB\u200D\u2640\uFE0F': '1f9dc-1f3fb-2640',
    '\uD83E\uDDDC\uD83C\uDFFB\u200D\u2642\uFE0F': '1f9dc-1f3fb-2642',
    '\uD83E\uDDDC\uD83C\uDFFC\u200D\u2640\uFE0F': '1f9dc-1f3fc-2640',
    '\uD83E\uDDDC\uD83C\uDFFC\u200D\u2642\uFE0F': '1f9dc-1f3fc-2642',
    '\uD83E\uDDDC\uD83C\uDFFD\u200D\u2640\uFE0F': '1f9dc-1f3fd-2640',
    '\uD83E\uDDDC\uD83C\uDFFD\u200D\u2642\uFE0F': '1f9dc-1f3fd-2642',
    '\uD83E\uDDDC\uD83C\uDFFE\u200D\u2640\uFE0F': '1f9dc-1f3fe-2640',
    '\uD83E\uDDDC\uD83C\uDFFE\u200D\u2642\uFE0F': '1f9dc-1f3fe-2642',
    '\uD83E\uDDDC\uD83C\uDFFF\u200D\u2640\uFE0F': '1f9dc-1f3ff-2640',
    '\uD83E\uDDDC\uD83C\uDFFF\u200D\u2642\uFE0F': '1f9dc-1f3ff-2642',
    '\uD83E\uDDDD\uD83C\uDFFB\u200D\u2640\uFE0F': '1f9dd-1f3fb-2640',
    '\uD83E\uDDDD\uD83C\uDFFB\u200D\u2642\uFE0F': '1f9dd-1f3fb-2642',
    '\uD83E\uDDDD\uD83C\uDFFC\u200D\u2640\uFE0F': '1f9dd-1f3fc-2640',
    '\uD83E\uDDDD\uD83C\uDFFC\u200D\u2642\uFE0F': '1f9dd-1f3fc-2642',
    '\uD83E\uDDDD\uD83C\uDFFD\u200D\u2640\uFE0F': '1f9dd-1f3fd-2640',
    '\uD83E\uDDDD\uD83C\uDFFD\u200D\u2642\uFE0F': '1f9dd-1f3fd-2642',
    '\uD83E\uDDDD\uD83C\uDFFE\u200D\u2640\uFE0F': '1f9dd-1f3fe-2640',
    '\uD83E\uDDDD\uD83C\uDFFE\u200D\u2642\uFE0F': '1f9dd-1f3fe-2642',
    '\uD83E\uDDDD\uD83C\uDFFF\u200D\u2640\uFE0F': '1f9dd-1f3ff-2640',
    '\uD83E\uDDDD\uD83C\uDFFF\u200D\u2642\uFE0F': '1f9dd-1f3ff-2642',
    '\uD83E\uDDD6\uD83C\uDFFB\u200D\u2640\uFE0F': '1f9d6-1f3fb-2640',
    '\uD83E\uDDD6\uD83C\uDFFB\u200D\u2642\uFE0F': '1f9d6-1f3fb-2642',
    '\uD83E\uDDD6\uD83C\uDFFC\u200D\u2640\uFE0F': '1f9d6-1f3fc-2640',
    '\uD83E\uDDD6\uD83C\uDFFC\u200D\u2642\uFE0F': '1f9d6-1f3fc-2642',
    '\uD83E\uDDD6\uD83C\uDFFD\u200D\u2640\uFE0F': '1f9d6-1f3fd-2640',
    '\uD83E\uDDD6\uD83C\uDFFD\u200D\u2642\uFE0F': '1f9d6-1f3fd-2642',
    '\uD83E\uDDD6\uD83C\uDFFE\u200D\u2640\uFE0F': '1f9d6-1f3fe-2640',
    '\uD83E\uDDD6\uD83C\uDFFE\u200D\u2642\uFE0F': '1f9d6-1f3fe-2642',
    '\uD83E\uDDD6\uD83C\uDFFF\u200D\u2640\uFE0F': '1f9d6-1f3ff-2640',
    '\uD83E\uDDD6\uD83C\uDFFF\u200D\u2642\uFE0F': '1f9d6-1f3ff-2642',
    '\uD83E\uDDD7\uD83C\uDFFB\u200D\u2640\uFE0F': '1f9d7-1f3fb-2640',
    '\uD83E\uDDD7\uD83C\uDFFB\u200D\u2642\uFE0F': '1f9d7-1f3fb-2642',
    '\uD83E\uDDD7\uD83C\uDFFC\u200D\u2640\uFE0F': '1f9d7-1f3fc-2640',
    '\uD83E\uDDD7\uD83C\uDFFC\u200D\u2642\uFE0F': '1f9d7-1f3fc-2642',
    '\uD83E\uDDD7\uD83C\uDFFD\u200D\u2640\uFE0F': '1f9d7-1f3fd-2640',
    '\uD83E\uDDD7\uD83C\uDFFD\u200D\u2642\uFE0F': '1f9d7-1f3fd-2642',
    '\uD83E\uDDD7\uD83C\uDFFE\u200D\u2640\uFE0F': '1f9d7-1f3fe-2640',
    '\uD83E\uDDD7\uD83C\uDFFE\u200D\u2642\uFE0F': '1f9d7-1f3fe-2642',
    '\uD83E\uDDD7\uD83C\uDFFF\u200D\u2640\uFE0F': '1f9d7-1f3ff-2640',
    '\uD83E\uDDD7\uD83C\uDFFF\u200D\u2642\uFE0F': '1f9d7-1f3ff-2642',
    '\uD83E\uDDD8\uD83C\uDFFB\u200D\u2640\uFE0F': '1f9d8-1f3fb-2640',
    '\uD83E\uDDD8\uD83C\uDFFB\u200D\u2642\uFE0F': '1f9d8-1f3fb-2642',
    '\uD83E\uDDD8\uD83C\uDFFC\u200D\u2640\uFE0F': '1f9d8-1f3fc-2640',
    '\uD83E\uDDD8\uD83C\uDFFC\u200D\u2642\uFE0F': '1f9d8-1f3fc-2642',
    '\uD83E\uDDD8\uD83C\uDFFD\u200D\u2640\uFE0F': '1f9d8-1f3fd-2640',
    '\uD83E\uDDD8\uD83C\uDFFD\u200D\u2642\uFE0F': '1f9d8-1f3fd-2642',
    '\uD83E\uDDD8\uD83C\uDFFE\u200D\u2640\uFE0F': '1f9d8-1f3fe-2640',
    '\uD83E\uDDD8\uD83C\uDFFE\u200D\u2642\uFE0F': '1f9d8-1f3fe-2642',
    '\uD83E\uDDD8\uD83C\uDFFF\u200D\u2640\uFE0F': '1f9d8-1f3ff-2640',
    '\uD83E\uDDD8\uD83C\uDFFF\u200D\u2642\uFE0F': '1f9d8-1f3ff-2642',
    '\uD83D\uDD75\uFE0F\u200D\u2640\uFE0F': '1f575-2640',
    '\uD83D\uDD75\uFE0F\u200D\u2642\uFE0F': '1f575-2642',
    '\u26F9\uFE0F\uD83C\uDFFB\u2640\uFE0F': '26f9-1f3fb-2640',
    '\u26F9\uFE0F\uD83C\uDFFB\u2642\uFE0F': '26f9-1f3fb-2642',
    '\u26F9\uFE0F\uD83C\uDFFC\u2640\uFE0F': '26f9-1f3fc-2640',
    '\u26F9\uFE0F\uD83C\uDFFC\u2642\uFE0F': '26f9-1f3fc-2642',
    '\u26F9\uFE0F\uD83C\uDFFD\u2640\uFE0F': '26f9-1f3fd-2640',
    '\u26F9\uFE0F\uD83C\uDFFD\u2642\uFE0F': '26f9-1f3fd-2642',
    '\u26F9\uFE0F\uD83C\uDFFE\u2640\uFE0F': '26f9-1f3fe-2640',
    '\u26F9\uFE0F\uD83C\uDFFE\u2642\uFE0F': '26f9-1f3fe-2642',
    '\u26F9\uFE0F\uD83C\uDFFF\u2640\uFE0F': '26f9-1f3ff-2640',
    '\u26F9\uFE0F\uD83C\uDFFF\u2642\uFE0F': '26f9-1f3ff-2642',
    '\uD83C\uDFCB\uFE0F\u200D\u2640\uFE0F': '1f3cb-2640',
    '\uD83C\uDFCB\uFE0F\u200D\u2642\uFE0F': '1f3cb-2642',
    '\uD83C\uDFCC\uFE0F\u200D\u2640\uFE0F': '1f3cc-2640',
    '\uD83C\uDFCC\uFE0F\u200D\u2642\uFE0F': '1f3cc-2642',
    '\u26F9\uD83C\uDFFB\u200D\u2640\uFE0F': '26f9-1f3fb-2640',
    '\u26F9\uD83C\uDFFB\u200D\u2642\uFE0F': '26f9-1f3fb-2642',
    '\u26F9\uD83C\uDFFC\u200D\u2640\uFE0F': '26f9-1f3fc-2640',
    '\u26F9\uD83C\uDFFC\u200D\u2642\uFE0F': '26f9-1f3fc-2642',
    '\u26F9\uD83C\uDFFD\u200D\u2640\uFE0F': '26f9-1f3fd-2640',
    '\u26F9\uD83C\uDFFD\u200D\u2642\uFE0F': '26f9-1f3fd-2642',
    '\u26F9\uD83C\uDFFE\u200D\u2640\uFE0F': '26f9-1f3fe-2640',
    '\u26F9\uD83C\uDFFE\u200D\u2642\uFE0F': '26f9-1f3fe-2642',
    '\u26F9\uD83C\uDFFF\u200D\u2640\uFE0F': '26f9-1f3ff-2640',
    '\u26F9\uD83C\uDFFF\u200D\u2642\uFE0F': '26f9-1f3ff-2642',
    '\u26F9\uFE0F\u200D\u2640\uFE0F': '26f9-2640',
    '\u26F9\uFE0F\u200D\u2642\uFE0F': '26f9-2642',
    '\uD83D\uDC68\uD83D\uDC68\uD83D\uDC66\uD83D\uDC66':
      '1f468-1f468-1f466-1f466',
    '\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67\uD83D\uDC66':
      '1f468-1f468-1f467-1f466',
    '\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67\uD83D\uDC67':
      '1f468-1f468-1f467-1f467',
    '\uD83D\uDC68\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66':
      '1f468-1f469-1f466-1f466',
    '\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66':
      '1f468-1f469-1f467-1f466',
    '\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67':
      '1f468-1f469-1f467-1f467',
    '\uD83D\uDC69\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66':
      '1f469-1f469-1f466-1f466',
    '\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66':
      '1f469-1f469-1f467-1f466',
    '\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67':
      '1f469-1f469-1f467-1f467',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBB': '1f468-1f3ff-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBB': '1f468-1f3fe-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB': '1f468-1f3fd-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB': '1f468-1f3fc-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB': '1f468-1f3fb-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBB': '1f469-1f3ff-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBB': '1f469-1f3fe-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBB': '1f469-1f3fd-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBB': '1f469-1f3fc-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB': '1f469-1f3fb-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFEB': '1f468-1f3ff-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFEB': '1f468-1f3fe-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFEB': '1f468-1f3fd-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFEB': '1f468-1f3fc-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFEB': '1f468-1f3fb-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFEB': '1f469-1f3ff-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFEB': '1f469-1f3fe-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFEB': '1f469-1f3fd-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFEB': '1f469-1f3fc-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFEB': '1f469-1f3fb-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF93': '1f468-1f3ff-1f393',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF93': '1f468-1f3fe-1f393',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF93': '1f468-1f3fd-1f393',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF93': '1f468-1f3fc-1f393',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF93': '1f468-1f3fb-1f393',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF93': '1f469-1f3ff-1f393',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF93': '1f469-1f3fe-1f393',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF93': '1f469-1f3fd-1f393',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF93': '1f469-1f3fc-1f393',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF93': '1f469-1f3fb-1f393',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA4': '1f468-1f3ff-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA4': '1f468-1f3fe-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA4': '1f468-1f3fd-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA4': '1f468-1f3fc-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA4': '1f468-1f3fb-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA4': '1f469-1f3ff-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA4': '1f469-1f3fe-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA4': '1f469-1f3fd-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA4': '1f469-1f3fc-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA4': '1f469-1f3fb-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD2C': '1f468-1f3ff-1f52c',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD2C': '1f468-1f3fe-1f52c',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD2C': '1f468-1f3fd-1f52c',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD2C': '1f468-1f3fc-1f52c',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD2C': '1f468-1f3fb-1f52c',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD2C': '1f469-1f3ff-1f52c',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD2C': '1f469-1f3fe-1f52c',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD2C': '1f469-1f3fd-1f52c',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD2C': '1f469-1f3fc-1f52c',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD2C': '1f469-1f3fb-1f52c',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBC': '1f468-1f3ff-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBC': '1f468-1f3fe-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBC': '1f468-1f3fd-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBC': '1f468-1f3fc-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBC': '1f468-1f3fb-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBC': '1f469-1f3ff-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBC': '1f469-1f3fe-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBC': '1f469-1f3fd-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBC': '1f469-1f3fc-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBC': '1f469-1f3fb-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD27': '1f468-1f3ff-1f527',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD27': '1f468-1f3fe-1f527',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD27': '1f468-1f3fd-1f527',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD27': '1f468-1f3fc-1f527',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27': '1f468-1f3fb-1f527',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD27': '1f469-1f3ff-1f527',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD27': '1f469-1f3fe-1f527',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD27': '1f469-1f3fd-1f527',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD27': '1f469-1f3fc-1f527',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD27': '1f469-1f3fb-1f527',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFED': '1f468-1f3ff-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFED': '1f468-1f3fe-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFED': '1f468-1f3fd-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFED': '1f468-1f3fc-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFED': '1f468-1f3fb-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFED': '1f469-1f3ff-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFED': '1f469-1f3fe-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFED': '1f469-1f3fd-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFED': '1f469-1f3fc-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFED': '1f469-1f3fb-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF73': '1f468-1f3ff-1f373',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF73': '1f468-1f3fe-1f373',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF73': '1f468-1f3fd-1f373',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF73': '1f468-1f3fc-1f373',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF73': '1f468-1f3fb-1f373',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF73': '1f469-1f3ff-1f373',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF73': '1f469-1f3fe-1f373',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF73': '1f469-1f3fd-1f373',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF73': '1f469-1f3fc-1f373',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF73': '1f469-1f3fb-1f373',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF3E': '1f468-1f3ff-1f33e',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF3E': '1f468-1f3fe-1f33e',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF3E': '1f468-1f3fd-1f33e',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF3E': '1f468-1f3fc-1f33e',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF3E': '1f468-1f3fb-1f33e',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF3E': '1f469-1f3ff-1f33e',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF3E': '1f469-1f3fe-1f33e',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF3E': '1f469-1f3fd-1f33e',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF3E': '1f469-1f3fc-1f33e',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF3E': '1f469-1f3fb-1f33e',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA8': '1f468-1f3fb-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA8': '1f468-1f3fc-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA8': '1f468-1f3fd-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA8': '1f468-1f3fe-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA8': '1f468-1f3ff-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA8': '1f469-1f3fb-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA8': '1f469-1f3fc-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA8': '1f469-1f3fd-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA8': '1f469-1f3fe-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA8': '1f469-1f3ff-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE80': '1f468-1f3fb-1f680',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE80': '1f468-1f3fc-1f680',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE80': '1f468-1f3fd-1f680',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE80': '1f468-1f3fe-1f680',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE80': '1f468-1f3ff-1f680',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE80': '1f469-1f3fb-1f680',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE80': '1f469-1f3fc-1f680',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE80': '1f469-1f3fd-1f680',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE80': '1f469-1f3fe-1f680',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE80': '1f469-1f3ff-1f680',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE92': '1f468-1f3fb-1f692',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE92': '1f468-1f3fc-1f692',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE92': '1f468-1f3fd-1f692',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE92': '1f468-1f3fe-1f692',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE92': '1f468-1f3ff-1f692',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE92': '1f469-1f3fb-1f692',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE92': '1f469-1f3fc-1f692',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE92': '1f469-1f3fd-1f692',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE92': '1f469-1f3fe-1f692',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE92': '1f469-1f3ff-1f692',
    '\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08': '1f3f3-1f308',
    '\uD83C\uDFCC\uD83C\uDFFB\u200D\u2642': '1f3cc-1f3fb-2642',
    '\uD83C\uDFCC\uD83C\uDFFC\u200D\u2642': '1f3cc-1f3fc-2642',
    '\uD83C\uDFCC\uD83C\uDFFD\u200D\u2642': '1f3cc-1f3fd-2642',
    '\uD83C\uDFCC\uD83C\uDFFE\u200D\u2642': '1f3cc-1f3fe-2642',
    '\uD83C\uDFCC\uD83C\uDFFF\u200D\u2642': '1f3cc-1f3ff-2642',
    '\uD83C\uDFCC\uD83C\uDFFB\u200D\u2640': '1f3cc-1f3fb-2640',
    '\uD83C\uDFCC\uD83C\uDFFC\u200D\u2640': '1f3cc-1f3fc-2640',
    '\uD83C\uDFCC\uD83C\uDFFD\u200D\u2640': '1f3cc-1f3fd-2640',
    '\uD83C\uDFCC\uD83C\uDFFE\u200D\u2640': '1f3cc-1f3fe-2640',
    '\uD83C\uDFCC\uD83C\uDFFF\u200D\u2640': '1f3cc-1f3ff-2640',
    '\uD83E\uDD39\uD83C\uDFFF\u200D\u2642': '1f939-1f3ff-2642',
    '\uD83E\uDD39\uD83C\uDFFE\u200D\u2642': '1f939-1f3fe-2642',
    '\uD83E\uDD39\uD83C\uDFFD\u200D\u2642': '1f939-1f3fd-2642',
    '\uD83E\uDD39\uD83C\uDFFC\u200D\u2642': '1f939-1f3fc-2642',
    '\uD83E\uDD39\uD83C\uDFFB\u200D\u2642': '1f939-1f3fb-2642',
    '\uD83E\uDD39\uD83C\uDFFF\u200D\u2640': '1f939-1f3ff-2640',
    '\uD83E\uDD39\uD83C\uDFFE\u200D\u2640': '1f939-1f3fe-2640',
    '\uD83E\uDD39\uD83C\uDFFD\u200D\u2640': '1f939-1f3fd-2640',
    '\uD83E\uDD39\uD83C\uDFFC\u200D\u2640': '1f939-1f3fc-2640',
    '\uD83E\uDD39\uD83C\uDFFB\u200D\u2640': '1f939-1f3fb-2640',
    '\uD83E\uDD3E\uD83C\uDFFF\u200D\u2642': '1f93e-1f3ff-2642',
    '\uD83E\uDD3E\uD83C\uDFFE\u200D\u2642': '1f93e-1f3fe-2642',
    '\uD83E\uDD3E\uD83C\uDFFD\u200D\u2642': '1f93e-1f3fd-2642',
    '\uD83E\uDD3E\uD83C\uDFFC\u200D\u2642': '1f93e-1f3fc-2642',
    '\uD83E\uDD3E\uD83C\uDFFB\u200D\u2642': '1f93e-1f3fb-2642',
    '\uD83E\uDD3E\uD83C\uDFFF\u200D\u2640': '1f93e-1f3ff-2640',
    '\uD83E\uDD3E\uD83C\uDFFE\u200D\u2640': '1f93e-1f3fe-2640',
    '\uD83E\uDD3E\uD83C\uDFFD\u200D\u2640': '1f93e-1f3fd-2640',
    '\uD83E\uDD3E\uD83C\uDFFC\u200D\u2640': '1f93e-1f3fc-2640',
    '\uD83E\uDD3E\uD83C\uDFFB\u200D\u2640': '1f93e-1f3fb-2640',
    '\uD83E\uDD3D\uD83C\uDFFF\u200D\u2642': '1f93d-1f3ff-2642',
    '\uD83E\uDD3D\uD83C\uDFFE\u200D\u2642': '1f93d-1f3fe-2642',
    '\uD83E\uDD3D\uD83C\uDFFD\u200D\u2642': '1f93d-1f3fd-2642',
    '\uD83E\uDD3D\uD83C\uDFFC\u200D\u2642': '1f93d-1f3fc-2642',
    '\uD83E\uDD3D\uD83C\uDFFB\u200D\u2642': '1f93d-1f3fb-2642',
    '\uD83E\uDD3D\uD83C\uDFFF\u200D\u2640': '1f93d-1f3ff-2640',
    '\uD83E\uDD3D\uD83C\uDFFE\u200D\u2640': '1f93d-1f3fe-2640',
    '\uD83E\uDD3D\uD83C\uDFFD\u200D\u2640': '1f93d-1f3fd-2640',
    '\uD83E\uDD3D\uD83C\uDFFC\u200D\u2640': '1f93d-1f3fc-2640',
    '\uD83E\uDD3D\uD83C\uDFFB\u200D\u2640': '1f93d-1f3fb-2640',
    '\uD83E\uDD38\uD83C\uDFFF\u200D\u2642': '1f938-1f3ff-2642',
    '\uD83E\uDD38\uD83C\uDFFE\u200D\u2642': '1f938-1f3fe-2642',
    '\uD83E\uDD38\uD83C\uDFFD\u200D\u2642': '1f938-1f3fd-2642',
    '\uD83E\uDD38\uD83C\uDFFC\u200D\u2642': '1f938-1f3fc-2642',
    '\uD83E\uDD38\uD83C\uDFFB\u200D\u2642': '1f938-1f3fb-2642',
    '\uD83E\uDD38\uD83C\uDFFF\u200D\u2640': '1f938-1f3ff-2640',
    '\uD83E\uDD38\uD83C\uDFFE\u200D\u2640': '1f938-1f3fe-2640',
    '\uD83E\uDD38\uD83C\uDFFD\u200D\u2640': '1f938-1f3fd-2640',
    '\uD83E\uDD38\uD83C\uDFFC\u200D\u2640': '1f938-1f3fc-2640',
    '\uD83E\uDD38\uD83C\uDFFB\u200D\u2640': '1f938-1f3fb-2640',
    '\uD83D\uDEB6\uD83C\uDFFF\u200D\u2642': '1f6b6-1f3ff-2642',
    '\uD83D\uDEB6\uD83C\uDFFE\u200D\u2642': '1f6b6-1f3fe-2642',
    '\uD83D\uDEB6\uD83C\uDFFD\u200D\u2642': '1f6b6-1f3fd-2642',
    '\uD83D\uDEB6\uD83C\uDFFC\u200D\u2642': '1f6b6-1f3fc-2642',
    '\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642': '1f6b6-1f3fb-2642',
    '\uD83D\uDEB6\uD83C\uDFFF\u200D\u2640': '1f6b6-1f3ff-2640',
    '\uD83D\uDEB6\uD83C\uDFFE\u200D\u2640': '1f6b6-1f3fe-2640',
    '\uD83D\uDEB6\uD83C\uDFFD\u200D\u2640': '1f6b6-1f3fd-2640',
    '\uD83D\uDEB6\uD83C\uDFFC\u200D\u2640': '1f6b6-1f3fc-2640',
    '\uD83D\uDEB6\uD83C\uDFFB\u200D\u2640': '1f6b6-1f3fb-2640',
    '\uD83D\uDEB5\uD83C\uDFFF\u200D\u2642': '1f6b5-1f3ff-2642',
    '\uD83D\uDEB5\uD83C\uDFFE\u200D\u2642': '1f6b5-1f3fe-2642',
    '\uD83D\uDEB5\uD83C\uDFFD\u200D\u2642': '1f6b5-1f3fd-2642',
    '\uD83D\uDEB5\uD83C\uDFFC\u200D\u2642': '1f6b5-1f3fc-2642',
    '\uD83D\uDEB5\uD83C\uDFFB\u200D\u2642': '1f6b5-1f3fb-2642',
    '\uD83D\uDEB5\uD83C\uDFFF\u200D\u2640': '1f6b5-1f3ff-2640',
    '\uD83D\uDEB5\uD83C\uDFFE\u200D\u2640': '1f6b5-1f3fe-2640',
    '\uD83D\uDEB5\uD83C\uDFFD\u200D\u2640': '1f6b5-1f3fd-2640',
    '\uD83D\uDEB5\uD83C\uDFFC\u200D\u2640': '1f6b5-1f3fc-2640',
    '\uD83D\uDEB5\uD83C\uDFFB\u200D\u2640': '1f6b5-1f3fb-2640',
    '\uD83D\uDEB4\uD83C\uDFFF\u200D\u2642': '1f6b4-1f3ff-2642',
    '\uD83D\uDEB4\uD83C\uDFFE\u200D\u2642': '1f6b4-1f3fe-2642',
    '\uD83D\uDEB4\uD83C\uDFFD\u200D\u2642': '1f6b4-1f3fd-2642',
    '\uD83D\uDEB4\uD83C\uDFFC\u200D\u2642': '1f6b4-1f3fc-2642',
    '\uD83D\uDEB4\uD83C\uDFFB\u200D\u2642': '1f6b4-1f3fb-2642',
    '\uD83D\uDEB4\uD83C\uDFFF\u200D\u2640': '1f6b4-1f3ff-2640',
    '\uD83D\uDEB4\uD83C\uDFFE\u200D\u2640': '1f6b4-1f3fe-2640',
    '\uD83D\uDEB4\uD83C\uDFFD\u200D\u2640': '1f6b4-1f3fd-2640',
    '\uD83D\uDEB4\uD83C\uDFFC\u200D\u2640': '1f6b4-1f3fc-2640',
    '\uD83D\uDEB4\uD83C\uDFFB\u200D\u2640': '1f6b4-1f3fb-2640',
    '\uD83D\uDEA3\uD83C\uDFFF\u200D\u2642': '1f6a3-1f3ff-2642',
    '\uD83D\uDEA3\uD83C\uDFFE\u200D\u2642': '1f6a3-1f3fe-2642',
    '\uD83D\uDEA3\uD83C\uDFFD\u200D\u2642': '1f6a3-1f3fd-2642',
    '\uD83D\uDEA3\uD83C\uDFFC\u200D\u2642': '1f6a3-1f3fc-2642',
    '\uD83D\uDEA3\uD83C\uDFFB\u200D\u2642': '1f6a3-1f3fb-2642',
    '\uD83D\uDEA3\uD83C\uDFFF\u200D\u2640': '1f6a3-1f3ff-2640',
    '\uD83D\uDEA3\uD83C\uDFFE\u200D\u2640': '1f6a3-1f3fe-2640',
    '\uD83D\uDEA3\uD83C\uDFFD\u200D\u2640': '1f6a3-1f3fd-2640',
    '\uD83D\uDEA3\uD83C\uDFFC\u200D\u2640': '1f6a3-1f3fc-2640',
    '\uD83D\uDEA3\uD83C\uDFFB\u200D\u2640': '1f6a3-1f3fb-2640',
    '\uD83C\uDFCB\uD83C\uDFFF\u200D\u2642': '1f3cb-1f3ff-2642',
    '\uD83C\uDFCB\uD83C\uDFFE\u200D\u2642': '1f3cb-1f3fe-2642',
    '\uD83C\uDFCB\uD83C\uDFFD\u200D\u2642': '1f3cb-1f3fd-2642',
    '\uD83C\uDFCB\uD83C\uDFFC\u200D\u2642': '1f3cb-1f3fc-2642',
    '\uD83C\uDFCB\uD83C\uDFFB\u200D\u2642': '1f3cb-1f3fb-2642',
    '\uD83C\uDFCB\uD83C\uDFFF\u200D\u2640': '1f3cb-1f3ff-2640',
    '\uD83C\uDFCB\uD83C\uDFFE\u200D\u2640': '1f3cb-1f3fe-2640',
    '\uD83C\uDFCB\uD83C\uDFFD\u200D\u2640': '1f3cb-1f3fd-2640',
    '\uD83C\uDFCB\uD83C\uDFFC\u200D\u2640': '1f3cb-1f3fc-2640',
    '\uD83C\uDFCB\uD83C\uDFFB\u200D\u2640': '1f3cb-1f3fb-2640',
    '\uD83C\uDFCA\uD83C\uDFFF\u200D\u2642': '1f3ca-1f3ff-2642',
    '\uD83C\uDFCA\uD83C\uDFFE\u200D\u2642': '1f3ca-1f3fe-2642',
    '\uD83C\uDFCA\uD83C\uDFFD\u200D\u2642': '1f3ca-1f3fd-2642',
    '\uD83C\uDFCA\uD83C\uDFFC\u200D\u2642': '1f3ca-1f3fc-2642',
    '\uD83C\uDFCA\uD83C\uDFFB\u200D\u2642': '1f3ca-1f3fb-2642',
    '\uD83C\uDFCA\uD83C\uDFFF\u200D\u2640': '1f3ca-1f3ff-2640',
    '\uD83C\uDFCA\uD83C\uDFFE\u200D\u2640': '1f3ca-1f3fe-2640',
    '\uD83C\uDFCA\uD83C\uDFFD\u200D\u2640': '1f3ca-1f3fd-2640',
    '\uD83C\uDFCA\uD83C\uDFFC\u200D\u2640': '1f3ca-1f3fc-2640',
    '\uD83C\uDFCA\uD83C\uDFFB\u200D\u2640': '1f3ca-1f3fb-2640',
    '\uD83C\uDFC4\uD83C\uDFFF\u200D\u2642': '1f3c4-1f3ff-2642',
    '\uD83C\uDFC4\uD83C\uDFFE\u200D\u2642': '1f3c4-1f3fe-2642',
    '\uD83C\uDFC4\uD83C\uDFFD\u200D\u2642': '1f3c4-1f3fd-2642',
    '\uD83C\uDFC4\uD83C\uDFFC\u200D\u2642': '1f3c4-1f3fc-2642',
    '\uD83C\uDFC4\uD83C\uDFFB\u200D\u2642': '1f3c4-1f3fb-2642',
    '\uD83C\uDFC4\uD83C\uDFFF\u200D\u2640': '1f3c4-1f3ff-2640',
    '\uD83C\uDFC4\uD83C\uDFFE\u200D\u2640': '1f3c4-1f3fe-2640',
    '\uD83C\uDFC4\uD83C\uDFFD\u200D\u2640': '1f3c4-1f3fd-2640',
    '\uD83C\uDFC4\uD83C\uDFFC\u200D\u2640': '1f3c4-1f3fc-2640',
    '\uD83C\uDFC4\uD83C\uDFFB\u200D\u2640': '1f3c4-1f3fb-2640',
    '\uD83C\uDFC3\uD83C\uDFFF\u200D\u2642': '1f3c3-1f3ff-2642',
    '\uD83C\uDFC3\uD83C\uDFFE\u200D\u2642': '1f3c3-1f3fe-2642',
    '\uD83C\uDFC3\uD83C\uDFFD\u200D\u2642': '1f3c3-1f3fd-2642',
    '\uD83C\uDFC3\uD83C\uDFFC\u200D\u2642': '1f3c3-1f3fc-2642',
    '\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642': '1f3c3-1f3fb-2642',
    '\uD83C\uDFC3\uD83C\uDFFF\u200D\u2640': '1f3c3-1f3ff-2640',
    '\uD83C\uDFC3\uD83C\uDFFE\u200D\u2640': '1f3c3-1f3fe-2640',
    '\uD83C\uDFC3\uD83C\uDFFD\u200D\u2640': '1f3c3-1f3fd-2640',
    '\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640': '1f3c3-1f3fc-2640',
    '\uD83C\uDFC3\uD83C\uDFFB\u200D\u2640': '1f3c3-1f3fb-2640',
    '\uD83E\uDD37\uD83C\uDFFF\u200D\u2642': '1f937-1f3ff-2642',
    '\uD83E\uDD37\uD83C\uDFFE\u200D\u2642': '1f937-1f3fe-2642',
    '\uD83E\uDD37\uD83C\uDFFD\u200D\u2642': '1f937-1f3fd-2642',
    '\uD83E\uDD37\uD83C\uDFFC\u200D\u2642': '1f937-1f3fc-2642',
    '\uD83E\uDD37\uD83C\uDFFB\u200D\u2642': '1f937-1f3fb-2642',
    '\uD83E\uDD37\uD83C\uDFFF\u200D\u2640': '1f937-1f3ff-2640',
    '\uD83E\uDD37\uD83C\uDFFE\u200D\u2640': '1f937-1f3fe-2640',
    '\uD83E\uDD37\uD83C\uDFFD\u200D\u2640': '1f937-1f3fd-2640',
    '\uD83E\uDD37\uD83C\uDFFC\u200D\u2640': '1f937-1f3fc-2640',
    '\uD83E\uDD37\uD83C\uDFFB\u200D\u2640': '1f937-1f3fb-2640',
    '\uD83E\uDD26\uD83C\uDFFF\u200D\u2642': '1f926-1f3ff-2642',
    '\uD83E\uDD26\uD83C\uDFFE\u200D\u2642': '1f926-1f3fe-2642',
    '\uD83E\uDD26\uD83C\uDFFD\u200D\u2642': '1f926-1f3fd-2642',
    '\uD83E\uDD26\uD83C\uDFFC\u200D\u2642': '1f926-1f3fc-2642',
    '\uD83E\uDD26\uD83C\uDFFB\u200D\u2642': '1f926-1f3fb-2642',
    '\uD83E\uDD26\uD83C\uDFFF\u200D\u2640': '1f926-1f3ff-2640',
    '\uD83E\uDD26\uD83C\uDFFE\u200D\u2640': '1f926-1f3fe-2640',
    '\uD83E\uDD26\uD83C\uDFFD\u200D\u2640': '1f926-1f3fd-2640',
    '\uD83E\uDD26\uD83C\uDFFC\u200D\u2640': '1f926-1f3fc-2640',
    '\uD83E\uDD26\uD83C\uDFFB\u200D\u2640': '1f926-1f3fb-2640',
    '\uD83D\uDE4E\uD83C\uDFFF\u200D\u2642': '1f64e-1f3ff-2642',
    '\uD83D\uDE4E\uD83C\uDFFE\u200D\u2642': '1f64e-1f3fe-2642',
    '\uD83D\uDE4E\uD83C\uDFFD\u200D\u2642': '1f64e-1f3fd-2642',
    '\uD83D\uDE4E\uD83C\uDFFC\u200D\u2642': '1f64e-1f3fc-2642',
    '\uD83D\uDE4E\uD83C\uDFFB\u200D\u2642': '1f64e-1f3fb-2642',
    '\uD83D\uDE4E\uD83C\uDFFF\u200D\u2640': '1f64e-1f3ff-2640',
    '\uD83D\uDE4E\uD83C\uDFFE\u200D\u2640': '1f64e-1f3fe-2640',
    '\uD83D\uDE4E\uD83C\uDFFD\u200D\u2640': '1f64e-1f3fd-2640',
    '\uD83D\uDE4E\uD83C\uDFFC\u200D\u2640': '1f64e-1f3fc-2640',
    '\uD83D\uDE4E\uD83C\uDFFB\u200D\u2640': '1f64e-1f3fb-2640',
    '\uD83D\uDE4D\uD83C\uDFFF\u200D\u2642': '1f64d-1f3ff-2642',
    '\uD83D\uDE4D\uD83C\uDFFE\u200D\u2642': '1f64d-1f3fe-2642',
    '\uD83D\uDE4D\uD83C\uDFFD\u200D\u2642': '1f64d-1f3fd-2642',
    '\uD83D\uDE4D\uD83C\uDFFC\u200D\u2642': '1f64d-1f3fc-2642',
    '\uD83D\uDE4D\uD83C\uDFFB\u200D\u2642': '1f64d-1f3fb-2642',
    '\uD83D\uDE4D\uD83C\uDFFF\u200D\u2640': '1f64d-1f3ff-2640',
    '\uD83D\uDE4D\uD83C\uDFFE\u200D\u2640': '1f64d-1f3fe-2640',
    '\uD83D\uDE4D\uD83C\uDFFD\u200D\u2640': '1f64d-1f3fd-2640',
    '\uD83D\uDE4D\uD83C\uDFFC\u200D\u2640': '1f64d-1f3fc-2640',
    '\uD83D\uDE4D\uD83C\uDFFB\u200D\u2640': '1f64d-1f3fb-2640',
    '\uD83D\uDE4B\uD83C\uDFFF\u200D\u2642': '1f64b-1f3ff-2642',
    '\uD83D\uDE4B\uD83C\uDFFE\u200D\u2642': '1f64b-1f3fe-2642',
    '\uD83D\uDE4B\uD83C\uDFFD\u200D\u2642': '1f64b-1f3fd-2642',
    '\uD83D\uDE4B\uD83C\uDFFC\u200D\u2642': '1f64b-1f3fc-2642',
    '\uD83D\uDE4B\uD83C\uDFFB\u200D\u2642': '1f64b-1f3fb-2642',
    '\uD83D\uDE4B\uD83C\uDFFF\u200D\u2640': '1f64b-1f3ff-2640',
    '\uD83D\uDE4B\uD83C\uDFFE\u200D\u2640': '1f64b-1f3fe-2640',
    '\uD83D\uDE4B\uD83C\uDFFD\u200D\u2640': '1f64b-1f3fd-2640',
    '\uD83D\uDE4B\uD83C\uDFFC\u200D\u2640': '1f64b-1f3fc-2640',
    '\uD83D\uDE4B\uD83C\uDFFB\u200D\u2640': '1f64b-1f3fb-2640',
    '\uD83D\uDE47\uD83C\uDFFF\u200D\u2642': '1f647-1f3ff-2642',
    '\uD83D\uDE47\uD83C\uDFFE\u200D\u2642': '1f647-1f3fe-2642',
    '\uD83D\uDE47\uD83C\uDFFD\u200D\u2642': '1f647-1f3fd-2642',
    '\uD83D\uDE47\uD83C\uDFFC\u200D\u2642': '1f647-1f3fc-2642',
    '\uD83D\uDE47\uD83C\uDFFB\u200D\u2642': '1f647-1f3fb-2642',
    '\uD83D\uDE47\uD83C\uDFFF\u200D\u2640': '1f647-1f3ff-2640',
    '\uD83D\uDE47\uD83C\uDFFE\u200D\u2640': '1f647-1f3fe-2640',
    '\uD83D\uDE47\uD83C\uDFFD\u200D\u2640': '1f647-1f3fd-2640',
    '\uD83D\uDE47\uD83C\uDFFC\u200D\u2640': '1f647-1f3fc-2640',
    '\uD83D\uDE47\uD83C\uDFFB\u200D\u2640': '1f647-1f3fb-2640',
    '\uD83D\uDE46\uD83C\uDFFF\u200D\u2642': '1f646-1f3ff-2642',
    '\uD83D\uDE46\uD83C\uDFFE\u200D\u2642': '1f646-1f3fe-2642',
    '\uD83D\uDE46\uD83C\uDFFD\u200D\u2642': '1f646-1f3fd-2642',
    '\uD83D\uDE46\uD83C\uDFFC\u200D\u2642': '1f646-1f3fc-2642',
    '\uD83D\uDE46\uD83C\uDFFB\u200D\u2642': '1f646-1f3fb-2642',
    '\uD83D\uDE46\uD83C\uDFFF\u200D\u2640': '1f646-1f3ff-2640',
    '\uD83D\uDE46\uD83C\uDFFE\u200D\u2640': '1f646-1f3fe-2640',
    '\uD83D\uDE46\uD83C\uDFFD\u200D\u2640': '1f646-1f3fd-2640',
    '\uD83D\uDE46\uD83C\uDFFC\u200D\u2640': '1f646-1f3fc-2640',
    '\uD83D\uDE46\uD83C\uDFFB\u200D\u2640': '1f646-1f3fb-2640',
    '\uD83D\uDE45\uD83C\uDFFF\u200D\u2642': '1f645-1f3ff-2642',
    '\uD83D\uDE45\uD83C\uDFFE\u200D\u2642': '1f645-1f3fe-2642',
    '\uD83D\uDE45\uD83C\uDFFD\u200D\u2642': '1f645-1f3fd-2642',
    '\uD83D\uDE45\uD83C\uDFFC\u200D\u2642': '1f645-1f3fc-2642',
    '\uD83D\uDE45\uD83C\uDFFB\u200D\u2642': '1f645-1f3fb-2642',
    '\uD83D\uDE45\uD83C\uDFFF\u200D\u2640': '1f645-1f3ff-2640',
    '\uD83D\uDE45\uD83C\uDFFE\u200D\u2640': '1f645-1f3fe-2640',
    '\uD83D\uDE45\uD83C\uDFFD\u200D\u2640': '1f645-1f3fd-2640',
    '\uD83D\uDE45\uD83C\uDFFC\u200D\u2640': '1f645-1f3fc-2640',
    '\uD83D\uDE45\uD83C\uDFFB\u200D\u2640': '1f645-1f3fb-2640',
    '\uD83D\uDC87\uD83C\uDFFF\u200D\u2642': '1f487-1f3ff-2642',
    '\uD83D\uDC87\uD83C\uDFFE\u200D\u2642': '1f487-1f3fe-2642',
    '\uD83D\uDC87\uD83C\uDFFD\u200D\u2642': '1f487-1f3fd-2642',
    '\uD83D\uDC87\uD83C\uDFFC\u200D\u2642': '1f487-1f3fc-2642',
    '\uD83D\uDC87\uD83C\uDFFB\u200D\u2642': '1f487-1f3fb-2642',
    '\uD83D\uDC87\uD83C\uDFFF\u200D\u2640': '1f487-1f3ff-2640',
    '\uD83D\uDC87\uD83C\uDFFE\u200D\u2640': '1f487-1f3fe-2640',
    '\uD83D\uDC87\uD83C\uDFFD\u200D\u2640': '1f487-1f3fd-2640',
    '\uD83D\uDC87\uD83C\uDFFC\u200D\u2640': '1f487-1f3fc-2640',
    '\uD83D\uDC87\uD83C\uDFFB\u200D\u2640': '1f487-1f3fb-2640',
    '\uD83D\uDC86\uD83C\uDFFF\u200D\u2642': '1f486-1f3ff-2642',
    '\uD83D\uDC86\uD83C\uDFFE\u200D\u2642': '1f486-1f3fe-2642',
    '\uD83D\uDC86\uD83C\uDFFD\u200D\u2642': '1f486-1f3fd-2642',
    '\uD83D\uDC86\uD83C\uDFFC\u200D\u2642': '1f486-1f3fc-2642',
    '\uD83D\uDC86\uD83C\uDFFB\u200D\u2642': '1f486-1f3fb-2642',
    '\uD83D\uDC86\uD83C\uDFFF\u200D\u2640': '1f486-1f3ff-2640',
    '\uD83D\uDC86\uD83C\uDFFE\u200D\u2640': '1f486-1f3fe-2640',
    '\uD83D\uDC86\uD83C\uDFFD\u200D\u2640': '1f486-1f3fd-2640',
    '\uD83D\uDC86\uD83C\uDFFC\u200D\u2640': '1f486-1f3fc-2640',
    '\uD83D\uDC86\uD83C\uDFFB\u200D\u2640': '1f486-1f3fb-2640',
    '\uD83D\uDC81\uD83C\uDFFF\u200D\u2642': '1f481-1f3ff-2642',
    '\uD83D\uDC81\uD83C\uDFFE\u200D\u2642': '1f481-1f3fe-2642',
    '\uD83D\uDC81\uD83C\uDFFD\u200D\u2642': '1f481-1f3fd-2642',
    '\uD83D\uDC81\uD83C\uDFFC\u200D\u2642': '1f481-1f3fc-2642',
    '\uD83D\uDC81\uD83C\uDFFB\u200D\u2642': '1f481-1f3fb-2642',
    '\uD83D\uDC81\uD83C\uDFFF\u200D\u2640': '1f481-1f3ff-2640',
    '\uD83D\uDC81\uD83C\uDFFE\u200D\u2640': '1f481-1f3fe-2640',
    '\uD83D\uDC81\uD83C\uDFFD\u200D\u2640': '1f481-1f3fd-2640',
    '\uD83D\uDC81\uD83C\uDFFC\u200D\u2640': '1f481-1f3fc-2640',
    '\uD83D\uDC81\uD83C\uDFFB\u200D\u2640': '1f481-1f3fb-2640',
    '\uD83D\uDC71\uD83C\uDFFF\u200D\u2642': '1f471-1f3ff-2642',
    '\uD83D\uDC71\uD83C\uDFFE\u200D\u2642': '1f471-1f3fe-2642',
    '\uD83D\uDC71\uD83C\uDFFD\u200D\u2642': '1f471-1f3fd-2642',
    '\uD83D\uDC71\uD83C\uDFFC\u200D\u2642': '1f471-1f3fc-2642',
    '\uD83D\uDC71\uD83C\uDFFB\u200D\u2642': '1f471-1f3fb-2642',
    '\uD83D\uDC71\uD83C\uDFFF\u200D\u2640': '1f471-1f3ff-2640',
    '\uD83D\uDC71\uD83C\uDFFE\u200D\u2640': '1f471-1f3fe-2640',
    '\uD83D\uDC71\uD83C\uDFFD\u200D\u2640': '1f471-1f3fd-2640',
    '\uD83D\uDC71\uD83C\uDFFC\u200D\u2640': '1f471-1f3fc-2640',
    '\uD83D\uDC71\uD83C\uDFFB\u200D\u2640': '1f471-1f3fb-2640',
    '\uD83D\uDC73\uD83C\uDFFF\u200D\u2642': '1f473-1f3ff-2642',
    '\uD83D\uDC73\uD83C\uDFFE\u200D\u2642': '1f473-1f3fe-2642',
    '\uD83D\uDC73\uD83C\uDFFD\u200D\u2642': '1f473-1f3fd-2642',
    '\uD83D\uDC73\uD83C\uDFFC\u200D\u2642': '1f473-1f3fc-2642',
    '\uD83D\uDC73\uD83C\uDFFB\u200D\u2642': '1f473-1f3fb-2642',
    '\uD83D\uDC73\uD83C\uDFFF\u200D\u2640': '1f473-1f3ff-2640',
    '\uD83D\uDC73\uD83C\uDFFE\u200D\u2640': '1f473-1f3fe-2640',
    '\uD83D\uDC73\uD83C\uDFFD\u200D\u2640': '1f473-1f3fd-2640',
    '\uD83D\uDC73\uD83C\uDFFC\u200D\u2640': '1f473-1f3fc-2640',
    '\uD83D\uDC73\uD83C\uDFFB\u200D\u2640': '1f473-1f3fb-2640',
    '\uD83D\uDC82\uD83C\uDFFF\u200D\u2642': '1f482-1f3ff-2642',
    '\uD83D\uDC82\uD83C\uDFFE\u200D\u2642': '1f482-1f3fe-2642',
    '\uD83D\uDC82\uD83C\uDFFD\u200D\u2642': '1f482-1f3fd-2642',
    '\uD83D\uDC82\uD83C\uDFFC\u200D\u2642': '1f482-1f3fc-2642',
    '\uD83D\uDC82\uD83C\uDFFB\u200D\u2642': '1f482-1f3fb-2642',
    '\uD83D\uDC82\uD83C\uDFFF\u200D\u2640': '1f482-1f3ff-2640',
    '\uD83D\uDC82\uD83C\uDFFE\u200D\u2640': '1f482-1f3fe-2640',
    '\uD83D\uDC82\uD83C\uDFFD\u200D\u2640': '1f482-1f3fd-2640',
    '\uD83D\uDC82\uD83C\uDFFC\u200D\u2640': '1f482-1f3fc-2640',
    '\uD83D\uDC82\uD83C\uDFFB\u200D\u2640': '1f482-1f3fb-2640',
    '\uD83D\uDD75\uD83C\uDFFF\u200D\u2642': '1f575-1f3ff-2642',
    '\uD83D\uDD75\uD83C\uDFFE\u200D\u2642': '1f575-1f3fe-2642',
    '\uD83D\uDD75\uD83C\uDFFD\u200D\u2642': '1f575-1f3fd-2642',
    '\uD83D\uDD75\uD83C\uDFFC\u200D\u2642': '1f575-1f3fc-2642',
    '\uD83D\uDD75\uD83C\uDFFB\u200D\u2642': '1f575-1f3fb-2642',
    '\uD83D\uDD75\uD83C\uDFFF\u200D\u2640': '1f575-1f3ff-2640',
    '\uD83D\uDD75\uD83C\uDFFE\u200D\u2640': '1f575-1f3fe-2640',
    '\uD83D\uDD75\uD83C\uDFFD\u200D\u2640': '1f575-1f3fd-2640',
    '\uD83D\uDD75\uD83C\uDFFC\u200D\u2640': '1f575-1f3fc-2640',
    '\uD83D\uDD75\uD83C\uDFFB\u200D\u2640': '1f575-1f3fb-2640',
    '\uD83D\uDC77\uD83C\uDFFF\u200D\u2642': '1f477-1f3ff-2642',
    '\uD83D\uDC77\uD83C\uDFFE\u200D\u2642': '1f477-1f3fe-2642',
    '\uD83D\uDC77\uD83C\uDFFD\u200D\u2642': '1f477-1f3fd-2642',
    '\uD83D\uDC77\uD83C\uDFFC\u200D\u2642': '1f477-1f3fc-2642',
    '\uD83D\uDC77\uD83C\uDFFB\u200D\u2642': '1f477-1f3fb-2642',
    '\uD83D\uDC77\uD83C\uDFFF\u200D\u2640': '1f477-1f3ff-2640',
    '\uD83D\uDC77\uD83C\uDFFE\u200D\u2640': '1f477-1f3fe-2640',
    '\uD83D\uDC77\uD83C\uDFFD\u200D\u2640': '1f477-1f3fd-2640',
    '\uD83D\uDC77\uD83C\uDFFC\u200D\u2640': '1f477-1f3fc-2640',
    '\uD83D\uDC77\uD83C\uDFFB\u200D\u2640': '1f477-1f3fb-2640',
    '\uD83D\uDC6E\uD83C\uDFFF\u200D\u2642': '1f46e-1f3ff-2642',
    '\uD83D\uDC6E\uD83C\uDFFE\u200D\u2642': '1f46e-1f3fe-2642',
    '\uD83D\uDC6E\uD83C\uDFFD\u200D\u2642': '1f46e-1f3fd-2642',
    '\uD83D\uDC6E\uD83C\uDFFC\u200D\u2642': '1f46e-1f3fc-2642',
    '\uD83D\uDC6E\uD83C\uDFFB\u200D\u2642': '1f46e-1f3fb-2642',
    '\uD83D\uDC6E\uD83C\uDFFF\u200D\u2640': '1f46e-1f3ff-2640',
    '\uD83D\uDC6E\uD83C\uDFFE\u200D\u2640': '1f46e-1f3fe-2640',
    '\uD83D\uDC6E\uD83C\uDFFD\u200D\u2640': '1f46e-1f3fd-2640',
    '\uD83D\uDC6E\uD83C\uDFFC\u200D\u2640': '1f46e-1f3fc-2640',
    '\uD83D\uDC6E\uD83C\uDFFB\u200D\u2640': '1f46e-1f3fb-2640',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\u2695': '1f468-1f3ff-2695',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\u2695': '1f468-1f3fe-2695',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\u2695': '1f468-1f3fd-2695',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\u2695': '1f468-1f3fc-2695',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\u2695': '1f468-1f3fb-2695',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\u2695': '1f469-1f3ff-2695',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\u2695': '1f469-1f3fe-2695',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\u2695': '1f469-1f3fd-2695',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\u2695': '1f469-1f3fc-2695',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\u2695': '1f469-1f3fb-2695',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\u2696': '1f468-1f3fb-2696',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\u2696': '1f468-1f3fc-2696',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\u2696': '1f468-1f3fd-2696',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\u2696': '1f468-1f3fe-2696',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\u2696': '1f468-1f3ff-2696',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\u2696': '1f469-1f3fb-2696',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\u2696': '1f469-1f3fc-2696',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\u2696': '1f469-1f3fd-2696',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\u2696': '1f469-1f3fe-2696',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\u2696': '1f469-1f3ff-2696',
    '\uD83D\uDC68\uD83C\uDFFB\u200D\u2708': '1f468-1f3fb-2708',
    '\uD83D\uDC68\uD83C\uDFFC\u200D\u2708': '1f468-1f3fc-2708',
    '\uD83D\uDC68\uD83C\uDFFD\u200D\u2708': '1f468-1f3fd-2708',
    '\uD83D\uDC68\uD83C\uDFFE\u200D\u2708': '1f468-1f3fe-2708',
    '\uD83D\uDC68\uD83C\uDFFF\u200D\u2708': '1f468-1f3ff-2708',
    '\uD83D\uDC69\uD83C\uDFFB\u200D\u2708': '1f469-1f3fb-2708',
    '\uD83D\uDC69\uD83C\uDFFC\u200D\u2708': '1f469-1f3fc-2708',
    '\uD83D\uDC69\uD83C\uDFFD\u200D\u2708': '1f469-1f3fd-2708',
    '\uD83D\uDC69\uD83C\uDFFE\u200D\u2708': '1f469-1f3fe-2708',
    '\uD83D\uDC69\uD83C\uDFFF\u200D\u2708': '1f469-1f3ff-2708',
    '\uD83D\uDC68\u2764\uFE0F\uD83D\uDC68': '1f468-2764-1f468',
    '\uD83D\uDC69\u2764\uFE0F\uD83D\uDC68': '1f469-2764-1f468',
    '\uD83D\uDC69\u2764\uFE0F\uD83D\uDC69': '1f469-2764-1f469',
    '\uD83D\uDC68\uD83C\uDFFB\u2695\uFE0F': '1f468-1f3fb-2695',
    '\uD83D\uDC68\uD83C\uDFFB\u2696\uFE0F': '1f468-1f3fb-2696',
    '\uD83D\uDC68\uD83C\uDFFB\u2708\uFE0F': '1f468-1f3fb-2708',
    '\uD83D\uDC68\uD83C\uDFFC\u2695\uFE0F': '1f468-1f3fc-2695',
    '\uD83D\uDC68\uD83C\uDFFC\u2696\uFE0F': '1f468-1f3fc-2696',
    '\uD83D\uDC68\uD83C\uDFFC\u2708\uFE0F': '1f468-1f3fc-2708',
    '\uD83D\uDC68\uD83C\uDFFD\u2695\uFE0F': '1f468-1f3fd-2695',
    '\uD83D\uDC68\uD83C\uDFFD\u2696\uFE0F': '1f468-1f3fd-2696',
    '\uD83D\uDC68\uD83C\uDFFD\u2708\uFE0F': '1f468-1f3fd-2708',
    '\uD83D\uDC68\uD83C\uDFFE\u2695\uFE0F': '1f468-1f3fe-2695',
    '\uD83D\uDC68\uD83C\uDFFE\u2696\uFE0F': '1f468-1f3fe-2696',
    '\uD83D\uDC68\uD83C\uDFFE\u2708\uFE0F': '1f468-1f3fe-2708',
    '\uD83D\uDC68\uD83C\uDFFF\u2695\uFE0F': '1f468-1f3ff-2695',
    '\uD83D\uDC68\uD83C\uDFFF\u2696\uFE0F': '1f468-1f3ff-2696',
    '\uD83D\uDC68\uD83C\uDFFF\u2708\uFE0F': '1f468-1f3ff-2708',
    '\uD83D\uDC69\uD83C\uDFFB\u2695\uFE0F': '1f469-1f3fb-2695',
    '\uD83D\uDC69\uD83C\uDFFB\u2696\uFE0F': '1f469-1f3fb-2696',
    '\uD83D\uDC69\uD83C\uDFFB\u2708\uFE0F': '1f469-1f3fb-2708',
    '\uD83D\uDC69\uD83C\uDFFC\u2695\uFE0F': '1f469-1f3fc-2695',
    '\uD83D\uDC69\uD83C\uDFFC\u2696\uFE0F': '1f469-1f3fc-2696',
    '\uD83D\uDC69\uD83C\uDFFC\u2708\uFE0F': '1f469-1f3fc-2708',
    '\uD83D\uDC69\uD83C\uDFFD\u2695\uFE0F': '1f469-1f3fd-2695',
    '\uD83D\uDC69\uD83C\uDFFD\u2696\uFE0F': '1f469-1f3fd-2696',
    '\uD83D\uDC69\uD83C\uDFFD\u2708\uFE0F': '1f469-1f3fd-2708',
    '\uD83D\uDC69\uD83C\uDFFE\u2695\uFE0F': '1f469-1f3fe-2695',
    '\uD83D\uDC69\uD83C\uDFFE\u2696\uFE0F': '1f469-1f3fe-2696',
    '\uD83D\uDC69\uD83C\uDFFE\u2708\uFE0F': '1f469-1f3fe-2708',
    '\uD83D\uDC69\uD83C\uDFFF\u2695\uFE0F': '1f469-1f3ff-2695',
    '\uD83D\uDC69\uD83C\uDFFF\u2696\uFE0F': '1f469-1f3ff-2696',
    '\uD83D\uDC69\uD83C\uDFFF\u2708\uFE0F': '1f469-1f3ff-2708',
    '\uD83D\uDC6E\uD83C\uDFFB\u2640\uFE0F': '1f46e-1f3fb-2640',
    '\uD83D\uDC6E\uD83C\uDFFB\u2642\uFE0F': '1f46e-1f3fb-2642',
    '\uD83D\uDC6E\uD83C\uDFFC\u2640\uFE0F': '1f46e-1f3fc-2640',
    '\uD83D\uDC6E\uD83C\uDFFC\u2642\uFE0F': '1f46e-1f3fc-2642',
    '\uD83D\uDC6E\uD83C\uDFFD\u2640\uFE0F': '1f46e-1f3fd-2640',
    '\uD83D\uDC6E\uD83C\uDFFD\u2642\uFE0F': '1f46e-1f3fd-2642',
    '\uD83D\uDC6E\uD83C\uDFFE\u2640\uFE0F': '1f46e-1f3fe-2640',
    '\uD83D\uDC6E\uD83C\uDFFE\u2642\uFE0F': '1f46e-1f3fe-2642',
    '\uD83D\uDC6E\uD83C\uDFFF\u2640\uFE0F': '1f46e-1f3ff-2640',
    '\uD83D\uDC6E\uD83C\uDFFF\u2642\uFE0F': '1f46e-1f3ff-2642',
    '\uD83D\uDC71\uD83C\uDFFB\u2640\uFE0F': '1f471-1f3fb-2640',
    '\uD83D\uDC71\uD83C\uDFFB\u2642\uFE0F': '1f471-1f3fb-2642',
    '\uD83D\uDC71\uD83C\uDFFC\u2640\uFE0F': '1f471-1f3fc-2640',
    '\uD83D\uDC71\uD83C\uDFFC\u2642\uFE0F': '1f471-1f3fc-2642',
    '\uD83D\uDC71\uD83C\uDFFD\u2640\uFE0F': '1f471-1f3fd-2640',
    '\uD83D\uDC71\uD83C\uDFFD\u2642\uFE0F': '1f471-1f3fd-2642',
    '\uD83D\uDC71\uD83C\uDFFE\u2640\uFE0F': '1f471-1f3fe-2640',
    '\uD83D\uDC71\uD83C\uDFFE\u2642\uFE0F': '1f471-1f3fe-2642',
    '\uD83D\uDC71\uD83C\uDFFF\u2640\uFE0F': '1f471-1f3ff-2640',
    '\uD83D\uDC71\uD83C\uDFFF\u2642\uFE0F': '1f471-1f3ff-2642',
    '\uD83D\uDC73\uD83C\uDFFB\u2640\uFE0F': '1f473-1f3fb-2640',
    '\uD83D\uDC73\uD83C\uDFFB\u2642\uFE0F': '1f473-1f3fb-2642',
    '\uD83D\uDC73\uD83C\uDFFC\u2640\uFE0F': '1f473-1f3fc-2640',
    '\uD83D\uDC73\uD83C\uDFFC\u2642\uFE0F': '1f473-1f3fc-2642',
    '\uD83D\uDC73\uD83C\uDFFD\u2640\uFE0F': '1f473-1f3fd-2640',
    '\uD83D\uDC73\uD83C\uDFFD\u2642\uFE0F': '1f473-1f3fd-2642',
    '\uD83D\uDC73\uD83C\uDFFE\u2640\uFE0F': '1f473-1f3fe-2640',
    '\uD83D\uDC73\uD83C\uDFFE\u2642\uFE0F': '1f473-1f3fe-2642',
    '\uD83D\uDC73\uD83C\uDFFF\u2640\uFE0F': '1f473-1f3ff-2640',
    '\uD83D\uDC73\uD83C\uDFFF\u2642\uFE0F': '1f473-1f3ff-2642',
    '\uD83D\uDC77\uD83C\uDFFB\u2640\uFE0F': '1f477-1f3fb-2640',
    '\uD83D\uDC77\uD83C\uDFFB\u2642\uFE0F': '1f477-1f3fb-2642',
    '\uD83D\uDC77\uD83C\uDFFC\u2640\uFE0F': '1f477-1f3fc-2640',
    '\uD83D\uDC77\uD83C\uDFFC\u2642\uFE0F': '1f477-1f3fc-2642',
    '\uD83D\uDC77\uD83C\uDFFD\u2640\uFE0F': '1f477-1f3fd-2640',
    '\uD83D\uDC77\uD83C\uDFFD\u2642\uFE0F': '1f477-1f3fd-2642',
    '\uD83D\uDC77\uD83C\uDFFE\u2640\uFE0F': '1f477-1f3fe-2640',
    '\uD83D\uDC77\uD83C\uDFFE\u2642\uFE0F': '1f477-1f3fe-2642',
    '\uD83D\uDC77\uD83C\uDFFF\u2640\uFE0F': '1f477-1f3ff-2640',
    '\uD83D\uDC77\uD83C\uDFFF\u2642\uFE0F': '1f477-1f3ff-2642',
    '\uD83D\uDC82\uD83C\uDFFB\u2640\uFE0F': '1f482-1f3fb-2640',
    '\uD83D\uDC82\uD83C\uDFFB\u2642\uFE0F': '1f482-1f3fb-2642',
    '\uD83D\uDC82\uD83C\uDFFC\u2640\uFE0F': '1f482-1f3fc-2640',
    '\uD83D\uDC82\uD83C\uDFFC\u2642\uFE0F': '1f482-1f3fc-2642',
    '\uD83D\uDC82\uD83C\uDFFD\u2640\uFE0F': '1f482-1f3fd-2640',
    '\uD83D\uDC82\uD83C\uDFFD\u2642\uFE0F': '1f482-1f3fd-2642',
    '\uD83D\uDC82\uD83C\uDFFE\u2640\uFE0F': '1f482-1f3fe-2640',
    '\uD83D\uDC82\uD83C\uDFFE\u2642\uFE0F': '1f482-1f3fe-2642',
    '\uD83D\uDC82\uD83C\uDFFF\u2640\uFE0F': '1f482-1f3ff-2640',
    '\uD83D\uDC82\uD83C\uDFFF\u2642\uFE0F': '1f482-1f3ff-2642',
    '\uD83C\uDFC3\uD83C\uDFFB\u2640\uFE0F': '1f3c3-1f3fb-2640',
    '\uD83C\uDFC3\uD83C\uDFFB\u2642\uFE0F': '1f3c3-1f3fb-2642',
    '\uD83C\uDFC3\uD83C\uDFFC\u2640\uFE0F': '1f3c3-1f3fc-2640',
    '\uD83C\uDFC3\uD83C\uDFFC\u2642\uFE0F': '1f3c3-1f3fc-2642',
    '\uD83C\uDFC3\uD83C\uDFFD\u2640\uFE0F': '1f3c3-1f3fd-2640',
    '\uD83C\uDFC3\uD83C\uDFFD\u2642\uFE0F': '1f3c3-1f3fd-2642',
    '\uD83C\uDFC3\uD83C\uDFFE\u2640\uFE0F': '1f3c3-1f3fe-2640',
    '\uD83C\uDFC3\uD83C\uDFFE\u2642\uFE0F': '1f3c3-1f3fe-2642',
    '\uD83C\uDFC3\uD83C\uDFFF\u2640\uFE0F': '1f3c3-1f3ff-2640',
    '\uD83C\uDFC3\uD83C\uDFFF\u2642\uFE0F': '1f3c3-1f3ff-2642',
    '\uD83C\uDFC4\uD83C\uDFFB\u2640\uFE0F': '1f3c4-1f3fb-2640',
    '\uD83C\uDFC4\uD83C\uDFFB\u2642\uFE0F': '1f3c4-1f3fb-2642',
    '\uD83C\uDFC4\uD83C\uDFFC\u2640\uFE0F': '1f3c4-1f3fc-2640',
    '\uD83C\uDFC4\uD83C\uDFFC\u2642\uFE0F': '1f3c4-1f3fc-2642',
    '\uD83C\uDFC4\uD83C\uDFFD\u2640\uFE0F': '1f3c4-1f3fd-2640',
    '\uD83C\uDFC4\uD83C\uDFFD\u2642\uFE0F': '1f3c4-1f3fd-2642',
    '\uD83C\uDFC4\uD83C\uDFFE\u2640\uFE0F': '1f3c4-1f3fe-2640',
    '\uD83C\uDFC4\uD83C\uDFFE\u2642\uFE0F': '1f3c4-1f3fe-2642',
    '\uD83C\uDFC4\uD83C\uDFFF\u2640\uFE0F': '1f3c4-1f3ff-2640',
    '\uD83C\uDFC4\uD83C\uDFFF\u2642\uFE0F': '1f3c4-1f3ff-2642',
    '\uD83C\uDFCA\uD83C\uDFFB\u2640\uFE0F': '1f3ca-1f3fb-2640',
    '\uD83C\uDFCA\uD83C\uDFFB\u2642\uFE0F': '1f3ca-1f3fb-2642',
    '\uD83C\uDFCA\uD83C\uDFFC\u2640\uFE0F': '1f3ca-1f3fc-2640',
    '\uD83C\uDFCA\uD83C\uDFFC\u2642\uFE0F': '1f3ca-1f3fc-2642',
    '\uD83C\uDFCA\uD83C\uDFFD\u2640\uFE0F': '1f3ca-1f3fd-2640',
    '\uD83C\uDFCA\uD83C\uDFFD\u2642\uFE0F': '1f3ca-1f3fd-2642',
    '\uD83C\uDFCA\uD83C\uDFFE\u2640\uFE0F': '1f3ca-1f3fe-2640',
    '\uD83C\uDFCA\uD83C\uDFFE\u2642\uFE0F': '1f3ca-1f3fe-2642',
    '\uD83C\uDFCA\uD83C\uDFFF\u2640\uFE0F': '1f3ca-1f3ff-2640',
    '\uD83C\uDFCA\uD83C\uDFFF\u2642\uFE0F': '1f3ca-1f3ff-2642',
    '\uD83D\uDC86\uD83C\uDFFB\u2640\uFE0F': '1f486-1f3fb-2640',
    '\uD83D\uDC86\uD83C\uDFFB\u2642\uFE0F': '1f486-1f3fb-2642',
    '\uD83D\uDC86\uD83C\uDFFC\u2640\uFE0F': '1f486-1f3fc-2640',
    '\uD83D\uDC86\uD83C\uDFFC\u2642\uFE0F': '1f486-1f3fc-2642',
    '\uD83D\uDC86\uD83C\uDFFD\u2640\uFE0F': '1f486-1f3fd-2640',
    '\uD83D\uDC86\uD83C\uDFFD\u2642\uFE0F': '1f486-1f3fd-2642',
    '\uD83D\uDC86\uD83C\uDFFE\u2640\uFE0F': '1f486-1f3fe-2640',
    '\uD83D\uDC86\uD83C\uDFFE\u2642\uFE0F': '1f486-1f3fe-2642',
    '\uD83D\uDC86\uD83C\uDFFF\u2640\uFE0F': '1f486-1f3ff-2640',
    '\uD83D\uDC86\uD83C\uDFFF\u2642\uFE0F': '1f486-1f3ff-2642',
    '\uD83D\uDC87\uD83C\uDFFB\u2640\uFE0F': '1f487-1f3fb-2640',
    '\uD83D\uDC87\uD83C\uDFFB\u2642\uFE0F': '1f487-1f3fb-2642',
    '\uD83D\uDC87\uD83C\uDFFC\u2640\uFE0F': '1f487-1f3fc-2640',
    '\uD83D\uDC87\uD83C\uDFFC\u2642\uFE0F': '1f487-1f3fc-2642',
    '\uD83D\uDC87\uD83C\uDFFD\u2640\uFE0F': '1f487-1f3fd-2640',
    '\uD83D\uDC87\uD83C\uDFFD\u2642\uFE0F': '1f487-1f3fd-2642',
    '\uD83D\uDC87\uD83C\uDFFE\u2640\uFE0F': '1f487-1f3fe-2640',
    '\uD83D\uDC87\uD83C\uDFFE\u2642\uFE0F': '1f487-1f3fe-2642',
    '\uD83D\uDC87\uD83C\uDFFF\u2640\uFE0F': '1f487-1f3ff-2640',
    '\uD83D\uDC87\uD83C\uDFFF\u2642\uFE0F': '1f487-1f3ff-2642',
    '\uD83D\uDEA3\uD83C\uDFFB\u2640\uFE0F': '1f6a3-1f3fb-2640',
    '\uD83D\uDEA3\uD83C\uDFFB\u2642\uFE0F': '1f6a3-1f3fb-2642',
    '\uD83D\uDEA3\uD83C\uDFFC\u2640\uFE0F': '1f6a3-1f3fc-2640',
    '\uD83D\uDEA3\uD83C\uDFFC\u2642\uFE0F': '1f6a3-1f3fc-2642',
    '\uD83D\uDEA3\uD83C\uDFFD\u2640\uFE0F': '1f6a3-1f3fd-2640',
    '\uD83D\uDEA3\uD83C\uDFFD\u2642\uFE0F': '1f6a3-1f3fd-2642',
    '\uD83D\uDEA3\uD83C\uDFFE\u2640\uFE0F': '1f6a3-1f3fe-2640',
    '\uD83D\uDEA3\uD83C\uDFFE\u2642\uFE0F': '1f6a3-1f3fe-2642',
    '\uD83D\uDEA3\uD83C\uDFFF\u2640\uFE0F': '1f6a3-1f3ff-2640',
    '\uD83D\uDEA3\uD83C\uDFFF\u2642\uFE0F': '1f6a3-1f3ff-2642',
    '\uD83D\uDEB4\uD83C\uDFFB\u2640\uFE0F': '1f6b4-1f3fb-2640',
    '\uD83D\uDEB4\uD83C\uDFFB\u2642\uFE0F': '1f6b4-1f3fb-2642',
    '\uD83D\uDEB4\uD83C\uDFFC\u2640\uFE0F': '1f6b4-1f3fc-2640',
    '\uD83D\uDEB4\uD83C\uDFFC\u2642\uFE0F': '1f6b4-1f3fc-2642',
    '\uD83D\uDEB4\uD83C\uDFFD\u2640\uFE0F': '1f6b4-1f3fd-2640',
    '\uD83D\uDEB4\uD83C\uDFFD\u2642\uFE0F': '1f6b4-1f3fd-2642',
    '\uD83D\uDEB4\uD83C\uDFFE\u2640\uFE0F': '1f6b4-1f3fe-2640',
    '\uD83D\uDEB4\uD83C\uDFFE\u2642\uFE0F': '1f6b4-1f3fe-2642',
    '\uD83D\uDEB4\uD83C\uDFFF\u2640\uFE0F': '1f6b4-1f3ff-2640',
    '\uD83D\uDEB4\uD83C\uDFFF\u2642\uFE0F': '1f6b4-1f3ff-2642',
    '\uD83D\uDEB5\uD83C\uDFFB\u2640\uFE0F': '1f6b5-1f3fb-2640',
    '\uD83D\uDEB5\uD83C\uDFFB\u2642\uFE0F': '1f6b5-1f3fb-2642',
    '\uD83D\uDEB5\uD83C\uDFFC\u2640\uFE0F': '1f6b5-1f3fc-2640',
    '\uD83D\uDEB5\uD83C\uDFFC\u2642\uFE0F': '1f6b5-1f3fc-2642',
    '\uD83D\uDEB5\uD83C\uDFFD\u2640\uFE0F': '1f6b5-1f3fd-2640',
    '\uD83D\uDEB5\uD83C\uDFFD\u2642\uFE0F': '1f6b5-1f3fd-2642',
    '\uD83D\uDEB5\uD83C\uDFFE\u2640\uFE0F': '1f6b5-1f3fe-2640',
    '\uD83D\uDEB5\uD83C\uDFFE\u2642\uFE0F': '1f6b5-1f3fe-2642',
    '\uD83D\uDEB5\uD83C\uDFFF\u2640\uFE0F': '1f6b5-1f3ff-2640',
    '\uD83D\uDEB5\uD83C\uDFFF\u2642\uFE0F': '1f6b5-1f3ff-2642',
    '\uD83D\uDEB6\uD83C\uDFFB\u2640\uFE0F': '1f6b6-1f3fb-2640',
    '\uD83D\uDEB6\uD83C\uDFFB\u2642\uFE0F': '1f6b6-1f3fb-2642',
    '\uD83D\uDEB6\uD83C\uDFFC\u2640\uFE0F': '1f6b6-1f3fc-2640',
    '\uD83D\uDEB6\uD83C\uDFFC\u2642\uFE0F': '1f6b6-1f3fc-2642',
    '\uD83D\uDEB6\uD83C\uDFFD\u2640\uFE0F': '1f6b6-1f3fd-2640',
    '\uD83D\uDEB6\uD83C\uDFFD\u2642\uFE0F': '1f6b6-1f3fd-2642',
    '\uD83D\uDEB6\uD83C\uDFFE\u2640\uFE0F': '1f6b6-1f3fe-2640',
    '\uD83D\uDEB6\uD83C\uDFFE\u2642\uFE0F': '1f6b6-1f3fe-2642',
    '\uD83D\uDEB6\uD83C\uDFFF\u2640\uFE0F': '1f6b6-1f3ff-2640',
    '\uD83D\uDEB6\uD83C\uDFFF\u2642\uFE0F': '1f6b6-1f3ff-2642',
    '\uD83E\uDD38\uD83C\uDFFB\u2640\uFE0F': '1f938-1f3fb-2640',
    '\uD83E\uDD38\uD83C\uDFFB\u2642\uFE0F': '1f938-1f3fb-2642',
    '\uD83E\uDD38\uD83C\uDFFC\u2640\uFE0F': '1f938-1f3fc-2640',
    '\uD83E\uDD38\uD83C\uDFFC\u2642\uFE0F': '1f938-1f3fc-2642',
    '\uD83E\uDD38\uD83C\uDFFD\u2640\uFE0F': '1f938-1f3fd-2640',
    '\uD83E\uDD38\uD83C\uDFFD\u2642\uFE0F': '1f938-1f3fd-2642',
    '\uD83E\uDD38\uD83C\uDFFE\u2640\uFE0F': '1f938-1f3fe-2640',
    '\uD83E\uDD38\uD83C\uDFFE\u2642\uFE0F': '1f938-1f3fe-2642',
    '\uD83E\uDD38\uD83C\uDFFF\u2640\uFE0F': '1f938-1f3ff-2640',
    '\uD83E\uDD38\uD83C\uDFFF\u2642\uFE0F': '1f938-1f3ff-2642',
    '\uD83E\uDD39\uD83C\uDFFB\u2640\uFE0F': '1f939-1f3fb-2640',
    '\uD83E\uDD39\uD83C\uDFFB\u2642\uFE0F': '1f939-1f3fb-2642',
    '\uD83E\uDD39\uD83C\uDFFC\u2640\uFE0F': '1f939-1f3fc-2640',
    '\uD83E\uDD39\uD83C\uDFFC\u2642\uFE0F': '1f939-1f3fc-2642',
    '\uD83E\uDD39\uD83C\uDFFD\u2640\uFE0F': '1f939-1f3fd-2640',
    '\uD83E\uDD39\uD83C\uDFFD\u2642\uFE0F': '1f939-1f3fd-2642',
    '\uD83E\uDD39\uD83C\uDFFE\u2640\uFE0F': '1f939-1f3fe-2640',
    '\uD83E\uDD39\uD83C\uDFFE\u2642\uFE0F': '1f939-1f3fe-2642',
    '\uD83E\uDD39\uD83C\uDFFF\u2640\uFE0F': '1f939-1f3ff-2640',
    '\uD83E\uDD39\uD83C\uDFFF\u2642\uFE0F': '1f939-1f3ff-2642',
    '\uD83E\uDD3D\uD83C\uDFFB\u2640\uFE0F': '1f93d-1f3fb-2640',
    '\uD83E\uDD3D\uD83C\uDFFB\u2642\uFE0F': '1f93d-1f3fb-2642',
    '\uD83E\uDD3D\uD83C\uDFFC\u2640\uFE0F': '1f93d-1f3fc-2640',
    '\uD83E\uDD3D\uD83C\uDFFC\u2642\uFE0F': '1f93d-1f3fc-2642',
    '\uD83E\uDD3D\uD83C\uDFFD\u2640\uFE0F': '1f93d-1f3fd-2640',
    '\uD83E\uDD3D\uD83C\uDFFD\u2642\uFE0F': '1f93d-1f3fd-2642',
    '\uD83E\uDD3D\uD83C\uDFFE\u2640\uFE0F': '1f93d-1f3fe-2640',
    '\uD83E\uDD3D\uD83C\uDFFE\u2642\uFE0F': '1f93d-1f3fe-2642',
    '\uD83E\uDD3D\uD83C\uDFFF\u2640\uFE0F': '1f93d-1f3ff-2640',
    '\uD83E\uDD3D\uD83C\uDFFF\u2642\uFE0F': '1f93d-1f3ff-2642',
    '\uD83E\uDD3E\uD83C\uDFFB\u2640\uFE0F': '1f93e-1f3fb-2640',
    '\uD83E\uDD3E\uD83C\uDFFB\u2642\uFE0F': '1f93e-1f3fb-2642',
    '\uD83E\uDD3E\uD83C\uDFFC\u2640\uFE0F': '1f93e-1f3fc-2640',
    '\uD83E\uDD3E\uD83C\uDFFC\u2642\uFE0F': '1f93e-1f3fc-2642',
    '\uD83E\uDD3E\uD83C\uDFFD\u2640\uFE0F': '1f93e-1f3fd-2640',
    '\uD83E\uDD3E\uD83C\uDFFD\u2642\uFE0F': '1f93e-1f3fd-2642',
    '\uD83E\uDD3E\uD83C\uDFFE\u2640\uFE0F': '1f93e-1f3fe-2640',
    '\uD83E\uDD3E\uD83C\uDFFE\u2642\uFE0F': '1f93e-1f3fe-2642',
    '\uD83E\uDD3E\uD83C\uDFFF\u2640\uFE0F': '1f93e-1f3ff-2640',
    '\uD83E\uDD3E\uD83C\uDFFF\u2642\uFE0F': '1f93e-1f3ff-2642',
    '\uD83D\uDC81\uD83C\uDFFB\u2640\uFE0F': '1f481-1f3fb-2640',
    '\uD83D\uDC81\uD83C\uDFFB\u2642\uFE0F': '1f481-1f3fb-2642',
    '\uD83D\uDC81\uD83C\uDFFC\u2640\uFE0F': '1f481-1f3fc-2640',
    '\uD83D\uDC81\uD83C\uDFFC\u2642\uFE0F': '1f481-1f3fc-2642',
    '\uD83D\uDC81\uD83C\uDFFD\u2640\uFE0F': '1f481-1f3fd-2640',
    '\uD83D\uDC81\uD83C\uDFFD\u2642\uFE0F': '1f481-1f3fd-2642',
    '\uD83D\uDC81\uD83C\uDFFE\u2640\uFE0F': '1f481-1f3fe-2640',
    '\uD83D\uDC81\uD83C\uDFFE\u2642\uFE0F': '1f481-1f3fe-2642',
    '\uD83D\uDC81\uD83C\uDFFF\u2640\uFE0F': '1f481-1f3ff-2640',
    '\uD83D\uDC81\uD83C\uDFFF\u2642\uFE0F': '1f481-1f3ff-2642',
    '\uD83D\uDE45\uD83C\uDFFB\u2640\uFE0F': '1f645-1f3fb-2640',
    '\uD83D\uDE45\uD83C\uDFFB\u2642\uFE0F': '1f645-1f3fb-2642',
    '\uD83D\uDE45\uD83C\uDFFC\u2640\uFE0F': '1f645-1f3fc-2640',
    '\uD83D\uDE45\uD83C\uDFFC\u2642\uFE0F': '1f645-1f3fc-2642',
    '\uD83D\uDE45\uD83C\uDFFD\u2640\uFE0F': '1f645-1f3fd-2640',
    '\uD83D\uDE45\uD83C\uDFFD\u2642\uFE0F': '1f645-1f3fd-2642',
    '\uD83D\uDE45\uD83C\uDFFE\u2640\uFE0F': '1f645-1f3fe-2640',
    '\uD83D\uDE45\uD83C\uDFFE\u2642\uFE0F': '1f645-1f3fe-2642',
    '\uD83D\uDE45\uD83C\uDFFF\u2640\uFE0F': '1f645-1f3ff-2640',
    '\uD83D\uDE45\uD83C\uDFFF\u2642\uFE0F': '1f645-1f3ff-2642',
    '\uD83D\uDE46\uD83C\uDFFB\u2640\uFE0F': '1f646-1f3fb-2640',
    '\uD83D\uDE46\uD83C\uDFFB\u2642\uFE0F': '1f646-1f3fb-2642',
    '\uD83D\uDE46\uD83C\uDFFC\u2640\uFE0F': '1f646-1f3fc-2640',
    '\uD83D\uDE46\uD83C\uDFFC\u2642\uFE0F': '1f646-1f3fc-2642',
    '\uD83D\uDE46\uD83C\uDFFD\u2640\uFE0F': '1f646-1f3fd-2640',
    '\uD83D\uDE46\uD83C\uDFFD\u2642\uFE0F': '1f646-1f3fd-2642',
    '\uD83D\uDE46\uD83C\uDFFE\u2640\uFE0F': '1f646-1f3fe-2640',
    '\uD83D\uDE46\uD83C\uDFFE\u2642\uFE0F': '1f646-1f3fe-2642',
    '\uD83D\uDE46\uD83C\uDFFF\u2640\uFE0F': '1f646-1f3ff-2640',
    '\uD83D\uDE46\uD83C\uDFFF\u2642\uFE0F': '1f646-1f3ff-2642',
    '\uD83D\uDE47\uD83C\uDFFB\u2640\uFE0F': '1f647-1f3fb-2640',
    '\uD83D\uDE47\uD83C\uDFFB\u2642\uFE0F': '1f647-1f3fb-2642',
    '\uD83D\uDE47\uD83C\uDFFC\u2640\uFE0F': '1f647-1f3fc-2640',
    '\uD83D\uDE47\uD83C\uDFFC\u2642\uFE0F': '1f647-1f3fc-2642',
    '\uD83D\uDE47\uD83C\uDFFD\u2640\uFE0F': '1f647-1f3fd-2640',
    '\uD83D\uDE47\uD83C\uDFFD\u2642\uFE0F': '1f647-1f3fd-2642',
    '\uD83D\uDE47\uD83C\uDFFE\u2640\uFE0F': '1f647-1f3fe-2640',
    '\uD83D\uDE47\uD83C\uDFFE\u2642\uFE0F': '1f647-1f3fe-2642',
    '\uD83D\uDE47\uD83C\uDFFF\u2640\uFE0F': '1f647-1f3ff-2640',
    '\uD83D\uDE47\uD83C\uDFFF\u2642\uFE0F': '1f647-1f3ff-2642',
    '\uD83D\uDE4B\uD83C\uDFFB\u2640\uFE0F': '1f64b-1f3fb-2640',
    '\uD83D\uDE4B\uD83C\uDFFB\u2642\uFE0F': '1f64b-1f3fb-2642',
    '\uD83D\uDE4B\uD83C\uDFFC\u2640\uFE0F': '1f64b-1f3fc-2640',
    '\uD83D\uDE4B\uD83C\uDFFC\u2642\uFE0F': '1f64b-1f3fc-2642',
    '\uD83D\uDE4B\uD83C\uDFFD\u2640\uFE0F': '1f64b-1f3fd-2640',
    '\uD83D\uDE4B\uD83C\uDFFD\u2642\uFE0F': '1f64b-1f3fd-2642',
    '\uD83D\uDE4B\uD83C\uDFFE\u2640\uFE0F': '1f64b-1f3fe-2640',
    '\uD83D\uDE4B\uD83C\uDFFE\u2642\uFE0F': '1f64b-1f3fe-2642',
    '\uD83D\uDE4B\uD83C\uDFFF\u2640\uFE0F': '1f64b-1f3ff-2640',
    '\uD83D\uDE4B\uD83C\uDFFF\u2642\uFE0F': '1f64b-1f3ff-2642',
    '\uD83D\uDE4D\uD83C\uDFFB\u2640\uFE0F': '1f64d-1f3fb-2640',
    '\uD83D\uDE4D\uD83C\uDFFB\u2642\uFE0F': '1f64d-1f3fb-2642',
    '\uD83D\uDE4D\uD83C\uDFFC\u2640\uFE0F': '1f64d-1f3fc-2640',
    '\uD83D\uDE4D\uD83C\uDFFC\u2642\uFE0F': '1f64d-1f3fc-2642',
    '\uD83D\uDE4D\uD83C\uDFFD\u2640\uFE0F': '1f64d-1f3fd-2640',
    '\uD83D\uDE4D\uD83C\uDFFD\u2642\uFE0F': '1f64d-1f3fd-2642',
    '\uD83D\uDE4D\uD83C\uDFFE\u2640\uFE0F': '1f64d-1f3fe-2640',
    '\uD83D\uDE4D\uD83C\uDFFE\u2642\uFE0F': '1f64d-1f3fe-2642',
    '\uD83D\uDE4D\uD83C\uDFFF\u2640\uFE0F': '1f64d-1f3ff-2640',
    '\uD83D\uDE4D\uD83C\uDFFF\u2642\uFE0F': '1f64d-1f3ff-2642',
    '\uD83D\uDE4E\uD83C\uDFFB\u2640\uFE0F': '1f64e-1f3fb-2640',
    '\uD83D\uDE4E\uD83C\uDFFB\u2642\uFE0F': '1f64e-1f3fb-2642',
    '\uD83D\uDE4E\uD83C\uDFFC\u2640\uFE0F': '1f64e-1f3fc-2640',
    '\uD83D\uDE4E\uD83C\uDFFC\u2642\uFE0F': '1f64e-1f3fc-2642',
    '\uD83D\uDE4E\uD83C\uDFFD\u2640\uFE0F': '1f64e-1f3fd-2640',
    '\uD83D\uDE4E\uD83C\uDFFD\u2642\uFE0F': '1f64e-1f3fd-2642',
    '\uD83D\uDE4E\uD83C\uDFFE\u2640\uFE0F': '1f64e-1f3fe-2640',
    '\uD83D\uDE4E\uD83C\uDFFE\u2642\uFE0F': '1f64e-1f3fe-2642',
    '\uD83D\uDE4E\uD83C\uDFFF\u2640\uFE0F': '1f64e-1f3ff-2640',
    '\uD83D\uDE4E\uD83C\uDFFF\u2642\uFE0F': '1f64e-1f3ff-2642',
    '\uD83E\uDD26\uD83C\uDFFB\u2640\uFE0F': '1f926-1f3fb-2640',
    '\uD83E\uDD26\uD83C\uDFFB\u2642\uFE0F': '1f926-1f3fb-2642',
    '\uD83E\uDD26\uD83C\uDFFC\u2640\uFE0F': '1f926-1f3fc-2640',
    '\uD83E\uDD26\uD83C\uDFFC\u2642\uFE0F': '1f926-1f3fc-2642',
    '\uD83E\uDD26\uD83C\uDFFD\u2640\uFE0F': '1f926-1f3fd-2640',
    '\uD83E\uDD26\uD83C\uDFFD\u2642\uFE0F': '1f926-1f3fd-2642',
    '\uD83E\uDD26\uD83C\uDFFE\u2640\uFE0F': '1f926-1f3fe-2640',
    '\uD83E\uDD26\uD83C\uDFFE\u2642\uFE0F': '1f926-1f3fe-2642',
    '\uD83E\uDD26\uD83C\uDFFF\u2640\uFE0F': '1f926-1f3ff-2640',
    '\uD83E\uDD26\uD83C\uDFFF\u2642\uFE0F': '1f926-1f3ff-2642',
    '\uD83E\uDD37\uD83C\uDFFB\u2640\uFE0F': '1f937-1f3fb-2640',
    '\uD83E\uDD37\uD83C\uDFFB\u2642\uFE0F': '1f937-1f3fb-2642',
    '\uD83E\uDD37\uD83C\uDFFC\u2640\uFE0F': '1f937-1f3fc-2640',
    '\uD83E\uDD37\uD83C\uDFFC\u2642\uFE0F': '1f937-1f3fc-2642',
    '\uD83E\uDD37\uD83C\uDFFD\u2640\uFE0F': '1f937-1f3fd-2640',
    '\uD83E\uDD37\uD83C\uDFFD\u2642\uFE0F': '1f937-1f3fd-2642',
    '\uD83E\uDD37\uD83C\uDFFE\u2640\uFE0F': '1f937-1f3fe-2640',
    '\uD83E\uDD37\uD83C\uDFFE\u2642\uFE0F': '1f937-1f3fe-2642',
    '\uD83E\uDD37\uD83C\uDFFF\u2640\uFE0F': '1f937-1f3ff-2640',
    '\uD83E\uDD37\uD83C\uDFFF\u2642\uFE0F': '1f937-1f3ff-2642',
    '\uD83D\uDC41\uFE0F\uD83D\uDDE8\uFE0F': '1f441-1f5e8',
    '\uD83E\uDDD9\uD83C\uDFFB\u200D\u2640': '1f9d9-1f3fb-2640',
    '\uD83E\uDDD9\uD83C\uDFFB\u2640\uFE0F': '1f9d9-1f3fb-2640',
    '\uD83E\uDDD9\uD83C\uDFFB\u200D\u2642': '1f9d9-1f3fb-2642',
    '\uD83E\uDDD9\uD83C\uDFFB\u2642\uFE0F': '1f9d9-1f3fb-2642',
    '\uD83E\uDDD9\uD83C\uDFFC\u200D\u2640': '1f9d9-1f3fc-2640',
    '\uD83E\uDDD9\uD83C\uDFFC\u2640\uFE0F': '1f9d9-1f3fc-2640',
    '\uD83E\uDDD9\uD83C\uDFFC\u200D\u2642': '1f9d9-1f3fc-2642',
    '\uD83E\uDDD9\uD83C\uDFFC\u2642\uFE0F': '1f9d9-1f3fc-2642',
    '\uD83E\uDDD9\uD83C\uDFFD\u200D\u2640': '1f9d9-1f3fd-2640',
    '\uD83E\uDDD9\uD83C\uDFFD\u2640\uFE0F': '1f9d9-1f3fd-2640',
    '\uD83E\uDDD9\uD83C\uDFFD\u200D\u2642': '1f9d9-1f3fd-2642',
    '\uD83E\uDDD9\uD83C\uDFFD\u2642\uFE0F': '1f9d9-1f3fd-2642',
    '\uD83E\uDDD9\uD83C\uDFFE\u200D\u2640': '1f9d9-1f3fe-2640',
    '\uD83E\uDDD9\uD83C\uDFFE\u2640\uFE0F': '1f9d9-1f3fe-2640',
    '\uD83E\uDDD9\uD83C\uDFFE\u200D\u2642': '1f9d9-1f3fe-2642',
    '\uD83E\uDDD9\uD83C\uDFFE\u2642\uFE0F': '1f9d9-1f3fe-2642',
    '\uD83E\uDDD9\uD83C\uDFFF\u200D\u2640': '1f9d9-1f3ff-2640',
    '\uD83E\uDDD9\uD83C\uDFFF\u2640\uFE0F': '1f9d9-1f3ff-2640',
    '\uD83E\uDDD9\uD83C\uDFFF\u200D\u2642': '1f9d9-1f3ff-2642',
    '\uD83E\uDDD9\uD83C\uDFFF\u2642\uFE0F': '1f9d9-1f3ff-2642',
    '\uD83E\uDDDA\uD83C\uDFFB\u200D\u2640': '1f9da-1f3fb-2640',
    '\uD83E\uDDDA\uD83C\uDFFB\u2640\uFE0F': '1f9da-1f3fb-2640',
    '\uD83E\uDDDA\uD83C\uDFFB\u200D\u2642': '1f9da-1f3fb-2642',
    '\uD83E\uDDDA\uD83C\uDFFB\u2642\uFE0F': '1f9da-1f3fb-2642',
    '\uD83E\uDDDA\uD83C\uDFFC\u200D\u2640': '1f9da-1f3fc-2640',
    '\uD83E\uDDDA\uD83C\uDFFC\u2640\uFE0F': '1f9da-1f3fc-2640',
    '\uD83E\uDDDA\uD83C\uDFFC\u200D\u2642': '1f9da-1f3fc-2642',
    '\uD83E\uDDDA\uD83C\uDFFC\u2642\uFE0F': '1f9da-1f3fc-2642',
    '\uD83E\uDDDA\uD83C\uDFFD\u200D\u2640': '1f9da-1f3fd-2640',
    '\uD83E\uDDDA\uD83C\uDFFD\u2640\uFE0F': '1f9da-1f3fd-2640',
    '\uD83E\uDDDA\uD83C\uDFFD\u200D\u2642': '1f9da-1f3fd-2642',
    '\uD83E\uDDDA\uD83C\uDFFD\u2642\uFE0F': '1f9da-1f3fd-2642',
    '\uD83E\uDDDA\uD83C\uDFFE\u200D\u2640': '1f9da-1f3fe-2640',
    '\uD83E\uDDDA\uD83C\uDFFE\u2640\uFE0F': '1f9da-1f3fe-2640',
    '\uD83E\uDDDA\uD83C\uDFFE\u200D\u2642': '1f9da-1f3fe-2642',
    '\uD83E\uDDDA\uD83C\uDFFE\u2642\uFE0F': '1f9da-1f3fe-2642',
    '\uD83E\uDDDA\uD83C\uDFFF\u200D\u2640': '1f9da-1f3ff-2640',
    '\uD83E\uDDDA\uD83C\uDFFF\u2640\uFE0F': '1f9da-1f3ff-2640',
    '\uD83E\uDDDA\uD83C\uDFFF\u200D\u2642': '1f9da-1f3ff-2642',
    '\uD83E\uDDDA\uD83C\uDFFF\u2642\uFE0F': '1f9da-1f3ff-2642',
    '\uD83E\uDDDB\uD83C\uDFFB\u200D\u2640': '1f9db-1f3fb-2640',
    '\uD83E\uDDDB\uD83C\uDFFB\u2640\uFE0F': '1f9db-1f3fb-2640',
    '\uD83E\uDDDB\uD83C\uDFFB\u200D\u2642': '1f9db-1f3fb-2642',
    '\uD83E\uDDDB\uD83C\uDFFB\u2642\uFE0F': '1f9db-1f3fb-2642',
    '\uD83E\uDDDB\uD83C\uDFFC\u200D\u2640': '1f9db-1f3fc-2640',
    '\uD83E\uDDDB\uD83C\uDFFC\u2640\uFE0F': '1f9db-1f3fc-2640',
    '\uD83E\uDDDB\uD83C\uDFFC\u200D\u2642': '1f9db-1f3fc-2642',
    '\uD83E\uDDDB\uD83C\uDFFC\u2642\uFE0F': '1f9db-1f3fc-2642',
    '\uD83E\uDDDB\uD83C\uDFFD\u200D\u2640': '1f9db-1f3fd-2640',
    '\uD83E\uDDDB\uD83C\uDFFD\u2640\uFE0F': '1f9db-1f3fd-2640',
    '\uD83E\uDDDB\uD83C\uDFFD\u200D\u2642': '1f9db-1f3fd-2642',
    '\uD83E\uDDDB\uD83C\uDFFD\u2642\uFE0F': '1f9db-1f3fd-2642',
    '\uD83E\uDDDB\uD83C\uDFFE\u200D\u2640': '1f9db-1f3fe-2640',
    '\uD83E\uDDDB\uD83C\uDFFE\u2640\uFE0F': '1f9db-1f3fe-2640',
    '\uD83E\uDDDB\uD83C\uDFFE\u200D\u2642': '1f9db-1f3fe-2642',
    '\uD83E\uDDDB\uD83C\uDFFE\u2642\uFE0F': '1f9db-1f3fe-2642',
    '\uD83E\uDDDB\uD83C\uDFFF\u200D\u2640': '1f9db-1f3ff-2640',
    '\uD83E\uDDDB\uD83C\uDFFF\u2640\uFE0F': '1f9db-1f3ff-2640',
    '\uD83E\uDDDB\uD83C\uDFFF\u200D\u2642': '1f9db-1f3ff-2642',
    '\uD83E\uDDDB\uD83C\uDFFF\u2642\uFE0F': '1f9db-1f3ff-2642',
    '\uD83E\uDDDC\uD83C\uDFFB\u200D\u2640': '1f9dc-1f3fb-2640',
    '\uD83E\uDDDC\uD83C\uDFFB\u2640\uFE0F': '1f9dc-1f3fb-2640',
    '\uD83E\uDDDC\uD83C\uDFFB\u200D\u2642': '1f9dc-1f3fb-2642',
    '\uD83E\uDDDC\uD83C\uDFFB\u2642\uFE0F': '1f9dc-1f3fb-2642',
    '\uD83E\uDDDC\uD83C\uDFFC\u200D\u2640': '1f9dc-1f3fc-2640',
    '\uD83E\uDDDC\uD83C\uDFFC\u2640\uFE0F': '1f9dc-1f3fc-2640',
    '\uD83E\uDDDC\uD83C\uDFFC\u200D\u2642': '1f9dc-1f3fc-2642',
    '\uD83E\uDDDC\uD83C\uDFFC\u2642\uFE0F': '1f9dc-1f3fc-2642',
    '\uD83E\uDDDC\uD83C\uDFFD\u200D\u2640': '1f9dc-1f3fd-2640',
    '\uD83E\uDDDC\uD83C\uDFFD\u2640\uFE0F': '1f9dc-1f3fd-2640',
    '\uD83E\uDDDC\uD83C\uDFFD\u200D\u2642': '1f9dc-1f3fd-2642',
    '\uD83E\uDDDC\uD83C\uDFFD\u2642\uFE0F': '1f9dc-1f3fd-2642',
    '\uD83E\uDDDC\uD83C\uDFFE\u200D\u2640': '1f9dc-1f3fe-2640',
    '\uD83E\uDDDC\uD83C\uDFFE\u2640\uFE0F': '1f9dc-1f3fe-2640',
    '\uD83E\uDDDC\uD83C\uDFFE\u200D\u2642': '1f9dc-1f3fe-2642',
    '\uD83E\uDDDC\uD83C\uDFFE\u2642\uFE0F': '1f9dc-1f3fe-2642',
    '\uD83E\uDDDC\uD83C\uDFFF\u200D\u2640': '1f9dc-1f3ff-2640',
    '\uD83E\uDDDC\uD83C\uDFFF\u2640\uFE0F': '1f9dc-1f3ff-2640',
    '\uD83E\uDDDC\uD83C\uDFFF\u200D\u2642': '1f9dc-1f3ff-2642',
    '\uD83E\uDDDC\uD83C\uDFFF\u2642\uFE0F': '1f9dc-1f3ff-2642',
    '\uD83E\uDDDD\uD83C\uDFFB\u200D\u2640': '1f9dd-1f3fb-2640',
    '\uD83E\uDDDD\uD83C\uDFFB\u2640\uFE0F': '1f9dd-1f3fb-2640',
    '\uD83E\uDDDD\uD83C\uDFFB\u200D\u2642': '1f9dd-1f3fb-2642',
    '\uD83E\uDDDD\uD83C\uDFFB\u2642\uFE0F': '1f9dd-1f3fb-2642',
    '\uD83E\uDDDD\uD83C\uDFFC\u200D\u2640': '1f9dd-1f3fc-2640',
    '\uD83E\uDDDD\uD83C\uDFFC\u2640\uFE0F': '1f9dd-1f3fc-2640',
    '\uD83E\uDDDD\uD83C\uDFFC\u200D\u2642': '1f9dd-1f3fc-2642',
    '\uD83E\uDDDD\uD83C\uDFFC\u2642\uFE0F': '1f9dd-1f3fc-2642',
    '\uD83E\uDDDD\uD83C\uDFFD\u200D\u2640': '1f9dd-1f3fd-2640',
    '\uD83E\uDDDD\uD83C\uDFFD\u2640\uFE0F': '1f9dd-1f3fd-2640',
    '\uD83E\uDDDD\uD83C\uDFFD\u200D\u2642': '1f9dd-1f3fd-2642',
    '\uD83E\uDDDD\uD83C\uDFFD\u2642\uFE0F': '1f9dd-1f3fd-2642',
    '\uD83E\uDDDD\uD83C\uDFFE\u200D\u2640': '1f9dd-1f3fe-2640',
    '\uD83E\uDDDD\uD83C\uDFFE\u2640\uFE0F': '1f9dd-1f3fe-2640',
    '\uD83E\uDDDD\uD83C\uDFFE\u200D\u2642': '1f9dd-1f3fe-2642',
    '\uD83E\uDDDD\uD83C\uDFFE\u2642\uFE0F': '1f9dd-1f3fe-2642',
    '\uD83E\uDDDD\uD83C\uDFFF\u200D\u2640': '1f9dd-1f3ff-2640',
    '\uD83E\uDDDD\uD83C\uDFFF\u2640\uFE0F': '1f9dd-1f3ff-2640',
    '\uD83E\uDDDD\uD83C\uDFFF\u200D\u2642': '1f9dd-1f3ff-2642',
    '\uD83E\uDDDD\uD83C\uDFFF\u2642\uFE0F': '1f9dd-1f3ff-2642',
    '\uD83E\uDDD6\uD83C\uDFFB\u200D\u2640': '1f9d6-1f3fb-2640',
    '\uD83E\uDDD6\uD83C\uDFFB\u2640\uFE0F': '1f9d6-1f3fb-2640',
    '\uD83E\uDDD6\uD83C\uDFFB\u200D\u2642': '1f9d6-1f3fb-2642',
    '\uD83E\uDDD6\uD83C\uDFFB\u2642\uFE0F': '1f9d6-1f3fb-2642',
    '\uD83E\uDDD6\uD83C\uDFFC\u200D\u2640': '1f9d6-1f3fc-2640',
    '\uD83E\uDDD6\uD83C\uDFFC\u2640\uFE0F': '1f9d6-1f3fc-2640',
    '\uD83E\uDDD6\uD83C\uDFFC\u200D\u2642': '1f9d6-1f3fc-2642',
    '\uD83E\uDDD6\uD83C\uDFFC\u2642\uFE0F': '1f9d6-1f3fc-2642',
    '\uD83E\uDDD6\uD83C\uDFFD\u200D\u2640': '1f9d6-1f3fd-2640',
    '\uD83E\uDDD6\uD83C\uDFFD\u2640\uFE0F': '1f9d6-1f3fd-2640',
    '\uD83E\uDDD6\uD83C\uDFFD\u200D\u2642': '1f9d6-1f3fd-2642',
    '\uD83E\uDDD6\uD83C\uDFFD\u2642\uFE0F': '1f9d6-1f3fd-2642',
    '\uD83E\uDDD6\uD83C\uDFFE\u200D\u2640': '1f9d6-1f3fe-2640',
    '\uD83E\uDDD6\uD83C\uDFFE\u2640\uFE0F': '1f9d6-1f3fe-2640',
    '\uD83E\uDDD6\uD83C\uDFFE\u200D\u2642': '1f9d6-1f3fe-2642',
    '\uD83E\uDDD6\uD83C\uDFFE\u2642\uFE0F': '1f9d6-1f3fe-2642',
    '\uD83E\uDDD6\uD83C\uDFFF\u200D\u2640': '1f9d6-1f3ff-2640',
    '\uD83E\uDDD6\uD83C\uDFFF\u2640\uFE0F': '1f9d6-1f3ff-2640',
    '\uD83E\uDDD6\uD83C\uDFFF\u200D\u2642': '1f9d6-1f3ff-2642',
    '\uD83E\uDDD6\uD83C\uDFFF\u2642\uFE0F': '1f9d6-1f3ff-2642',
    '\uD83E\uDDD7\uD83C\uDFFB\u200D\u2640': '1f9d7-1f3fb-2640',
    '\uD83E\uDDD7\uD83C\uDFFB\u2640\uFE0F': '1f9d7-1f3fb-2640',
    '\uD83E\uDDD7\uD83C\uDFFB\u200D\u2642': '1f9d7-1f3fb-2642',
    '\uD83E\uDDD7\uD83C\uDFFB\u2642\uFE0F': '1f9d7-1f3fb-2642',
    '\uD83E\uDDD7\uD83C\uDFFC\u200D\u2640': '1f9d7-1f3fc-2640',
    '\uD83E\uDDD7\uD83C\uDFFC\u2640\uFE0F': '1f9d7-1f3fc-2640',
    '\uD83E\uDDD7\uD83C\uDFFC\u200D\u2642': '1f9d7-1f3fc-2642',
    '\uD83E\uDDD7\uD83C\uDFFC\u2642\uFE0F': '1f9d7-1f3fc-2642',
    '\uD83E\uDDD7\uD83C\uDFFD\u200D\u2640': '1f9d7-1f3fd-2640',
    '\uD83E\uDDD7\uD83C\uDFFD\u2640\uFE0F': '1f9d7-1f3fd-2640',
    '\uD83E\uDDD7\uD83C\uDFFD\u200D\u2642': '1f9d7-1f3fd-2642',
    '\uD83E\uDDD7\uD83C\uDFFD\u2642\uFE0F': '1f9d7-1f3fd-2642',
    '\uD83E\uDDD7\uD83C\uDFFE\u200D\u2640': '1f9d7-1f3fe-2640',
    '\uD83E\uDDD7\uD83C\uDFFE\u2640\uFE0F': '1f9d7-1f3fe-2640',
    '\uD83E\uDDD7\uD83C\uDFFE\u200D\u2642': '1f9d7-1f3fe-2642',
    '\uD83E\uDDD7\uD83C\uDFFE\u2642\uFE0F': '1f9d7-1f3fe-2642',
    '\uD83E\uDDD7\uD83C\uDFFF\u200D\u2640': '1f9d7-1f3ff-2640',
    '\uD83E\uDDD7\uD83C\uDFFF\u2640\uFE0F': '1f9d7-1f3ff-2640',
    '\uD83E\uDDD7\uD83C\uDFFF\u200D\u2642': '1f9d7-1f3ff-2642',
    '\uD83E\uDDD7\uD83C\uDFFF\u2642\uFE0F': '1f9d7-1f3ff-2642',
    '\uD83E\uDDD8\uD83C\uDFFB\u200D\u2640': '1f9d8-1f3fb-2640',
    '\uD83E\uDDD8\uD83C\uDFFB\u2640\uFE0F': '1f9d8-1f3fb-2640',
    '\uD83E\uDDD8\uD83C\uDFFB\u200D\u2642': '1f9d8-1f3fb-2642',
    '\uD83E\uDDD8\uD83C\uDFFB\u2642\uFE0F': '1f9d8-1f3fb-2642',
    '\uD83E\uDDD8\uD83C\uDFFC\u200D\u2640': '1f9d8-1f3fc-2640',
    '\uD83E\uDDD8\uD83C\uDFFC\u2640\uFE0F': '1f9d8-1f3fc-2640',
    '\uD83E\uDDD8\uD83C\uDFFC\u200D\u2642': '1f9d8-1f3fc-2642',
    '\uD83E\uDDD8\uD83C\uDFFC\u2642\uFE0F': '1f9d8-1f3fc-2642',
    '\uD83E\uDDD8\uD83C\uDFFD\u200D\u2640': '1f9d8-1f3fd-2640',
    '\uD83E\uDDD8\uD83C\uDFFD\u2640\uFE0F': '1f9d8-1f3fd-2640',
    '\uD83E\uDDD8\uD83C\uDFFD\u200D\u2642': '1f9d8-1f3fd-2642',
    '\uD83E\uDDD8\uD83C\uDFFD\u2642\uFE0F': '1f9d8-1f3fd-2642',
    '\uD83E\uDDD8\uD83C\uDFFE\u200D\u2640': '1f9d8-1f3fe-2640',
    '\uD83E\uDDD8\uD83C\uDFFE\u2640\uFE0F': '1f9d8-1f3fe-2640',
    '\uD83E\uDDD8\uD83C\uDFFE\u200D\u2642': '1f9d8-1f3fe-2642',
    '\uD83E\uDDD8\uD83C\uDFFE\u2642\uFE0F': '1f9d8-1f3fe-2642',
    '\uD83E\uDDD8\uD83C\uDFFF\u200D\u2640': '1f9d8-1f3ff-2640',
    '\uD83E\uDDD8\uD83C\uDFFF\u2640\uFE0F': '1f9d8-1f3ff-2640',
    '\uD83E\uDDD8\uD83C\uDFFF\u200D\u2642': '1f9d8-1f3ff-2642',
    '\uD83E\uDDD8\uD83C\uDFFF\u2642\uFE0F': '1f9d8-1f3ff-2642',
    '\uD83D\uDC41\u200D\uD83D\uDDE8\uFE0F': '1f441-1f5e8',
    '\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8': '1f441-1f5e8',
    '\u26F9\uD83C\uDFFF\u200D\u2642': '26f9-1f3ff-2642',
    '\u26F9\uD83C\uDFFE\u200D\u2642': '26f9-1f3fe-2642',
    '\u26F9\uD83C\uDFFD\u200D\u2642': '26f9-1f3fd-2642',
    '\u26F9\uD83C\uDFFC\u200D\u2642': '26f9-1f3fc-2642',
    '\u26F9\uD83C\uDFFB\u200D\u2642': '26f9-1f3fb-2642',
    '\u26F9\uD83C\uDFFF\u200D\u2640': '26f9-1f3ff-2640',
    '\u26F9\uD83C\uDFFE\u200D\u2640': '26f9-1f3fe-2640',
    '\u26F9\uD83C\uDFFD\u200D\u2640': '26f9-1f3fd-2640',
    '\u26F9\uD83C\uDFFC\u200D\u2640': '26f9-1f3fc-2640',
    '\u26F9\uD83C\uDFFB\u200D\u2640': '26f9-1f3fb-2640',
    '\uD83D\uDC68\u200D\u2695\uFE0F': '1f468-2695',
    '\uD83D\uDC68\u200D\u2696\uFE0F': '1f468-2696',
    '\uD83D\uDC68\u200D\u2708\uFE0F': '1f468-2708',
    '\uD83D\uDC69\u200D\u2695\uFE0F': '1f469-2695',
    '\uD83D\uDC69\u200D\u2696\uFE0F': '1f469-2696',
    '\uD83D\uDC69\u200D\u2708\uFE0F': '1f469-2708',
    '\uD83D\uDC6E\u200D\u2640\uFE0F': '1f46e-2640',
    '\uD83D\uDC6E\u200D\u2642\uFE0F': '1f46e-2642',
    '\uD83D\uDC71\u200D\u2640\uFE0F': '1f471-2640',
    '\uD83D\uDC71\u200D\u2642\uFE0F': '1f471-2642',
    '\uD83D\uDC73\u200D\u2640\uFE0F': '1f473-2640',
    '\uD83D\uDC73\u200D\u2642\uFE0F': '1f473-2642',
    '\uD83D\uDC77\u200D\u2640\uFE0F': '1f477-2640',
    '\uD83D\uDC77\u200D\u2642\uFE0F': '1f477-2642',
    '\uD83D\uDC82\u200D\u2640\uFE0F': '1f482-2640',
    '\uD83D\uDC82\u200D\u2642\uFE0F': '1f482-2642',
    '\uD83D\uDD75\uFE0F\u2640\uFE0F': '1f575-2640',
    '\uD83D\uDD75\uFE0F\u2642\uFE0F': '1f575-2642',
    '\uD83C\uDFC3\u200D\u2640\uFE0F': '1f3c3-2640',
    '\uD83C\uDFC3\u200D\u2642\uFE0F': '1f3c3-2642',
    '\uD83C\uDFC4\u200D\u2640\uFE0F': '1f3c4-2640',
    '\uD83C\uDFC4\u200D\u2642\uFE0F': '1f3c4-2642',
    '\uD83C\uDFCA\u200D\u2640\uFE0F': '1f3ca-2640',
    '\uD83C\uDFCA\u200D\u2642\uFE0F': '1f3ca-2642',
    '\uD83C\uDFCB\uFE0F\u2640\uFE0F': '1f3cb-2640',
    '\uD83C\uDFCB\uFE0F\u2642\uFE0F': '1f3cb-2642',
    '\uD83C\uDFCC\uFE0F\u2640\uFE0F': '1f3cc-2640',
    '\uD83C\uDFCC\uFE0F\u2642\uFE0F': '1f3cc-2642',
    '\uD83D\uDC6F\u200D\u2640\uFE0F': '1f46f-2640',
    '\uD83D\uDC6F\u200D\u2642\uFE0F': '1f46f-2642',
    '\uD83D\uDC86\u200D\u2640\uFE0F': '1f486-2640',
    '\uD83D\uDC86\u200D\u2642\uFE0F': '1f486-2642',
    '\uD83D\uDC87\u200D\u2640\uFE0F': '1f487-2640',
    '\uD83D\uDC87\u200D\u2642\uFE0F': '1f487-2642',
    '\uD83D\uDEA3\u200D\u2640\uFE0F': '1f6a3-2640',
    '\uD83D\uDEA3\u200D\u2642\uFE0F': '1f6a3-2642',
    '\uD83D\uDEB4\u200D\u2640\uFE0F': '1f6b4-2640',
    '\uD83D\uDEB4\u200D\u2642\uFE0F': '1f6b4-2642',
    '\uD83D\uDEB5\u200D\u2640\uFE0F': '1f6b5-2640',
    '\uD83D\uDEB5\u200D\u2642\uFE0F': '1f6b5-2642',
    '\uD83D\uDEB6\u200D\u2640\uFE0F': '1f6b6-2640',
    '\uD83D\uDEB6\u200D\u2642\uFE0F': '1f6b6-2642',
    '\uD83E\uDD38\u200D\u2640\uFE0F': '1f938-2640',
    '\uD83E\uDD38\u200D\u2642\uFE0F': '1f938-2642',
    '\uD83E\uDD39\u200D\u2640\uFE0F': '1f939-2640',
    '\uD83E\uDD39\u200D\u2642\uFE0F': '1f939-2642',
    '\uD83E\uDD3C\u200D\u2640\uFE0F': '1f93c-2640',
    '\uD83E\uDD3C\u200D\u2642\uFE0F': '1f93c-2642',
    '\uD83E\uDD3D\u200D\u2640\uFE0F': '1f93d-2640',
    '\uD83E\uDD3D\u200D\u2642\uFE0F': '1f93d-2642',
    '\uD83E\uDD3E\u200D\u2640\uFE0F': '1f93e-2640',
    '\uD83E\uDD3E\u200D\u2642\uFE0F': '1f93e-2642',
    '\uD83D\uDC81\u200D\u2640\uFE0F': '1f481-2640',
    '\uD83D\uDC81\u200D\u2642\uFE0F': '1f481-2642',
    '\uD83D\uDE45\u200D\u2640\uFE0F': '1f645-2640',
    '\uD83D\uDE45\u200D\u2642\uFE0F': '1f645-2642',
    '\uD83D\uDE46\u200D\u2640\uFE0F': '1f646-2640',
    '\uD83D\uDE46\u200D\u2642\uFE0F': '1f646-2642',
    '\uD83D\uDE47\u200D\u2640\uFE0F': '1f647-2640',
    '\uD83D\uDE47\u200D\u2642\uFE0F': '1f647-2642',
    '\uD83D\uDE4B\u200D\u2640\uFE0F': '1f64b-2640',
    '\uD83D\uDE4B\u200D\u2642\uFE0F': '1f64b-2642',
    '\uD83D\uDE4D\u200D\u2640\uFE0F': '1f64d-2640',
    '\uD83D\uDE4D\u200D\u2642\uFE0F': '1f64d-2642',
    '\uD83D\uDE4E\u200D\u2640\uFE0F': '1f64e-2640',
    '\uD83D\uDE4E\u200D\u2642\uFE0F': '1f64e-2642',
    '\uD83E\uDD26\u200D\u2640\uFE0F': '1f926-2640',
    '\uD83E\uDD26\u200D\u2642\uFE0F': '1f926-2642',
    '\uD83E\uDD37\u200D\u2640\uFE0F': '1f937-2640',
    '\uD83E\uDD37\u200D\u2642\uFE0F': '1f937-2642',
    '\uD83E\uDDD9\u200D\u2640\uFE0F': '1f9d9-2640',
    '\uD83E\uDDD9\u200D\u2642\uFE0F': '1f9d9-2642',
    '\uD83E\uDDDA\u200D\u2640\uFE0F': '1f9da-2640',
    '\uD83E\uDDDA\u200D\u2642\uFE0F': '1f9da-2642',
    '\uD83E\uDDDB\u200D\u2640\uFE0F': '1f9db-2640',
    '\uD83E\uDDDB\u200D\u2642\uFE0F': '1f9db-2642',
    '\uD83E\uDDDC\u200D\u2640\uFE0F': '1f9dc-2640',
    '\uD83E\uDDDC\u200D\u2642\uFE0F': '1f9dc-2642',
    '\uD83E\uDDDD\u200D\u2640\uFE0F': '1f9dd-2640',
    '\uD83E\uDDDD\u200D\u2642\uFE0F': '1f9dd-2642',
    '\uD83E\uDDDE\u200D\u2640\uFE0F': '1f9de-2640',
    '\uD83E\uDDDE\u200D\u2642\uFE0F': '1f9de-2642',
    '\uD83E\uDDDF\u200D\u2640\uFE0F': '1f9df-2640',
    '\uD83E\uDDDF\u200D\u2642\uFE0F': '1f9df-2642',
    '\uD83E\uDDD6\u200D\u2640\uFE0F': '1f9d6-2640',
    '\uD83E\uDDD6\u200D\u2642\uFE0F': '1f9d6-2642',
    '\uD83E\uDDD7\u200D\u2640\uFE0F': '1f9d7-2640',
    '\uD83E\uDDD7\u200D\u2642\uFE0F': '1f9d7-2642',
    '\uD83E\uDDD8\u200D\u2640\uFE0F': '1f9d8-2640',
    '\uD83E\uDDD8\u200D\u2642\uFE0F': '1f9d8-2642',
    '\uD83D\uDD75\u200D\u2640\uFE0F': '1f575-2640',
    '\uD83D\uDD75\uFE0F\u200D\u2640': '1f575-2640',
    '\uD83D\uDD75\u200D\u2642\uFE0F': '1f575-2642',
    '\uD83D\uDD75\uFE0F\u200D\u2642': '1f575-2642',
    '\uD83C\uDFCB\u200D\u2640\uFE0F': '1f3cb-2640',
    '\uD83C\uDFCB\uFE0F\u200D\u2640': '1f3cb-2640',
    '\uD83C\uDFCB\u200D\u2642\uFE0F': '1f3cb-2642',
    '\uD83C\uDFCB\uFE0F\u200D\u2642': '1f3cb-2642',
    '\uD83C\uDFCC\u200D\u2640\uFE0F': '1f3cc-2640',
    '\uD83C\uDFCC\uFE0F\u200D\u2640': '1f3cc-2640',
    '\uD83C\uDFCC\u200D\u2642\uFE0F': '1f3cc-2642',
    '\uD83C\uDFCC\uFE0F\u200D\u2642': '1f3cc-2642',
    '\u26F9\uFE0F\u2640\uFE0F': '26f9-2640',
    '\u26F9\uFE0F\u2642\uFE0F': '26f9-2642',
    '\u26F9\u200D\u2640\uFE0F': '26f9-2640',
    '\u26F9\uFE0F\u200D\u2640': '26f9-2640',
    '\u26F9\u200D\u2642\uFE0F': '26f9-2642',
    '\u26F9\uFE0F\u200D\u2642': '26f9-2642',
    '\uD83D\uDC68\uD83D\uDC68\uD83D\uDC66': '1f468-1f468-1f466',
    '\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67': '1f468-1f468-1f467',
    '\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67': '1f468-1f469-1f467',
    '\uD83D\uDC69\uD83D\uDC69\uD83D\uDC66': '1f469-1f469-1f466',
    '\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67': '1f469-1f469-1f467',
    '\uD83D\uDC68\uD83D\uDC66\uD83D\uDC66': '1f468-1f466-1f466',
    '\uD83D\uDC68\uD83D\uDC67\uD83D\uDC66': '1f468-1f467-1f466',
    '\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66': '1f469-1f466-1f466',
    '\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66': '1f469-1f467-1f466',
    '\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67': '1f469-1f467-1f467',
    '\uD83D\uDC68\uD83C\uDFFB\uD83C\uDFA8': '1f468-1f3fb-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFC\uD83C\uDFA8': '1f468-1f3fc-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFD\uD83C\uDFA8': '1f468-1f3fd-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFE\uD83C\uDFA8': '1f468-1f3fe-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFF\uD83C\uDFA8': '1f468-1f3ff-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFB\uD83C\uDFA8': '1f469-1f3fb-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFC\uD83C\uDFA8': '1f469-1f3fc-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFD\uD83C\uDFA8': '1f469-1f3fd-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFE\uD83C\uDFA8': '1f469-1f3fe-1f3a8',
    '\uD83D\uDC69\uD83C\uDFFF\uD83C\uDFA8': '1f469-1f3ff-1f3a8',
    '\uD83D\uDC68\uD83C\uDFFB\uD83D\uDE80': '1f468-1f3fb-1f680',
    '\uD83D\uDC68\uD83C\uDFFC\uD83D\uDE80': '1f468-1f3fc-1f680',
    '\uD83D\uDC68\uD83C\uDFFD\uD83D\uDE80': '1f468-1f3fd-1f680',
    '\uD83D\uDC68\uD83C\uDFFE\uD83D\uDE80': '1f468-1f3fe-1f680',
    '\uD83D\uDC68\uD83C\uDFFF\uD83D\uDE80': '1f468-1f3ff-1f680',
    '\uD83D\uDC69\uD83C\uDFFB\uD83D\uDE80': '1f469-1f3fb-1f680',
    '\uD83D\uDC69\uD83C\uDFFC\uD83D\uDE80': '1f469-1f3fc-1f680',
    '\uD83D\uDC69\uD83C\uDFFD\uD83D\uDE80': '1f469-1f3fd-1f680',
    '\uD83D\uDC69\uD83C\uDFFE\uD83D\uDE80': '1f469-1f3fe-1f680',
    '\uD83D\uDC69\uD83C\uDFFF\uD83D\uDE80': '1f469-1f3ff-1f680',
    '\uD83D\uDC68\uD83C\uDFFB\uD83D\uDE92': '1f468-1f3fb-1f692',
    '\uD83D\uDC68\uD83C\uDFFC\uD83D\uDE92': '1f468-1f3fc-1f692',
    '\uD83D\uDC68\uD83C\uDFFD\uD83D\uDE92': '1f468-1f3fd-1f692',
    '\uD83D\uDC68\uD83C\uDFFE\uD83D\uDE92': '1f468-1f3fe-1f692',
    '\uD83D\uDC68\uD83C\uDFFF\uD83D\uDE92': '1f468-1f3ff-1f692',
    '\uD83D\uDC69\uD83C\uDFFB\uD83D\uDE92': '1f469-1f3fb-1f692',
    '\uD83D\uDC69\uD83C\uDFFC\uD83D\uDE92': '1f469-1f3fc-1f692',
    '\uD83D\uDC69\uD83C\uDFFD\uD83D\uDE92': '1f469-1f3fd-1f692',
    '\uD83D\uDC69\uD83C\uDFFE\uD83D\uDE92': '1f469-1f3fe-1f692',
    '\uD83D\uDC69\uD83C\uDFFF\uD83D\uDE92': '1f469-1f3ff-1f692',
    '\uD83D\uDC68\uD83D\uDC69\uD83D\uDC66': '1f468-1f469-1f466',
    '\uD83D\uDC68\uD83D\uDC67\uD83D\uDC67': '1f468-1f467-1f467',
    '\uD83D\uDC68\uD83C\uDFFB\uD83C\uDF3E': '1f468-1f3fb-1f33e',
    '\uD83D\uDC68\uD83C\uDFFB\uD83C\uDF73': '1f468-1f3fb-1f373',
    '\uD83D\uDC68\uD83C\uDFFB\uD83C\uDF93': '1f468-1f3fb-1f393',
    '\uD83D\uDC68\uD83C\uDFFB\uD83C\uDFA4': '1f468-1f3fb-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFB\uD83C\uDFEB': '1f468-1f3fb-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFB\uD83C\uDFED': '1f468-1f3fb-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFB\uD83D\uDCBB': '1f468-1f3fb-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFB\uD83D\uDCBC': '1f468-1f3fb-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFB\uD83D\uDD27': '1f468-1f3fb-1f527',
    '\uD83D\uDC68\uD83C\uDFFB\uD83D\uDD2C': '1f468-1f3fb-1f52c',
    '\uD83D\uDC68\uD83C\uDFFC\uD83C\uDF3E': '1f468-1f3fc-1f33e',
    '\uD83D\uDC68\uD83C\uDFFC\uD83C\uDF73': '1f468-1f3fc-1f373',
    '\uD83D\uDC68\uD83C\uDFFC\uD83C\uDF93': '1f468-1f3fc-1f393',
    '\uD83D\uDC68\uD83C\uDFFC\uD83C\uDFA4': '1f468-1f3fc-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFC\uD83C\uDFEB': '1f468-1f3fc-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFC\uD83C\uDFED': '1f468-1f3fc-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFC\uD83D\uDCBB': '1f468-1f3fc-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFC\uD83D\uDCBC': '1f468-1f3fc-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFC\uD83D\uDD27': '1f468-1f3fc-1f527',
    '\uD83D\uDC68\uD83C\uDFFC\uD83D\uDD2C': '1f468-1f3fc-1f52c',
    '\uD83D\uDC68\uD83C\uDFFD\uD83C\uDF3E': '1f468-1f3fd-1f33e',
    '\uD83D\uDC68\uD83C\uDFFD\uD83C\uDF73': '1f468-1f3fd-1f373',
    '\uD83D\uDC68\uD83C\uDFFD\uD83C\uDF93': '1f468-1f3fd-1f393',
    '\uD83D\uDC68\uD83C\uDFFD\uD83C\uDFA4': '1f468-1f3fd-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFD\uD83C\uDFEB': '1f468-1f3fd-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFD\uD83C\uDFED': '1f468-1f3fd-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFD\uD83D\uDCBB': '1f468-1f3fd-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFD\uD83D\uDCBC': '1f468-1f3fd-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFD\uD83D\uDD27': '1f468-1f3fd-1f527',
    '\uD83D\uDC68\uD83C\uDFFD\uD83D\uDD2C': '1f468-1f3fd-1f52c',
    '\uD83D\uDC68\uD83C\uDFFE\uD83C\uDF3E': '1f468-1f3fe-1f33e',
    '\uD83D\uDC68\uD83C\uDFFE\uD83C\uDF73': '1f468-1f3fe-1f373',
    '\uD83D\uDC68\uD83C\uDFFE\uD83C\uDF93': '1f468-1f3fe-1f393',
    '\uD83D\uDC68\uD83C\uDFFE\uD83C\uDFA4': '1f468-1f3fe-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFE\uD83C\uDFEB': '1f468-1f3fe-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFE\uD83C\uDFED': '1f468-1f3fe-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFE\uD83D\uDCBB': '1f468-1f3fe-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFE\uD83D\uDCBC': '1f468-1f3fe-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFE\uD83D\uDD27': '1f468-1f3fe-1f527',
    '\uD83D\uDC68\uD83C\uDFFE\uD83D\uDD2C': '1f468-1f3fe-1f52c',
    '\uD83D\uDC68\uD83C\uDFFF\uD83C\uDF3E': '1f468-1f3ff-1f33e',
    '\uD83D\uDC68\uD83C\uDFFF\uD83C\uDF73': '1f468-1f3ff-1f373',
    '\uD83D\uDC68\uD83C\uDFFF\uD83C\uDF93': '1f468-1f3ff-1f393',
    '\uD83D\uDC68\uD83C\uDFFF\uD83C\uDFA4': '1f468-1f3ff-1f3a4',
    '\uD83D\uDC68\uD83C\uDFFF\uD83C\uDFEB': '1f468-1f3ff-1f3eb',
    '\uD83D\uDC68\uD83C\uDFFF\uD83C\uDFED': '1f468-1f3ff-1f3ed',
    '\uD83D\uDC68\uD83C\uDFFF\uD83D\uDCBB': '1f468-1f3ff-1f4bb',
    '\uD83D\uDC68\uD83C\uDFFF\uD83D\uDCBC': '1f468-1f3ff-1f4bc',
    '\uD83D\uDC68\uD83C\uDFFF\uD83D\uDD27': '1f468-1f3ff-1f527',
    '\uD83D\uDC68\uD83C\uDFFF\uD83D\uDD2C': '1f468-1f3ff-1f52c',
    '\uD83D\uDC69\uD83C\uDFFB\uD83C\uDF3E': '1f469-1f3fb-1f33e',
    '\uD83D\uDC69\uD83C\uDFFB\uD83C\uDF73': '1f469-1f3fb-1f373',
    '\uD83D\uDC69\uD83C\uDFFB\uD83C\uDF93': '1f469-1f3fb-1f393',
    '\uD83D\uDC69\uD83C\uDFFB\uD83C\uDFA4': '1f469-1f3fb-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFB\uD83C\uDFEB': '1f469-1f3fb-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFB\uD83C\uDFED': '1f469-1f3fb-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFB\uD83D\uDCBB': '1f469-1f3fb-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFB\uD83D\uDCBC': '1f469-1f3fb-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFB\uD83D\uDD27': '1f469-1f3fb-1f527',
    '\uD83D\uDC69\uD83C\uDFFB\uD83D\uDD2C': '1f469-1f3fb-1f52c',
    '\uD83D\uDC69\uD83C\uDFFC\uD83C\uDF3E': '1f469-1f3fc-1f33e',
    '\uD83D\uDC69\uD83C\uDFFC\uD83C\uDF73': '1f469-1f3fc-1f373',
    '\uD83D\uDC69\uD83C\uDFFC\uD83C\uDF93': '1f469-1f3fc-1f393',
    '\uD83D\uDC69\uD83C\uDFFC\uD83C\uDFA4': '1f469-1f3fc-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFC\uD83C\uDFEB': '1f469-1f3fc-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFC\uD83C\uDFED': '1f469-1f3fc-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFC\uD83D\uDCBB': '1f469-1f3fc-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFC\uD83D\uDCBC': '1f469-1f3fc-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFC\uD83D\uDD27': '1f469-1f3fc-1f527',
    '\uD83D\uDC69\uD83C\uDFFC\uD83D\uDD2C': '1f469-1f3fc-1f52c',
    '\uD83D\uDC69\uD83C\uDFFD\uD83C\uDF3E': '1f469-1f3fd-1f33e',
    '\uD83D\uDC69\uD83C\uDFFD\uD83C\uDF73': '1f469-1f3fd-1f373',
    '\uD83D\uDC69\uD83C\uDFFD\uD83C\uDF93': '1f469-1f3fd-1f393',
    '\uD83D\uDC69\uD83C\uDFFD\uD83C\uDFA4': '1f469-1f3fd-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFD\uD83C\uDFEB': '1f469-1f3fd-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFD\uD83C\uDFED': '1f469-1f3fd-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFD\uD83D\uDCBB': '1f469-1f3fd-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFD\uD83D\uDCBC': '1f469-1f3fd-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFD\uD83D\uDD27': '1f469-1f3fd-1f527',
    '\uD83D\uDC69\uD83C\uDFFD\uD83D\uDD2C': '1f469-1f3fd-1f52c',
    '\uD83D\uDC69\uD83C\uDFFE\uD83C\uDF3E': '1f469-1f3fe-1f33e',
    '\uD83D\uDC69\uD83C\uDFFE\uD83C\uDF73': '1f469-1f3fe-1f373',
    '\uD83D\uDC69\uD83C\uDFFE\uD83C\uDF93': '1f469-1f3fe-1f393',
    '\uD83D\uDC69\uD83C\uDFFE\uD83C\uDFA4': '1f469-1f3fe-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFE\uD83C\uDFEB': '1f469-1f3fe-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFE\uD83C\uDFED': '1f469-1f3fe-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFE\uD83D\uDCBB': '1f469-1f3fe-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFE\uD83D\uDCBC': '1f469-1f3fe-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFE\uD83D\uDD27': '1f469-1f3fe-1f527',
    '\uD83D\uDC69\uD83C\uDFFE\uD83D\uDD2C': '1f469-1f3fe-1f52c',
    '\uD83D\uDC69\uD83C\uDFFF\uD83C\uDF3E': '1f469-1f3ff-1f33e',
    '\uD83D\uDC69\uD83C\uDFFF\uD83C\uDF73': '1f469-1f3ff-1f373',
    '\uD83D\uDC69\uD83C\uDFFF\uD83C\uDF93': '1f469-1f3ff-1f393',
    '\uD83D\uDC69\uD83C\uDFFF\uD83C\uDFA4': '1f469-1f3ff-1f3a4',
    '\uD83D\uDC69\uD83C\uDFFF\uD83C\uDFEB': '1f469-1f3ff-1f3eb',
    '\uD83D\uDC69\uD83C\uDFFF\uD83C\uDFED': '1f469-1f3ff-1f3ed',
    '\uD83D\uDC69\uD83C\uDFFF\uD83D\uDCBB': '1f469-1f3ff-1f4bb',
    '\uD83D\uDC69\uD83C\uDFFF\uD83D\uDCBC': '1f469-1f3ff-1f4bc',
    '\uD83D\uDC69\uD83C\uDFFF\uD83D\uDD27': '1f469-1f3ff-1f527',
    '\uD83D\uDC69\uD83C\uDFFF\uD83D\uDD2C': '1f469-1f3ff-1f52c',
    '\uD83D\uDC41\u200D\uD83D\uDDE8': '1f441-1f5e8',
    '\uD83D\uDC68\u200D\uD83D\uDCBB': '1f468-1f4bb',
    '\uD83D\uDC69\u200D\uD83D\uDCBB': '1f469-1f4bb',
    '\uD83D\uDC68\u200D\uD83C\uDFEB': '1f468-1f3eb',
    '\uD83D\uDC69\u200D\uD83C\uDFEB': '1f469-1f3eb',
    '\uD83D\uDC68\u200D\uD83C\uDF93': '1f468-1f393',
    '\uD83D\uDC69\u200D\uD83C\uDF93': '1f469-1f393',
    '\uD83D\uDC68\u200D\uD83C\uDFA4': '1f468-1f3a4',
    '\uD83D\uDC69\u200D\uD83C\uDFA4': '1f469-1f3a4',
    '\uD83D\uDC68\u200D\uD83D\uDD2C': '1f468-1f52c',
    '\uD83D\uDC69\u200D\uD83D\uDD2C': '1f469-1f52c',
    '\uD83D\uDC68\u200D\uD83D\uDCBC': '1f468-1f4bc',
    '\uD83D\uDC69\u200D\uD83D\uDCBC': '1f469-1f4bc',
    '\uD83D\uDC68\u200D\uD83D\uDD27': '1f468-1f527',
    '\uD83D\uDC69\u200D\uD83D\uDD27': '1f469-1f527',
    '\uD83D\uDC68\u200D\uD83C\uDFED': '1f468-1f3ed',
    '\uD83D\uDC69\u200D\uD83C\uDFED': '1f469-1f3ed',
    '\uD83D\uDC68\u200D\uD83C\uDF73': '1f468-1f373',
    '\uD83D\uDC69\u200D\uD83C\uDF73': '1f469-1f373',
    '\uD83D\uDC68\u200D\uD83C\uDF3E': '1f468-1f33e',
    '\uD83D\uDC69\u200D\uD83C\uDF3E': '1f469-1f33e',
    '\uD83D\uDC68\u200D\uD83D\uDC66': '1f468-1f466',
    '\uD83D\uDC68\u200D\uD83D\uDC67': '1f468-1f467',
    '\uD83D\uDC69\u200D\uD83D\uDC66': '1f469-1f466',
    '\uD83D\uDC69\u200D\uD83D\uDC67': '1f469-1f467',
    '\uD83D\uDC68\u200D\uD83C\uDFA8': '1f468-1f3a8',
    '\uD83D\uDC69\u200D\uD83C\uDFA8': '1f469-1f3a8',
    '\uD83D\uDC68\u200D\uD83D\uDE80': '1f468-1f680',
    '\uD83D\uDC69\u200D\uD83D\uDE80': '1f469-1f680',
    '\uD83D\uDC68\u200D\uD83D\uDE92': '1f468-1f692',
    '\uD83D\uDC69\u200D\uD83D\uDE92': '1f469-1f692',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFB': '1f3cb-1f3fb',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFC': '1f3cb-1f3fc',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFD': '1f3cb-1f3fd',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFE': '1f3cb-1f3fe',
    '\uD83C\uDFCB\uFE0F\uD83C\uDFFF': '1f3cb-1f3ff',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFB': '1f3cc-1f3fb',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFC': '1f3cc-1f3fc',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFD': '1f3cc-1f3fd',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFE': '1f3cc-1f3fe',
    '\uD83C\uDFCC\uFE0F\uD83C\uDFFF': '1f3cc-1f3ff',
    '\uD83D\uDD74\uFE0F\uD83C\uDFFB': '1f574-1f3fb',
    '\uD83D\uDD74\uFE0F\uD83C\uDFFC': '1f574-1f3fc',
    '\uD83D\uDD74\uFE0F\uD83C\uDFFD': '1f574-1f3fd',
    '\uD83D\uDD74\uFE0F\uD83C\uDFFE': '1f574-1f3fe',
    '\uD83D\uDD74\uFE0F\uD83C\uDFFF': '1f574-1f3ff',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFB': '1f575-1f3fb',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFC': '1f575-1f3fc',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFD': '1f575-1f3fd',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFE': '1f575-1f3fe',
    '\uD83D\uDD75\uFE0F\uD83C\uDFFF': '1f575-1f3ff',
    '\uD83D\uDD90\uFE0F\uD83C\uDFFB': '1f590-1f3fb',
    '\uD83D\uDD90\uFE0F\uD83C\uDFFC': '1f590-1f3fc',
    '\uD83D\uDD90\uFE0F\uD83C\uDFFD': '1f590-1f3fd',
    '\uD83D\uDD90\uFE0F\uD83C\uDFFE': '1f590-1f3fe',
    '\uD83D\uDD90\uFE0F\uD83C\uDFFF': '1f590-1f3ff',
    '\uD83C\uDFF3\u200D\uD83C\uDF08': '1f3f3-1f308',
    '\uD83C\uDFF3\uFE0F\uD83C\uDF08': '1f3f3-1f308',
    '\uD83D\uDC6F\u200D\u2642': '1f46f-2642',
    '\uD83D\uDC6F\u200D\u2640': '1f46f-2640',
    '\uD83E\uDD3C\u200D\u2642': '1f93c-2642',
    '\uD83E\uDD3C\u200D\u2640': '1f93c-2640',
    '\uD83E\uDD39\u200D\u2642': '1f939-2642',
    '\uD83E\uDD39\u200D\u2640': '1f939-2640',
    '\uD83E\uDD3E\u200D\u2642': '1f93e-2642',
    '\uD83E\uDD3E\u200D\u2640': '1f93e-2640',
    '\uD83E\uDD3D\u200D\u2642': '1f93d-2642',
    '\uD83E\uDD3D\u200D\u2640': '1f93d-2640',
    '\uD83E\uDD38\u200D\u2642': '1f938-2642',
    '\uD83E\uDD38\u200D\u2640': '1f938-2640',
    '\uD83D\uDEB6\u200D\u2642': '1f6b6-2642',
    '\uD83D\uDEB6\u200D\u2640': '1f6b6-2640',
    '\uD83D\uDEB5\u200D\u2642': '1f6b5-2642',
    '\uD83D\uDEB5\u200D\u2640': '1f6b5-2640',
    '\uD83D\uDEB4\u200D\u2642': '1f6b4-2642',
    '\uD83D\uDEB4\u200D\u2640': '1f6b4-2640',
    '\uD83D\uDEA3\u200D\u2642': '1f6a3-2642',
    '\uD83D\uDEA3\u200D\u2640': '1f6a3-2640',
    '\uD83C\uDFCA\u200D\u2642': '1f3ca-2642',
    '\uD83C\uDFCA\u200D\u2640': '1f3ca-2640',
    '\uD83C\uDFC4\u200D\u2642': '1f3c4-2642',
    '\uD83C\uDFC4\u200D\u2640': '1f3c4-2640',
    '\uD83C\uDFC3\u200D\u2642': '1f3c3-2642',
    '\uD83C\uDFC3\u200D\u2640': '1f3c3-2640',
    '\uD83E\uDD37\u200D\u2642': '1f937-2642',
    '\uD83E\uDD37\u200D\u2640': '1f937-2640',
    '\uD83E\uDD26\u200D\u2642': '1f926-2642',
    '\uD83E\uDD26\u200D\u2640': '1f926-2640',
    '\uD83D\uDE4E\u200D\u2642': '1f64e-2642',
    '\uD83D\uDE4E\u200D\u2640': '1f64e-2640',
    '\uD83D\uDE4D\u200D\u2642': '1f64d-2642',
    '\uD83D\uDE4D\u200D\u2640': '1f64d-2640',
    '\uD83D\uDE4B\u200D\u2642': '1f64b-2642',
    '\uD83D\uDE4B\u200D\u2640': '1f64b-2640',
    '\uD83D\uDE47\u200D\u2642': '1f647-2642',
    '\uD83D\uDE47\u200D\u2640': '1f647-2640',
    '\uD83D\uDE46\u200D\u2642': '1f646-2642',
    '\uD83D\uDE46\u200D\u2640': '1f646-2640',
    '\uD83D\uDE45\u200D\u2642': '1f645-2642',
    '\uD83D\uDE45\u200D\u2640': '1f645-2640',
    '\uD83D\uDC87\u200D\u2642': '1f487-2642',
    '\uD83D\uDC87\u200D\u2640': '1f487-2640',
    '\uD83D\uDC86\u200D\u2642': '1f486-2642',
    '\uD83D\uDC86\u200D\u2640': '1f486-2640',
    '\uD83D\uDC81\u200D\u2642': '1f481-2642',
    '\uD83D\uDC81\u200D\u2640': '1f481-2640',
    '\uD83D\uDC71\u200D\u2642': '1f471-2642',
    '\uD83D\uDC71\u200D\u2640': '1f471-2640',
    '\uD83D\uDC73\u200D\u2642': '1f473-2642',
    '\uD83D\uDC73\u200D\u2640': '1f473-2640',
    '\uD83D\uDC82\u200D\u2642': '1f482-2642',
    '\uD83D\uDC82\u200D\u2640': '1f482-2640',
    '\uD83D\uDC77\u200D\u2642': '1f477-2642',
    '\uD83D\uDC77\u200D\u2640': '1f477-2640',
    '\uD83D\uDC6E\u200D\u2642': '1f46e-2642',
    '\uD83D\uDC6E\u200D\u2640': '1f46e-2640',
    '\uD83D\uDC68\u200D\u2695': '1f468-2695',
    '\uD83D\uDC69\u200D\u2695': '1f469-2695',
    '\uD83D\uDC68\u200D\u2696': '1f468-2696',
    '\uD83D\uDC69\u200D\u2696': '1f469-2696',
    '\uD83D\uDC68\u200D\u2708': '1f468-2708',
    '\uD83D\uDC69\u200D\u2708': '1f469-2708',
    '\u261D\uFE0F\uD83C\uDFFB': '261d-1f3fb',
    '\u261D\uFE0F\uD83C\uDFFC': '261d-1f3fc',
    '\u261D\uFE0F\uD83C\uDFFD': '261d-1f3fd',
    '\u261D\uFE0F\uD83C\uDFFE': '261d-1f3fe',
    '\u261D\uFE0F\uD83C\uDFFF': '261d-1f3ff',
    '\u26F9\uFE0F\uD83C\uDFFB': '26f9-1f3fb',
    '\u26F9\uFE0F\uD83C\uDFFC': '26f9-1f3fc',
    '\u26F9\uFE0F\uD83C\uDFFD': '26f9-1f3fd',
    '\u26F9\uFE0F\uD83C\uDFFE': '26f9-1f3fe',
    '\u26F9\uFE0F\uD83C\uDFFF': '26f9-1f3ff',
    '\u270C\uFE0F\uD83C\uDFFB': '270c-1f3fb',
    '\u270C\uFE0F\uD83C\uDFFC': '270c-1f3fc',
    '\u270C\uFE0F\uD83C\uDFFD': '270c-1f3fd',
    '\u270C\uFE0F\uD83C\uDFFE': '270c-1f3fe',
    '\u270C\uFE0F\uD83C\uDFFF': '270c-1f3ff',
    '\u270D\uFE0F\uD83C\uDFFB': '270d-1f3fb',
    '\u270D\uFE0F\uD83C\uDFFC': '270d-1f3fc',
    '\u270D\uFE0F\uD83C\uDFFD': '270d-1f3fd',
    '\u270D\uFE0F\uD83C\uDFFE': '270d-1f3fe',
    '\u270D\uFE0F\uD83C\uDFFF': '270d-1f3ff',
    '\uD83D\uDC68\u2695\uFE0F': '1f468-2695',
    '\uD83D\uDC68\u2696\uFE0F': '1f468-2696',
    '\uD83D\uDC68\u2708\uFE0F': '1f468-2708',
    '\uD83D\uDC69\u2695\uFE0F': '1f469-2695',
    '\uD83D\uDC69\u2696\uFE0F': '1f469-2696',
    '\uD83D\uDC69\u2708\uFE0F': '1f469-2708',
    '\uD83D\uDC6E\u2640\uFE0F': '1f46e-2640',
    '\uD83D\uDC6E\u2642\uFE0F': '1f46e-2642',
    '\uD83D\uDC71\u2640\uFE0F': '1f471-2640',
    '\uD83D\uDC71\u2642\uFE0F': '1f471-2642',
    '\uD83D\uDC73\u2640\uFE0F': '1f473-2640',
    '\uD83D\uDC73\u2642\uFE0F': '1f473-2642',
    '\uD83D\uDC77\u2640\uFE0F': '1f477-2640',
    '\uD83D\uDC77\u2642\uFE0F': '1f477-2642',
    '\uD83D\uDC82\u2640\uFE0F': '1f482-2640',
    '\uD83D\uDC82\u2642\uFE0F': '1f482-2642',
    '\uD83D\uDD75\u200D\u2640': '1f575-2640',
    '\uD83D\uDD75\u200D\u2642': '1f575-2642',
    '\uD83C\uDFC3\u2640\uFE0F': '1f3c3-2640',
    '\uD83C\uDFC3\u2642\uFE0F': '1f3c3-2642',
    '\uD83C\uDFC4\u2640\uFE0F': '1f3c4-2640',
    '\uD83C\uDFC4\u2642\uFE0F': '1f3c4-2642',
    '\uD83C\uDFCA\u2640\uFE0F': '1f3ca-2640',
    '\uD83C\uDFCA\u2642\uFE0F': '1f3ca-2642',
    '\uD83C\uDFCB\u200D\u2640': '1f3cb-2640',
    '\uD83C\uDFCB\u200D\u2642': '1f3cb-2642',
    '\uD83C\uDFCC\u200D\u2640': '1f3cc-2640',
    '\uD83C\uDFCC\u200D\u2642': '1f3cc-2642',
    '\uD83D\uDC6F\u2640\uFE0F': '1f46f-2640',
    '\uD83D\uDC6F\u2642\uFE0F': '1f46f-2642',
    '\uD83D\uDC86\u2640\uFE0F': '1f486-2640',
    '\uD83D\uDC86\u2642\uFE0F': '1f486-2642',
    '\uD83D\uDC87\u2640\uFE0F': '1f487-2640',
    '\uD83D\uDC87\u2642\uFE0F': '1f487-2642',
    '\uD83D\uDEA3\u2640\uFE0F': '1f6a3-2640',
    '\uD83D\uDEA3\u2642\uFE0F': '1f6a3-2642',
    '\uD83D\uDEB4\u2640\uFE0F': '1f6b4-2640',
    '\uD83D\uDEB4\u2642\uFE0F': '1f6b4-2642',
    '\uD83D\uDEB5\u2640\uFE0F': '1f6b5-2640',
    '\uD83D\uDEB5\u2642\uFE0F': '1f6b5-2642',
    '\uD83D\uDEB6\u2640\uFE0F': '1f6b6-2640',
    '\uD83D\uDEB6\u2642\uFE0F': '1f6b6-2642',
    '\uD83E\uDD38\u2640\uFE0F': '1f938-2640',
    '\uD83E\uDD38\u2642\uFE0F': '1f938-2642',
    '\uD83E\uDD39\u2640\uFE0F': '1f939-2640',
    '\uD83E\uDD39\u2642\uFE0F': '1f939-2642',
    '\uD83E\uDD3C\u2640\uFE0F': '1f93c-2640',
    '\uD83E\uDD3C\u2642\uFE0F': '1f93c-2642',
    '\uD83E\uDD3D\u2640\uFE0F': '1f93d-2640',
    '\uD83E\uDD3D\u2642\uFE0F': '1f93d-2642',
    '\uD83E\uDD3E\u2640\uFE0F': '1f93e-2640',
    '\uD83E\uDD3E\u2642\uFE0F': '1f93e-2642',
    '\uD83D\uDC81\u2640\uFE0F': '1f481-2640',
    '\uD83D\uDC81\u2642\uFE0F': '1f481-2642',
    '\uD83D\uDE45\u2640\uFE0F': '1f645-2640',
    '\uD83D\uDE45\u2642\uFE0F': '1f645-2642',
    '\uD83D\uDE46\u2640\uFE0F': '1f646-2640',
    '\uD83D\uDE46\u2642\uFE0F': '1f646-2642',
    '\uD83D\uDE47\u2640\uFE0F': '1f647-2640',
    '\uD83D\uDE47\u2642\uFE0F': '1f647-2642',
    '\uD83D\uDE4B\u2640\uFE0F': '1f64b-2640',
    '\uD83D\uDE4B\u2642\uFE0F': '1f64b-2642',
    '\uD83D\uDE4D\u2640\uFE0F': '1f64d-2640',
    '\uD83D\uDE4D\u2642\uFE0F': '1f64d-2642',
    '\uD83D\uDE4E\u2640\uFE0F': '1f64e-2640',
    '\uD83D\uDE4E\u2642\uFE0F': '1f64e-2642',
    '\uD83E\uDD26\u2640\uFE0F': '1f926-2640',
    '\uD83E\uDD26\u2642\uFE0F': '1f926-2642',
    '\uD83E\uDD37\u2640\uFE0F': '1f937-2640',
    '\uD83E\uDD37\u2642\uFE0F': '1f937-2642',
    '\uD83E\uDDD9\u200D\u2640': '1f9d9-2640',
    '\uD83E\uDDD9\u2640\uFE0F': '1f9d9-2640',
    '\uD83E\uDDD9\u200D\u2642': '1f9d9-2642',
    '\uD83E\uDDD9\u2642\uFE0F': '1f9d9-2642',
    '\uD83E\uDDDA\u200D\u2640': '1f9da-2640',
    '\uD83E\uDDDA\u2640\uFE0F': '1f9da-2640',
    '\uD83E\uDDDA\u200D\u2642': '1f9da-2642',
    '\uD83E\uDDDA\u2642\uFE0F': '1f9da-2642',
    '\uD83E\uDDDB\u200D\u2640': '1f9db-2640',
    '\uD83E\uDDDB\u2640\uFE0F': '1f9db-2640',
    '\uD83E\uDDDB\u200D\u2642': '1f9db-2642',
    '\uD83E\uDDDB\u2642\uFE0F': '1f9db-2642',
    '\uD83E\uDDDC\u200D\u2640': '1f9dc-2640',
    '\uD83E\uDDDC\u2640\uFE0F': '1f9dc-2640',
    '\uD83E\uDDDC\u200D\u2642': '1f9dc-2642',
    '\uD83E\uDDDC\u2642\uFE0F': '1f9dc-2642',
    '\uD83E\uDDDD\u200D\u2640': '1f9dd-2640',
    '\uD83E\uDDDD\u2640\uFE0F': '1f9dd-2640',
    '\uD83E\uDDDD\u200D\u2642': '1f9dd-2642',
    '\uD83E\uDDDD\u2642\uFE0F': '1f9dd-2642',
    '\uD83E\uDDDE\u200D\u2640': '1f9de-2640',
    '\uD83E\uDDDE\u2640\uFE0F': '1f9de-2640',
    '\uD83E\uDDDE\u200D\u2642': '1f9de-2642',
    '\uD83E\uDDDE\u2642\uFE0F': '1f9de-2642',
    '\uD83E\uDDDF\u200D\u2640': '1f9df-2640',
    '\uD83E\uDDDF\u2640\uFE0F': '1f9df-2640',
    '\uD83E\uDDDF\u200D\u2642': '1f9df-2642',
    '\uD83E\uDDDF\u2642\uFE0F': '1f9df-2642',
    '\uD83E\uDDD6\u200D\u2640': '1f9d6-2640',
    '\uD83E\uDDD6\u2640\uFE0F': '1f9d6-2640',
    '\uD83E\uDDD6\u200D\u2642': '1f9d6-2642',
    '\uD83E\uDDD6\u2642\uFE0F': '1f9d6-2642',
    '\uD83E\uDDD7\u200D\u2640': '1f9d7-2640',
    '\uD83E\uDDD7\u2640\uFE0F': '1f9d7-2640',
    '\uD83E\uDDD7\u200D\u2642': '1f9d7-2642',
    '\uD83E\uDDD7\u2642\uFE0F': '1f9d7-2642',
    '\uD83E\uDDD8\u200D\u2640': '1f9d8-2640',
    '\uD83E\uDDD8\u2640\uFE0F': '1f9d8-2640',
    '\uD83E\uDDD8\u200D\u2642': '1f9d8-2642',
    '\uD83E\uDDD8\u2642\uFE0F': '1f9d8-2642',
    '#\uFE0F\u20E3': '0023-20e3',
    '0\uFE0F\u20E3': '0030-20e3',
    '1\uFE0F\u20E3': '0031-20e3',
    '2\uFE0F\u20E3': '0032-20e3',
    '3\uFE0F\u20E3': '0033-20e3',
    '4\uFE0F\u20E3': '0034-20e3',
    '5\uFE0F\u20E3': '0035-20e3',
    '6\uFE0F\u20E3': '0036-20e3',
    '7\uFE0F\u20E3': '0037-20e3',
    '8\uFE0F\u20E3': '0038-20e3',
    '9\uFE0F\u20E3': '0039-20e3',
    '*\uFE0F\u20E3': '002a-20e3',
    '\u26F9\u200D\u2640': '26f9-2640',
    '\u26F9\u200D\u2642': '26f9-2642',
    '\uD83C\uDDE8\uD83C\uDDF3': '1f1e8-1f1f3',
    '\uD83C\uDDE9\uD83C\uDDEA': '1f1e9-1f1ea',
    '\uD83C\uDDEA\uD83C\uDDF8': '1f1ea-1f1f8',
    '\uD83C\uDDEB\uD83C\uDDF7': '1f1eb-1f1f7',
    '\uD83C\uDDEC\uD83C\uDDE7': '1f1ec-1f1e7',
    '\uD83C\uDDEE\uD83C\uDDF9': '1f1ee-1f1f9',
    '\uD83C\uDDEF\uD83C\uDDF5': '1f1ef-1f1f5',
    '\uD83C\uDDF0\uD83C\uDDF7': '1f1f0-1f1f7',
    '\uD83C\uDDFA\uD83C\uDDF8': '1f1fa-1f1f8',
    '\uD83C\uDDF7\uD83C\uDDFA': '1f1f7-1f1fa',
    '\uD83E\uDD34\uD83C\uDFFB': '1f934-1f3fb',
    '\uD83E\uDD34\uD83C\uDFFC': '1f934-1f3fc',
    '\uD83E\uDD34\uD83C\uDFFD': '1f934-1f3fd',
    '\uD83E\uDD34\uD83C\uDFFE': '1f934-1f3fe',
    '\uD83E\uDD34\uD83C\uDFFF': '1f934-1f3ff',
    '\uD83E\uDD36\uD83C\uDFFB': '1f936-1f3fb',
    '\uD83E\uDD36\uD83C\uDFFC': '1f936-1f3fc',
    '\uD83E\uDD36\uD83C\uDFFD': '1f936-1f3fd',
    '\uD83E\uDD36\uD83C\uDFFE': '1f936-1f3fe',
    '\uD83E\uDD36\uD83C\uDFFF': '1f936-1f3ff',
    '\uD83E\uDD35\uD83C\uDFFB': '1f935-1f3fb',
    '\uD83E\uDD35\uD83C\uDFFC': '1f935-1f3fc',
    '\uD83E\uDD35\uD83C\uDFFD': '1f935-1f3fd',
    '\uD83E\uDD35\uD83C\uDFFE': '1f935-1f3fe',
    '\uD83E\uDD35\uD83C\uDFFF': '1f935-1f3ff',
    '\uD83E\uDD37\uD83C\uDFFB': '1f937-1f3fb',
    '\uD83E\uDD37\uD83C\uDFFC': '1f937-1f3fc',
    '\uD83E\uDD37\uD83C\uDFFD': '1f937-1f3fd',
    '\uD83E\uDD37\uD83C\uDFFE': '1f937-1f3fe',
    '\uD83E\uDD37\uD83C\uDFFF': '1f937-1f3ff',
    '\uD83E\uDD26\uD83C\uDFFB': '1f926-1f3fb',
    '\uD83E\uDD26\uD83C\uDFFC': '1f926-1f3fc',
    '\uD83E\uDD26\uD83C\uDFFD': '1f926-1f3fd',
    '\uD83E\uDD26\uD83C\uDFFE': '1f926-1f3fe',
    '\uD83E\uDD26\uD83C\uDFFF': '1f926-1f3ff',
    '\uD83E\uDD30\uD83C\uDFFB': '1f930-1f3fb',
    '\uD83E\uDD30\uD83C\uDFFC': '1f930-1f3fc',
    '\uD83E\uDD30\uD83C\uDFFD': '1f930-1f3fd',
    '\uD83E\uDD30\uD83C\uDFFE': '1f930-1f3fe',
    '\uD83E\uDD30\uD83C\uDFFF': '1f930-1f3ff',
    '\uD83D\uDD7A\uD83C\uDFFB': '1f57a-1f3fb',
    '\uD83D\uDD7A\uD83C\uDFFC': '1f57a-1f3fc',
    '\uD83D\uDD7A\uD83C\uDFFD': '1f57a-1f3fd',
    '\uD83D\uDD7A\uD83C\uDFFE': '1f57a-1f3fe',
    '\uD83D\uDD7A\uD83C\uDFFF': '1f57a-1f3ff',
    '\uD83E\uDD33\uD83C\uDFFB': '1f933-1f3fb',
    '\uD83E\uDD33\uD83C\uDFFC': '1f933-1f3fc',
    '\uD83E\uDD33\uD83C\uDFFD': '1f933-1f3fd',
    '\uD83E\uDD33\uD83C\uDFFE': '1f933-1f3fe',
    '\uD83E\uDD33\uD83C\uDFFF': '1f933-1f3ff',
    '\uD83E\uDD1E\uD83C\uDFFB': '1f91e-1f3fb',
    '\uD83E\uDD1E\uD83C\uDFFC': '1f91e-1f3fc',
    '\uD83E\uDD1E\uD83C\uDFFD': '1f91e-1f3fd',
    '\uD83E\uDD1E\uD83C\uDFFE': '1f91e-1f3fe',
    '\uD83E\uDD1E\uD83C\uDFFF': '1f91e-1f3ff',
    '\uD83E\uDD19\uD83C\uDFFB': '1f919-1f3fb',
    '\uD83E\uDD19\uD83C\uDFFC': '1f919-1f3fc',
    '\uD83E\uDD19\uD83C\uDFFD': '1f919-1f3fd',
    '\uD83C\uDDE6\uD83C\uDDEB': '1f1e6-1f1eb',
    '\uD83C\uDDE6\uD83C\uDDF1': '1f1e6-1f1f1',
    '\uD83C\uDDE9\uD83C\uDDFF': '1f1e9-1f1ff',
    '\uD83C\uDDE6\uD83C\uDDE9': '1f1e6-1f1e9',
    '\uD83C\uDDE6\uD83C\uDDF4': '1f1e6-1f1f4',
    '\uD83C\uDDE6\uD83C\uDDEC': '1f1e6-1f1ec',
    '\uD83C\uDDE6\uD83C\uDDF7': '1f1e6-1f1f7',
    '\uD83C\uDDE6\uD83C\uDDF2': '1f1e6-1f1f2',
    '\uD83C\uDDE6\uD83C\uDDFA': '1f1e6-1f1fa',
    '\uD83C\uDDE6\uD83C\uDDF9': '1f1e6-1f1f9',
    '\uD83C\uDDE6\uD83C\uDDFF': '1f1e6-1f1ff',
    '\uD83C\uDDE7\uD83C\uDDF8': '1f1e7-1f1f8',
    '\uD83C\uDDE7\uD83C\uDDED': '1f1e7-1f1ed',
    '\uD83C\uDDE7\uD83C\uDDE9': '1f1e7-1f1e9',
    '\uD83C\uDDE7\uD83C\uDDE7': '1f1e7-1f1e7',
    '\uD83C\uDDE7\uD83C\uDDFE': '1f1e7-1f1fe',
    '\uD83C\uDDE7\uD83C\uDDEA': '1f1e7-1f1ea',
    '\uD83C\uDDE7\uD83C\uDDFF': '1f1e7-1f1ff',
    '\uD83C\uDDE7\uD83C\uDDEF': '1f1e7-1f1ef',
    '\uD83C\uDDE7\uD83C\uDDF9': '1f1e7-1f1f9',
    '\uD83C\uDDE7\uD83C\uDDF4': '1f1e7-1f1f4',
    '\uD83C\uDDE7\uD83C\uDDE6': '1f1e7-1f1e6',
    '\uD83C\uDDE7\uD83C\uDDFC': '1f1e7-1f1fc',
    '\uD83C\uDDE7\uD83C\uDDF7': '1f1e7-1f1f7',
    '\uD83C\uDDE7\uD83C\uDDF3': '1f1e7-1f1f3',
    '\uD83C\uDDE7\uD83C\uDDEC': '1f1e7-1f1ec',
    '\uD83C\uDDE7\uD83C\uDDEB': '1f1e7-1f1eb',
    '\uD83C\uDDE7\uD83C\uDDEE': '1f1e7-1f1ee',
    '\uD83C\uDDF0\uD83C\uDDED': '1f1f0-1f1ed',
    '\uD83C\uDDE8\uD83C\uDDF2': '1f1e8-1f1f2',
    '\uD83C\uDDE8\uD83C\uDDE6': '1f1e8-1f1e6',
    '\uD83C\uDDE8\uD83C\uDDFB': '1f1e8-1f1fb',
    '\uD83E\uDD19\uD83C\uDFFE': '1f919-1f3fe',
    '\uD83C\uDDE8\uD83C\uDDEB': '1f1e8-1f1eb',
    '\uD83C\uDDF9\uD83C\uDDE9': '1f1f9-1f1e9',
    '\uD83C\uDDE8\uD83C\uDDF1': '1f1e8-1f1f1',
    '\uD83C\uDDE8\uD83C\uDDF4': '1f1e8-1f1f4',
    '\uD83C\uDDF0\uD83C\uDDF2': '1f1f0-1f1f2',
    '\uD83C\uDDE8\uD83C\uDDF7': '1f1e8-1f1f7',
    '\uD83C\uDDE8\uD83C\uDDEE': '1f1e8-1f1ee',
    '\uD83C\uDDED\uD83C\uDDF7': '1f1ed-1f1f7',
    '\uD83C\uDDE8\uD83C\uDDFA': '1f1e8-1f1fa',
    '\uD83C\uDDE8\uD83C\uDDFE': '1f1e8-1f1fe',
    '\uD83C\uDDE8\uD83C\uDDFF': '1f1e8-1f1ff',
    '\uD83E\uDD19\uD83C\uDFFF': '1f919-1f3ff',
    '\uD83C\uDDE8\uD83C\uDDE9': '1f1e8-1f1e9',
    '\uD83E\uDD1B\uD83C\uDFFB': '1f91b-1f3fb',
    '\uD83C\uDDE9\uD83C\uDDF0': '1f1e9-1f1f0',
    '\uD83C\uDDE9\uD83C\uDDEF': '1f1e9-1f1ef',
    '\uD83C\uDDE9\uD83C\uDDF2': '1f1e9-1f1f2',
    '\uD83C\uDDE9\uD83C\uDDF4': '1f1e9-1f1f4',
    '\uD83C\uDDF9\uD83C\uDDF1': '1f1f9-1f1f1',
    '\uD83C\uDDEA\uD83C\uDDE8': '1f1ea-1f1e8',
    '\uD83C\uDDEA\uD83C\uDDEC': '1f1ea-1f1ec',
    '\uD83C\uDDF8\uD83C\uDDFB': '1f1f8-1f1fb',
    '\uD83C\uDDEC\uD83C\uDDF6': '1f1ec-1f1f6',
    '\uD83C\uDDEA\uD83C\uDDF7': '1f1ea-1f1f7',
    '\uD83C\uDDEA\uD83C\uDDEA': '1f1ea-1f1ea',
    '\uD83C\uDDEA\uD83C\uDDF9': '1f1ea-1f1f9',
    '\uD83E\uDD1B\uD83C\uDFFC': '1f91b-1f3fc',
    '\uD83C\uDDEB\uD83C\uDDEF': '1f1eb-1f1ef',
    '\uD83C\uDDEB\uD83C\uDDEE': '1f1eb-1f1ee',
    '\uD83C\uDDEC\uD83C\uDDE6': '1f1ec-1f1e6',
    '\uD83C\uDDEC\uD83C\uDDF2': '1f1ec-1f1f2',
    '\uD83C\uDDEC\uD83C\uDDEA': '1f1ec-1f1ea',
    '\uD83C\uDDEC\uD83C\uDDED': '1f1ec-1f1ed',
    '\uD83C\uDDEC\uD83C\uDDF7': '1f1ec-1f1f7',
    '\uD83C\uDDEC\uD83C\uDDE9': '1f1ec-1f1e9',
    '\uD83C\uDDEC\uD83C\uDDF9': '1f1ec-1f1f9',
    '\uD83C\uDDEC\uD83C\uDDF3': '1f1ec-1f1f3',
    '\uD83C\uDDEC\uD83C\uDDFC': '1f1ec-1f1fc',
    '\uD83C\uDDEC\uD83C\uDDFE': '1f1ec-1f1fe',
    '\uD83C\uDDED\uD83C\uDDF9': '1f1ed-1f1f9',
    '\uD83C\uDDED\uD83C\uDDF3': '1f1ed-1f1f3',
    '\uD83C\uDDED\uD83C\uDDFA': '1f1ed-1f1fa',
    '\uD83C\uDDEE\uD83C\uDDF8': '1f1ee-1f1f8',
    '\uD83C\uDDEE\uD83C\uDDF3': '1f1ee-1f1f3',
    '\uD83C\uDDEE\uD83C\uDDE9': '1f1ee-1f1e9',
    '\uD83C\uDDEE\uD83C\uDDF7': '1f1ee-1f1f7',
    '\uD83C\uDDEE\uD83C\uDDF6': '1f1ee-1f1f6',
    '\uD83C\uDDEE\uD83C\uDDEA': '1f1ee-1f1ea',
    '\uD83C\uDDEE\uD83C\uDDF1': '1f1ee-1f1f1',
    '\uD83C\uDDEF\uD83C\uDDF2': '1f1ef-1f1f2',
    '\uD83C\uDDEF\uD83C\uDDF4': '1f1ef-1f1f4',
    '\uD83C\uDDF0\uD83C\uDDFF': '1f1f0-1f1ff',
    '\uD83C\uDDF0\uD83C\uDDEA': '1f1f0-1f1ea',
    '\uD83C\uDDF0\uD83C\uDDEE': '1f1f0-1f1ee',
    '\uD83C\uDDFD\uD83C\uDDF0': '1f1fd-1f1f0',
    '\uD83C\uDDF0\uD83C\uDDFC': '1f1f0-1f1fc',
    '\uD83C\uDDF0\uD83C\uDDEC': '1f1f0-1f1ec',
    '\uD83E\uDD1B\uD83C\uDFFD': '1f91b-1f3fd',
    '\uD83C\uDDF1\uD83C\uDDE6': '1f1f1-1f1e6',
    '\uD83C\uDDF1\uD83C\uDDFB': '1f1f1-1f1fb',
    '\uD83C\uDDF1\uD83C\uDDE7': '1f1f1-1f1e7',
    '\uD83C\uDDF1\uD83C\uDDF8': '1f1f1-1f1f8',
    '\uD83C\uDDF1\uD83C\uDDF7': '1f1f1-1f1f7',
    '\uD83C\uDDF1\uD83C\uDDFE': '1f1f1-1f1fe',
    '\uD83C\uDDF1\uD83C\uDDEE': '1f1f1-1f1ee',
    '\uD83C\uDDF1\uD83C\uDDF9': '1f1f1-1f1f9',
    '\uD83C\uDDF1\uD83C\uDDFA': '1f1f1-1f1fa',
    '\uD83C\uDDF2\uD83C\uDDF0': '1f1f2-1f1f0',
    '\uD83C\uDDF2\uD83C\uDDEC': '1f1f2-1f1ec',
    '\uD83C\uDDF2\uD83C\uDDFC': '1f1f2-1f1fc',
    '\uD83C\uDDF2\uD83C\uDDFE': '1f1f2-1f1fe',
    '\uD83C\uDDF2\uD83C\uDDFB': '1f1f2-1f1fb',
    '\uD83C\uDDF2\uD83C\uDDF1': '1f1f2-1f1f1',
    '\uD83C\uDDF2\uD83C\uDDF9': '1f1f2-1f1f9',
    '\uD83C\uDDF2\uD83C\uDDED': '1f1f2-1f1ed',
    '\uD83C\uDDF2\uD83C\uDDF7': '1f1f2-1f1f7',
    '\uD83C\uDDF2\uD83C\uDDFA': '1f1f2-1f1fa',
    '\uD83C\uDDF2\uD83C\uDDFD': '1f1f2-1f1fd',
    '\uD83C\uDDEB\uD83C\uDDF2': '1f1eb-1f1f2',
    '\uD83C\uDDF2\uD83C\uDDE9': '1f1f2-1f1e9',
    '\uD83C\uDDF2\uD83C\uDDE8': '1f1f2-1f1e8',
    '\uD83C\uDDF2\uD83C\uDDF3': '1f1f2-1f1f3',
    '\uD83C\uDDF2\uD83C\uDDEA': '1f1f2-1f1ea',
    '\uD83C\uDDF2\uD83C\uDDE6': '1f1f2-1f1e6',
    '\uD83C\uDDF2\uD83C\uDDFF': '1f1f2-1f1ff',
    '\uD83C\uDDF2\uD83C\uDDF2': '1f1f2-1f1f2',
    '\uD83C\uDDF3\uD83C\uDDE6': '1f1f3-1f1e6',
    '\uD83C\uDDF3\uD83C\uDDF7': '1f1f3-1f1f7',
    '\uD83C\uDDF3\uD83C\uDDF5': '1f1f3-1f1f5',
    '\uD83C\uDDF3\uD83C\uDDF1': '1f1f3-1f1f1',
    '\uD83C\uDDF3\uD83C\uDDFF': '1f1f3-1f1ff',
    '\uD83C\uDDF3\uD83C\uDDEE': '1f1f3-1f1ee',
    '\uD83C\uDDF3\uD83C\uDDEA': '1f1f3-1f1ea',
    '\uD83C\uDDF3\uD83C\uDDEC': '1f1f3-1f1ec',
    '\uD83C\uDDF0\uD83C\uDDF5': '1f1f0-1f1f5',
    '\uD83C\uDDF3\uD83C\uDDF4': '1f1f3-1f1f4',
    '\uD83C\uDDF4\uD83C\uDDF2': '1f1f4-1f1f2',
    '\uD83C\uDDF5\uD83C\uDDF0': '1f1f5-1f1f0',
    '\uD83C\uDDF5\uD83C\uDDFC': '1f1f5-1f1fc',
    '\uD83C\uDDF5\uD83C\uDDE6': '1f1f5-1f1e6',
    '\uD83C\uDDF5\uD83C\uDDEC': '1f1f5-1f1ec',
    '\uD83E\uDD1B\uD83C\uDFFE': '1f91b-1f3fe',
    '\uD83C\uDDF5\uD83C\uDDFE': '1f1f5-1f1fe',
    '\uD83C\uDDF5\uD83C\uDDEA': '1f1f5-1f1ea',
    '\uD83C\uDDF5\uD83C\uDDED': '1f1f5-1f1ed',
    '\uD83C\uDDF5\uD83C\uDDF1': '1f1f5-1f1f1',
    '\uD83C\uDDF5\uD83C\uDDF9': '1f1f5-1f1f9',
    '\uD83C\uDDF6\uD83C\uDDE6': '1f1f6-1f1e6',
    '\uD83C\uDDF9\uD83C\uDDFC': '1f1f9-1f1fc',
    '\uD83C\uDDE8\uD83C\uDDEC': '1f1e8-1f1ec',
    '\uD83C\uDDF7\uD83C\uDDF4': '1f1f7-1f1f4',
    '\uD83C\uDDF7\uD83C\uDDFC': '1f1f7-1f1fc',
    '\uD83C\uDDF0\uD83C\uDDF3': '1f1f0-1f1f3',
    '\uD83C\uDDF1\uD83C\uDDE8': '1f1f1-1f1e8',
    '\uD83C\uDDFB\uD83C\uDDE8': '1f1fb-1f1e8',
    '\uD83C\uDDFC\uD83C\uDDF8': '1f1fc-1f1f8',
    '\uD83C\uDDF8\uD83C\uDDF2': '1f1f8-1f1f2',
    '\uD83C\uDDF8\uD83C\uDDF9': '1f1f8-1f1f9',
    '\uD83C\uDDF8\uD83C\uDDE6': '1f1f8-1f1e6',
    '\uD83E\uDD1B\uD83C\uDFFF': '1f91b-1f3ff',
    '\uD83C\uDDF8\uD83C\uDDF3': '1f1f8-1f1f3',
    '\uD83C\uDDF7\uD83C\uDDF8': '1f1f7-1f1f8',
    '\uD83C\uDDF8\uD83C\uDDE8': '1f1f8-1f1e8',
    '\uD83C\uDDF8\uD83C\uDDF1': '1f1f8-1f1f1',
    '\uD83C\uDDF8\uD83C\uDDEC': '1f1f8-1f1ec',
    '\uD83C\uDDF8\uD83C\uDDF0': '1f1f8-1f1f0',
    '\uD83C\uDDF8\uD83C\uDDEE': '1f1f8-1f1ee',
    '\uD83C\uDDF8\uD83C\uDDE7': '1f1f8-1f1e7',
    '\uD83C\uDDF8\uD83C\uDDF4': '1f1f8-1f1f4',
    '\uD83C\uDDFF\uD83C\uDDE6': '1f1ff-1f1e6',
    '\uD83C\uDDF1\uD83C\uDDF0': '1f1f1-1f1f0',
    '\uD83C\uDDF8\uD83C\uDDE9': '1f1f8-1f1e9',
    '\uD83C\uDDF8\uD83C\uDDF7': '1f1f8-1f1f7',
    '\uD83C\uDDF8\uD83C\uDDFF': '1f1f8-1f1ff',
    '\uD83C\uDDF8\uD83C\uDDEA': '1f1f8-1f1ea',
    '\uD83C\uDDE8\uD83C\uDDED': '1f1e8-1f1ed',
    '\uD83C\uDDF8\uD83C\uDDFE': '1f1f8-1f1fe',
    '\uD83C\uDDF9\uD83C\uDDEF': '1f1f9-1f1ef',
    '\uD83C\uDDF9\uD83C\uDDFF': '1f1f9-1f1ff',
    '\uD83C\uDDF9\uD83C\uDDED': '1f1f9-1f1ed',
    '\uD83C\uDDF9\uD83C\uDDEC': '1f1f9-1f1ec',
    '\uD83C\uDDF9\uD83C\uDDF4': '1f1f9-1f1f4',
    '\uD83C\uDDF9\uD83C\uDDF9': '1f1f9-1f1f9',
    '\uD83C\uDDF9\uD83C\uDDF3': '1f1f9-1f1f3',
    '\uD83C\uDDF9\uD83C\uDDF7': '1f1f9-1f1f7',
    '\uD83C\uDDF9\uD83C\uDDF2': '1f1f9-1f1f2',
    '\uD83C\uDDF9\uD83C\uDDFB': '1f1f9-1f1fb',
    '\uD83C\uDDFA\uD83C\uDDEC': '1f1fa-1f1ec',
    '\uD83C\uDDFA\uD83C\uDDE6': '1f1fa-1f1e6',
    '\uD83C\uDDE6\uD83C\uDDEA': '1f1e6-1f1ea',
    '\uD83C\uDDFA\uD83C\uDDFE': '1f1fa-1f1fe',
    '\uD83C\uDDFA\uD83C\uDDFF': '1f1fa-1f1ff',
    '\uD83C\uDDFB\uD83C\uDDFA': '1f1fb-1f1fa',
    '\uD83C\uDDFB\uD83C\uDDE6': '1f1fb-1f1e6',
    '\uD83C\uDDFB\uD83C\uDDEA': '1f1fb-1f1ea',
    '\uD83C\uDDFB\uD83C\uDDF3': '1f1fb-1f1f3',
    '\uD83C\uDDEA\uD83C\uDDED': '1f1ea-1f1ed',
    '\uD83E\uDD1C\uD83C\uDFFB': '1f91c-1f3fb',
    '\uD83C\uDDFE\uD83C\uDDEA': '1f1fe-1f1ea',
    '\uD83C\uDDFF\uD83C\uDDF2': '1f1ff-1f1f2',
    '\uD83C\uDDFF\uD83C\uDDFC': '1f1ff-1f1fc',
    '\uD83C\uDDF5\uD83C\uDDF7': '1f1f5-1f1f7',
    '\uD83C\uDDF0\uD83C\uDDFE': '1f1f0-1f1fe',
    '\uD83C\uDDE7\uD83C\uDDF2': '1f1e7-1f1f2',
    '\uD83C\uDDF5\uD83C\uDDEB': '1f1f5-1f1eb',
    '\uD83C\uDDF5\uD83C\uDDF8': '1f1f5-1f1f8',
    '\uD83C\uDDF3\uD83C\uDDE8': '1f1f3-1f1e8',
    '\uD83E\uDD1C\uD83C\uDFFC': '1f91c-1f3fc',
    '\uD83C\uDDF8\uD83C\uDDED': '1f1f8-1f1ed',
    '\uD83C\uDDE6\uD83C\uDDFC': '1f1e6-1f1fc',
    '\uD83C\uDDFB\uD83C\uDDEE': '1f1fb-1f1ee',
    '\uD83C\uDDED\uD83C\uDDF0': '1f1ed-1f1f0',
    '\uD83C\uDDE6\uD83C\uDDE8': '1f1e6-1f1e8',
    '\uD83C\uDDF2\uD83C\uDDF8': '1f1f2-1f1f8',
    '\uD83C\uDDEC\uD83C\uDDFA': '1f1ec-1f1fa',
    '\uD83C\uDDEC\uD83C\uDDF1': '1f1ec-1f1f1',
    '\uD83C\uDDF3\uD83C\uDDFA': '1f1f3-1f1fa',
    '\uD83C\uDDFC\uD83C\uDDEB': '1f1fc-1f1eb',
    '\uD83C\uDDF2\uD83C\uDDF4': '1f1f2-1f1f4',
    '\uD83E\uDD1C\uD83C\uDFFD': '1f91c-1f3fd',
    '\uD83C\uDDEB\uD83C\uDDF4': '1f1eb-1f1f4',
    '\uD83C\uDDEB\uD83C\uDDF0': '1f1eb-1f1f0',
    '\uD83C\uDDEF\uD83C\uDDEA': '1f1ef-1f1ea',
    '\uD83C\uDDE6\uD83C\uDDEE': '1f1e6-1f1ee',
    '\uD83C\uDDEC\uD83C\uDDEE': '1f1ec-1f1ee',
    '\uD83E\uDD1C\uD83C\uDFFE': '1f91c-1f3fe',
    '\uD83E\uDD1C\uD83C\uDFFF': '1f91c-1f3ff',
    '\uD83E\uDD1A\uD83C\uDFFB': '1f91a-1f3fb',
    '\uD83E\uDD1A\uD83C\uDFFC': '1f91a-1f3fc',
    '\uD83E\uDD1A\uD83C\uDFFD': '1f91a-1f3fd',
    '\uD83E\uDD1A\uD83C\uDFFE': '1f91a-1f3fe',
    '\uD83D\uDC76\uD83C\uDFFB': '1f476-1f3fb',
    '\uD83D\uDC76\uD83C\uDFFC': '1f476-1f3fc',
    '\uD83D\uDC76\uD83C\uDFFD': '1f476-1f3fd',
    '\uD83D\uDC76\uD83C\uDFFE': '1f476-1f3fe',
    '\uD83D\uDC76\uD83C\uDFFF': '1f476-1f3ff',
    '\uD83D\uDC66\uD83C\uDFFB': '1f466-1f3fb',
    '\uD83D\uDC66\uD83C\uDFFC': '1f466-1f3fc',
    '\uD83D\uDC66\uD83C\uDFFD': '1f466-1f3fd',
    '\uD83D\uDC66\uD83C\uDFFE': '1f466-1f3fe',
    '\uD83D\uDC66\uD83C\uDFFF': '1f466-1f3ff',
    '\uD83D\uDC67\uD83C\uDFFB': '1f467-1f3fb',
    '\uD83D\uDC67\uD83C\uDFFC': '1f467-1f3fc',
    '\uD83D\uDC67\uD83C\uDFFD': '1f467-1f3fd',
    '\uD83D\uDC67\uD83C\uDFFE': '1f467-1f3fe',
    '\uD83D\uDC67\uD83C\uDFFF': '1f467-1f3ff',
    '\uD83D\uDC68\uD83C\uDFFB': '1f468-1f3fb',
    '\uD83D\uDC68\uD83C\uDFFC': '1f468-1f3fc',
    '\uD83D\uDC68\uD83C\uDFFD': '1f468-1f3fd',
    '\uD83D\uDC68\uD83C\uDFFE': '1f468-1f3fe',
    '\uD83D\uDC68\uD83C\uDFFF': '1f468-1f3ff',
    '\uD83D\uDC69\uD83C\uDFFB': '1f469-1f3fb',
    '\uD83D\uDC69\uD83C\uDFFC': '1f469-1f3fc',
    '\uD83D\uDC69\uD83C\uDFFD': '1f469-1f3fd',
    '\uD83D\uDC69\uD83C\uDFFE': '1f469-1f3fe',
    '\uD83D\uDC69\uD83C\uDFFF': '1f469-1f3ff',
    '\uD83D\uDC70\uD83C\uDFFB': '1f470-1f3fb',
    '\uD83D\uDC70\uD83C\uDFFC': '1f470-1f3fc',
    '\uD83E\uDD1A\uD83C\uDFFF': '1f91a-1f3ff',
    '\uD83D\uDC70\uD83C\uDFFD': '1f470-1f3fd',
    '\uD83D\uDC70\uD83C\uDFFE': '1f470-1f3fe',
    '\uD83D\uDC70\uD83C\uDFFF': '1f470-1f3ff',
    '\uD83D\uDC71\uD83C\uDFFB': '1f471-1f3fb',
    '\uD83D\uDC71\uD83C\uDFFC': '1f471-1f3fc',
    '\uD83D\uDC71\uD83C\uDFFD': '1f471-1f3fd',
    '\uD83D\uDC71\uD83C\uDFFE': '1f471-1f3fe',
    '\uD83D\uDC71\uD83C\uDFFF': '1f471-1f3ff',
    '\uD83D\uDC72\uD83C\uDFFB': '1f472-1f3fb',
    '\uD83D\uDC72\uD83C\uDFFC': '1f472-1f3fc',
    '\uD83D\uDC72\uD83C\uDFFD': '1f472-1f3fd',
    '\uD83D\uDC72\uD83C\uDFFE': '1f472-1f3fe',
    '\uD83D\uDC72\uD83C\uDFFF': '1f472-1f3ff',
    '\uD83D\uDC73\uD83C\uDFFB': '1f473-1f3fb',
    '\uD83D\uDC73\uD83C\uDFFC': '1f473-1f3fc',
    '\uD83D\uDC73\uD83C\uDFFD': '1f473-1f3fd',
    '\uD83D\uDC73\uD83C\uDFFE': '1f473-1f3fe',
    '\uD83D\uDC73\uD83C\uDFFF': '1f473-1f3ff',
    '\uD83D\uDC74\uD83C\uDFFB': '1f474-1f3fb',
    '\uD83D\uDC74\uD83C\uDFFC': '1f474-1f3fc',
    '\uD83D\uDC74\uD83C\uDFFD': '1f474-1f3fd',
    '\uD83D\uDC74\uD83C\uDFFE': '1f474-1f3fe',
    '\uD83D\uDC74\uD83C\uDFFF': '1f474-1f3ff',
    '\uD83D\uDC75\uD83C\uDFFB': '1f475-1f3fb',
    '\uD83D\uDC75\uD83C\uDFFC': '1f475-1f3fc',
    '\uD83D\uDC75\uD83C\uDFFD': '1f475-1f3fd',
    '\uD83D\uDC75\uD83C\uDFFE': '1f475-1f3fe',
    '\uD83D\uDC75\uD83C\uDFFF': '1f475-1f3ff',
    '\uD83D\uDC6E\uD83C\uDFFB': '1f46e-1f3fb',
    '\uD83D\uDC6E\uD83C\uDFFC': '1f46e-1f3fc',
    '\uD83D\uDC6E\uD83C\uDFFD': '1f46e-1f3fd',
    '\uD83D\uDC6E\uD83C\uDFFE': '1f46e-1f3fe',
    '\uD83D\uDC6E\uD83C\uDFFF': '1f46e-1f3ff',
    '\uD83D\uDC77\uD83C\uDFFB': '1f477-1f3fb',
    '\uD83D\uDC77\uD83C\uDFFC': '1f477-1f3fc',
    '\uD83D\uDC77\uD83C\uDFFD': '1f477-1f3fd',
    '\uD83D\uDC77\uD83C\uDFFE': '1f477-1f3fe',
    '\uD83D\uDC77\uD83C\uDFFF': '1f477-1f3ff',
    '\uD83D\uDC78\uD83C\uDFFB': '1f478-1f3fb',
    '\uD83D\uDC78\uD83C\uDFFC': '1f478-1f3fc',
    '\uD83D\uDC78\uD83C\uDFFD': '1f478-1f3fd',
    '\uD83D\uDC78\uD83C\uDFFE': '1f478-1f3fe',
    '\uD83E\uDD38\uD83C\uDFFB': '1f938-1f3fb',
    '\uD83D\uDC78\uD83C\uDFFF': '1f478-1f3ff',
    '\uD83D\uDC82\uD83C\uDFFB': '1f482-1f3fb',
    '\uD83D\uDC82\uD83C\uDFFC': '1f482-1f3fc',
    '\uD83E\uDD38\uD83C\uDFFC': '1f938-1f3fc',
    '\uD83D\uDC82\uD83C\uDFFD': '1f482-1f3fd',
    '\uD83D\uDC82\uD83C\uDFFE': '1f482-1f3fe',
    '\uD83D\uDC82\uD83C\uDFFF': '1f482-1f3ff',
    '\uD83E\uDD38\uD83C\uDFFD': '1f938-1f3fd',
    '\uD83D\uDC7C\uD83C\uDFFB': '1f47c-1f3fb',
    '\uD83D\uDC7C\uD83C\uDFFC': '1f47c-1f3fc',
    '\uD83D\uDC7C\uD83C\uDFFD': '1f47c-1f3fd',
    '\uD83D\uDC7C\uD83C\uDFFE': '1f47c-1f3fe',
    '\uD83D\uDC7C\uD83C\uDFFF': '1f47c-1f3ff',
    '\uD83D\uDE47\uD83C\uDFFB': '1f647-1f3fb',
    '\uD83D\uDE47\uD83C\uDFFC': '1f647-1f3fc',
    '\uD83D\uDE47\uD83C\uDFFD': '1f647-1f3fd',
    '\uD83D\uDE47\uD83C\uDFFE': '1f647-1f3fe',
    '\uD83D\uDE47\uD83C\uDFFF': '1f647-1f3ff',
    '\uD83D\uDC81\uD83C\uDFFB': '1f481-1f3fb',
    '\uD83D\uDC81\uD83C\uDFFC': '1f481-1f3fc',
    '\uD83D\uDC81\uD83C\uDFFD': '1f481-1f3fd',
    '\uD83E\uDD38\uD83C\uDFFE': '1f938-1f3fe',
    '\uD83D\uDC81\uD83C\uDFFE': '1f481-1f3fe',
    '\uD83D\uDC81\uD83C\uDFFF': '1f481-1f3ff',
    '\uD83D\uDE45\uD83C\uDFFB': '1f645-1f3fb',
    '\uD83E\uDD38\uD83C\uDFFF': '1f938-1f3ff',
    '\uD83D\uDE45\uD83C\uDFFC': '1f645-1f3fc',
    '\uD83D\uDE45\uD83C\uDFFD': '1f645-1f3fd',
    '\uD83D\uDE45\uD83C\uDFFE': '1f645-1f3fe',
    '\uD83D\uDE45\uD83C\uDFFF': '1f645-1f3ff',
    '\uD83D\uDE46\uD83C\uDFFB': '1f646-1f3fb',
    '\uD83D\uDE46\uD83C\uDFFC': '1f646-1f3fc',
    '\uD83D\uDE46\uD83C\uDFFD': '1f646-1f3fd',
    '\uD83D\uDE46\uD83C\uDFFE': '1f646-1f3fe',
    '\uD83D\uDE46\uD83C\uDFFF': '1f646-1f3ff',
    '\uD83D\uDE4B\uD83C\uDFFB': '1f64b-1f3fb',
    '\uD83D\uDE4B\uD83C\uDFFC': '1f64b-1f3fc',
    '\uD83D\uDE4B\uD83C\uDFFD': '1f64b-1f3fd',
    '\uD83D\uDE4B\uD83C\uDFFE': '1f64b-1f3fe',
    '\uD83D\uDE4B\uD83C\uDFFF': '1f64b-1f3ff',
    '\uD83D\uDE4E\uD83C\uDFFB': '1f64e-1f3fb',
    '\uD83D\uDE4E\uD83C\uDFFC': '1f64e-1f3fc',
    '\uD83D\uDE4E\uD83C\uDFFD': '1f64e-1f3fd',
    '\uD83D\uDE4E\uD83C\uDFFE': '1f64e-1f3fe',
    '\uD83D\uDE4E\uD83C\uDFFF': '1f64e-1f3ff',
    '\uD83D\uDE4D\uD83C\uDFFB': '1f64d-1f3fb',
    '\uD83D\uDE4D\uD83C\uDFFC': '1f64d-1f3fc',
    '\uD83D\uDE4D\uD83C\uDFFD': '1f64d-1f3fd',
    '\uD83D\uDE4D\uD83C\uDFFE': '1f64d-1f3fe',
    '\uD83D\uDE4D\uD83C\uDFFF': '1f64d-1f3ff',
    '\uD83D\uDC86\uD83C\uDFFB': '1f486-1f3fb',
    '\uD83D\uDC86\uD83C\uDFFC': '1f486-1f3fc',
    '\uD83D\uDC86\uD83C\uDFFD': '1f486-1f3fd',
    '\uD83D\uDC86\uD83C\uDFFE': '1f486-1f3fe',
    '\uD83D\uDC86\uD83C\uDFFF': '1f486-1f3ff',
    '\uD83D\uDC87\uD83C\uDFFB': '1f487-1f3fb',
    '\uD83D\uDC87\uD83C\uDFFC': '1f487-1f3fc',
    '\uD83D\uDC87\uD83C\uDFFD': '1f487-1f3fd',
    '\uD83D\uDC87\uD83C\uDFFE': '1f487-1f3fe',
    '\uD83D\uDC87\uD83C\uDFFF': '1f487-1f3ff',
    '\uD83D\uDE4C\uD83C\uDFFB': '1f64c-1f3fb',
    '\uD83D\uDE4C\uD83C\uDFFC': '1f64c-1f3fc',
    '\uD83D\uDE4C\uD83C\uDFFD': '1f64c-1f3fd',
    '\uD83D\uDE4C\uD83C\uDFFE': '1f64c-1f3fe',
    '\uD83D\uDE4C\uD83C\uDFFF': '1f64c-1f3ff',
    '\uD83D\uDC4F\uD83C\uDFFB': '1f44f-1f3fb',
    '\uD83D\uDC4F\uD83C\uDFFC': '1f44f-1f3fc',
    '\uD83D\uDC4F\uD83C\uDFFD': '1f44f-1f3fd',
    '\uD83E\uDD3D\uD83C\uDFFB': '1f93d-1f3fb',
    '\uD83D\uDC4F\uD83C\uDFFE': '1f44f-1f3fe',
    '\uD83D\uDC4F\uD83C\uDFFF': '1f44f-1f3ff',
    '\uD83E\uDD3D\uD83C\uDFFC': '1f93d-1f3fc',
    '\uD83D\uDC42\uD83C\uDFFB': '1f442-1f3fb',
    '\uD83D\uDC42\uD83C\uDFFC': '1f442-1f3fc',
    '\uD83D\uDC42\uD83C\uDFFD': '1f442-1f3fd',
    '\uD83D\uDC42\uD83C\uDFFE': '1f442-1f3fe',
    '\uD83D\uDC42\uD83C\uDFFF': '1f442-1f3ff',
    '\uD83D\uDC43\uD83C\uDFFB': '1f443-1f3fb',
    '\uD83D\uDC43\uD83C\uDFFC': '1f443-1f3fc',
    '\uD83D\uDC43\uD83C\uDFFD': '1f443-1f3fd',
    '\uD83D\uDC43\uD83C\uDFFE': '1f443-1f3fe',
    '\uD83D\uDC43\uD83C\uDFFF': '1f443-1f3ff',
    '\uD83D\uDC85\uD83C\uDFFB': '1f485-1f3fb',
    '\uD83D\uDC85\uD83C\uDFFC': '1f485-1f3fc',
    '\uD83D\uDC85\uD83C\uDFFD': '1f485-1f3fd',
    '\uD83D\uDC85\uD83C\uDFFE': '1f485-1f3fe',
    '\uD83D\uDC85\uD83C\uDFFF': '1f485-1f3ff',
    '\uD83D\uDC4B\uD83C\uDFFB': '1f44b-1f3fb',
    '\uD83D\uDC4B\uD83C\uDFFC': '1f44b-1f3fc',
    '\uD83D\uDC4B\uD83C\uDFFD': '1f44b-1f3fd',
    '\uD83D\uDC4B\uD83C\uDFFE': '1f44b-1f3fe',
    '\uD83D\uDC4B\uD83C\uDFFF': '1f44b-1f3ff',
    '\uD83D\uDC4D\uD83C\uDFFB': '1f44d-1f3fb',
    '\uD83D\uDC4D\uD83C\uDFFC': '1f44d-1f3fc',
    '\uD83D\uDC4D\uD83C\uDFFD': '1f44d-1f3fd',
    '\uD83D\uDC4D\uD83C\uDFFE': '1f44d-1f3fe',
    '\uD83D\uDC4D\uD83C\uDFFF': '1f44d-1f3ff',
    '\uD83D\uDC4E\uD83C\uDFFB': '1f44e-1f3fb',
    '\uD83D\uDC4E\uD83C\uDFFC': '1f44e-1f3fc',
    '\uD83D\uDC4E\uD83C\uDFFD': '1f44e-1f3fd',
    '\uD83D\uDC4E\uD83C\uDFFE': '1f44e-1f3fe',
    '\uD83D\uDC4E\uD83C\uDFFF': '1f44e-1f3ff',
    '\uD83D\uDC46\uD83C\uDFFB': '1f446-1f3fb',
    '\uD83D\uDC46\uD83C\uDFFC': '1f446-1f3fc',
    '\uD83D\uDC46\uD83C\uDFFD': '1f446-1f3fd',
    '\uD83D\uDC46\uD83C\uDFFE': '1f446-1f3fe',
    '\uD83D\uDC46\uD83C\uDFFF': '1f446-1f3ff',
    '\uD83D\uDC47\uD83C\uDFFB': '1f447-1f3fb',
    '\uD83D\uDC47\uD83C\uDFFC': '1f447-1f3fc',
    '\uD83D\uDC47\uD83C\uDFFD': '1f447-1f3fd',
    '\uD83D\uDC47\uD83C\uDFFE': '1f447-1f3fe',
    '\uD83D\uDC47\uD83C\uDFFF': '1f447-1f3ff',
    '\uD83D\uDC48\uD83C\uDFFB': '1f448-1f3fb',
    '\uD83D\uDC48\uD83C\uDFFC': '1f448-1f3fc',
    '\uD83D\uDC48\uD83C\uDFFD': '1f448-1f3fd',
    '\uD83D\uDC48\uD83C\uDFFE': '1f448-1f3fe',
    '\uD83D\uDC48\uD83C\uDFFF': '1f448-1f3ff',
    '\uD83D\uDC49\uD83C\uDFFB': '1f449-1f3fb',
    '\uD83D\uDC49\uD83C\uDFFC': '1f449-1f3fc',
    '\uD83D\uDC49\uD83C\uDFFD': '1f449-1f3fd',
    '\uD83D\uDC49\uD83C\uDFFE': '1f449-1f3fe',
    '\uD83D\uDC49\uD83C\uDFFF': '1f449-1f3ff',
    '\uD83D\uDC4C\uD83C\uDFFB': '1f44c-1f3fb',
    '\uD83D\uDC4C\uD83C\uDFFC': '1f44c-1f3fc',
    '\uD83E\uDD3D\uD83C\uDFFD': '1f93d-1f3fd',
    '\uD83D\uDC4C\uD83C\uDFFD': '1f44c-1f3fd',
    '\uD83D\uDC4C\uD83C\uDFFE': '1f44c-1f3fe',
    '\uD83E\uDD3D\uD83C\uDFFE': '1f93d-1f3fe',
    '\uD83D\uDC4C\uD83C\uDFFF': '1f44c-1f3ff',
    '\uD83D\uDC4A\uD83C\uDFFB': '1f44a-1f3fb',
    '\uD83D\uDC4A\uD83C\uDFFC': '1f44a-1f3fc',
    '\uD83D\uDC4A\uD83C\uDFFD': '1f44a-1f3fd',
    '\uD83D\uDC4A\uD83C\uDFFE': '1f44a-1f3fe',
    '\uD83D\uDC4A\uD83C\uDFFF': '1f44a-1f3ff',
    '\uD83D\uDCAA\uD83C\uDFFB': '1f4aa-1f3fb',
    '\uD83D\uDCAA\uD83C\uDFFC': '1f4aa-1f3fc',
    '\uD83D\uDCAA\uD83C\uDFFD': '1f4aa-1f3fd',
    '\uD83D\uDCAA\uD83C\uDFFE': '1f4aa-1f3fe',
    '\uD83D\uDCAA\uD83C\uDFFF': '1f4aa-1f3ff',
    '\uD83D\uDC50\uD83C\uDFFB': '1f450-1f3fb',
    '\uD83D\uDC50\uD83C\uDFFC': '1f450-1f3fc',
    '\uD83D\uDC50\uD83C\uDFFD': '1f450-1f3fd',
    '\uD83D\uDC50\uD83C\uDFFE': '1f450-1f3fe',
    '\uD83D\uDC50\uD83C\uDFFF': '1f450-1f3ff',
    '\uD83D\uDE4F\uD83C\uDFFB': '1f64f-1f3fb',
    '\uD83E\uDD3D\uD83C\uDFFF': '1f93d-1f3ff',
    '\uD83D\uDE4F\uD83C\uDFFC': '1f64f-1f3fc',
    '\uD83D\uDE4F\uD83C\uDFFD': '1f64f-1f3fd',
    '\uD83E\uDD3E\uD83C\uDFFB': '1f93e-1f3fb',
    '\uD83D\uDE4F\uD83C\uDFFE': '1f64f-1f3fe',
    '\uD83D\uDE4F\uD83C\uDFFF': '1f64f-1f3ff',
    '\uD83E\uDD3E\uD83C\uDFFC': '1f93e-1f3fc',
    '\uD83C\uDFC3\uD83C\uDFFB': '1f3c3-1f3fb',
    '\uD83C\uDFC3\uD83C\uDFFC': '1f3c3-1f3fc',
    '\uD83C\uDFC3\uD83C\uDFFD': '1f3c3-1f3fd',
    '\uD83C\uDFC3\uD83C\uDFFE': '1f3c3-1f3fe',
    '\uD83E\uDD3E\uD83C\uDFFD': '1f93e-1f3fd',
    '\uD83C\uDFC3\uD83C\uDFFF': '1f3c3-1f3ff',
    '\uD83D\uDEB6\uD83C\uDFFB': '1f6b6-1f3fb',
    '\uD83D\uDEB6\uD83C\uDFFC': '1f6b6-1f3fc',
    '\uD83D\uDEB6\uD83C\uDFFD': '1f6b6-1f3fd',
    '\uD83D\uDEB6\uD83C\uDFFE': '1f6b6-1f3fe',
    '\uD83D\uDEB6\uD83C\uDFFF': '1f6b6-1f3ff',
    '\uD83D\uDC83\uD83C\uDFFB': '1f483-1f3fb',
    '\uD83E\uDD3E\uD83C\uDFFE': '1f93e-1f3fe',
    '\uD83D\uDC83\uD83C\uDFFC': '1f483-1f3fc',
    '\uD83D\uDC83\uD83C\uDFFD': '1f483-1f3fd',
    '\uD83E\uDD3E\uD83C\uDFFF': '1f93e-1f3ff',
    '\uD83D\uDC83\uD83C\uDFFE': '1f483-1f3fe',
    '\uD83D\uDC83\uD83C\uDFFF': '1f483-1f3ff',
    '\uD83E\uDD39\uD83C\uDFFB': '1f939-1f3fb',
    '\uD83D\uDEA3\uD83C\uDFFB': '1f6a3-1f3fb',
    '\uD83D\uDEA3\uD83C\uDFFC': '1f6a3-1f3fc',
    '\uD83D\uDEA3\uD83C\uDFFD': '1f6a3-1f3fd',
    '\uD83D\uDEA3\uD83C\uDFFE': '1f6a3-1f3fe',
    '\uD83D\uDEA3\uD83C\uDFFF': '1f6a3-1f3ff',
    '\uD83C\uDFCA\uD83C\uDFFB': '1f3ca-1f3fb',
    '\uD83C\uDFCA\uD83C\uDFFC': '1f3ca-1f3fc',
    '\uD83E\uDD39\uD83C\uDFFC': '1f939-1f3fc',
    '\uD83C\uDFCA\uD83C\uDFFD': '1f3ca-1f3fd',
    '\uD83C\uDFCA\uD83C\uDFFE': '1f3ca-1f3fe',
    '\uD83C\uDFCA\uD83C\uDFFF': '1f3ca-1f3ff',
    '\uD83E\uDD39\uD83C\uDFFD': '1f939-1f3fd',
    '\uD83C\uDFC4\uD83C\uDFFB': '1f3c4-1f3fb',
    '\uD83C\uDFC4\uD83C\uDFFC': '1f3c4-1f3fc',
    '\uD83C\uDFC4\uD83C\uDFFD': '1f3c4-1f3fd',
    '\uD83C\uDFC4\uD83C\uDFFE': '1f3c4-1f3fe',
    '\uD83C\uDFC4\uD83C\uDFFF': '1f3c4-1f3ff',
    '\uD83D\uDEC0\uD83C\uDFFB': '1f6c0-1f3fb',
    '\uD83D\uDEC0\uD83C\uDFFC': '1f6c0-1f3fc',
    '\uD83E\uDD39\uD83C\uDFFE': '1f939-1f3fe',
    '\uD83D\uDEC0\uD83C\uDFFD': '1f6c0-1f3fd',
    '\uD83D\uDEC0\uD83C\uDFFE': '1f6c0-1f3fe',
    '\uD83D\uDEC0\uD83C\uDFFF': '1f6c0-1f3ff',
    '\uD83E\uDD39\uD83C\uDFFF': '1f939-1f3ff',
    '\uD83D\uDEB4\uD83C\uDFFB': '1f6b4-1f3fb',
    '\uD83D\uDEB4\uD83C\uDFFC': '1f6b4-1f3fc',
    '\uD83D\uDEB4\uD83C\uDFFD': '1f6b4-1f3fd',
    '\uD83D\uDEB4\uD83C\uDFFE': '1f6b4-1f3fe',
    '\uD83D\uDEB4\uD83C\uDFFF': '1f6b4-1f3ff',
    '\uD83D\uDEB5\uD83C\uDFFB': '1f6b5-1f3fb',
    '\uD83D\uDEB5\uD83C\uDFFC': '1f6b5-1f3fc',
    '\uD83D\uDEB5\uD83C\uDFFD': '1f6b5-1f3fd',
    '\uD83D\uDEB5\uD83C\uDFFE': '1f6b5-1f3fe',
    '\uD83D\uDEB5\uD83C\uDFFF': '1f6b5-1f3ff',
    '\uD83C\uDFC7\uD83C\uDFFB': '1f3c7-1f3fb',
    '\uD83C\uDFC7\uD83C\uDFFC': '1f3c7-1f3fc',
    '\uD83C\uDFC7\uD83C\uDFFD': '1f3c7-1f3fd',
    '\uD83C\uDFC7\uD83C\uDFFE': '1f3c7-1f3fe',
    '\uD83C\uDFC7\uD83C\uDFFF': '1f3c7-1f3ff',
    '\uD83D\uDD90\uD83C\uDFFB': '1f590-1f3fb',
    '\uD83D\uDD90\uD83C\uDFFC': '1f590-1f3fc',
    '\uD83D\uDD90\uD83C\uDFFD': '1f590-1f3fd',
    '\uD83D\uDD90\uD83C\uDFFE': '1f590-1f3fe',
    '\uD83D\uDD90\uD83C\uDFFF': '1f590-1f3ff',
    '\uD83D\uDD95\uD83C\uDFFB': '1f595-1f3fb',
    '\uD83D\uDD95\uD83C\uDFFC': '1f595-1f3fc',
    '\uD83D\uDD95\uD83C\uDFFD': '1f595-1f3fd',
    '\uD83D\uDD95\uD83C\uDFFE': '1f595-1f3fe',
    '\uD83D\uDD95\uD83C\uDFFF': '1f595-1f3ff',
    '\uD83D\uDD96\uD83C\uDFFB': '1f596-1f3fb',
    '\uD83D\uDD96\uD83C\uDFFC': '1f596-1f3fc',
    '\uD83D\uDD96\uD83C\uDFFD': '1f596-1f3fd',
    '\uD83D\uDD96\uD83C\uDFFE': '1f596-1f3fe',
    '\uD83D\uDD96\uD83C\uDFFF': '1f596-1f3ff',
    '\uD83C\uDF85\uD83C\uDFFB': '1f385-1f3fb',
    '\uD83C\uDF85\uD83C\uDFFC': '1f385-1f3fc',
    '\uD83C\uDF85\uD83C\uDFFD': '1f385-1f3fd',
    '\uD83C\uDF85\uD83C\uDFFE': '1f385-1f3fe',
    '\uD83C\uDF85\uD83C\uDFFF': '1f385-1f3ff',
    '\uD83E\uDD18\uD83C\uDFFB': '1f918-1f3fb',
    '\uD83E\uDD18\uD83C\uDFFC': '1f918-1f3fc',
    '\uD83E\uDD18\uD83C\uDFFD': '1f918-1f3fd',
    '\uD83E\uDD18\uD83C\uDFFE': '1f918-1f3fe',
    '\uD83E\uDD18\uD83C\uDFFF': '1f918-1f3ff',
    '\uD83C\uDFCB\uD83C\uDFFB': '1f3cb-1f3fb',
    '\uD83C\uDFCB\uD83C\uDFFC': '1f3cb-1f3fc',
    '\uD83C\uDFCB\uD83C\uDFFD': '1f3cb-1f3fd',
    '\uD83C\uDFCB\uD83C\uDFFE': '1f3cb-1f3fe',
    '\uD83C\uDFCB\uD83C\uDFFF': '1f3cb-1f3ff',
    '\uD83C\uDDE6\uD83C\uDDFD': '1f1e6-1f1fd',
    '\uD83C\uDDF9\uD83C\uDDE6': '1f1f9-1f1e6',
    '\uD83C\uDDEE\uD83C\uDDF4': '1f1ee-1f1f4',
    '\uD83C\uDDE7\uD83C\uDDF6': '1f1e7-1f1f6',
    '\uD83C\uDDE8\uD83C\uDDFD': '1f1e8-1f1fd',
    '\uD83C\uDDE8\uD83C\uDDE8': '1f1e8-1f1e8',
    '\uD83C\uDDEC\uD83C\uDDEC': '1f1ec-1f1ec',
    '\uD83C\uDDEE\uD83C\uDDF2': '1f1ee-1f1f2',
    '\uD83C\uDDFE\uD83C\uDDF9': '1f1fe-1f1f9',
    '\uD83C\uDDF3\uD83C\uDDEB': '1f1f3-1f1eb',
    '\uD83C\uDDF5\uD83C\uDDF3': '1f1f5-1f1f3',
    '\uD83C\uDDE7\uD83C\uDDF1': '1f1e7-1f1f1',
    '\uD83C\uDDF5\uD83C\uDDF2': '1f1f5-1f1f2',
    '\uD83C\uDDEC\uD83C\uDDF8': '1f1ec-1f1f8',
    '\uD83C\uDDF9\uD83C\uDDF0': '1f1f9-1f1f0',
    '\uD83C\uDDE7\uD83C\uDDFB': '1f1e7-1f1fb',
    '\uD83C\uDDED\uD83C\uDDF2': '1f1ed-1f1f2',
    '\uD83C\uDDF8\uD83C\uDDEF': '1f1f8-1f1ef',
    '\uD83C\uDDFA\uD83C\uDDF2': '1f1fa-1f1f2',
    '\uD83C\uDDEE\uD83C\uDDE8': '1f1ee-1f1e8',
    '\uD83C\uDDEA\uD83C\uDDE6': '1f1ea-1f1e6',
    '\uD83C\uDDE8\uD83C\uDDF5': '1f1e8-1f1f5',
    '\uD83C\uDDE9\uD83C\uDDEC': '1f1e9-1f1ec',
    '\uD83C\uDDE6\uD83C\uDDF8': '1f1e6-1f1f8',
    '\uD83C\uDDE6\uD83C\uDDF6': '1f1e6-1f1f6',
    '\uD83C\uDDFB\uD83C\uDDEC': '1f1fb-1f1ec',
    '\uD83C\uDDE8\uD83C\uDDF0': '1f1e8-1f1f0',
    '\uD83C\uDDE8\uD83C\uDDFC': '1f1e8-1f1fc',
    '\uD83C\uDDEA\uD83C\uDDFA': '1f1ea-1f1fa',
    '\uD83C\uDDEC\uD83C\uDDEB': '1f1ec-1f1eb',
    '\uD83C\uDDF9\uD83C\uDDEB': '1f1f9-1f1eb',
    '\uD83C\uDDEC\uD83C\uDDF5': '1f1ec-1f1f5',
    '\uD83C\uDDF2\uD83C\uDDF6': '1f1f2-1f1f6',
    '\uD83C\uDDF2\uD83C\uDDF5': '1f1f2-1f1f5',
    '\uD83C\uDDF7\uD83C\uDDEA': '1f1f7-1f1ea',
    '\uD83C\uDDF8\uD83C\uDDFD': '1f1f8-1f1fd',
    '\uD83C\uDDF8\uD83C\uDDF8': '1f1f8-1f1f8',
    '\uD83C\uDDF9\uD83C\uDDE8': '1f1f9-1f1e8',
    '\uD83C\uDDF2\uD83C\uDDEB': '1f1f2-1f1eb',
    '\uD83D\uDD75\uD83C\uDFFB': '1f575-1f3fb',
    '\uD83D\uDD75\uD83C\uDFFC': '1f575-1f3fc',
    '\uD83D\uDD75\uD83C\uDFFD': '1f575-1f3fd',
    '\uD83D\uDD75\uD83C\uDFFE': '1f575-1f3fe',
    '\uD83D\uDD75\uD83C\uDFFF': '1f575-1f3ff',
    '\uD83C\uDFC2\uD83C\uDFFB': '1f3c2-1f3fb',
    '\uD83D\uDC68\uD83D\uDCBB': '1f468-1f4bb',
    '\uD83D\uDC69\uD83D\uDCBB': '1f469-1f4bb',
    '\uD83D\uDC68\uD83C\uDFEB': '1f468-1f3eb',
    '\uD83D\uDC69\uD83C\uDFEB': '1f469-1f3eb',
    '\uD83D\uDC68\uD83C\uDF93': '1f468-1f393',
    '\uD83D\uDC69\uD83C\uDF93': '1f469-1f393',
    '\uD83D\uDC68\uD83C\uDFA4': '1f468-1f3a4',
    '\uD83D\uDC69\uD83C\uDFA4': '1f469-1f3a4',
    '\uD83D\uDC68\uD83D\uDD2C': '1f468-1f52c',
    '\uD83D\uDC69\uD83D\uDD2C': '1f469-1f52c',
    '\uD83D\uDC68\uD83D\uDCBC': '1f468-1f4bc',
    '\uD83D\uDC69\uD83D\uDCBC': '1f469-1f4bc',
    '\uD83D\uDC68\uD83D\uDD27': '1f468-1f527',
    '\uD83D\uDC69\uD83D\uDD27': '1f469-1f527',
    '\uD83D\uDC68\uD83C\uDFED': '1f468-1f3ed',
    '\uD83D\uDC69\uD83C\uDFED': '1f469-1f3ed',
    '\uD83D\uDC68\uD83C\uDF73': '1f468-1f373',
    '\uD83D\uDC69\uD83C\uDF73': '1f469-1f373',
    '\uD83D\uDC68\uD83C\uDF3E': '1f468-1f33e',
    '\uD83D\uDC69\uD83C\uDF3E': '1f469-1f33e',
    '\uD83D\uDD74\uD83C\uDFFB': '1f574-1f3fb',
    '\uD83D\uDD74\uD83C\uDFFC': '1f574-1f3fc',
    '\uD83D\uDD74\uD83C\uDFFD': '1f574-1f3fd',
    '\uD83D\uDD74\uD83C\uDFFE': '1f574-1f3fe',
    '\uD83D\uDD74\uD83C\uDFFF': '1f574-1f3ff',
    '\uD83D\uDECC\uD83C\uDFFB': '1f6cc-1f3fb',
    '\uD83D\uDECC\uD83C\uDFFC': '1f6cc-1f3fc',
    '\uD83D\uDECC\uD83C\uDFFD': '1f6cc-1f3fd',
    '\uD83D\uDECC\uD83C\uDFFE': '1f6cc-1f3fe',
    '\uD83D\uDECC\uD83C\uDFFF': '1f6cc-1f3ff',
    '\uD83D\uDC68\uD83D\uDC66': '1f468-1f466',
    '\uD83D\uDC68\uD83D\uDC67': '1f468-1f467',
    '\uD83D\uDC69\uD83D\uDC66': '1f469-1f466',
    '\uD83D\uDC69\uD83D\uDC67': '1f469-1f467',
    '\uD83D\uDC68\uD83C\uDFA8': '1f468-1f3a8',
    '\uD83D\uDC69\uD83C\uDFA8': '1f469-1f3a8',
    '\uD83D\uDC68\uD83D\uDE80': '1f468-1f680',
    '\uD83D\uDC69\uD83D\uDE80': '1f469-1f680',
    '\uD83D\uDC68\uD83D\uDE92': '1f468-1f692',
    '\uD83D\uDC69\uD83D\uDE92': '1f469-1f692',
    '\uD83C\uDDFA\uD83C\uDDF3': '1f1fa-1f1f3',
    '\uD83C\uDFC2\uD83C\uDFFC': '1f3c2-1f3fc',
    '\uD83C\uDFC2\uD83C\uDFFD': '1f3c2-1f3fd',
    '\uD83C\uDFC2\uD83C\uDFFE': '1f3c2-1f3fe',
    '\uD83C\uDFC2\uD83C\uDFFF': '1f3c2-1f3ff',
    '\uD83C\uDFCC\uD83C\uDFFB': '1f3cc-1f3fb',
    '\uD83C\uDFCC\uD83C\uDFFC': '1f3cc-1f3fc',
    '\uD83C\uDFCC\uD83C\uDFFD': '1f3cc-1f3fd',
    '\uD83C\uDFCC\uD83C\uDFFE': '1f3cc-1f3fe',
    '\uD83C\uDFCC\uD83C\uDFFF': '1f3cc-1f3ff',
    '\uD83E\uDD1F\uD83C\uDFFB': '1f91f-1f3fb',
    '\uD83E\uDD1F\uD83C\uDFFC': '1f91f-1f3fc',
    '\uD83E\uDD1F\uD83C\uDFFD': '1f91f-1f3fd',
    '\uD83E\uDD1F\uD83C\uDFFE': '1f91f-1f3fe',
    '\uD83E\uDD1F\uD83C\uDFFF': '1f91f-1f3ff',
    '\uD83E\uDD31\uD83C\uDFFB': '1f931-1f3fb',
    '\uD83E\uDD31\uD83C\uDFFC': '1f931-1f3fc',
    '\uD83E\uDD31\uD83C\uDFFD': '1f931-1f3fd',
    '\uD83E\uDD31\uD83C\uDFFE': '1f931-1f3fe',
    '\uD83E\uDD31\uD83C\uDFFF': '1f931-1f3ff',
    '\uD83E\uDD32\uD83C\uDFFB': '1f932-1f3fb',
    '\uD83E\uDD32\uD83C\uDFFC': '1f932-1f3fc',
    '\uD83E\uDD32\uD83C\uDFFD': '1f932-1f3fd',
    '\uD83E\uDD32\uD83C\uDFFE': '1f932-1f3fe',
    '\uD83E\uDD32\uD83C\uDFFF': '1f932-1f3ff',
    '\uD83E\uDDD1\uD83C\uDFFB': '1f9d1-1f3fb',
    '\uD83E\uDDD1\uD83C\uDFFC': '1f9d1-1f3fc',
    '\uD83E\uDDD1\uD83C\uDFFD': '1f9d1-1f3fd',
    '\uD83E\uDDD1\uD83C\uDFFE': '1f9d1-1f3fe',
    '\uD83E\uDDD1\uD83C\uDFFF': '1f9d1-1f3ff',
    '\uD83E\uDDD2\uD83C\uDFFB': '1f9d2-1f3fb',
    '\uD83E\uDDD2\uD83C\uDFFC': '1f9d2-1f3fc',
    '\uD83E\uDDD2\uD83C\uDFFD': '1f9d2-1f3fd',
    '\uD83E\uDDD2\uD83C\uDFFE': '1f9d2-1f3fe',
    '\uD83E\uDDD2\uD83C\uDFFF': '1f9d2-1f3ff',
    '\uD83E\uDDD3\uD83C\uDFFB': '1f9d3-1f3fb',
    '\uD83E\uDDD3\uD83C\uDFFC': '1f9d3-1f3fc',
    '\uD83E\uDDD3\uD83C\uDFFD': '1f9d3-1f3fd',
    '\uD83E\uDDD3\uD83C\uDFFE': '1f9d3-1f3fe',
    '\uD83E\uDDD3\uD83C\uDFFF': '1f9d3-1f3ff',
    '\uD83E\uDDD4\uD83C\uDFFB': '1f9d4-1f3fb',
    '\uD83E\uDDD4\uD83C\uDFFC': '1f9d4-1f3fc',
    '\uD83E\uDDD4\uD83C\uDFFD': '1f9d4-1f3fd',
    '\uD83E\uDDD4\uD83C\uDFFE': '1f9d4-1f3fe',
    '\uD83E\uDDD4\uD83C\uDFFF': '1f9d4-1f3ff',
    '\uD83E\uDDD5\uD83C\uDFFB': '1f9d5-1f3fb',
    '\uD83E\uDDD5\uD83C\uDFFC': '1f9d5-1f3fc',
    '\uD83E\uDDD5\uD83C\uDFFD': '1f9d5-1f3fd',
    '\uD83E\uDDD5\uD83C\uDFFE': '1f9d5-1f3fe',
    '\uD83E\uDDD5\uD83C\uDFFF': '1f9d5-1f3ff',
    '\uD83E\uDDD6\uD83C\uDFFB': '1f9d6-1f3fb',
    '\uD83E\uDDD6\uD83C\uDFFC': '1f9d6-1f3fc',
    '\uD83E\uDDD6\uD83C\uDFFD': '1f9d6-1f3fd',
    '\uD83E\uDDD6\uD83C\uDFFE': '1f9d6-1f3fe',
    '\uD83E\uDDD6\uD83C\uDFFF': '1f9d6-1f3ff',
    '\uD83E\uDDD7\uD83C\uDFFB': '1f9d7-1f3fb',
    '\uD83E\uDDD7\uD83C\uDFFC': '1f9d7-1f3fc',
    '\uD83E\uDDD7\uD83C\uDFFD': '1f9d7-1f3fd',
    '\uD83E\uDDD7\uD83C\uDFFE': '1f9d7-1f3fe',
    '\uD83E\uDDD7\uD83C\uDFFF': '1f9d7-1f3ff',
    '\uD83E\uDDD8\uD83C\uDFFB': '1f9d8-1f3fb',
    '\uD83E\uDDD8\uD83C\uDFFC': '1f9d8-1f3fc',
    '\uD83E\uDDD8\uD83C\uDFFD': '1f9d8-1f3fd',
    '\uD83E\uDDD8\uD83C\uDFFE': '1f9d8-1f3fe',
    '\uD83E\uDDD8\uD83C\uDFFF': '1f9d8-1f3ff',
    '\uD83E\uDDD9\uD83C\uDFFB': '1f9d9-1f3fb',
    '\uD83E\uDDD9\uD83C\uDFFC': '1f9d9-1f3fc',
    '\uD83E\uDDD9\uD83C\uDFFD': '1f9d9-1f3fd',
    '\uD83E\uDDD9\uD83C\uDFFE': '1f9d9-1f3fe',
    '\uD83E\uDDD9\uD83C\uDFFF': '1f9d9-1f3ff',
    '\uD83E\uDDDA\uD83C\uDFFB': '1f9da-1f3fb',
    '\uD83E\uDDDA\uD83C\uDFFC': '1f9da-1f3fc',
    '\uD83E\uDDDA\uD83C\uDFFD': '1f9da-1f3fd',
    '\uD83E\uDDDA\uD83C\uDFFE': '1f9da-1f3fe',
    '\uD83E\uDDDA\uD83C\uDFFF': '1f9da-1f3ff',
    '\uD83E\uDDDB\uD83C\uDFFB': '1f9db-1f3fb',
    '\uD83E\uDDDB\uD83C\uDFFC': '1f9db-1f3fc',
    '\uD83E\uDDDB\uD83C\uDFFD': '1f9db-1f3fd',
    '\uD83E\uDDDB\uD83C\uDFFE': '1f9db-1f3fe',
    '\uD83E\uDDDB\uD83C\uDFFF': '1f9db-1f3ff',
    '\uD83E\uDDDC\uD83C\uDFFB': '1f9dc-1f3fb',
    '\uD83E\uDDDC\uD83C\uDFFC': '1f9dc-1f3fc',
    '\uD83E\uDDDC\uD83C\uDFFD': '1f9dc-1f3fd',
    '\uD83E\uDDDC\uD83C\uDFFE': '1f9dc-1f3fe',
    '\uD83E\uDDDC\uD83C\uDFFF': '1f9dc-1f3ff',
    '\uD83E\uDDDD\uD83C\uDFFB': '1f9dd-1f3fb',
    '\uD83E\uDDDD\uD83C\uDFFC': '1f9dd-1f3fc',
    '\uD83E\uDDDD\uD83C\uDFFD': '1f9dd-1f3fd',
    '\uD83E\uDDDD\uD83C\uDFFE': '1f9dd-1f3fe',
    '\uD83E\uDDDD\uD83C\uDFFF': '1f9dd-1f3ff',
    '\uD83C\uDD7F\uFE0F': '1f17f',
    '\uD83C\uDE02\uFE0F': '1f202',
    '\uD83C\uDE37\uFE0F': '1f237',
    '\uD83C\uDF9E\uFE0F': '1f39e',
    '\uD83C\uDF9F\uFE0F': '1f39f',
    '\uD83C\uDFCB\uFE0F': '1f3cb',
    '\uD83C\uDFCC\uFE0F': '1f3cc',
    '\uD83C\uDFCD\uFE0F': '1f3cd',
    '\uD83C\uDFCE\uFE0F': '1f3ce',
    '\uD83C\uDF96\uFE0F': '1f396',
    '\uD83C\uDF97\uFE0F': '1f397',
    '\uD83C\uDF36\uFE0F': '1f336',
    '\uD83C\uDF27\uFE0F': '1f327',
    '\uD83C\uDF28\uFE0F': '1f328',
    '\uD83C\uDF29\uFE0F': '1f329',
    '\uD83C\uDF2A\uFE0F': '1f32a',
    '\uD83C\uDF2B\uFE0F': '1f32b',
    '\uD83C\uDF2C\uFE0F': '1f32c',
    '\uD83D\uDC3F\uFE0F': '1f43f',
    '\uD83D\uDD77\uFE0F': '1f577',
    '\uD83D\uDD78\uFE0F': '1f578',
    '\uD83C\uDF21\uFE0F': '1f321',
    '\uD83C\uDF99\uFE0F': '1f399',
    '\uD83C\uDF9A\uFE0F': '1f39a',
    '\uD83C\uDF9B\uFE0F': '1f39b',
    '\uD83C\uDFF3\uFE0F': '1f3f3',
    '\uD83C\uDFF5\uFE0F': '1f3f5',
    '\uD83C\uDFF7\uFE0F': '1f3f7',
    '\uD83D\uDCFD\uFE0F': '1f4fd',
    '\uD83D\uDD49\uFE0F': '1f549',
    '\uD83D\uDD4A\uFE0F': '1f54a',
    '\uD83D\uDD6F\uFE0F': '1f56f',
    '\uD83D\uDD70\uFE0F': '1f570',
    '\uD83D\uDD73\uFE0F': '1f573',
    '\uD83D\uDD76\uFE0F': '1f576',
    '\uD83D\uDD79\uFE0F': '1f579',
    '\uD83D\uDD87\uFE0F': '1f587',
    '\uD83D\uDD8A\uFE0F': '1f58a',
    '\uD83D\uDD8B\uFE0F': '1f58b',
    '\uD83D\uDD8C\uFE0F': '1f58c',
    '\uD83D\uDD8D\uFE0F': '1f58d',
    '\uD83D\uDDA5\uFE0F': '1f5a5',
    '\uD83D\uDDA8\uFE0F': '1f5a8',
    '\uD83D\uDDB2\uFE0F': '1f5b2',
    '\uD83D\uDDBC\uFE0F': '1f5bc',
    '\uD83D\uDDC2\uFE0F': '1f5c2',
    '\uD83D\uDDC3\uFE0F': '1f5c3',
    '\uD83D\uDDC4\uFE0F': '1f5c4',
    '\uD83D\uDDD1\uFE0F': '1f5d1',
    '\uD83D\uDDD2\uFE0F': '1f5d2',
    '\uD83D\uDDD3\uFE0F': '1f5d3',
    '\uD83D\uDDDC\uFE0F': '1f5dc',
    '\uD83D\uDDDD\uFE0F': '1f5dd',
    '\uD83D\uDDDE\uFE0F': '1f5de',
    '\uD83D\uDDE1\uFE0F': '1f5e1',
    '\uD83D\uDDE3\uFE0F': '1f5e3',
    '\uD83D\uDDE8\uFE0F': '1f5e8',
    '\uD83D\uDDEF\uFE0F': '1f5ef',
    '\uD83D\uDDF3\uFE0F': '1f5f3',
    '\uD83D\uDDFA\uFE0F': '1f5fa',
    '\uD83D\uDEE0\uFE0F': '1f6e0',
    '\uD83D\uDEE1\uFE0F': '1f6e1',
    '\uD83D\uDEE2\uFE0F': '1f6e2',
    '\uD83D\uDEF0\uFE0F': '1f6f0',
    '\uD83C\uDF7D\uFE0F': '1f37d',
    '\uD83D\uDC41\uFE0F': '1f441',
    '\uD83D\uDD74\uFE0F': '1f574',
    '\uD83D\uDD75\uFE0F': '1f575',
    '\uD83D\uDD90\uFE0F': '1f590',
    '\uD83C\uDFD4\uFE0F': '1f3d4',
    '\uD83C\uDFD5\uFE0F': '1f3d5',
    '\uD83C\uDFD6\uFE0F': '1f3d6',
    '\uD83C\uDFD7\uFE0F': '1f3d7',
    '\uD83C\uDFD8\uFE0F': '1f3d8',
    '\uD83C\uDFD9\uFE0F': '1f3d9',
    '\uD83C\uDFDA\uFE0F': '1f3da',
    '\uD83C\uDFDB\uFE0F': '1f3db',
    '\uD83C\uDFDC\uFE0F': '1f3dc',
    '\uD83C\uDFDD\uFE0F': '1f3dd',
    '\uD83C\uDFDE\uFE0F': '1f3de',
    '\uD83C\uDFDF\uFE0F': '1f3df',
    '\uD83D\uDECB\uFE0F': '1f6cb',
    '\uD83D\uDECD\uFE0F': '1f6cd',
    '\uD83D\uDECE\uFE0F': '1f6ce',
    '\uD83D\uDECF\uFE0F': '1f6cf',
    '\uD83D\uDEE3\uFE0F': '1f6e3',
    '\uD83D\uDEE4\uFE0F': '1f6e4',
    '\uD83D\uDEE5\uFE0F': '1f6e5',
    '\uD83D\uDEE9\uFE0F': '1f6e9',
    '\uD83D\uDEF3\uFE0F': '1f6f3',
    '\u261D\uD83C\uDFFB': '261d-1f3fb',
    '\u261D\uD83C\uDFFC': '261d-1f3fc',
    '\u261D\uD83C\uDFFD': '261d-1f3fd',
    '\u261D\uD83C\uDFFE': '261d-1f3fe',
    '\u261D\uD83C\uDFFF': '261d-1f3ff',
    '\u270C\uD83C\uDFFB': '270c-1f3fb',
    '\u270C\uD83C\uDFFC': '270c-1f3fc',
    '\u270C\uD83C\uDFFD': '270c-1f3fd',
    '\u270C\uD83C\uDFFE': '270c-1f3fe',
    '\u270C\uD83C\uDFFF': '270c-1f3ff',
    '\u270A\uD83C\uDFFB': '270a-1f3fb',
    '\u270A\uD83C\uDFFC': '270a-1f3fc',
    '\u270A\uD83C\uDFFD': '270a-1f3fd',
    '\u270A\uD83C\uDFFE': '270a-1f3fe',
    '\u270A\uD83C\uDFFF': '270a-1f3ff',
    '\u270B\uD83C\uDFFB': '270b-1f3fb',
    '\u270B\uD83C\uDFFC': '270b-1f3fc',
    '\u270B\uD83C\uDFFD': '270b-1f3fd',
    '\u270B\uD83C\uDFFE': '270b-1f3fe',
    '\u270B\uD83C\uDFFF': '270b-1f3ff',
    '\u270D\uD83C\uDFFB': '270d-1f3fb',
    '\u270D\uD83C\uDFFC': '270d-1f3fc',
    '\u270D\uD83C\uDFFD': '270d-1f3fd',
    '\u270D\uD83C\uDFFE': '270d-1f3fe',
    '\u270D\uD83C\uDFFF': '270d-1f3ff',
    '\uD83C\uDF24\uFE0F': '1f324',
    '\uD83C\uDF25\uFE0F': '1f325',
    '\uD83C\uDF26\uFE0F': '1f326',
    '\uD83D\uDDB1\uFE0F': '1f5b1',
    '\u26F9\uD83C\uDFFB': '26f9-1f3fb',
    '\u26F9\uD83C\uDFFC': '26f9-1f3fc',
    '\u26F9\uD83C\uDFFD': '26f9-1f3fd',
    '\u26F9\uD83C\uDFFE': '26f9-1f3fe',
    '\u26F9\uD83C\uDFFF': '26f9-1f3ff',
    '\uD83C\uDD70\uFE0F': '1f170',
    '\uD83C\uDD71\uFE0F': '1f171',
    '\uD83C\uDD7E\uFE0F': '1f17e',
    '\uD83C\uDC04\uFE0F': '1f004',
    '\uD83C\uDE1A\uFE0F': '1f21a',
    '\uD83C\uDE2F\uFE0F': '1f22f',
    '\uD83C\uDF0D\uFE0F': '1f30d',
    '\uD83C\uDF0E\uFE0F': '1f30e',
    '\uD83C\uDF0F\uFE0F': '1f30f',
    '\uD83C\uDF15\uFE0F': '1f315',
    '\uD83C\uDF1C\uFE0F': '1f31c',
    '\uD83C\uDF78\uFE0F': '1f378',
    '\uD83C\uDF93\uFE0F': '1f393',
    '\uD83C\uDFA7\uFE0F': '1f3a7',
    '\uD83C\uDFAC\uFE0F': '1f3ac',
    '\uD83C\uDFAD\uFE0F': '1f3ad',
    '\uD83C\uDFAE\uFE0F': '1f3ae',
    '\uD83C\uDFC2\uFE0F': '1f3c2',
    '\uD83C\uDFC4\uFE0F': '1f3c4',
    '\uD83C\uDFC6\uFE0F': '1f3c6',
    '\uD83C\uDFCA\uFE0F': '1f3ca',
    '\uD83C\uDFE0\uFE0F': '1f3e0',
    '\uD83C\uDFED\uFE0F': '1f3ed',
    '\uD83D\uDC08\uFE0F': '1f408',
    '\uD83D\uDC15\uFE0F': '1f415',
    '\uD83D\uDC1F\uFE0F': '1f41f',
    '\uD83D\uDC26\uFE0F': '1f426',
    '\uD83D\uDC42\uFE0F': '1f442',
    '\uD83D\uDC46\uFE0F': '1f446',
    '\uD83D\uDC47\uFE0F': '1f447',
    '\uD83D\uDC48\uFE0F': '1f448',
    '\uD83D\uDC49\uFE0F': '1f449',
    '\uD83D\uDC4D\uFE0F': '1f44d',
    '\uD83D\uDC4E\uFE0F': '1f44e',
    '\uD83D\uDC53\uFE0F': '1f453',
    '\uD83D\uDC6A\uFE0F': '1f46a',
    '\uD83D\uDC7D\uFE0F': '1f47d',
    '\uD83D\uDCA3\uFE0F': '1f4a3',
    '\uD83D\uDCB0\uFE0F': '1f4b0',
    '\uD83D\uDCB3\uFE0F': '1f4b3',
    '\uD83D\uDCBB\uFE0F': '1f4bb',
    '\uD83D\uDCBF\uFE0F': '1f4bf',
    '\uD83D\uDCCB\uFE0F': '1f4cb',
    '\uD83D\uDCDA\uFE0F': '1f4da',
    '\uD83D\uDCDF\uFE0F': '1f4df',
    '\uD83D\uDCE4\uFE0F': '1f4e4',
    '\uD83D\uDCE5\uFE0F': '1f4e5',
    '\uD83D\uDCE6\uFE0F': '1f4e6',
    '\uD83D\uDCEA\uFE0F': '1f4ea',
    '\uD83D\uDCEB\uFE0F': '1f4eb',
    '\uD83D\uDCEC\uFE0F': '1f4ec',
    '\uD83D\uDCED\uFE0F': '1f4ed',
    '\uD83D\uDCF7\uFE0F': '1f4f7',
    '\uD83D\uDCF9\uFE0F': '1f4f9',
    '\uD83D\uDCFA\uFE0F': '1f4fa',
    '\uD83D\uDCFB\uFE0F': '1f4fb',
    '\uD83D\uDD08\uFE0F': '1f508',
    '\uD83D\uDD0D\uFE0F': '1f50d',
    '\uD83D\uDD12\uFE0F': '1f512',
    '\uD83D\uDD13\uFE0F': '1f513',
    '\uD83D\uDD50\uFE0F': '1f550',
    '\uD83D\uDD51\uFE0F': '1f551',
    '\uD83D\uDD52\uFE0F': '1f552',
    '\uD83D\uDD53\uFE0F': '1f553',
    '\uD83D\uDD54\uFE0F': '1f554',
    '\uD83D\uDD55\uFE0F': '1f555',
    '\uD83D\uDD56\uFE0F': '1f556',
    '\uD83D\uDD57\uFE0F': '1f557',
    '\uD83D\uDD58\uFE0F': '1f558',
    '\uD83D\uDD59\uFE0F': '1f559',
    '\uD83D\uDD5A\uFE0F': '1f55a',
    '\uD83D\uDD5B\uFE0F': '1f55b',
    '\uD83D\uDD5C\uFE0F': '1f55c',
    '\uD83D\uDD5D\uFE0F': '1f55d',
    '\uD83D\uDD5E\uFE0F': '1f55e',
    '\uD83D\uDD5F\uFE0F': '1f55f',
    '\uD83D\uDD60\uFE0F': '1f560',
    '\uD83D\uDD61\uFE0F': '1f561',
    '\uD83D\uDD62\uFE0F': '1f562',
    '\uD83D\uDD63\uFE0F': '1f563',
    '\uD83D\uDD64\uFE0F': '1f564',
    '\uD83D\uDD65\uFE0F': '1f565',
    '\uD83D\uDD66\uFE0F': '1f566',
    '\uD83D\uDD67\uFE0F': '1f567',
    '\uD83D\uDE10\uFE0F': '1f610',
    '\uD83D\uDE87\uFE0F': '1f687',
    '\uD83D\uDE8D\uFE0F': '1f68d',
    '\uD83D\uDE91\uFE0F': '1f691',
    '\uD83D\uDE94\uFE0F': '1f694',
    '\uD83D\uDE98\uFE0F': '1f698',
    '\uD83D\uDEAD\uFE0F': '1f6ad',
    '\uD83D\uDEB2\uFE0F': '1f6b2',
    '\uD83D\uDEB9\uFE0F': '1f6b9',
    '\uD83D\uDEBA\uFE0F': '1f6ba',
    '\uD83D\uDEBC\uFE0F': '1f6bc',
    '#\u20E3': '0023-20e3',
    '0\u20E3': '0030-20e3',
    '1\u20E3': '0031-20e3',
    '2\u20E3': '0032-20e3',
    '3\u20E3': '0033-20e3',
    '4\u20E3': '0034-20e3',
    '5\u20E3': '0035-20e3',
    '6\u20E3': '0036-20e3',
    '7\u20E3': '0037-20e3',
    '8\u20E3': '0038-20e3',
    '9\u20E3': '0039-20e3',
    '\xA9\uFE0F': '00a9',
    '\xAE\uFE0F': '00ae',
    '\u203C\uFE0F': '203c',
    '\u2049\uFE0F': '2049',
    '\u2122\uFE0F': '2122',
    ℹ️: '2139',
    '\u2194\uFE0F': '2194',
    '\u2195\uFE0F': '2195',
    '\u2196\uFE0F': '2196',
    '\u2197\uFE0F': '2197',
    '\u2198\uFE0F': '2198',
    '\u2199\uFE0F': '2199',
    '\u21A9\uFE0F': '21a9',
    '\u21AA\uFE0F': '21aa',
    '\u24C2\uFE0F': '24c2',
    '\u25AA\uFE0F': '25aa',
    '\u25AB\uFE0F': '25ab',
    '\u25B6\uFE0F': '25b6',
    '\u25C0\uFE0F': '25c0',
    '\u25FB\uFE0F': '25fb',
    '\u25FC\uFE0F': '25fc',
    '\u2600\uFE0F': '2600',
    '\u2601\uFE0F': '2601',
    '\u260E\uFE0F': '260e',
    '\u2611\uFE0F': '2611',
    '\u261D\uFE0F': '261d',
    '\u263A\uFE0F': '263a',
    '\u2660\uFE0F': '2660',
    '\u2663\uFE0F': '2663',
    '\u2665\uFE0F': '2665',
    '\u2666\uFE0F': '2666',
    '\u2668\uFE0F': '2668',
    '\u267B\uFE0F': '267b',
    '\u26A0\uFE0F': '26a0',
    '\u2702\uFE0F': '2702',
    '\u2708\uFE0F': '2708',
    '\u2709\uFE0F': '2709',
    '\u270C\uFE0F': '270c',
    '\u270F\uFE0F': '270f',
    '\u2712\uFE0F': '2712',
    '\u2714\uFE0F': '2714',
    '\u2716\uFE0F': '2716',
    '\u2733\uFE0F': '2733',
    '\u2734\uFE0F': '2734',
    '\u2744\uFE0F': '2744',
    '\u2747\uFE0F': '2747',
    '\u2764\uFE0F': '2764',
    '\u27A1\uFE0F': '27a1',
    '\u2934\uFE0F': '2934',
    '\u2935\uFE0F': '2935',
    '\u2B05\uFE0F': '2b05',
    '\u2B06\uFE0F': '2b06',
    '\u2B07\uFE0F': '2b07',
    '\u3030\uFE0F': '3030',
    '\u303D\uFE0F': '303d',
    '\u3297\uFE0F': '3297',
    '\u3299\uFE0F': '3299',
    '\u271D\uFE0F': '271d',
    '\u2328\uFE0F': '2328',
    '\u270D\uFE0F': '270d',
    '*\u20E3': '002a-20e3',
    '\u23CF\uFE0F': '23cf',
    '\u23ED\uFE0F': '23ed',
    '\u23EE\uFE0F': '23ee',
    '\u23EF\uFE0F': '23ef',
    '\u23F1\uFE0F': '23f1',
    '\u23F2\uFE0F': '23f2',
    '\u23F8\uFE0F': '23f8',
    '\u23F9\uFE0F': '23f9',
    '\u23FA\uFE0F': '23fa',
    '\u2602\uFE0F': '2602',
    '\u2603\uFE0F': '2603',
    '\u2604\uFE0F': '2604',
    '\u2618\uFE0F': '2618',
    '\u2620\uFE0F': '2620',
    '\u2622\uFE0F': '2622',
    '\u2623\uFE0F': '2623',
    '\u2626\uFE0F': '2626',
    '\u262A\uFE0F': '262a',
    '\u262E\uFE0F': '262e',
    '\u262F\uFE0F': '262f',
    '\u2638\uFE0F': '2638',
    '\u2639\uFE0F': '2639',
    '\u2692\uFE0F': '2692',
    '\u2694\uFE0F': '2694',
    '\u2696\uFE0F': '2696',
    '\u2697\uFE0F': '2697',
    '\u2699\uFE0F': '2699',
    '\u269B\uFE0F': '269b',
    '\u269C\uFE0F': '269c',
    '\u26B0\uFE0F': '26b0',
    '\u26B1\uFE0F': '26b1',
    '\u26C8\uFE0F': '26c8',
    '\u26CF\uFE0F': '26cf',
    '\u26D1\uFE0F': '26d1',
    '\u26D3\uFE0F': '26d3',
    '\u26E9\uFE0F': '26e9',
    '\u26F0\uFE0F': '26f0',
    '\u26F1\uFE0F': '26f1',
    '\u26F4\uFE0F': '26f4',
    '\u26F7\uFE0F': '26f7',
    '\u26F8\uFE0F': '26f8',
    '\u26F9\uFE0F': '26f9',
    '\u2721\uFE0F': '2721',
    '\u2763\uFE0F': '2763',
    '#\uFE0F': '0023',
    '*\uFE0F': '002a',
    '0\uFE0F': '0030',
    '1\uFE0F': '0031',
    '2\uFE0F': '0032',
    '3\uFE0F': '0033',
    '4\uFE0F': '0034',
    '5\uFE0F': '0035',
    '6\uFE0F': '0036',
    '7\uFE0F': '0037',
    '8\uFE0F': '0038',
    '9\uFE0F': '0039',
    '\u2640\uFE0F': '2640',
    '\u2642\uFE0F': '2642',
    '\u2695\uFE0F': '2695',
    '\u231A\uFE0F': '231a',
    '\u231B\uFE0F': '231b',
    '\u23E9\uFE0F': '23e9',
    '\u23EA\uFE0F': '23ea',
    '\u23F3\uFE0F': '23f3',
    '\u25FD\uFE0F': '25fd',
    '\u25FE\uFE0F': '25fe',
    '\u2614\uFE0F': '2614',
    '\u2615\uFE0F': '2615',
    '\u2648\uFE0F': '2648',
    '\u2649\uFE0F': '2649',
    '\u264A\uFE0F': '264a',
    '\u264B\uFE0F': '264b',
    '\u264C\uFE0F': '264c',
    '\u264D\uFE0F': '264d',
    '\u264E\uFE0F': '264e',
    '\u264F\uFE0F': '264f',
    '\u2650\uFE0F': '2650',
    '\u2651\uFE0F': '2651',
    '\u2652\uFE0F': '2652',
    '\u2653\uFE0F': '2653',
    '\u267F\uFE0F': '267f',
    '\u2693\uFE0F': '2693',
    '\u26A1\uFE0F': '26a1',
    '\u26AA\uFE0F': '26aa',
    '\u26AB\uFE0F': '26ab',
    '\u26BD\uFE0F': '26bd',
    '\u26BE\uFE0F': '26be',
    '\u26C4\uFE0F': '26c4',
    '\u26C5\uFE0F': '26c5',
    '\u26D4\uFE0F': '26d4',
    '\u26EA\uFE0F': '26ea',
    '\u26F2\uFE0F': '26f2',
    '\u26F3\uFE0F': '26f3',
    '\u26F5\uFE0F': '26f5',
    '\u26FA\uFE0F': '26fa',
    '\u26FD\uFE0F': '26fd',
    '\u2753\uFE0F': '2753',
    '\u2757\uFE0F': '2757',
    '\u2B1B\uFE0F': '2b1b',
    '\u2B1C\uFE0F': '2b1c',
    '\u2B50\uFE0F': '2b50',
    '\u2B55\uFE0F': '2b55',
    '\uD83E\uDD49': '1f949',
    '\uD83E\uDD48': '1f948',
    '\uD83E\uDD47': '1f947',
    '\uD83E\uDD3A': '1f93a',
    '\uD83E\uDD45': '1f945',
    '\uD83E\uDD3E': '1f93e',
    '\uD83C\uDDFF': '1f1ff',
    '\uD83E\uDD3D': '1f93d',
    '\uD83E\uDD4B': '1f94b',
    '\uD83E\uDD4A': '1f94a',
    '\uD83E\uDD3C': '1f93c',
    '\uD83E\uDD39': '1f939',
    '\uD83E\uDD38': '1f938',
    '\uD83D\uDEF6': '1f6f6',
    '\uD83D\uDEF5': '1f6f5',
    '\uD83D\uDEF4': '1f6f4',
    '\uD83D\uDED2': '1f6d2',
    '\uD83C\uDC04': '1f004',
    '\uD83C\uDCCF': '1f0cf',
    '\uD83C\uDD70': '1f170',
    '\uD83C\uDD71': '1f171',
    '\uD83C\uDD7E': '1f17e',
    '\uD83C\uDD7F': '1f17f',
    '\uD83D\uDED1': '1f6d1',
    '\uD83C\uDD8E': '1f18e',
    '\uD83C\uDD91': '1f191',
    '\uD83C\uDDFE': '1f1fe',
    '\uD83C\uDD92': '1f192',
    '\uD83C\uDD93': '1f193',
    '\uD83C\uDD94': '1f194',
    '\uD83C\uDD95': '1f195',
    '\uD83C\uDD96': '1f196',
    '\uD83C\uDD97': '1f197',
    '\uD83C\uDD98': '1f198',
    '\uD83E\uDD44': '1f944',
    '\uD83C\uDD99': '1f199',
    '\uD83C\uDD9A': '1f19a',
    '\uD83E\uDD42': '1f942',
    '\uD83E\uDD43': '1f943',
    '\uD83C\uDE01': '1f201',
    '\uD83C\uDE02': '1f202',
    '\uD83C\uDE1A': '1f21a',
    '\uD83C\uDE2F': '1f22f',
    '\uD83E\uDD59': '1f959',
    '\uD83C\uDE32': '1f232',
    '\uD83C\uDE33': '1f233',
    '\uD83C\uDE34': '1f234',
    '\uD83C\uDE35': '1f235',
    '\uD83C\uDE36': '1f236',
    '\uD83E\uDD58': '1f958',
    '\uD83C\uDE37': '1f237',
    '\uD83C\uDE38': '1f238',
    '\uD83C\uDE39': '1f239',
    '\uD83E\uDD57': '1f957',
    '\uD83C\uDE3A': '1f23a',
    '\uD83C\uDE50': '1f250',
    '\uD83C\uDE51': '1f251',
    '\uD83C\uDF00': '1f300',
    '\uD83E\uDD56': '1f956',
    '\uD83C\uDF01': '1f301',
    '\uD83C\uDF02': '1f302',
    '\uD83C\uDF03': '1f303',
    '\uD83C\uDF04': '1f304',
    '\uD83C\uDF05': '1f305',
    '\uD83C\uDF06': '1f306',
    '\uD83E\uDD55': '1f955',
    '\uD83C\uDF07': '1f307',
    '\uD83C\uDF08': '1f308',
    '\uD83E\uDD54': '1f954',
    '\uD83C\uDF09': '1f309',
    '\uD83C\uDF0A': '1f30a',
    '\uD83C\uDF0B': '1f30b',
    '\uD83C\uDF0C': '1f30c',
    '\uD83C\uDF0F': '1f30f',
    '\uD83C\uDF11': '1f311',
    '\uD83E\uDD53': '1f953',
    '\uD83C\uDF13': '1f313',
    '\uD83C\uDF14': '1f314',
    '\uD83C\uDF15': '1f315',
    '\uD83C\uDF19': '1f319',
    '\uD83C\uDF1B': '1f31b',
    '\uD83C\uDF1F': '1f31f',
    '\uD83E\uDD52': '1f952',
    '\uD83C\uDF20': '1f320',
    '\uD83C\uDF30': '1f330',
    '\uD83E\uDD51': '1f951',
    '\uD83C\uDF31': '1f331',
    '\uD83C\uDF34': '1f334',
    '\uD83C\uDF35': '1f335',
    '\uD83C\uDF37': '1f337',
    '\uD83C\uDF38': '1f338',
    '\uD83C\uDF39': '1f339',
    '\uD83C\uDF3A': '1f33a',
    '\uD83C\uDF3B': '1f33b',
    '\uD83C\uDF3C': '1f33c',
    '\uD83C\uDF3D': '1f33d',
    '\uD83E\uDD50': '1f950',
    '\uD83C\uDF3E': '1f33e',
    '\uD83C\uDF3F': '1f33f',
    '\uD83C\uDF40': '1f340',
    '\uD83C\uDF41': '1f341',
    '\uD83C\uDF42': '1f342',
    '\uD83C\uDF43': '1f343',
    '\uD83C\uDF44': '1f344',
    '\uD83C\uDF45': '1f345',
    '\uD83C\uDF46': '1f346',
    '\uD83C\uDF47': '1f347',
    '\uD83C\uDF48': '1f348',
    '\uD83C\uDF49': '1f349',
    '\uD83C\uDF4A': '1f34a',
    '\uD83E\uDD40': '1f940',
    '\uD83C\uDF4C': '1f34c',
    '\uD83C\uDF4D': '1f34d',
    '\uD83C\uDF4E': '1f34e',
    '\uD83C\uDF4F': '1f34f',
    '\uD83C\uDF51': '1f351',
    '\uD83C\uDF52': '1f352',
    '\uD83C\uDF53': '1f353',
    '\uD83E\uDD8F': '1f98f',
    '\uD83C\uDF54': '1f354',
    '\uD83C\uDF55': '1f355',
    '\uD83C\uDF56': '1f356',
    '\uD83E\uDD8E': '1f98e',
    '\uD83C\uDF57': '1f357',
    '\uD83C\uDF58': '1f358',
    '\uD83C\uDF59': '1f359',
    '\uD83E\uDD8D': '1f98d',
    '\uD83C\uDF5A': '1f35a',
    '\uD83C\uDF5B': '1f35b',
    '\uD83E\uDD8C': '1f98c',
    '\uD83C\uDF5C': '1f35c',
    '\uD83C\uDF5D': '1f35d',
    '\uD83C\uDF5E': '1f35e',
    '\uD83C\uDF5F': '1f35f',
    '\uD83E\uDD8B': '1f98b',
    '\uD83C\uDF60': '1f360',
    '\uD83C\uDF61': '1f361',
    '\uD83E\uDD8A': '1f98a',
    '\uD83C\uDF62': '1f362',
    '\uD83C\uDF63': '1f363',
    '\uD83E\uDD89': '1f989',
    '\uD83C\uDF64': '1f364',
    '\uD83C\uDF65': '1f365',
    '\uD83E\uDD88': '1f988',
    '\uD83C\uDF66': '1f366',
    '\uD83E\uDD87': '1f987',
    '\uD83C\uDF67': '1f367',
    '\uD83C\uDDFD': '1f1fd',
    '\uD83C\uDF68': '1f368',
    '\uD83E\uDD86': '1f986',
    '\uD83C\uDF69': '1f369',
    '\uD83E\uDD85': '1f985',
    '\uD83C\uDF6A': '1f36a',
    '\uD83D\uDDA4': '1f5a4',
    '\uD83C\uDF6B': '1f36b',
    '\uD83C\uDF6C': '1f36c',
    '\uD83C\uDF6D': '1f36d',
    '\uD83C\uDF6E': '1f36e',
    '\uD83C\uDF6F': '1f36f',
    '\uD83E\uDD1E': '1f91e',
    '\uD83C\uDF70': '1f370',
    '\uD83C\uDF71': '1f371',
    '\uD83C\uDF72': '1f372',
    '\uD83E\uDD1D': '1f91d',
    '\uD83C\uDF73': '1f373',
    '\uD83C\uDF74': '1f374',
    '\uD83C\uDF75': '1f375',
    '\uD83C\uDF76': '1f376',
    '\uD83C\uDF77': '1f377',
    '\uD83C\uDF78': '1f378',
    '\uD83C\uDF79': '1f379',
    '\uD83C\uDF7A': '1f37a',
    '\uD83C\uDF7B': '1f37b',
    '\uD83C\uDF80': '1f380',
    '\uD83C\uDF81': '1f381',
    '\uD83C\uDF82': '1f382',
    '\uD83C\uDF83': '1f383',
    '\uD83E\uDD1B': '1f91b',
    '\uD83E\uDD1C': '1f91c',
    '\uD83C\uDF84': '1f384',
    '\uD83C\uDF85': '1f385',
    '\uD83C\uDF86': '1f386',
    '\uD83E\uDD1A': '1f91a',
    '\uD83C\uDF87': '1f387',
    '\uD83C\uDF88': '1f388',
    '\uD83C\uDF89': '1f389',
    '\uD83C\uDF8A': '1f38a',
    '\uD83C\uDF8B': '1f38b',
    '\uD83C\uDF8C': '1f38c',
    '\uD83E\uDD19': '1f919',
    '\uD83C\uDF8D': '1f38d',
    '\uD83D\uDD7A': '1f57a',
    '\uD83C\uDF8E': '1f38e',
    '\uD83E\uDD33': '1f933',
    '\uD83C\uDF8F': '1f38f',
    '\uD83E\uDD30': '1f930',
    '\uD83C\uDF90': '1f390',
    '\uD83E\uDD26': '1f926',
    '\uD83E\uDD37': '1f937',
    '\uD83C\uDF91': '1f391',
    '\uD83C\uDF92': '1f392',
    '\uD83C\uDF93': '1f393',
    '\uD83C\uDFA0': '1f3a0',
    '\uD83C\uDFA1': '1f3a1',
    '\uD83C\uDFA2': '1f3a2',
    '\uD83C\uDFA3': '1f3a3',
    '\uD83C\uDFA4': '1f3a4',
    '\uD83C\uDFA5': '1f3a5',
    '\uD83C\uDFA6': '1f3a6',
    '\uD83C\uDFA7': '1f3a7',
    '\uD83E\uDD36': '1f936',
    '\uD83C\uDFA8': '1f3a8',
    '\uD83E\uDD35': '1f935',
    '\uD83C\uDFA9': '1f3a9',
    '\uD83C\uDFAA': '1f3aa',
    '\uD83E\uDD34': '1f934',
    '\uD83C\uDFAB': '1f3ab',
    '\uD83C\uDFAC': '1f3ac',
    '\uD83C\uDFAD': '1f3ad',
    '\uD83E\uDD27': '1f927',
    '\uD83C\uDFAE': '1f3ae',
    '\uD83C\uDFAF': '1f3af',
    '\uD83C\uDFB0': '1f3b0',
    '\uD83C\uDFB1': '1f3b1',
    '\uD83C\uDFB2': '1f3b2',
    '\uD83C\uDFB3': '1f3b3',
    '\uD83C\uDFB4': '1f3b4',
    '\uD83E\uDD25': '1f925',
    '\uD83C\uDFB5': '1f3b5',
    '\uD83C\uDFB6': '1f3b6',
    '\uD83C\uDFB7': '1f3b7',
    '\uD83E\uDD24': '1f924',
    '\uD83C\uDFB8': '1f3b8',
    '\uD83C\uDFB9': '1f3b9',
    '\uD83C\uDFBA': '1f3ba',
    '\uD83E\uDD23': '1f923',
    '\uD83C\uDFBB': '1f3bb',
    '\uD83C\uDFBC': '1f3bc',
    '\uD83C\uDFBD': '1f3bd',
    '\uD83E\uDD22': '1f922',
    '\uD83C\uDFBE': '1f3be',
    '\uD83C\uDFBF': '1f3bf',
    '\uD83C\uDFC0': '1f3c0',
    '\uD83C\uDFC1': '1f3c1',
    '\uD83E\uDD21': '1f921',
    '\uD83C\uDFC2': '1f3c2',
    '\uD83C\uDFC3': '1f3c3',
    '\uD83C\uDFC4': '1f3c4',
    '\uD83C\uDFC6': '1f3c6',
    '\uD83C\uDFC8': '1f3c8',
    '\uD83C\uDFCA': '1f3ca',
    '\uD83C\uDFE0': '1f3e0',
    '\uD83C\uDFE1': '1f3e1',
    '\uD83C\uDFE2': '1f3e2',
    '\uD83C\uDFE3': '1f3e3',
    '\uD83C\uDFE5': '1f3e5',
    '\uD83C\uDFE6': '1f3e6',
    '\uD83C\uDFE7': '1f3e7',
    '\uD83C\uDFE8': '1f3e8',
    '\uD83C\uDFE9': '1f3e9',
    '\uD83C\uDFEA': '1f3ea',
    '\uD83C\uDFEB': '1f3eb',
    '\uD83C\uDFEC': '1f3ec',
    '\uD83E\uDD20': '1f920',
    '\uD83C\uDFED': '1f3ed',
    '\uD83C\uDFEE': '1f3ee',
    '\uD83C\uDFEF': '1f3ef',
    '\uD83C\uDFF0': '1f3f0',
    '\uD83D\uDC0C': '1f40c',
    '\uD83D\uDC0D': '1f40d',
    '\uD83D\uDC0E': '1f40e',
    '\uD83D\uDC11': '1f411',
    '\uD83D\uDC12': '1f412',
    '\uD83D\uDC14': '1f414',
    '\uD83D\uDC17': '1f417',
    '\uD83D\uDC18': '1f418',
    '\uD83D\uDC19': '1f419',
    '\uD83D\uDC1A': '1f41a',
    '\uD83D\uDC1B': '1f41b',
    '\uD83D\uDC1C': '1f41c',
    '\uD83D\uDC1D': '1f41d',
    '\uD83D\uDC1E': '1f41e',
    '\uD83D\uDC1F': '1f41f',
    '\uD83D\uDC20': '1f420',
    '\uD83D\uDC21': '1f421',
    '\uD83D\uDC22': '1f422',
    '\uD83D\uDC23': '1f423',
    '\uD83D\uDC24': '1f424',
    '\uD83D\uDC25': '1f425',
    '\uD83D\uDC26': '1f426',
    '\uD83D\uDC27': '1f427',
    '\uD83D\uDC28': '1f428',
    '\uD83D\uDC29': '1f429',
    '\uD83D\uDC2B': '1f42b',
    '\uD83D\uDC2C': '1f42c',
    '\uD83D\uDC2D': '1f42d',
    '\uD83D\uDC2E': '1f42e',
    '\uD83D\uDC2F': '1f42f',
    '\uD83D\uDC30': '1f430',
    '\uD83D\uDC31': '1f431',
    '\uD83D\uDC32': '1f432',
    '\uD83D\uDC33': '1f433',
    '\uD83D\uDC34': '1f434',
    '\uD83D\uDC35': '1f435',
    '\uD83D\uDC36': '1f436',
    '\uD83D\uDC37': '1f437',
    '\uD83D\uDC38': '1f438',
    '\uD83D\uDC39': '1f439',
    '\uD83D\uDC3A': '1f43a',
    '\uD83D\uDC3B': '1f43b',
    '\uD83D\uDC3C': '1f43c',
    '\uD83D\uDC3D': '1f43d',
    '\uD83D\uDC3E': '1f43e',
    '\uD83D\uDC40': '1f440',
    '\uD83D\uDC42': '1f442',
    '\uD83D\uDC43': '1f443',
    '\uD83D\uDC44': '1f444',
    '\uD83D\uDC45': '1f445',
    '\uD83D\uDC46': '1f446',
    '\uD83D\uDC47': '1f447',
    '\uD83D\uDC48': '1f448',
    '\uD83D\uDC49': '1f449',
    '\uD83D\uDC4A': '1f44a',
    '\uD83D\uDC4B': '1f44b',
    '\uD83D\uDC4C': '1f44c',
    '\uD83D\uDC4D': '1f44d',
    '\uD83D\uDC4E': '1f44e',
    '\uD83D\uDC4F': '1f44f',
    '\uD83D\uDC50': '1f450',
    '\uD83D\uDC51': '1f451',
    '\uD83D\uDC52': '1f452',
    '\uD83D\uDC53': '1f453',
    '\uD83D\uDC54': '1f454',
    '\uD83D\uDC55': '1f455',
    '\uD83D\uDC56': '1f456',
    '\uD83D\uDC57': '1f457',
    '\uD83D\uDC58': '1f458',
    '\uD83D\uDC59': '1f459',
    '\uD83D\uDC5A': '1f45a',
    '\uD83D\uDC5B': '1f45b',
    '\uD83D\uDC5C': '1f45c',
    '\uD83D\uDC5D': '1f45d',
    '\uD83D\uDC5E': '1f45e',
    '\uD83D\uDC5F': '1f45f',
    '\uD83D\uDC60': '1f460',
    '\uD83D\uDC61': '1f461',
    '\uD83D\uDC62': '1f462',
    '\uD83D\uDC63': '1f463',
    '\uD83D\uDC64': '1f464',
    '\uD83D\uDC66': '1f466',
    '\uD83D\uDC67': '1f467',
    '\uD83D\uDC68': '1f468',
    '\uD83D\uDC69': '1f469',
    '\uD83D\uDC6A': '1f46a',
    '\uD83D\uDC6B': '1f46b',
    '\uD83D\uDC6E': '1f46e',
    '\uD83D\uDC6F': '1f46f',
    '\uD83D\uDC70': '1f470',
    '\uD83D\uDC71': '1f471',
    '\uD83D\uDC72': '1f472',
    '\uD83D\uDC73': '1f473',
    '\uD83D\uDC74': '1f474',
    '\uD83D\uDC75': '1f475',
    '\uD83D\uDC76': '1f476',
    '\uD83D\uDC77': '1f477',
    '\uD83D\uDC78': '1f478',
    '\uD83D\uDC79': '1f479',
    '\uD83D\uDC7A': '1f47a',
    '\uD83D\uDC7B': '1f47b',
    '\uD83D\uDC7C': '1f47c',
    '\uD83D\uDC7D': '1f47d',
    '\uD83D\uDC7E': '1f47e',
    '\uD83D\uDC7F': '1f47f',
    '\uD83D\uDC80': '1f480',
    '\uD83D\uDCC7': '1f4c7',
    '\uD83D\uDC81': '1f481',
    '\uD83D\uDC82': '1f482',
    '\uD83D\uDC83': '1f483',
    '\uD83D\uDC84': '1f484',
    '\uD83D\uDC85': '1f485',
    '\uD83D\uDCD2': '1f4d2',
    '\uD83D\uDC86': '1f486',
    '\uD83D\uDCD3': '1f4d3',
    '\uD83D\uDC87': '1f487',
    '\uD83D\uDCD4': '1f4d4',
    '\uD83D\uDC88': '1f488',
    '\uD83D\uDCD5': '1f4d5',
    '\uD83D\uDC89': '1f489',
    '\uD83D\uDCD6': '1f4d6',
    '\uD83D\uDC8A': '1f48a',
    '\uD83D\uDCD7': '1f4d7',
    '\uD83D\uDC8B': '1f48b',
    '\uD83D\uDCD8': '1f4d8',
    '\uD83D\uDC8C': '1f48c',
    '\uD83D\uDCD9': '1f4d9',
    '\uD83D\uDC8D': '1f48d',
    '\uD83D\uDCDA': '1f4da',
    '\uD83D\uDC8E': '1f48e',
    '\uD83D\uDCDB': '1f4db',
    '\uD83D\uDC8F': '1f48f',
    '\uD83D\uDCDC': '1f4dc',
    '\uD83D\uDC90': '1f490',
    '\uD83D\uDCDD': '1f4dd',
    '\uD83D\uDC91': '1f491',
    '\uD83D\uDCDE': '1f4de',
    '\uD83D\uDC92': '1f492',
    '\uD83D\uDCDF': '1f4df',
    '\uD83D\uDCE0': '1f4e0',
    '\uD83D\uDC93': '1f493',
    '\uD83D\uDCE1': '1f4e1',
    '\uD83D\uDCE2': '1f4e2',
    '\uD83D\uDC94': '1f494',
    '\uD83D\uDCE3': '1f4e3',
    '\uD83D\uDCE4': '1f4e4',
    '\uD83D\uDC95': '1f495',
    '\uD83D\uDCE5': '1f4e5',
    '\uD83D\uDCE6': '1f4e6',
    '\uD83D\uDC96': '1f496',
    '\uD83D\uDCE7': '1f4e7',
    '\uD83D\uDCE8': '1f4e8',
    '\uD83D\uDC97': '1f497',
    '\uD83D\uDCE9': '1f4e9',
    '\uD83D\uDCEA': '1f4ea',
    '\uD83D\uDC98': '1f498',
    '\uD83D\uDCEB': '1f4eb',
    '\uD83D\uDCEE': '1f4ee',
    '\uD83D\uDC99': '1f499',
    '\uD83D\uDCF0': '1f4f0',
    '\uD83D\uDCF1': '1f4f1',
    '\uD83D\uDC9A': '1f49a',
    '\uD83D\uDCF2': '1f4f2',
    '\uD83D\uDCF3': '1f4f3',
    '\uD83D\uDC9B': '1f49b',
    '\uD83D\uDCF4': '1f4f4',
    '\uD83D\uDCF6': '1f4f6',
    '\uD83D\uDC9C': '1f49c',
    '\uD83D\uDCF7': '1f4f7',
    '\uD83D\uDCF9': '1f4f9',
    '\uD83D\uDC9D': '1f49d',
    '\uD83D\uDCFA': '1f4fa',
    '\uD83D\uDCFB': '1f4fb',
    '\uD83D\uDC9E': '1f49e',
    '\uD83D\uDCFC': '1f4fc',
    '\uD83D\uDD03': '1f503',
    '\uD83D\uDC9F': '1f49f',
    '\uD83D\uDD0A': '1f50a',
    '\uD83D\uDD0B': '1f50b',
    '\uD83D\uDCA0': '1f4a0',
    '\uD83D\uDD0C': '1f50c',
    '\uD83D\uDD0D': '1f50d',
    '\uD83D\uDCA1': '1f4a1',
    '\uD83D\uDD0E': '1f50e',
    '\uD83D\uDD0F': '1f50f',
    '\uD83D\uDCA2': '1f4a2',
    '\uD83D\uDD10': '1f510',
    '\uD83D\uDD11': '1f511',
    '\uD83D\uDCA3': '1f4a3',
    '\uD83D\uDD12': '1f512',
    '\uD83D\uDD13': '1f513',
    '\uD83D\uDCA4': '1f4a4',
    '\uD83D\uDD14': '1f514',
    '\uD83D\uDD16': '1f516',
    '\uD83D\uDCA5': '1f4a5',
    '\uD83D\uDD17': '1f517',
    '\uD83D\uDD18': '1f518',
    '\uD83D\uDCA6': '1f4a6',
    '\uD83D\uDD19': '1f519',
    '\uD83D\uDD1A': '1f51a',
    '\uD83D\uDCA7': '1f4a7',
    '\uD83D\uDD1B': '1f51b',
    '\uD83D\uDD1C': '1f51c',
    '\uD83D\uDCA8': '1f4a8',
    '\uD83D\uDD1D': '1f51d',
    '\uD83D\uDD1E': '1f51e',
    '\uD83D\uDCA9': '1f4a9',
    '\uD83D\uDD1F': '1f51f',
    '\uD83D\uDCAA': '1f4aa',
    '\uD83D\uDD20': '1f520',
    '\uD83D\uDD21': '1f521',
    '\uD83D\uDCAB': '1f4ab',
    '\uD83D\uDD22': '1f522',
    '\uD83D\uDD23': '1f523',
    '\uD83D\uDCAC': '1f4ac',
    '\uD83D\uDD24': '1f524',
    '\uD83D\uDD25': '1f525',
    '\uD83D\uDCAE': '1f4ae',
    '\uD83D\uDD26': '1f526',
    '\uD83D\uDD27': '1f527',
    '\uD83D\uDCAF': '1f4af',
    '\uD83D\uDD28': '1f528',
    '\uD83D\uDD29': '1f529',
    '\uD83D\uDCB0': '1f4b0',
    '\uD83D\uDD2A': '1f52a',
    '\uD83D\uDD2B': '1f52b',
    '\uD83D\uDCB1': '1f4b1',
    '\uD83D\uDD2E': '1f52e',
    '\uD83D\uDCB2': '1f4b2',
    '\uD83D\uDD2F': '1f52f',
    '\uD83D\uDCB3': '1f4b3',
    '\uD83D\uDD30': '1f530',
    '\uD83D\uDD31': '1f531',
    '\uD83D\uDCB4': '1f4b4',
    '\uD83D\uDD32': '1f532',
    '\uD83D\uDD33': '1f533',
    '\uD83D\uDCB5': '1f4b5',
    '\uD83D\uDD34': '1f534',
    '\uD83D\uDD35': '1f535',
    '\uD83D\uDCB8': '1f4b8',
    '\uD83D\uDD36': '1f536',
    '\uD83D\uDD37': '1f537',
    '\uD83D\uDCB9': '1f4b9',
    '\uD83D\uDD38': '1f538',
    '\uD83D\uDD39': '1f539',
    '\uD83D\uDCBA': '1f4ba',
    '\uD83D\uDD3A': '1f53a',
    '\uD83D\uDD3B': '1f53b',
    '\uD83D\uDCBB': '1f4bb',
    '\uD83D\uDD3C': '1f53c',
    '\uD83D\uDCBC': '1f4bc',
    '\uD83D\uDD3D': '1f53d',
    '\uD83D\uDD50': '1f550',
    '\uD83D\uDCBD': '1f4bd',
    '\uD83D\uDD51': '1f551',
    '\uD83D\uDCBE': '1f4be',
    '\uD83D\uDD52': '1f552',
    '\uD83D\uDCBF': '1f4bf',
    '\uD83D\uDD53': '1f553',
    '\uD83D\uDCC0': '1f4c0',
    '\uD83D\uDD54': '1f554',
    '\uD83D\uDD55': '1f555',
    '\uD83D\uDCC1': '1f4c1',
    '\uD83D\uDD56': '1f556',
    '\uD83D\uDD57': '1f557',
    '\uD83D\uDCC2': '1f4c2',
    '\uD83D\uDD58': '1f558',
    '\uD83D\uDD59': '1f559',
    '\uD83D\uDCC3': '1f4c3',
    '\uD83D\uDD5A': '1f55a',
    '\uD83D\uDD5B': '1f55b',
    '\uD83D\uDCC4': '1f4c4',
    '\uD83D\uDDFB': '1f5fb',
    '\uD83D\uDDFC': '1f5fc',
    '\uD83D\uDCC5': '1f4c5',
    '\uD83D\uDDFD': '1f5fd',
    '\uD83D\uDDFE': '1f5fe',
    '\uD83D\uDCC6': '1f4c6',
    '\uD83D\uDDFF': '1f5ff',
    '\uD83D\uDE01': '1f601',
    '\uD83D\uDE02': '1f602',
    '\uD83D\uDE03': '1f603',
    '\uD83D\uDCC8': '1f4c8',
    '\uD83D\uDE04': '1f604',
    '\uD83D\uDE05': '1f605',
    '\uD83D\uDCC9': '1f4c9',
    '\uD83D\uDE06': '1f606',
    '\uD83D\uDE09': '1f609',
    '\uD83D\uDCCA': '1f4ca',
    '\uD83D\uDE0A': '1f60a',
    '\uD83D\uDE0B': '1f60b',
    '\uD83D\uDCCB': '1f4cb',
    '\uD83D\uDE0C': '1f60c',
    '\uD83D\uDE0D': '1f60d',
    '\uD83D\uDCCC': '1f4cc',
    '\uD83D\uDE0F': '1f60f',
    '\uD83D\uDE12': '1f612',
    '\uD83D\uDCCD': '1f4cd',
    '\uD83D\uDE13': '1f613',
    '\uD83D\uDE14': '1f614',
    '\uD83D\uDCCE': '1f4ce',
    '\uD83D\uDE16': '1f616',
    '\uD83D\uDE18': '1f618',
    '\uD83D\uDCCF': '1f4cf',
    '\uD83D\uDE1A': '1f61a',
    '\uD83D\uDE1C': '1f61c',
    '\uD83D\uDCD0': '1f4d0',
    '\uD83D\uDE1D': '1f61d',
    '\uD83D\uDE1E': '1f61e',
    '\uD83D\uDCD1': '1f4d1',
    '\uD83D\uDE20': '1f620',
    '\uD83D\uDE21': '1f621',
    '\uD83D\uDE22': '1f622',
    '\uD83D\uDE23': '1f623',
    '\uD83D\uDE24': '1f624',
    '\uD83D\uDE25': '1f625',
    '\uD83D\uDE28': '1f628',
    '\uD83D\uDE29': '1f629',
    '\uD83D\uDE2A': '1f62a',
    '\uD83D\uDE2B': '1f62b',
    '\uD83D\uDE2D': '1f62d',
    '\uD83D\uDE30': '1f630',
    '\uD83D\uDE31': '1f631',
    '\uD83D\uDE32': '1f632',
    '\uD83D\uDE33': '1f633',
    '\uD83D\uDE35': '1f635',
    '\uD83D\uDE37': '1f637',
    '\uD83D\uDE38': '1f638',
    '\uD83D\uDE39': '1f639',
    '\uD83D\uDE3A': '1f63a',
    '\uD83D\uDE3B': '1f63b',
    '\uD83D\uDE3C': '1f63c',
    '\uD83D\uDE3D': '1f63d',
    '\uD83D\uDE3E': '1f63e',
    '\uD83D\uDE3F': '1f63f',
    '\uD83D\uDE40': '1f640',
    '\uD83D\uDE45': '1f645',
    '\uD83D\uDE46': '1f646',
    '\uD83D\uDE47': '1f647',
    '\uD83D\uDE48': '1f648',
    '\uD83D\uDE49': '1f649',
    '\uD83D\uDE4A': '1f64a',
    '\uD83D\uDE4B': '1f64b',
    '\uD83D\uDE4C': '1f64c',
    '\uD83D\uDE4D': '1f64d',
    '\uD83D\uDE4E': '1f64e',
    '\uD83D\uDE4F': '1f64f',
    '\uD83D\uDE80': '1f680',
    '\uD83D\uDE83': '1f683',
    '\uD83D\uDE84': '1f684',
    '\uD83D\uDE85': '1f685',
    '\uD83D\uDE87': '1f687',
    '\uD83D\uDE89': '1f689',
    '\uD83D\uDE8C': '1f68c',
    '\uD83D\uDE8F': '1f68f',
    '\uD83D\uDE91': '1f691',
    '\uD83D\uDE92': '1f692',
    '\uD83D\uDE93': '1f693',
    '\uD83D\uDE95': '1f695',
    '\uD83D\uDE97': '1f697',
    '\uD83D\uDE99': '1f699',
    '\uD83D\uDE9A': '1f69a',
    '\uD83D\uDEA2': '1f6a2',
    '\uD83D\uDEA4': '1f6a4',
    '\uD83D\uDEA5': '1f6a5',
    '\uD83D\uDEA7': '1f6a7',
    '\uD83D\uDEA8': '1f6a8',
    '\uD83D\uDEA9': '1f6a9',
    '\uD83D\uDEAA': '1f6aa',
    '\uD83D\uDEAB': '1f6ab',
    '\uD83D\uDEAC': '1f6ac',
    '\uD83D\uDEAD': '1f6ad',
    '\uD83D\uDEB2': '1f6b2',
    '\uD83D\uDEB6': '1f6b6',
    '\uD83D\uDEB9': '1f6b9',
    '\uD83D\uDEBA': '1f6ba',
    '\uD83D\uDEBB': '1f6bb',
    '\uD83D\uDEBC': '1f6bc',
    '\uD83D\uDEBD': '1f6bd',
    '\uD83D\uDEBE': '1f6be',
    '\uD83D\uDEC0': '1f6c0',
    '\uD83E\uDD18': '1f918',
    '\uD83D\uDE00': '1f600',
    '\uD83D\uDE07': '1f607',
    '\uD83D\uDE08': '1f608',
    '\uD83D\uDE0E': '1f60e',
    '\uD83D\uDE10': '1f610',
    '\uD83D\uDE11': '1f611',
    '\uD83D\uDE15': '1f615',
    '\uD83D\uDE17': '1f617',
    '\uD83D\uDE19': '1f619',
    '\uD83D\uDE1B': '1f61b',
    '\uD83D\uDE1F': '1f61f',
    '\uD83D\uDE26': '1f626',
    '\uD83D\uDE27': '1f627',
    '\uD83D\uDE2C': '1f62c',
    '\uD83D\uDE2E': '1f62e',
    '\uD83D\uDE2F': '1f62f',
    '\uD83D\uDE34': '1f634',
    '\uD83D\uDE36': '1f636',
    '\uD83D\uDE81': '1f681',
    '\uD83D\uDE82': '1f682',
    '\uD83D\uDE86': '1f686',
    '\uD83D\uDE88': '1f688',
    '\uD83D\uDE8A': '1f68a',
    '\uD83D\uDE8D': '1f68d',
    '\uD83D\uDE8E': '1f68e',
    '\uD83D\uDE90': '1f690',
    '\uD83D\uDE94': '1f694',
    '\uD83D\uDE96': '1f696',
    '\uD83D\uDE98': '1f698',
    '\uD83D\uDE9B': '1f69b',
    '\uD83D\uDE9C': '1f69c',
    '\uD83D\uDE9D': '1f69d',
    '\uD83D\uDE9E': '1f69e',
    '\uD83D\uDE9F': '1f69f',
    '\uD83D\uDEA0': '1f6a0',
    '\uD83D\uDEA1': '1f6a1',
    '\uD83D\uDEA3': '1f6a3',
    '\uD83D\uDEA6': '1f6a6',
    '\uD83D\uDEAE': '1f6ae',
    '\uD83D\uDEAF': '1f6af',
    '\uD83D\uDEB0': '1f6b0',
    '\uD83D\uDEB1': '1f6b1',
    '\uD83D\uDEB3': '1f6b3',
    '\uD83D\uDEB4': '1f6b4',
    '\uD83D\uDEB5': '1f6b5',
    '\uD83D\uDEB7': '1f6b7',
    '\uD83D\uDEB8': '1f6b8',
    '\uD83D\uDEBF': '1f6bf',
    '\uD83D\uDEC1': '1f6c1',
    '\uD83D\uDEC2': '1f6c2',
    '\uD83D\uDEC3': '1f6c3',
    '\uD83D\uDEC4': '1f6c4',
    '\uD83D\uDEC5': '1f6c5',
    '\uD83C\uDF0D': '1f30d',
    '\uD83C\uDF0E': '1f30e',
    '\uD83C\uDF10': '1f310',
    '\uD83C\uDF12': '1f312',
    '\uD83C\uDF16': '1f316',
    '\uD83C\uDF17': '1f317',
    '\uD83C\uDF18': '1f318',
    '\uD83C\uDF1A': '1f31a',
    '\uD83C\uDF1C': '1f31c',
    '\uD83C\uDF1D': '1f31d',
    '\uD83C\uDF1E': '1f31e',
    '\uD83C\uDF32': '1f332',
    '\uD83C\uDF33': '1f333',
    '\uD83C\uDF4B': '1f34b',
    '\uD83C\uDF50': '1f350',
    '\uD83C\uDF7C': '1f37c',
    '\uD83C\uDFC7': '1f3c7',
    '\uD83C\uDFC9': '1f3c9',
    '\uD83C\uDFE4': '1f3e4',
    '\uD83D\uDC00': '1f400',
    '\uD83D\uDC01': '1f401',
    '\uD83D\uDC02': '1f402',
    '\uD83D\uDC03': '1f403',
    '\uD83D\uDC04': '1f404',
    '\uD83D\uDC05': '1f405',
    '\uD83D\uDC06': '1f406',
    '\uD83D\uDC07': '1f407',
    '\uD83D\uDC08': '1f408',
    '\uD83D\uDC09': '1f409',
    '\uD83D\uDC0A': '1f40a',
    '\uD83D\uDC0B': '1f40b',
    '\uD83D\uDC0F': '1f40f',
    '\uD83D\uDC10': '1f410',
    '\uD83D\uDC13': '1f413',
    '\uD83D\uDC15': '1f415',
    '\uD83D\uDC16': '1f416',
    '\uD83D\uDC2A': '1f42a',
    '\uD83D\uDC65': '1f465',
    '\uD83D\uDC6C': '1f46c',
    '\uD83D\uDC6D': '1f46d',
    '\uD83D\uDCAD': '1f4ad',
    '\uD83D\uDCB6': '1f4b6',
    '\uD83D\uDCB7': '1f4b7',
    '\uD83D\uDCEC': '1f4ec',
    '\uD83D\uDCED': '1f4ed',
    '\uD83D\uDCEF': '1f4ef',
    '\uD83D\uDCF5': '1f4f5',
    '\uD83D\uDD00': '1f500',
    '\uD83D\uDD01': '1f501',
    '\uD83D\uDD02': '1f502',
    '\uD83D\uDD04': '1f504',
    '\uD83D\uDD05': '1f505',
    '\uD83D\uDD06': '1f506',
    '\uD83D\uDD07': '1f507',
    '\uD83D\uDD09': '1f509',
    '\uD83D\uDD15': '1f515',
    '\uD83D\uDD2C': '1f52c',
    '\uD83D\uDD2D': '1f52d',
    '\uD83D\uDD5C': '1f55c',
    '\uD83D\uDD5D': '1f55d',
    '\uD83D\uDD5E': '1f55e',
    '\uD83D\uDD5F': '1f55f',
    '\uD83D\uDD60': '1f560',
    '\uD83D\uDD61': '1f561',
    '\uD83D\uDD62': '1f562',
    '\uD83D\uDD63': '1f563',
    '\uD83D\uDD64': '1f564',
    '\uD83D\uDD65': '1f565',
    '\uD83D\uDD66': '1f566',
    '\uD83D\uDD67': '1f567',
    '\uD83D\uDD08': '1f508',
    '\uD83D\uDE8B': '1f68b',
    '\uD83C\uDF9E': '1f39e',
    '\uD83C\uDF9F': '1f39f',
    '\uD83C\uDFC5': '1f3c5',
    '\uD83C\uDFCB': '1f3cb',
    '\uD83C\uDFCC': '1f3cc',
    '\uD83C\uDFCD': '1f3cd',
    '\uD83C\uDFCE': '1f3ce',
    '\uD83C\uDF96': '1f396',
    '\uD83C\uDF97': '1f397',
    '\uD83C\uDF36': '1f336',
    '\uD83C\uDF27': '1f327',
    '\uD83C\uDF28': '1f328',
    '\uD83C\uDF29': '1f329',
    '\uD83C\uDF2A': '1f32a',
    '\uD83C\uDF2B': '1f32b',
    '\uD83C\uDF2C': '1f32c',
    '\uD83D\uDC3F': '1f43f',
    '\uD83D\uDD77': '1f577',
    '\uD83D\uDD78': '1f578',
    '\uD83C\uDF21': '1f321',
    '\uD83C\uDF99': '1f399',
    '\uD83C\uDF9A': '1f39a',
    '\uD83C\uDF9B': '1f39b',
    '\uD83C\uDFF3': '1f3f3',
    '\uD83C\uDFF4': '1f3f4',
    '\uD83C\uDFF5': '1f3f5',
    '\uD83C\uDFF7': '1f3f7',
    '\uD83D\uDCF8': '1f4f8',
    '\uD83D\uDCFD': '1f4fd',
    '\uD83D\uDD4A': '1f54a',
    '\uD83D\uDD6F': '1f56f',
    '\uD83D\uDD70': '1f570',
    '\uD83D\uDD73': '1f573',
    '\uD83D\uDD76': '1f576',
    '\uD83D\uDD79': '1f579',
    '\uD83D\uDD87': '1f587',
    '\uD83D\uDD8A': '1f58a',
    '\uD83D\uDD8B': '1f58b',
    '\uD83D\uDD8C': '1f58c',
    '\uD83D\uDD8D': '1f58d',
    '\uD83D\uDDA5': '1f5a5',
    '\uD83D\uDDA8': '1f5a8',
    '\uD83D\uDDB2': '1f5b2',
    '\uD83D\uDDBC': '1f5bc',
    '\uD83D\uDDC2': '1f5c2',
    '\uD83D\uDDC3': '1f5c3',
    '\uD83D\uDDC4': '1f5c4',
    '\uD83D\uDDD1': '1f5d1',
    '\uD83D\uDDD2': '1f5d2',
    '\uD83D\uDDD3': '1f5d3',
    '\uD83D\uDDDC': '1f5dc',
    '\uD83D\uDDDE': '1f5de',
    '\uD83D\uDDE1': '1f5e1',
    '\uD83D\uDDE3': '1f5e3',
    '\uD83D\uDDE8': '1f5e8',
    '\uD83D\uDDEF': '1f5ef',
    '\uD83D\uDDF3': '1f5f3',
    '\uD83D\uDDFA': '1f5fa',
    '\uD83D\uDECC': '1f6cc',
    '\uD83D\uDEE0': '1f6e0',
    '\uD83D\uDEE1': '1f6e1',
    '\uD83D\uDEE2': '1f6e2',
    '\uD83D\uDEF0': '1f6f0',
    '\uD83C\uDF7D': '1f37d',
    '\uD83D\uDC41': '1f441',
    '\uD83D\uDD74': '1f574',
    '\uD83D\uDD75': '1f575',
    '\uD83D\uDD90': '1f590',
    '\uD83D\uDD95': '1f595',
    '\uD83D\uDD96': '1f596',
    '\uD83D\uDE41': '1f641',
    '\uD83D\uDE42': '1f642',
    '\uD83C\uDFD4': '1f3d4',
    '\uD83C\uDFD5': '1f3d5',
    '\uD83C\uDFD6': '1f3d6',
    '\uD83C\uDFD7': '1f3d7',
    '\uD83C\uDFD8': '1f3d8',
    '\uD83C\uDFD9': '1f3d9',
    '\uD83C\uDFDA': '1f3da',
    '\uD83C\uDFDB': '1f3db',
    '\uD83C\uDFDC': '1f3dc',
    '\uD83C\uDFDD': '1f3dd',
    '\uD83C\uDFDE': '1f3de',
    '\uD83C\uDFDF': '1f3df',
    '\uD83D\uDECB': '1f6cb',
    '\uD83D\uDECD': '1f6cd',
    '\uD83D\uDECE': '1f6ce',
    '\uD83D\uDECF': '1f6cf',
    '\uD83D\uDEE3': '1f6e3',
    '\uD83D\uDEE4': '1f6e4',
    '\uD83D\uDEE5': '1f6e5',
    '\uD83D\uDEE9': '1f6e9',
    '\uD83D\uDEEB': '1f6eb',
    '\uD83D\uDEEC': '1f6ec',
    '\uD83D\uDEF3': '1f6f3',
    '\uD83C\uDFFB': '1f3fb',
    '\uD83C\uDFFC': '1f3fc',
    '\uD83C\uDFFD': '1f3fd',
    '\uD83C\uDFFE': '1f3fe',
    '\uD83C\uDFFF': '1f3ff',
    '\uD83C\uDF24': '1f324',
    '\uD83C\uDF25': '1f325',
    '\uD83C\uDF26': '1f326',
    '\uD83D\uDDB1': '1f5b1',
    '\uD83D\uDE43': '1f643',
    '\uD83E\uDD11': '1f911',
    '\uD83E\uDD13': '1f913',
    '\uD83E\uDD17': '1f917',
    '\uD83D\uDE44': '1f644',
    '\uD83E\uDD14': '1f914',
    '\uD83E\uDD10': '1f910',
    '\uD83E\uDD12': '1f912',
    '\uD83E\uDD15': '1f915',
    '\uD83E\uDD16': '1f916',
    '\uD83E\uDD81': '1f981',
    '\uD83E\uDD84': '1f984',
    '\uD83E\uDD82': '1f982',
    '\uD83E\uDD80': '1f980',
    '\uD83E\uDD83': '1f983',
    '\uD83E\uDDC0': '1f9c0',
    '\uD83C\uDF2D': '1f32d',
    '\uD83C\uDF2E': '1f32e',
    '\uD83C\uDF2F': '1f32f',
    '\uD83C\uDF7F': '1f37f',
    '\uD83C\uDF7E': '1f37e',
    '\uD83C\uDFF9': '1f3f9',
    '\uD83C\uDFFA': '1f3fa',
    '\uD83D\uDED0': '1f6d0',
    '\uD83D\uDD4B': '1f54b',
    '\uD83D\uDD4C': '1f54c',
    '\uD83D\uDD4D': '1f54d',
    '\uD83D\uDD4E': '1f54e',
    '\uD83D\uDCFF': '1f4ff',
    '\uD83C\uDFCF': '1f3cf',
    '\uD83C\uDFD0': '1f3d0',
    '\uD83C\uDFD1': '1f3d1',
    '\uD83C\uDFD2': '1f3d2',
    '\uD83C\uDFD3': '1f3d3',
    '\uD83C\uDFF8': '1f3f8',
    '\uD83E\uDD41': '1f941',
    '\uD83E\uDD90': '1f990',
    '\uD83E\uDD91': '1f991',
    '\uD83E\uDD5A': '1f95a',
    '\uD83E\uDD5B': '1f95b',
    '\uD83E\uDD5C': '1f95c',
    '\uD83E\uDD5D': '1f95d',
    '\uD83E\uDD5E': '1f95e',
    '\uD83C\uDDFC': '1f1fc',
    '\uD83C\uDDFB': '1f1fb',
    '\uD83C\uDDFA': '1f1fa',
    '\uD83C\uDDF9': '1f1f9',
    '\uD83C\uDDF8': '1f1f8',
    '\uD83C\uDDF7': '1f1f7',
    '\uD83C\uDDF6': '1f1f6',
    '\uD83C\uDDF5': '1f1f5',
    '\uD83C\uDDF4': '1f1f4',
    '\uD83C\uDDF3': '1f1f3',
    '\uD83C\uDDF2': '1f1f2',
    '\uD83C\uDDF1': '1f1f1',
    '\uD83C\uDDF0': '1f1f0',
    '\uD83C\uDDEF': '1f1ef',
    '\uD83C\uDDEE': '1f1ee',
    '\uD83C\uDDED': '1f1ed',
    '\uD83C\uDDEC': '1f1ec',
    '\uD83C\uDDEB': '1f1eb',
    '\uD83C\uDDEA': '1f1ea',
    '\uD83C\uDDE9': '1f1e9',
    '\uD83C\uDDE8': '1f1e8',
    '\uD83C\uDDE7': '1f1e7',
    '\uD83C\uDDE6': '1f1e6',
    '\uD83D\uDEF7': '1f6f7',
    '\uD83D\uDEF8': '1f6f8',
    '\uD83E\uDD1F': '1f91f',
    '\uD83E\uDD28': '1f928',
    '\uD83E\uDD29': '1f929',
    '\uD83E\uDD2A': '1f92a',
    '\uD83E\uDD2B': '1f92b',
    '\uD83E\uDD2C': '1f92c',
    '\uD83E\uDD2D': '1f92d',
    '\uD83E\uDD2E': '1f92e',
    '\uD83E\uDD2F': '1f92f',
    '\uD83E\uDD31': '1f931',
    '\uD83E\uDD32': '1f932',
    '\uD83E\uDD4C': '1f94c',
    '\uD83E\uDD5F': '1f95f',
    '\uD83E\uDD60': '1f960',
    '\uD83E\uDD61': '1f961',
    '\uD83E\uDD62': '1f962',
    '\uD83E\uDD63': '1f963',
    '\uD83E\uDD64': '1f964',
    '\uD83E\uDD65': '1f965',
    '\uD83E\uDD66': '1f966',
    '\uD83E\uDD67': '1f967',
    '\uD83E\uDD68': '1f968',
    '\uD83E\uDD69': '1f969',
    '\uD83E\uDD6A': '1f96a',
    '\uD83E\uDD6B': '1f96b',
    '\uD83E\uDD92': '1f992',
    '\uD83E\uDD93': '1f993',
    '\uD83E\uDD94': '1f994',
    '\uD83E\uDD95': '1f995',
    '\uD83E\uDD96': '1f996',
    '\uD83E\uDD97': '1f997',
    '\uD83E\uDDD0': '1f9d0',
    '\uD83E\uDDD1': '1f9d1',
    '\uD83E\uDDD2': '1f9d2',
    '\uD83E\uDDD3': '1f9d3',
    '\uD83E\uDDD4': '1f9d4',
    '\uD83E\uDDD5': '1f9d5',
    '\uD83E\uDDD6': '1f9d6',
    '\uD83E\uDDD7': '1f9d7',
    '\uD83E\uDDD8': '1f9d8',
    '\uD83E\uDDD9': '1f9d9',
    '\uD83E\uDDDA': '1f9da',
    '\uD83E\uDDDB': '1f9db',
    '\uD83E\uDDDC': '1f9dc',
    '\uD83E\uDDDD': '1f9dd',
    '\uD83E\uDDDE': '1f9de',
    '\uD83E\uDDDF': '1f9df',
    '\uD83E\uDDE0': '1f9e0',
    '\uD83E\uDDE1': '1f9e1',
    '\uD83E\uDDE2': '1f9e2',
    '\uD83E\uDDE3': '1f9e3',
    '\uD83E\uDDE4': '1f9e4',
    '\uD83E\uDDE5': '1f9e5',
    '\uD83E\uDDE6': '1f9e6',
    '\u231A': '231a',
    '\u231B': '231b',
    '\u23E9': '23e9',
    '\u23EA': '23ea',
    '\u23EB': '23eb',
    '\u23EC': '23ec',
    '\u23F0': '23f0',
    '\u23F3': '23f3',
    '\u24C2': '24c2',
    '\u25FD': '25fd',
    '\u25FE': '25fe',
    '\u2600': '2600',
    '\u2601': '2601',
    '\u260E': '260e',
    '\u2614': '2614',
    '\u2615': '2615',
    '\u261D': '261d',
    '\u263A': '263a',
    '\u2648': '2648',
    '\u2649': '2649',
    '\u264A': '264a',
    '\u264B': '264b',
    '\u264C': '264c',
    '\u264D': '264d',
    '\u264E': '264e',
    '\u264F': '264f',
    '\u2650': '2650',
    '\u2651': '2651',
    '\u2652': '2652',
    '\u2653': '2653',
    '\u2660': '2660',
    '\u2663': '2663',
    '\u2665': '2665',
    '\u2666': '2666',
    '\u2668': '2668',
    '\u267B': '267b',
    '\u267F': '267f',
    '\u2693': '2693',
    '\u26A1': '26a1',
    '\u26AA': '26aa',
    '\u26AB': '26ab',
    '\u26BD': '26bd',
    '\u26BE': '26be',
    '\u26C4': '26c4',
    '\u26C5': '26c5',
    '\u26CE': '26ce',
    '\u26D4': '26d4',
    '\u26EA': '26ea',
    '\u26F2': '26f2',
    '\u26F3': '26f3',
    '\u26F5': '26f5',
    '\u26FA': '26fa',
    '\u26FD': '26fd',
    '\u2702': '2702',
    '\u2705': '2705',
    '\u2708': '2708',
    '\u2709': '2709',
    '\u270A': '270a',
    '\u270B': '270b',
    '\u270C': '270c',
    '\u270F': '270f',
    '\u2712': '2712',
    '\u2728': '2728',
    '\u2733': '2733',
    '\u2734': '2734',
    '\u2744': '2744',
    '\u2747': '2747',
    '\u274C': '274c',
    '\u274E': '274e',
    '\u2753': '2753',
    '\u2754': '2754',
    '\u2755': '2755',
    '\u2757': '2757',
    '\u2764': '2764',
    '\u2795': '2795',
    '\u2796': '2796',
    '\u2797': '2797',
    '\u27B0': '27b0',
    '\u2B1B': '2b1b',
    '\u2B1C': '2b1c',
    '\u2B50': '2b50',
    '\u2B55': '2b55',
    '\u303D': '303d',
    '\u3297': '3297',
    '\u3299': '3299',
    '\u27BF': '27bf',
    '\u2328': '2328',
    '\u270D': '270d',
    '\u23F1': '23f1',
    '\u23F2': '23f2',
    '\u2602': '2602',
    '\u2603': '2603',
    '\u2604': '2604',
    '\u2618': '2618',
    '\u2620': '2620',
    '\u2639': '2639',
    '\u2692': '2692',
    '\u2694': '2694',
    '\u2696': '2696',
    '\u2697': '2697',
    '\u2699': '2699',
    '\u269C': '269c',
    '\u26B0': '26b0',
    '\u26B1': '26b1',
    '\u26C8': '26c8',
    '\u26CF': '26cf',
    '\u26D1': '26d1',
    '\u26D3': '26d3',
    '\u26E9': '26e9',
    '\u26F0': '26f0',
    '\u26F1': '26f1',
    '\u26F4': '26f4',
    '\u26F7': '26f7',
    '\u26F8': '26f8',
    '\u26F9': '26f9',
    '\u2763': '2763'
  };
  Femoji.jsEscapeMapGreedy = {
    '\uD83D\uDC69\u2764\uD83D\uDC8B\uD83D\uDC69': '1f469-2764-1f48b-1f469',
    '\uD83D\uDC68\u2764\uD83D\uDC8B\uD83D\uDC68': '1f468-2764-1f48b-1f468',
    '\uD83D\uDC69\u2764\uD83D\uDC8B\uD83D\uDC68': '1f469-2764-1f48b-1f468',
    '\uD83D\uDC69\u2764\uD83D\uDC69': '1f469-2764-1f469',
    '\uD83D\uDC68\u2764\uD83D\uDC68': '1f468-2764-1f468',
    '\uD83C\uDFCC\uD83C\uDFFB\u2642': '1f3cc-1f3fb-2642',
    '\uD83C\uDFCC\uD83C\uDFFC\u2642': '1f3cc-1f3fc-2642',
    '\uD83C\uDFCC\uD83C\uDFFD\u2642': '1f3cc-1f3fd-2642',
    '\uD83C\uDFCC\uD83C\uDFFE\u2642': '1f3cc-1f3fe-2642',
    '\uD83C\uDFCC\uD83C\uDFFF\u2642': '1f3cc-1f3ff-2642',
    '\uD83C\uDFCC\uD83C\uDFFB\u2640': '1f3cc-1f3fb-2640',
    '\uD83C\uDFCC\uD83C\uDFFC\u2640': '1f3cc-1f3fc-2640',
    '\uD83C\uDFCC\uD83C\uDFFD\u2640': '1f3cc-1f3fd-2640',
    '\uD83C\uDFCC\uD83C\uDFFE\u2640': '1f3cc-1f3fe-2640',
    '\uD83C\uDFCC\uD83C\uDFFF\u2640': '1f3cc-1f3ff-2640',
    '\uD83D\uDC68\uD83C\uDFFB\u2696': '1f468-1f3fb-2696',
    '\uD83D\uDC68\uD83C\uDFFC\u2696': '1f468-1f3fc-2696',
    '\uD83D\uDC68\uD83C\uDFFD\u2696': '1f468-1f3fd-2696',
    '\uD83D\uDC68\uD83C\uDFFE\u2696': '1f468-1f3fe-2696',
    '\uD83D\uDC68\uD83C\uDFFF\u2696': '1f468-1f3ff-2696',
    '\uD83D\uDC69\uD83C\uDFFB\u2696': '1f469-1f3fb-2696',
    '\uD83D\uDC69\uD83C\uDFFC\u2696': '1f469-1f3fc-2696',
    '\uD83D\uDC69\uD83C\uDFFD\u2696': '1f469-1f3fd-2696',
    '\uD83D\uDC69\uD83C\uDFFE\u2696': '1f469-1f3fe-2696',
    '\uD83D\uDC69\uD83C\uDFFF\u2696': '1f469-1f3ff-2696',
    '\uD83D\uDC68\uD83C\uDFFB\u2708': '1f468-1f3fb-2708',
    '\uD83D\uDC68\uD83C\uDFFC\u2708': '1f468-1f3fc-2708',
    '\uD83D\uDC68\uD83C\uDFFD\u2708': '1f468-1f3fd-2708',
    '\uD83D\uDC68\uD83C\uDFFE\u2708': '1f468-1f3fe-2708',
    '\uD83D\uDC68\uD83C\uDFFF\u2708': '1f468-1f3ff-2708',
    '\uD83D\uDC69\uD83C\uDFFB\u2708': '1f469-1f3fb-2708',
    '\uD83D\uDC69\uD83C\uDFFC\u2708': '1f469-1f3fc-2708',
    '\uD83D\uDC69\uD83C\uDFFD\u2708': '1f469-1f3fd-2708',
    '\uD83D\uDC69\uD83C\uDFFE\u2708': '1f469-1f3fe-2708',
    '\uD83D\uDC69\uD83C\uDFFF\u2708': '1f469-1f3ff-2708',
    '\uD83D\uDC69\u2764\uD83D\uDC68': '1f469-2764-1f468',
    '\uD83D\uDC68\uD83C\uDFFB\u2695': '1f468-1f3fb-2695',
    '\uD83D\uDC68\uD83C\uDFFC\u2695': '1f468-1f3fc-2695',
    '\uD83D\uDC68\uD83C\uDFFD\u2695': '1f468-1f3fd-2695',
    '\uD83D\uDC68\uD83C\uDFFE\u2695': '1f468-1f3fe-2695',
    '\uD83D\uDC68\uD83C\uDFFF\u2695': '1f468-1f3ff-2695',
    '\uD83D\uDC69\uD83C\uDFFB\u2695': '1f469-1f3fb-2695',
    '\uD83D\uDC69\uD83C\uDFFC\u2695': '1f469-1f3fc-2695',
    '\uD83D\uDC69\uD83C\uDFFD\u2695': '1f469-1f3fd-2695',
    '\uD83D\uDC69\uD83C\uDFFE\u2695': '1f469-1f3fe-2695',
    '\uD83D\uDC69\uD83C\uDFFF\u2695': '1f469-1f3ff-2695',
    '\uD83D\uDC6E\uD83C\uDFFB\u2640': '1f46e-1f3fb-2640',
    '\uD83D\uDC6E\uD83C\uDFFB\u2642': '1f46e-1f3fb-2642',
    '\uD83D\uDC6E\uD83C\uDFFC\u2640': '1f46e-1f3fc-2640',
    '\uD83D\uDC6E\uD83C\uDFFC\u2642': '1f46e-1f3fc-2642',
    '\uD83D\uDC6E\uD83C\uDFFD\u2640': '1f46e-1f3fd-2640',
    '\uD83D\uDC6E\uD83C\uDFFD\u2642': '1f46e-1f3fd-2642',
    '\uD83D\uDC6E\uD83C\uDFFE\u2640': '1f46e-1f3fe-2640',
    '\uD83D\uDC6E\uD83C\uDFFE\u2642': '1f46e-1f3fe-2642',
    '\uD83D\uDC6E\uD83C\uDFFF\u2640': '1f46e-1f3ff-2640',
    '\uD83D\uDC6E\uD83C\uDFFF\u2642': '1f46e-1f3ff-2642',
    '\uD83D\uDC71\uD83C\uDFFB\u2640': '1f471-1f3fb-2640',
    '\uD83D\uDC71\uD83C\uDFFB\u2642': '1f471-1f3fb-2642',
    '\uD83D\uDC71\uD83C\uDFFC\u2640': '1f471-1f3fc-2640',
    '\uD83D\uDC71\uD83C\uDFFC\u2642': '1f471-1f3fc-2642',
    '\uD83D\uDC71\uD83C\uDFFD\u2640': '1f471-1f3fd-2640',
    '\uD83D\uDC71\uD83C\uDFFD\u2642': '1f471-1f3fd-2642',
    '\uD83D\uDC71\uD83C\uDFFE\u2640': '1f471-1f3fe-2640',
    '\uD83D\uDC71\uD83C\uDFFE\u2642': '1f471-1f3fe-2642',
    '\uD83D\uDC71\uD83C\uDFFF\u2640': '1f471-1f3ff-2640',
    '\uD83D\uDC71\uD83C\uDFFF\u2642': '1f471-1f3ff-2642',
    '\uD83D\uDC73\uD83C\uDFFB\u2640': '1f473-1f3fb-2640',
    '\uD83D\uDC73\uD83C\uDFFB\u2642': '1f473-1f3fb-2642',
    '\uD83D\uDC73\uD83C\uDFFC\u2640': '1f473-1f3fc-2640',
    '\uD83D\uDC73\uD83C\uDFFC\u2642': '1f473-1f3fc-2642',
    '\uD83D\uDC73\uD83C\uDFFD\u2640': '1f473-1f3fd-2640',
    '\uD83D\uDC73\uD83C\uDFFD\u2642': '1f473-1f3fd-2642',
    '\uD83D\uDC73\uD83C\uDFFE\u2640': '1f473-1f3fe-2640',
    '\uD83D\uDC73\uD83C\uDFFE\u2642': '1f473-1f3fe-2642',
    '\uD83D\uDC73\uD83C\uDFFF\u2640': '1f473-1f3ff-2640',
    '\uD83D\uDC73\uD83C\uDFFF\u2642': '1f473-1f3ff-2642',
    '\uD83D\uDC77\uD83C\uDFFB\u2640': '1f477-1f3fb-2640',
    '\uD83D\uDC77\uD83C\uDFFB\u2642': '1f477-1f3fb-2642',
    '\uD83D\uDC77\uD83C\uDFFC\u2640': '1f477-1f3fc-2640',
    '\uD83D\uDC77\uD83C\uDFFC\u2642': '1f477-1f3fc-2642',
    '\uD83D\uDC77\uD83C\uDFFD\u2640': '1f477-1f3fd-2640',
    '\uD83D\uDC77\uD83C\uDFFD\u2642': '1f477-1f3fd-2642',
    '\uD83D\uDC77\uD83C\uDFFE\u2640': '1f477-1f3fe-2640',
    '\uD83D\uDC77\uD83C\uDFFE\u2642': '1f477-1f3fe-2642',
    '\uD83D\uDC77\uD83C\uDFFF\u2640': '1f477-1f3ff-2640',
    '\uD83D\uDC77\uD83C\uDFFF\u2642': '1f477-1f3ff-2642',
    '\uD83D\uDC82\uD83C\uDFFB\u2640': '1f482-1f3fb-2640',
    '\uD83D\uDC82\uD83C\uDFFB\u2642': '1f482-1f3fb-2642',
    '\uD83D\uDC82\uD83C\uDFFC\u2640': '1f482-1f3fc-2640',
    '\uD83D\uDC82\uD83C\uDFFC\u2642': '1f482-1f3fc-2642',
    '\uD83D\uDC82\uD83C\uDFFD\u2640': '1f482-1f3fd-2640',
    '\uD83D\uDC82\uD83C\uDFFD\u2642': '1f482-1f3fd-2642',
    '\uD83D\uDC82\uD83C\uDFFE\u2640': '1f482-1f3fe-2640',
    '\uD83D\uDC82\uD83C\uDFFE\u2642': '1f482-1f3fe-2642',
    '\uD83D\uDC82\uD83C\uDFFF\u2640': '1f482-1f3ff-2640',
    '\uD83D\uDC82\uD83C\uDFFF\u2642': '1f482-1f3ff-2642',
    '\uD83D\uDD75\uD83C\uDFFB\u2640': '1f575-1f3fb-2640',
    '\uD83D\uDD75\uD83C\uDFFB\u2642': '1f575-1f3fb-2642',
    '\uD83D\uDD75\uD83C\uDFFC\u2640': '1f575-1f3fc-2640',
    '\uD83D\uDD75\uD83C\uDFFC\u2642': '1f575-1f3fc-2642',
    '\uD83D\uDD75\uD83C\uDFFD\u2640': '1f575-1f3fd-2640',
    '\uD83D\uDD75\uD83C\uDFFD\u2642': '1f575-1f3fd-2642',
    '\uD83D\uDD75\uD83C\uDFFE\u2640': '1f575-1f3fe-2640',
    '\uD83D\uDD75\uD83C\uDFFE\u2642': '1f575-1f3fe-2642',
    '\uD83D\uDD75\uD83C\uDFFF\u2640': '1f575-1f3ff-2640',
    '\uD83D\uDD75\uD83C\uDFFF\u2642': '1f575-1f3ff-2642',
    '\uD83C\uDFC3\uD83C\uDFFB\u2640': '1f3c3-1f3fb-2640',
    '\uD83C\uDFC3\uD83C\uDFFB\u2642': '1f3c3-1f3fb-2642',
    '\uD83C\uDFC3\uD83C\uDFFC\u2640': '1f3c3-1f3fc-2640',
    '\uD83C\uDFC3\uD83C\uDFFC\u2642': '1f3c3-1f3fc-2642',
    '\uD83C\uDFC3\uD83C\uDFFD\u2640': '1f3c3-1f3fd-2640',
    '\uD83C\uDFC3\uD83C\uDFFD\u2642': '1f3c3-1f3fd-2642',
    '\uD83C\uDFC3\uD83C\uDFFE\u2640': '1f3c3-1f3fe-2640',
    '\uD83C\uDFC3\uD83C\uDFFE\u2642': '1f3c3-1f3fe-2642',
    '\uD83C\uDFC3\uD83C\uDFFF\u2640': '1f3c3-1f3ff-2640',
    '\uD83C\uDFC3\uD83C\uDFFF\u2642': '1f3c3-1f3ff-2642',
    '\uD83C\uDFC4\uD83C\uDFFB\u2640': '1f3c4-1f3fb-2640',
    '\uD83C\uDFC4\uD83C\uDFFB\u2642': '1f3c4-1f3fb-2642',
    '\uD83C\uDFC4\uD83C\uDFFC\u2640': '1f3c4-1f3fc-2640',
    '\uD83C\uDFC4\uD83C\uDFFC\u2642': '1f3c4-1f3fc-2642',
    '\uD83C\uDFC4\uD83C\uDFFD\u2640': '1f3c4-1f3fd-2640',
    '\uD83C\uDFC4\uD83C\uDFFD\u2642': '1f3c4-1f3fd-2642',
    '\uD83C\uDFC4\uD83C\uDFFE\u2640': '1f3c4-1f3fe-2640',
    '\uD83C\uDFC4\uD83C\uDFFE\u2642': '1f3c4-1f3fe-2642',
    '\uD83C\uDFC4\uD83C\uDFFF\u2640': '1f3c4-1f3ff-2640',
    '\uD83C\uDFC4\uD83C\uDFFF\u2642': '1f3c4-1f3ff-2642',
    '\uD83C\uDFCA\uD83C\uDFFB\u2640': '1f3ca-1f3fb-2640',
    '\uD83C\uDFCA\uD83C\uDFFB\u2642': '1f3ca-1f3fb-2642',
    '\uD83C\uDFCA\uD83C\uDFFC\u2640': '1f3ca-1f3fc-2640',
    '\uD83C\uDFCA\uD83C\uDFFC\u2642': '1f3ca-1f3fc-2642',
    '\uD83C\uDFCA\uD83C\uDFFD\u2640': '1f3ca-1f3fd-2640',
    '\uD83C\uDFCA\uD83C\uDFFD\u2642': '1f3ca-1f3fd-2642',
    '\uD83C\uDFCA\uD83C\uDFFE\u2640': '1f3ca-1f3fe-2640',
    '\uD83C\uDFCA\uD83C\uDFFE\u2642': '1f3ca-1f3fe-2642',
    '\uD83C\uDFCA\uD83C\uDFFF\u2640': '1f3ca-1f3ff-2640',
    '\uD83C\uDFCA\uD83C\uDFFF\u2642': '1f3ca-1f3ff-2642',
    '\uD83C\uDFCB\uD83C\uDFFB\u2640': '1f3cb-1f3fb-2640',
    '\uD83C\uDFCB\uD83C\uDFFB\u2642': '1f3cb-1f3fb-2642',
    '\uD83C\uDFCB\uD83C\uDFFC\u2640': '1f3cb-1f3fc-2640',
    '\uD83C\uDFCB\uD83C\uDFFC\u2642': '1f3cb-1f3fc-2642',
    '\uD83C\uDFCB\uD83C\uDFFD\u2640': '1f3cb-1f3fd-2640',
    '\uD83C\uDFCB\uD83C\uDFFD\u2642': '1f3cb-1f3fd-2642',
    '\uD83C\uDFCB\uD83C\uDFFE\u2640': '1f3cb-1f3fe-2640',
    '\uD83C\uDFCB\uD83C\uDFFE\u2642': '1f3cb-1f3fe-2642',
    '\uD83C\uDFCB\uD83C\uDFFF\u2640': '1f3cb-1f3ff-2640',
    '\uD83C\uDFCB\uD83C\uDFFF\u2642': '1f3cb-1f3ff-2642',
    '\uD83D\uDC86\uD83C\uDFFB\u2640': '1f486-1f3fb-2640',
    '\uD83D\uDC86\uD83C\uDFFB\u2642': '1f486-1f3fb-2642',
    '\uD83D\uDC86\uD83C\uDFFC\u2640': '1f486-1f3fc-2640',
    '\uD83D\uDC86\uD83C\uDFFC\u2642': '1f486-1f3fc-2642',
    '\uD83D\uDC86\uD83C\uDFFD\u2640': '1f486-1f3fd-2640',
    '\uD83D\uDC86\uD83C\uDFFD\u2642': '1f486-1f3fd-2642',
    '\uD83D\uDC86\uD83C\uDFFE\u2640': '1f486-1f3fe-2640',
    '\uD83D\uDC86\uD83C\uDFFE\u2642': '1f486-1f3fe-2642',
    '\uD83D\uDC86\uD83C\uDFFF\u2640': '1f486-1f3ff-2640',
    '\uD83D\uDC86\uD83C\uDFFF\u2642': '1f486-1f3ff-2642',
    '\uD83D\uDC87\uD83C\uDFFB\u2640': '1f487-1f3fb-2640',
    '\uD83D\uDC87\uD83C\uDFFB\u2642': '1f487-1f3fb-2642',
    '\uD83D\uDC87\uD83C\uDFFC\u2640': '1f487-1f3fc-2640',
    '\uD83D\uDC87\uD83C\uDFFC\u2642': '1f487-1f3fc-2642',
    '\uD83D\uDC87\uD83C\uDFFD\u2640': '1f487-1f3fd-2640',
    '\uD83D\uDC87\uD83C\uDFFD\u2642': '1f487-1f3fd-2642',
    '\uD83D\uDC87\uD83C\uDFFE\u2640': '1f487-1f3fe-2640',
    '\uD83D\uDC87\uD83C\uDFFE\u2642': '1f487-1f3fe-2642',
    '\uD83D\uDC87\uD83C\uDFFF\u2640': '1f487-1f3ff-2640',
    '\uD83D\uDC87\uD83C\uDFFF\u2642': '1f487-1f3ff-2642',
    '\uD83D\uDEA3\uD83C\uDFFB\u2640': '1f6a3-1f3fb-2640',
    '\uD83D\uDEA3\uD83C\uDFFB\u2642': '1f6a3-1f3fb-2642',
    '\uD83D\uDEA3\uD83C\uDFFC\u2640': '1f6a3-1f3fc-2640',
    '\uD83D\uDEA3\uD83C\uDFFC\u2642': '1f6a3-1f3fc-2642',
    '\uD83D\uDEA3\uD83C\uDFFD\u2640': '1f6a3-1f3fd-2640',
    '\uD83D\uDEA3\uD83C\uDFFD\u2642': '1f6a3-1f3fd-2642',
    '\uD83D\uDEA3\uD83C\uDFFE\u2640': '1f6a3-1f3fe-2640',
    '\uD83D\uDEA3\uD83C\uDFFE\u2642': '1f6a3-1f3fe-2642',
    '\uD83D\uDEA3\uD83C\uDFFF\u2640': '1f6a3-1f3ff-2640',
    '\uD83D\uDEA3\uD83C\uDFFF\u2642': '1f6a3-1f3ff-2642',
    '\uD83D\uDEB4\uD83C\uDFFB\u2640': '1f6b4-1f3fb-2640',
    '\uD83D\uDEB4\uD83C\uDFFB\u2642': '1f6b4-1f3fb-2642',
    '\uD83D\uDEB4\uD83C\uDFFC\u2640': '1f6b4-1f3fc-2640',
    '\uD83D\uDEB4\uD83C\uDFFC\u2642': '1f6b4-1f3fc-2642',
    '\uD83D\uDEB4\uD83C\uDFFD\u2640': '1f6b4-1f3fd-2640',
    '\uD83D\uDEB4\uD83C\uDFFD\u2642': '1f6b4-1f3fd-2642',
    '\uD83D\uDEB4\uD83C\uDFFE\u2640': '1f6b4-1f3fe-2640',
    '\uD83D\uDEB4\uD83C\uDFFE\u2642': '1f6b4-1f3fe-2642',
    '\uD83D\uDEB4\uD83C\uDFFF\u2640': '1f6b4-1f3ff-2640',
    '\uD83D\uDEB4\uD83C\uDFFF\u2642': '1f6b4-1f3ff-2642',
    '\uD83D\uDEB5\uD83C\uDFFB\u2640': '1f6b5-1f3fb-2640',
    '\uD83D\uDEB5\uD83C\uDFFB\u2642': '1f6b5-1f3fb-2642',
    '\uD83D\uDEB5\uD83C\uDFFC\u2640': '1f6b5-1f3fc-2640',
    '\uD83D\uDEB5\uD83C\uDFFC\u2642': '1f6b5-1f3fc-2642',
    '\uD83D\uDEB5\uD83C\uDFFD\u2640': '1f6b5-1f3fd-2640',
    '\uD83D\uDEB5\uD83C\uDFFD\u2642': '1f6b5-1f3fd-2642',
    '\uD83D\uDEB5\uD83C\uDFFE\u2640': '1f6b5-1f3fe-2640',
    '\uD83D\uDEB5\uD83C\uDFFE\u2642': '1f6b5-1f3fe-2642',
    '\uD83D\uDEB5\uD83C\uDFFF\u2640': '1f6b5-1f3ff-2640',
    '\uD83D\uDEB5\uD83C\uDFFF\u2642': '1f6b5-1f3ff-2642',
    '\uD83D\uDEB6\uD83C\uDFFB\u2640': '1f6b6-1f3fb-2640',
    '\uD83D\uDEB6\uD83C\uDFFB\u2642': '1f6b6-1f3fb-2642',
    '\uD83D\uDEB6\uD83C\uDFFC\u2640': '1f6b6-1f3fc-2640',
    '\uD83D\uDEB6\uD83C\uDFFC\u2642': '1f6b6-1f3fc-2642',
    '\uD83D\uDEB6\uD83C\uDFFD\u2640': '1f6b6-1f3fd-2640',
    '\uD83D\uDEB6\uD83C\uDFFD\u2642': '1f6b6-1f3fd-2642',
    '\uD83D\uDEB6\uD83C\uDFFE\u2640': '1f6b6-1f3fe-2640',
    '\uD83D\uDEB6\uD83C\uDFFE\u2642': '1f6b6-1f3fe-2642',
    '\uD83D\uDEB6\uD83C\uDFFF\u2640': '1f6b6-1f3ff-2640',
    '\uD83D\uDEB6\uD83C\uDFFF\u2642': '1f6b6-1f3ff-2642',
    '\uD83E\uDD38\uD83C\uDFFB\u2640': '1f938-1f3fb-2640',
    '\uD83E\uDD38\uD83C\uDFFB\u2642': '1f938-1f3fb-2642',
    '\uD83E\uDD38\uD83C\uDFFC\u2640': '1f938-1f3fc-2640',
    '\uD83E\uDD38\uD83C\uDFFC\u2642': '1f938-1f3fc-2642',
    '\uD83E\uDD38\uD83C\uDFFD\u2640': '1f938-1f3fd-2640',
    '\uD83E\uDD38\uD83C\uDFFD\u2642': '1f938-1f3fd-2642',
    '\uD83E\uDD38\uD83C\uDFFE\u2640': '1f938-1f3fe-2640',
    '\uD83E\uDD38\uD83C\uDFFE\u2642': '1f938-1f3fe-2642',
    '\uD83E\uDD38\uD83C\uDFFF\u2640': '1f938-1f3ff-2640',
    '\uD83E\uDD38\uD83C\uDFFF\u2642': '1f938-1f3ff-2642',
    '\uD83E\uDD39\uD83C\uDFFB\u2640': '1f939-1f3fb-2640',
    '\uD83E\uDD39\uD83C\uDFFB\u2642': '1f939-1f3fb-2642',
    '\uD83E\uDD39\uD83C\uDFFC\u2640': '1f939-1f3fc-2640',
    '\uD83E\uDD39\uD83C\uDFFC\u2642': '1f939-1f3fc-2642',
    '\uD83E\uDD39\uD83C\uDFFD\u2640': '1f939-1f3fd-2640',
    '\uD83E\uDD39\uD83C\uDFFD\u2642': '1f939-1f3fd-2642',
    '\uD83E\uDD39\uD83C\uDFFE\u2640': '1f939-1f3fe-2640',
    '\uD83E\uDD39\uD83C\uDFFE\u2642': '1f939-1f3fe-2642',
    '\uD83E\uDD39\uD83C\uDFFF\u2640': '1f939-1f3ff-2640',
    '\uD83E\uDD39\uD83C\uDFFF\u2642': '1f939-1f3ff-2642',
    '\uD83E\uDD3D\uD83C\uDFFB\u2640': '1f93d-1f3fb-2640',
    '\uD83E\uDD3D\uD83C\uDFFB\u2642': '1f93d-1f3fb-2642',
    '\uD83E\uDD3D\uD83C\uDFFC\u2640': '1f93d-1f3fc-2640',
    '\uD83E\uDD3D\uD83C\uDFFC\u2642': '1f93d-1f3fc-2642',
    '\uD83E\uDD3D\uD83C\uDFFD\u2640': '1f93d-1f3fd-2640',
    '\uD83E\uDD3D\uD83C\uDFFD\u2642': '1f93d-1f3fd-2642',
    '\uD83E\uDD3D\uD83C\uDFFE\u2640': '1f93d-1f3fe-2640',
    '\uD83E\uDD3D\uD83C\uDFFE\u2642': '1f93d-1f3fe-2642',
    '\uD83E\uDD3D\uD83C\uDFFF\u2640': '1f93d-1f3ff-2640',
    '\uD83E\uDD3D\uD83C\uDFFF\u2642': '1f93d-1f3ff-2642',
    '\uD83E\uDD3E\uD83C\uDFFB\u2640': '1f93e-1f3fb-2640',
    '\uD83E\uDD3E\uD83C\uDFFB\u2642': '1f93e-1f3fb-2642',
    '\uD83E\uDD3E\uD83C\uDFFC\u2640': '1f93e-1f3fc-2640',
    '\uD83E\uDD3E\uD83C\uDFFC\u2642': '1f93e-1f3fc-2642',
    '\uD83E\uDD3E\uD83C\uDFFD\u2640': '1f93e-1f3fd-2640',
    '\uD83E\uDD3E\uD83C\uDFFD\u2642': '1f93e-1f3fd-2642',
    '\uD83E\uDD3E\uD83C\uDFFE\u2640': '1f93e-1f3fe-2640',
    '\uD83E\uDD3E\uD83C\uDFFE\u2642': '1f93e-1f3fe-2642',
    '\uD83E\uDD3E\uD83C\uDFFF\u2640': '1f93e-1f3ff-2640',
    '\uD83E\uDD3E\uD83C\uDFFF\u2642': '1f93e-1f3ff-2642',
    '\uD83D\uDC81\uD83C\uDFFB\u2640': '1f481-1f3fb-2640',
    '\uD83D\uDC81\uD83C\uDFFB\u2642': '1f481-1f3fb-2642',
    '\uD83D\uDC81\uD83C\uDFFC\u2640': '1f481-1f3fc-2640',
    '\uD83D\uDC81\uD83C\uDFFC\u2642': '1f481-1f3fc-2642',
    '\uD83D\uDC81\uD83C\uDFFD\u2640': '1f481-1f3fd-2640',
    '\uD83D\uDC81\uD83C\uDFFD\u2642': '1f481-1f3fd-2642',
    '\uD83D\uDC81\uD83C\uDFFE\u2640': '1f481-1f3fe-2640',
    '\uD83D\uDC81\uD83C\uDFFE\u2642': '1f481-1f3fe-2642',
    '\uD83D\uDC81\uD83C\uDFFF\u2640': '1f481-1f3ff-2640',
    '\uD83D\uDC81\uD83C\uDFFF\u2642': '1f481-1f3ff-2642',
    '\uD83D\uDE45\uD83C\uDFFB\u2640': '1f645-1f3fb-2640',
    '\uD83D\uDE45\uD83C\uDFFB\u2642': '1f645-1f3fb-2642',
    '\uD83D\uDE45\uD83C\uDFFC\u2640': '1f645-1f3fc-2640',
    '\uD83D\uDE45\uD83C\uDFFC\u2642': '1f645-1f3fc-2642',
    '\uD83D\uDE45\uD83C\uDFFD\u2640': '1f645-1f3fd-2640',
    '\uD83D\uDE45\uD83C\uDFFD\u2642': '1f645-1f3fd-2642',
    '\uD83D\uDE45\uD83C\uDFFE\u2640': '1f645-1f3fe-2640',
    '\uD83D\uDE45\uD83C\uDFFE\u2642': '1f645-1f3fe-2642',
    '\uD83D\uDE45\uD83C\uDFFF\u2640': '1f645-1f3ff-2640',
    '\uD83D\uDE45\uD83C\uDFFF\u2642': '1f645-1f3ff-2642',
    '\uD83D\uDE46\uD83C\uDFFB\u2640': '1f646-1f3fb-2640',
    '\uD83D\uDE46\uD83C\uDFFB\u2642': '1f646-1f3fb-2642',
    '\uD83D\uDE46\uD83C\uDFFC\u2640': '1f646-1f3fc-2640',
    '\uD83D\uDE46\uD83C\uDFFC\u2642': '1f646-1f3fc-2642',
    '\uD83D\uDE46\uD83C\uDFFD\u2640': '1f646-1f3fd-2640',
    '\uD83D\uDE46\uD83C\uDFFD\u2642': '1f646-1f3fd-2642',
    '\uD83D\uDE46\uD83C\uDFFE\u2640': '1f646-1f3fe-2640',
    '\uD83D\uDE46\uD83C\uDFFE\u2642': '1f646-1f3fe-2642',
    '\uD83D\uDE46\uD83C\uDFFF\u2640': '1f646-1f3ff-2640',
    '\uD83D\uDE46\uD83C\uDFFF\u2642': '1f646-1f3ff-2642',
    '\uD83D\uDE47\uD83C\uDFFB\u2640': '1f647-1f3fb-2640',
    '\uD83D\uDE47\uD83C\uDFFB\u2642': '1f647-1f3fb-2642',
    '\uD83D\uDE47\uD83C\uDFFC\u2640': '1f647-1f3fc-2640',
    '\uD83D\uDE47\uD83C\uDFFC\u2642': '1f647-1f3fc-2642',
    '\uD83D\uDE47\uD83C\uDFFD\u2640': '1f647-1f3fd-2640',
    '\uD83D\uDE47\uD83C\uDFFD\u2642': '1f647-1f3fd-2642',
    '\uD83D\uDE47\uD83C\uDFFE\u2640': '1f647-1f3fe-2640',
    '\uD83D\uDE47\uD83C\uDFFE\u2642': '1f647-1f3fe-2642',
    '\uD83D\uDE47\uD83C\uDFFF\u2640': '1f647-1f3ff-2640',
    '\uD83D\uDE47\uD83C\uDFFF\u2642': '1f647-1f3ff-2642',
    '\uD83D\uDE4B\uD83C\uDFFB\u2640': '1f64b-1f3fb-2640',
    '\uD83D\uDE4B\uD83C\uDFFB\u2642': '1f64b-1f3fb-2642',
    '\uD83D\uDE4B\uD83C\uDFFC\u2640': '1f64b-1f3fc-2640',
    '\uD83D\uDE4B\uD83C\uDFFC\u2642': '1f64b-1f3fc-2642',
    '\uD83D\uDE4B\uD83C\uDFFD\u2640': '1f64b-1f3fd-2640',
    '\uD83D\uDE4B\uD83C\uDFFD\u2642': '1f64b-1f3fd-2642',
    '\uD83D\uDE4B\uD83C\uDFFE\u2640': '1f64b-1f3fe-2640',
    '\uD83D\uDE4B\uD83C\uDFFE\u2642': '1f64b-1f3fe-2642',
    '\uD83D\uDE4B\uD83C\uDFFF\u2640': '1f64b-1f3ff-2640',
    '\uD83D\uDE4B\uD83C\uDFFF\u2642': '1f64b-1f3ff-2642',
    '\uD83D\uDE4D\uD83C\uDFFB\u2640': '1f64d-1f3fb-2640',
    '\uD83D\uDE4D\uD83C\uDFFB\u2642': '1f64d-1f3fb-2642',
    '\uD83D\uDE4D\uD83C\uDFFC\u2640': '1f64d-1f3fc-2640',
    '\uD83D\uDE4D\uD83C\uDFFC\u2642': '1f64d-1f3fc-2642',
    '\uD83D\uDE4D\uD83C\uDFFD\u2640': '1f64d-1f3fd-2640',
    '\uD83D\uDE4D\uD83C\uDFFD\u2642': '1f64d-1f3fd-2642',
    '\uD83D\uDE4D\uD83C\uDFFE\u2640': '1f64d-1f3fe-2640',
    '\uD83D\uDE4D\uD83C\uDFFE\u2642': '1f64d-1f3fe-2642',
    '\uD83D\uDE4D\uD83C\uDFFF\u2640': '1f64d-1f3ff-2640',
    '\uD83D\uDE4D\uD83C\uDFFF\u2642': '1f64d-1f3ff-2642',
    '\uD83D\uDE4E\uD83C\uDFFB\u2640': '1f64e-1f3fb-2640',
    '\uD83D\uDE4E\uD83C\uDFFB\u2642': '1f64e-1f3fb-2642',
    '\uD83D\uDE4E\uD83C\uDFFC\u2640': '1f64e-1f3fc-2640',
    '\uD83D\uDE4E\uD83C\uDFFC\u2642': '1f64e-1f3fc-2642',
    '\uD83D\uDE4E\uD83C\uDFFD\u2640': '1f64e-1f3fd-2640',
    '\uD83D\uDE4E\uD83C\uDFFD\u2642': '1f64e-1f3fd-2642',
    '\uD83D\uDE4E\uD83C\uDFFE\u2640': '1f64e-1f3fe-2640',
    '\uD83D\uDE4E\uD83C\uDFFE\u2642': '1f64e-1f3fe-2642',
    '\uD83D\uDE4E\uD83C\uDFFF\u2640': '1f64e-1f3ff-2640',
    '\uD83D\uDE4E\uD83C\uDFFF\u2642': '1f64e-1f3ff-2642',
    '\uD83E\uDD26\uD83C\uDFFB\u2640': '1f926-1f3fb-2640',
    '\uD83E\uDD26\uD83C\uDFFB\u2642': '1f926-1f3fb-2642',
    '\uD83E\uDD26\uD83C\uDFFC\u2640': '1f926-1f3fc-2640',
    '\uD83E\uDD26\uD83C\uDFFC\u2642': '1f926-1f3fc-2642',
    '\uD83E\uDD26\uD83C\uDFFD\u2640': '1f926-1f3fd-2640',
    '\uD83E\uDD26\uD83C\uDFFD\u2642': '1f926-1f3fd-2642',
    '\uD83E\uDD26\uD83C\uDFFE\u2640': '1f926-1f3fe-2640',
    '\uD83E\uDD26\uD83C\uDFFE\u2642': '1f926-1f3fe-2642',
    '\uD83E\uDD26\uD83C\uDFFF\u2640': '1f926-1f3ff-2640',
    '\uD83E\uDD26\uD83C\uDFFF\u2642': '1f926-1f3ff-2642',
    '\uD83E\uDD37\uD83C\uDFFB\u2640': '1f937-1f3fb-2640',
    '\uD83E\uDD37\uD83C\uDFFB\u2642': '1f937-1f3fb-2642',
    '\uD83E\uDD37\uD83C\uDFFC\u2640': '1f937-1f3fc-2640',
    '\uD83E\uDD37\uD83C\uDFFC\u2642': '1f937-1f3fc-2642',
    '\uD83E\uDD37\uD83C\uDFFD\u2640': '1f937-1f3fd-2640',
    '\uD83E\uDD37\uD83C\uDFFD\u2642': '1f937-1f3fd-2642',
    '\uD83E\uDD37\uD83C\uDFFE\u2640': '1f937-1f3fe-2640',
    '\uD83E\uDD37\uD83C\uDFFE\u2642': '1f937-1f3fe-2642',
    '\uD83E\uDD37\uD83C\uDFFF\u2640': '1f937-1f3ff-2640',
    '\uD83E\uDD37\uD83C\uDFFF\u2642': '1f937-1f3ff-2642',
    '\uD83E\uDDD9\uD83C\uDFFB\u2640': '1f9d9-1f3fb-2640',
    '\uD83E\uDDD9\uD83C\uDFFB\u2642': '1f9d9-1f3fb-2642',
    '\uD83E\uDDD9\uD83C\uDFFC\u2640': '1f9d9-1f3fc-2640',
    '\uD83E\uDDD9\uD83C\uDFFC\u2642': '1f9d9-1f3fc-2642',
    '\uD83E\uDDD9\uD83C\uDFFD\u2640': '1f9d9-1f3fd-2640',
    '\uD83E\uDDD9\uD83C\uDFFD\u2642': '1f9d9-1f3fd-2642',
    '\uD83E\uDDD9\uD83C\uDFFE\u2640': '1f9d9-1f3fe-2640',
    '\uD83E\uDDD9\uD83C\uDFFE\u2642': '1f9d9-1f3fe-2642',
    '\uD83E\uDDD9\uD83C\uDFFF\u2640': '1f9d9-1f3ff-2640',
    '\uD83E\uDDD9\uD83C\uDFFF\u2642': '1f9d9-1f3ff-2642',
    '\uD83E\uDDDA\uD83C\uDFFB\u2640': '1f9da-1f3fb-2640',
    '\uD83E\uDDDA\uD83C\uDFFB\u2642': '1f9da-1f3fb-2642',
    '\uD83E\uDDDA\uD83C\uDFFC\u2640': '1f9da-1f3fc-2640',
    '\uD83E\uDDDA\uD83C\uDFFC\u2642': '1f9da-1f3fc-2642',
    '\uD83E\uDDDA\uD83C\uDFFD\u2640': '1f9da-1f3fd-2640',
    '\uD83E\uDDDA\uD83C\uDFFD\u2642': '1f9da-1f3fd-2642',
    '\uD83E\uDDDA\uD83C\uDFFE\u2640': '1f9da-1f3fe-2640',
    '\uD83E\uDDDA\uD83C\uDFFE\u2642': '1f9da-1f3fe-2642',
    '\uD83E\uDDDA\uD83C\uDFFF\u2640': '1f9da-1f3ff-2640',
    '\uD83E\uDDDA\uD83C\uDFFF\u2642': '1f9da-1f3ff-2642',
    '\uD83E\uDDDB\uD83C\uDFFB\u2640': '1f9db-1f3fb-2640',
    '\uD83E\uDDDB\uD83C\uDFFB\u2642': '1f9db-1f3fb-2642',
    '\uD83E\uDDDB\uD83C\uDFFC\u2640': '1f9db-1f3fc-2640',
    '\uD83E\uDDDB\uD83C\uDFFC\u2642': '1f9db-1f3fc-2642',
    '\uD83E\uDDDB\uD83C\uDFFD\u2640': '1f9db-1f3fd-2640',
    '\uD83E\uDDDB\uD83C\uDFFD\u2642': '1f9db-1f3fd-2642',
    '\uD83E\uDDDB\uD83C\uDFFE\u2640': '1f9db-1f3fe-2640',
    '\uD83E\uDDDB\uD83C\uDFFE\u2642': '1f9db-1f3fe-2642',
    '\uD83E\uDDDB\uD83C\uDFFF\u2640': '1f9db-1f3ff-2640',
    '\uD83E\uDDDB\uD83C\uDFFF\u2642': '1f9db-1f3ff-2642',
    '\uD83E\uDDDC\uD83C\uDFFB\u2640': '1f9dc-1f3fb-2640',
    '\uD83E\uDDDC\uD83C\uDFFB\u2642': '1f9dc-1f3fb-2642',
    '\uD83E\uDDDC\uD83C\uDFFC\u2640': '1f9dc-1f3fc-2640',
    '\uD83E\uDDDC\uD83C\uDFFC\u2642': '1f9dc-1f3fc-2642',
    '\uD83E\uDDDC\uD83C\uDFFD\u2640': '1f9dc-1f3fd-2640',
    '\uD83E\uDDDC\uD83C\uDFFD\u2642': '1f9dc-1f3fd-2642',
    '\uD83E\uDDDC\uD83C\uDFFE\u2640': '1f9dc-1f3fe-2640',
    '\uD83E\uDDDC\uD83C\uDFFE\u2642': '1f9dc-1f3fe-2642',
    '\uD83E\uDDDC\uD83C\uDFFF\u2640': '1f9dc-1f3ff-2640',
    '\uD83E\uDDDC\uD83C\uDFFF\u2642': '1f9dc-1f3ff-2642',
    '\uD83E\uDDDD\uD83C\uDFFB\u2640': '1f9dd-1f3fb-2640',
    '\uD83E\uDDDD\uD83C\uDFFB\u2642': '1f9dd-1f3fb-2642',
    '\uD83E\uDDDD\uD83C\uDFFC\u2640': '1f9dd-1f3fc-2640',
    '\uD83E\uDDDD\uD83C\uDFFC\u2642': '1f9dd-1f3fc-2642',
    '\uD83E\uDDDD\uD83C\uDFFD\u2640': '1f9dd-1f3fd-2640',
    '\uD83E\uDDDD\uD83C\uDFFD\u2642': '1f9dd-1f3fd-2642',
    '\uD83E\uDDDD\uD83C\uDFFE\u2640': '1f9dd-1f3fe-2640',
    '\uD83E\uDDDD\uD83C\uDFFE\u2642': '1f9dd-1f3fe-2642',
    '\uD83E\uDDDD\uD83C\uDFFF\u2640': '1f9dd-1f3ff-2640',
    '\uD83E\uDDDD\uD83C\uDFFF\u2642': '1f9dd-1f3ff-2642',
    '\uD83E\uDDD6\uD83C\uDFFB\u2640': '1f9d6-1f3fb-2640',
    '\uD83E\uDDD6\uD83C\uDFFB\u2642': '1f9d6-1f3fb-2642',
    '\uD83E\uDDD6\uD83C\uDFFC\u2640': '1f9d6-1f3fc-2640',
    '\uD83E\uDDD6\uD83C\uDFFC\u2642': '1f9d6-1f3fc-2642',
    '\uD83E\uDDD6\uD83C\uDFFD\u2640': '1f9d6-1f3fd-2640',
    '\uD83E\uDDD6\uD83C\uDFFD\u2642': '1f9d6-1f3fd-2642',
    '\uD83E\uDDD6\uD83C\uDFFE\u2640': '1f9d6-1f3fe-2640',
    '\uD83E\uDDD6\uD83C\uDFFE\u2642': '1f9d6-1f3fe-2642',
    '\uD83E\uDDD6\uD83C\uDFFF\u2640': '1f9d6-1f3ff-2640',
    '\uD83E\uDDD6\uD83C\uDFFF\u2642': '1f9d6-1f3ff-2642',
    '\uD83E\uDDD7\uD83C\uDFFB\u2640': '1f9d7-1f3fb-2640',
    '\uD83E\uDDD7\uD83C\uDFFB\u2642': '1f9d7-1f3fb-2642',
    '\uD83E\uDDD7\uD83C\uDFFC\u2640': '1f9d7-1f3fc-2640',
    '\uD83E\uDDD7\uD83C\uDFFC\u2642': '1f9d7-1f3fc-2642',
    '\uD83E\uDDD7\uD83C\uDFFD\u2640': '1f9d7-1f3fd-2640',
    '\uD83E\uDDD7\uD83C\uDFFD\u2642': '1f9d7-1f3fd-2642',
    '\uD83E\uDDD7\uD83C\uDFFE\u2640': '1f9d7-1f3fe-2640',
    '\uD83E\uDDD7\uD83C\uDFFE\u2642': '1f9d7-1f3fe-2642',
    '\uD83E\uDDD7\uD83C\uDFFF\u2640': '1f9d7-1f3ff-2640',
    '\uD83E\uDDD7\uD83C\uDFFF\u2642': '1f9d7-1f3ff-2642',
    '\uD83E\uDDD8\uD83C\uDFFB\u2640': '1f9d8-1f3fb-2640',
    '\uD83E\uDDD8\uD83C\uDFFB\u2642': '1f9d8-1f3fb-2642',
    '\uD83E\uDDD8\uD83C\uDFFC\u2640': '1f9d8-1f3fc-2640',
    '\uD83E\uDDD8\uD83C\uDFFC\u2642': '1f9d8-1f3fc-2642',
    '\uD83E\uDDD8\uD83C\uDFFD\u2640': '1f9d8-1f3fd-2640',
    '\uD83E\uDDD8\uD83C\uDFFD\u2642': '1f9d8-1f3fd-2642',
    '\uD83E\uDDD8\uD83C\uDFFE\u2640': '1f9d8-1f3fe-2640',
    '\uD83E\uDDD8\uD83C\uDFFE\u2642': '1f9d8-1f3fe-2642',
    '\uD83E\uDDD8\uD83C\uDFFF\u2640': '1f9d8-1f3ff-2640',
    '\uD83E\uDDD8\uD83C\uDFFF\u2642': '1f9d8-1f3ff-2642',
    '\u26F9\uD83C\uDFFB\u2640': '26f9-1f3fb-2640',
    '\u26F9\uD83C\uDFFB\u2642': '26f9-1f3fb-2642',
    '\u26F9\uD83C\uDFFC\u2640': '26f9-1f3fc-2640',
    '\u26F9\uD83C\uDFFC\u2642': '26f9-1f3fc-2642',
    '\u26F9\uD83C\uDFFD\u2640': '26f9-1f3fd-2640',
    '\u26F9\uD83C\uDFFD\u2642': '26f9-1f3fd-2642',
    '\u26F9\uD83C\uDFFE\u2640': '26f9-1f3fe-2640',
    '\u26F9\uD83C\uDFFE\u2642': '26f9-1f3fe-2642',
    '\u26F9\uD83C\uDFFF\u2640': '26f9-1f3ff-2640',
    '\u26F9\uD83C\uDFFF\u2642': '26f9-1f3ff-2642',
    '\uD83C\uDFF3\uD83C\uDF08': '1f3f3-1f308',
    '\uD83D\uDC41\uD83D\uDDE8': '1f441-1f5e8',
    '\uD83D\uDC6F\u2642': '1f46f-2642',
    '\uD83D\uDC6F\u2640': '1f46f-2640',
    '\uD83C\uDFCC\u2642': '1f3cc-2642',
    '\uD83C\uDFCC\u2640': '1f3cc-2640',
    '\uD83E\uDD3C\u2642': '1f93c-2642',
    '\uD83E\uDD3C\u2640': '1f93c-2640',
    '\uD83E\uDD39\u2642': '1f939-2642',
    '\uD83E\uDD39\u2640': '1f939-2640',
    '\uD83E\uDD3E\u2642': '1f93e-2642',
    '\uD83E\uDD3E\u2640': '1f93e-2640',
    '\uD83E\uDD3D\u2642': '1f93d-2642',
    '\uD83E\uDD3D\u2640': '1f93d-2640',
    '\uD83E\uDD38\u2642': '1f938-2642',
    '\uD83E\uDD38\u2640': '1f938-2640',
    '\uD83D\uDEB6\u2642': '1f6b6-2642',
    '\uD83D\uDEB6\u2640': '1f6b6-2640',
    '\uD83D\uDEB5\u2642': '1f6b5-2642',
    '\uD83D\uDEB5\u2640': '1f6b5-2640',
    '\uD83D\uDEB4\u2642': '1f6b4-2642',
    '\uD83D\uDEB4\u2640': '1f6b4-2640',
    '\uD83D\uDEA3\u2642': '1f6a3-2642',
    '\uD83D\uDEA3\u2640': '1f6a3-2640',
    '\uD83C\uDFCB\u2642': '1f3cb-2642',
    '\uD83C\uDFCB\u2640': '1f3cb-2640',
    '\uD83C\uDFCA\u2642': '1f3ca-2642',
    '\uD83C\uDFCA\u2640': '1f3ca-2640',
    '\uD83C\uDFC4\u2642': '1f3c4-2642',
    '\uD83C\uDFC4\u2640': '1f3c4-2640',
    '\uD83C\uDFC3\u2642': '1f3c3-2642',
    '\uD83C\uDFC3\u2640': '1f3c3-2640',
    '\uD83E\uDD37\u2642': '1f937-2642',
    '\uD83E\uDD37\u2640': '1f937-2640',
    '\uD83E\uDD26\u2642': '1f926-2642',
    '\uD83E\uDD26\u2640': '1f926-2640',
    '\uD83D\uDE4E\u2642': '1f64e-2642',
    '\uD83D\uDE4E\u2640': '1f64e-2640',
    '\uD83D\uDE4D\u2642': '1f64d-2642',
    '\uD83D\uDE4D\u2640': '1f64d-2640',
    '\uD83D\uDE4B\u2642': '1f64b-2642',
    '\uD83D\uDE4B\u2640': '1f64b-2640',
    '\uD83D\uDE47\u2642': '1f647-2642',
    '\uD83D\uDE47\u2640': '1f647-2640',
    '\uD83D\uDE46\u2642': '1f646-2642',
    '\uD83D\uDE46\u2640': '1f646-2640',
    '\uD83D\uDE45\u2642': '1f645-2642',
    '\uD83D\uDE45\u2640': '1f645-2640',
    '\uD83D\uDC87\u2642': '1f487-2642',
    '\uD83D\uDC87\u2640': '1f487-2640',
    '\uD83D\uDC86\u2642': '1f486-2642',
    '\uD83D\uDC86\u2640': '1f486-2640',
    '\uD83D\uDC81\u2642': '1f481-2642',
    '\uD83D\uDC81\u2640': '1f481-2640',
    '\uD83D\uDC71\u2642': '1f471-2642',
    '\uD83D\uDC71\u2640': '1f471-2640',
    '\uD83D\uDC73\u2642': '1f473-2642',
    '\uD83D\uDC73\u2640': '1f473-2640',
    '\uD83D\uDC82\u2642': '1f482-2642',
    '\uD83D\uDC82\u2640': '1f482-2640',
    '\uD83D\uDD75\u2642': '1f575-2642',
    '\uD83D\uDD75\u2640': '1f575-2640',
    '\uD83D\uDC77\u2642': '1f477-2642',
    '\uD83D\uDC77\u2640': '1f477-2640',
    '\uD83D\uDC6E\u2642': '1f46e-2642',
    '\uD83D\uDC6E\u2640': '1f46e-2640',
    '\uD83D\uDC68\u2695': '1f468-2695',
    '\uD83D\uDC69\u2695': '1f469-2695',
    '\uD83D\uDC68\u2696': '1f468-2696',
    '\uD83D\uDC69\u2696': '1f469-2696',
    '\uD83D\uDC68\u2708': '1f468-2708',
    '\uD83D\uDC69\u2708': '1f469-2708',
    '\uD83E\uDDD9\u2640': '1f9d9-2640',
    '\uD83E\uDDD9\u2642': '1f9d9-2642',
    '\uD83E\uDDDA\u2640': '1f9da-2640',
    '\uD83E\uDDDA\u2642': '1f9da-2642',
    '\uD83E\uDDDB\u2640': '1f9db-2640',
    '\uD83E\uDDDB\u2642': '1f9db-2642',
    '\uD83E\uDDDC\u2640': '1f9dc-2640',
    '\uD83E\uDDDC\u2642': '1f9dc-2642',
    '\uD83E\uDDDD\u2640': '1f9dd-2640',
    '\uD83E\uDDDD\u2642': '1f9dd-2642',
    '\uD83E\uDDDE\u2640': '1f9de-2640',
    '\uD83E\uDDDE\u2642': '1f9de-2642',
    '\uD83E\uDDDF\u2640': '1f9df-2640',
    '\uD83E\uDDDF\u2642': '1f9df-2642',
    '\uD83E\uDDD6\u2640': '1f9d6-2640',
    '\uD83E\uDDD6\u2642': '1f9d6-2642',
    '\uD83E\uDDD7\u2640': '1f9d7-2640',
    '\uD83E\uDDD7\u2642': '1f9d7-2642',
    '\uD83E\uDDD8\u2640': '1f9d8-2640',
    '\uD83E\uDDD8\u2642': '1f9d8-2642',
    '\u26F9\u2642': '26f9-2642',
    '\u26F9\u2640': '26f9-2640',
    '\uD83D\uDD49': '1f549',
    '\uD83D\uDDDD': '1f5dd',
    '\xA9': '00a9',
    '\xAE': '00ae',
    '\u203C': '203c',
    '\u2049': '2049',
    '\u2122': '2122',
    ℹ: '2139',
    '\u2194': '2194',
    '\u2195': '2195',
    '\u2196': '2196',
    '\u2197': '2197',
    '\u2198': '2198',
    '\u2199': '2199',
    '\u21A9': '21a9',
    '\u21AA': '21aa',
    '\u25AA': '25aa',
    '\u25AB': '25ab',
    '\u25B6': '25b6',
    '\u25C0': '25c0',
    '\u25FB': '25fb',
    '\u25FC': '25fc',
    '\u2611': '2611',
    '\u26A0': '26a0',
    '\u2714': '2714',
    '\u2716': '2716',
    '\u27A1': '27a1',
    '\u2934': '2934',
    '\u2935': '2935',
    '\u2B05': '2b05',
    '\u2B06': '2b06',
    '\u2B07': '2b07',
    '\u3030': '3030',
    '\u271D': '271d',
    '\u23CF': '23cf',
    '\u23ED': '23ed',
    '\u23EE': '23ee',
    '\u23EF': '23ef',
    '\u23F8': '23f8',
    '\u23F9': '23f9',
    '\u23FA': '23fa',
    '\u2622': '2622',
    '\u2623': '2623',
    '\u2626': '2626',
    '\u262A': '262a',
    '\u262E': '262e',
    '\u262F': '262f',
    '\u2638': '2638',
    '\u269B': '269b',
    '\u2721': '2721',
    '\u2640': '2640',
    '\u2642': '2642',
    '\u2695': '2695'
  };
  Femoji.asciiList = {
    '*\\0/*': '1f646',
    '*\\O/*': '1f646',
    '-___-': '1f611',
    ":'-)": '1f602',
    "':-)": '1f605',
    "':-D": '1f605',
    '>:-)': '1f606',
    "':-(": '1f613',
    '>:-(': '1f620',
    ":'-(": '1f622',
    'O:-)': '1f607',
    '0:-3': '1f607',
    '0:-)': '1f607',
    '0;^)': '1f607',
    'O;-)': '1f607',
    '0;-)': '1f607',
    'O:-3': '1f607',
    '-__-': '1f611',
    ':-Þ': '1f61b',
    '</3': '1f494',
    ":')": '1f602',
    ':-D': '1f603',
    "':)": '1f605',
    "'=)": '1f605',
    "':D": '1f605',
    "'=D": '1f605',
    '>:)': '1f606',
    '>;)': '1f606',
    '>=)': '1f606',
    ';-)': '1f609',
    '*-)': '1f609',
    ';-]': '1f609',
    ';^)': '1f609',
    "':(": '1f613',
    "'=(": '1f613',
    ':-*': '1f618',
    ':^*': '1f618',
    '>:P': '1f61c',
    'X-P': '1f61c',
    '>:[': '1f61e',
    ':-(': '1f61e',
    ':-[': '1f61e',
    '>:(': '1f620',
    ":'(": '1f622',
    ';-(': '1f622',
    '>.<': '1f623',
    '#-)': '1f635',
    '%-)': '1f635',
    'X-)': '1f635',
    '\\0/': '1f646',
    '\\O/': '1f646',
    '0:3': '1f607',
    '0:)': '1f607',
    'O:)': '1f607',
    'O=)': '1f607',
    'O:3': '1f607',
    'B-)': '1f60e',
    '8-)': '1f60e',
    'B-D': '1f60e',
    '8-D': '1f60e',
    '-_-': '1f611',
    '>:\\': '1f615',
    '>:/': '1f615',
    ':-/': '1f615',
    ':-.': '1f615',
    ':-P': '1f61b',
    ':Þ': '1f61b',
    ':-b': '1f61b',
    ':-O': '1f62e',
    O_O: '1f62e',
    '>:O': '1f62e',
    ':-X': '1f636',
    ':-#': '1f636',
    ':-)': '1f642',
    '(y)': '1f44d',
    '<3': '2764',
    ':D': '1f603',
    '=D': '1f603',
    ';)': '1f609',
    '*)': '1f609',
    ';]': '1f609',
    ';D': '1f609',
    ':*': '1f618',
    '=*': '1f618',
    ':(': '1f61e',
    ':[': '1f61e',
    '=(': '1f61e',
    ':@': '1f620',
    ';(': '1f622',
    'D:': '1f628',
    ':$': '1f633',
    '=$': '1f633',
    '#)': '1f635',
    '%)': '1f635',
    'X)': '1f635',
    'B)': '1f60e',
    '8)': '1f60e',
    ':/': '1f615',
    ':\\': '1f615',
    '=/': '1f615',
    '=\\': '1f615',
    ':L': '1f615',
    '=L': '1f615',
    ':P': '1f61b',
    '=P': '1f61b',
    ':b': '1f61b',
    ':O': '1f62e',
    ':X': '1f636',
    ':#': '1f636',
    '=X': '1f636',
    '=#': '1f636',
    ':)': '1f642',
    '=]': '1f642',
    '=)': '1f642',
    ':]': '1f642'
  };
  Femoji.asciiRegexp
    = "(\\*\\\\0\\/\\*|\\*\\\\O\\/\\*|\\-___\\-|\\:'\\-\\)|'\\:\\-\\)|'\\:\\-D|\\>\\:\\-\\)|>\\:\\-\\)|'\\:\\-\\(|\\>\\:\\-\\(|>\\:\\-\\(|\\:'\\-\\(|O\\:\\-\\)|0\\:\\-3|0\\:\\-\\)|0;\\^\\)|O;\\-\\)|0;\\-\\)|O\\:\\-3|\\-__\\-|\\:\\-Þ|\\:\\-Þ|\\<\\/3|<\\/3|\\:'\\)|\\:\\-D|'\\:\\)|'\\=\\)|'\\:D|'\\=D|\\>\\:\\)|>\\:\\)|\\>;\\)|>;\\)|\\>\\=\\)|>\\=\\)|;\\-\\)|\\*\\-\\)|;\\-\\]|;\\^\\)|'\\:\\(|'\\=\\(|\\:\\-\\*|\\:\\^\\*|\\>\\:P|>\\:P|X\\-P|\\>\\:\\[|>\\:\\[|\\:\\-\\(|\\:\\-\\[|\\>\\:\\(|>\\:\\(|\\:'\\(|;\\-\\(|\\>\\.\\<|>\\.<|#\\-\\)|%\\-\\)|X\\-\\)|\\\\0\\/|\\\\O\\/|0\\:3|0\\:\\)|O\\:\\)|O\\=\\)|O\\:3|B\\-\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\>\\:\\\\|>\\:\\\\|\\>\\:\\/|>\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\-P|\\:Þ|\\:Þ|\\:\\-b|\\:\\-O|O_O|\\>\\:O|>\\:O|\\:\\-X|\\:\\-#|\\:\\-\\)|\\(y\\)|\\<3|<3|\\:D|\\=D|;\\)|\\*\\)|;\\]|;D|\\:\\*|\\=\\*|\\:\\(|\\:\\[|\\=\\(|\\:@|;\\(|D\\:|\\:\\$|\\=\\$|#\\)|%\\)|X\\)|B\\)|8\\)|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\=P|\\:b|\\:O|\\:X|\\:#|\\=X|\\=#|\\:\\)|\\=\\]|\\=\\)|\\:\\])";
  Femoji.emojiVersion = '3.1'; // you can [optionally] modify this to load alternate emoji versions. see readme for backwards compatibility and version options
  Femoji.emojiSize = '32';
  Femoji.greedyMatch = false; // set to true for greedy unicode matching
  Femoji.blacklistChars = '';
  Femoji.imagePathPNG
    = `https://cdn.jsdelivr.net/emojione/assets/${  Femoji.emojiVersion  }/png/`;
  Femoji.defaultPathPNG = Femoji.imagePathPNG;
  Femoji.imageTitleTag = true; // set to false to remove title attribute from img tag
  Femoji.sprites = false; // if this is true then sprite markup will be used
  Femoji.unicodeAlt = true; // use the unicode char as the alt attribute (makes copy and pasting the resulting text better)
  Femoji.ascii = false; // change to true to convert ascii smileys
  Femoji.riskyMatchAscii = false; // set true to match ascii without leading/trailing space char
  Femoji.regShortNames = new RegExp(
    `<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(${
      Femoji.shortnames
       })`,
    'gi'
  );
  Femoji.regAscii = new RegExp(
    `<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)${
      Femoji.asciiRegexp
       }(?=\\s|$|[!,.?]))`,
    'gi'
  );
  Femoji.regAsciiRisky = new RegExp(
    `<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(()${
      Femoji.asciiRegexp
       }())`,
    'gi'
  );
  Femoji.regUnicode = new RegExp(
    '<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(?:\uD83C\uDFF3)\uFE0F?\u200D?(?:\uD83C\uDF08)|(?:\uD83D\uDC41)\uFE0F?\u200D?(?:\uD83D\uDDE8)\uFE0F?|[#-9]\uFE0F?\u20E3|(?:(?:\uD83C\uDFF4)(?:\uDB40[\uDC60-\uDCFF]){1,6})|(?:\uD83C[\uDDE0-\uDDFF]){2}|(?:(?:\uD83D[\uDC68\uDC69]))\uFE0F?(?:\uD83C[\uDFFA-\uDFFF])?\u200D?(?:[\u2695\u2696\u2708]|\uD83C[\uDF3E-\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83D[\uDC68\uDC69]|\uD83E[\uDDD0-\uDDDF])(?:\uD83C[\uDFFA-\uDFFF])?\u200D?[\u2640\u2642\u2695\u2696\u2708]?\uFE0F?|(?:(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])[\u200D\uFE0F]{0,2}){1,3}(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])|(?:(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])\uFE0F?){2,4}|(?:\uD83D[\uDC68\uDC69\uDC6E\uDC71-\uDC87\uDD75\uDE45-\uDE4E]|\uD83E[\uDD26\uDD37]|\uD83C[\uDFC3-\uDFCC]|\uD83E[\uDD38-\uDD3E]|\uD83D[\uDEA3-\uDEB6]|\u26F9|\uD83D\uDC6F)\uFE0F?(?:\uD83C[\uDFFB-\uDFFF])?\u200D?[\u2640\u2642]?\uFE0F?|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85-\uDFCC]|\uD83D[\uDC42-\uDCAA\uDD74-\uDD96\uDE45-\uDE4F\uDEA3-\uDECC]|\uD83E[\uDD18-\uDD3E])\uFE0F?(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u2194-\u2199\u21A9-\u21AA]\uFE0F?|[#*]|[\u3030\u303D]\uFE0F?|(?:\uD83C[\uDD70-\uDD71]|\uD83C\uDD8E|\uD83C[\uDD91-\uDD9A])\uFE0F?|\u24C2\uFE0F?|[\u3297\u3299]\uFE0F?|(?:\uD83C[\uDE01-\uDE02]|\uD83C\uDE1A|\uD83C\uDE2F|\uD83C[\uDE32-\uDE3A]|\uD83C[\uDE50-\uDE51])\uFE0F?|[\u203C\u2049]\uFE0F?|[\u25AA-\u25AB\u25B6\u25C0\u25FB-\u25FE]\uFE0F?|[\xA9\xAE]\uFE0F?|[\u2122\u2139]\uFE0F?|\uD83C\uDC04\uFE0F?|[\u2B05-\u2B07\u2B1B-\u2B1C\u2B50\u2B55]\uFE0F?|[\u231A-\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA]\uFE0F?|\uD83C\uDCCF|[\u2934\u2935]\uFE0F?)|[\u2700-\u27BF]\uFE0F?|[\uD800-\uDBFF][\uDC00-\uDFFF]\uFE0F?|[\u2600-\u26FF]\uFE0F?|[0-9]\uFE0F',
    'g'
  );
  Femoji.prototype.toImage = function(str) {
    str = Femoji.prototype.unicodeToImage(str);
    str = Femoji.prototype.shortnameToImage(str);
    return str;
  }; // Uses toShort to transform all unicode into a standard shortname
  // then transforms the shortname into unicode
  // This is done for standardization when converting several unicode types
  Femoji.prototype.unifyUnicode = function(str) {
    str = Femoji.prototype.toShort(str);
    str = Femoji.prototype.shortnameToUnicode(str);
    return str;
  }; // Replace shortnames (:wink:) with Ascii equivalents ( ;^) )
  // Useful for systems that dont support unicode nor images
  Femoji.prototype.shortnameToAscii = function(str) {
    var unicode, // something to keep in mind here is that array flip will destroy
      // half of the ascii text "emojis" because the unicode numbers are duplicated
      // this is ok for what it's being used for
      unicodeToAscii = Femoji.prototype.objectFlip(Femoji.asciiList);
    str = str.replace(Femoji.regShortNames, function(shortname) {
      if (
        typeof shortname === 'undefined'
        || shortname === ''
        || !(shortname in Femoji.emojioneList)
      ) {
        // if the shortname doesnt exist just return the entire match
        return shortname;
      } else {
        unicode = Femoji.emojioneList[shortname].uc_output;
        if (typeof unicodeToAscii[unicode] !== 'undefined') {
          return unicodeToAscii[unicode];
        } else {
          return shortname;
        }
      }
    });
    return str;
  }; // will output unicode from shortname
  // useful for sending emojis back to mobile devices
  Femoji.prototype.shortnameToUnicode = function(str) {
    // replace regular shortnames first
    var unicode, fname;
    str = str.replace(Femoji.regShortNames, function(shortname) {
      if (
        typeof shortname === 'undefined'
        || shortname === ''
        || !(shortname in Femoji.emojioneList)
      ) {
        // if the shortname doesnt exist just return the entire matchhju
        return shortname;
      }
      unicode = Femoji.emojioneList[shortname].uc_output.toUpperCase();
      fname = Femoji.emojioneList[shortname].uc_base;
      return Femoji.prototype.convert(unicode);
    }); // if ascii smileys are turned on, then we'll replace them!
    if (Femoji.ascii) {
      var asciiRX = Femoji.riskyMatchAscii
        ? Femoji.regAsciiRisky
        : Femoji.regAscii;
      str = str.replace(asciiRX, function(entire, m1, m2, m3) {
        if (
          typeof m3 === 'undefined'
          || m3 === ''
          || !(Femoji.prototype.unescapeHTML(m3) in Femoji.asciiList)
        ) {
          // if the ascii doesnt exist just return the entire match
          return entire;
        }
        m3 = Femoji.unescapeHTML(m3);
        unicode = Femoji.asciiList[m3].toUpperCase();
        return m2 + Femoji.prototype.convert(unicode);
      });
    }
    return str;
  };
  Femoji.prototype.shortnameToImage = function(str) {
    // replace regular shortnames first
    var replaceWith,
      shortname,
      unicode,
      fname,
      alt,
      category,
      title,
      size,
      ePath;
    var mappedUnicode = Femoji.prototype.mapUnicodeToShort();
    str = str.replace(Femoji.regShortNames, function(shortname) {
      if (
        typeof shortname === 'undefined'
        || shortname === ''
        || Femoji.shortnames.indexOf(shortname) === -1
      ) {
        // if the shortname doesnt exist just return the entire match
        return shortname;
      } else {
        // map shortname to parent
        if (!Femoji.emojioneList[shortname]) {
          for (var _emoji in Femoji.emojioneList) {
            if (!Femoji.emojioneList.hasOwnProperty(_emoji) || _emoji === '') {
              continue;
            }
            if (
              Femoji.emojioneList[_emoji].shortnames.indexOf(shortname) === -1
            ) {
              continue;
            }
            shortname = _emoji;
            break;
          }
        }
        unicode = Femoji.emojioneList[shortname].uc_output;
        fname = Femoji.emojioneList[shortname].uc_base;
        category = fname.includes('-1f3f')
          ? 'diversity'
          : Femoji.emojioneList[shortname].category;
        title = Femoji.imageTitleTag ? `title="${  shortname  }"` : '';
        size
          = Femoji.spriteSize == '32' || Femoji.spriteSize == '64'
            ? Femoji.spriteSize
            : '32'; // if the emoji path has been set, we'll use the provided path, otherwise we'll use the default path
        ePath
          = Femoji.defaultPathPNG !== Femoji.imagePathPNG
            ? Femoji.imagePathPNG
            : `${Femoji.defaultPathPNG + Femoji.emojiSize  }/`; // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
        alt = Femoji.unicodeAlt
          ? Femoji.prototype.convert(unicode.toUpperCase())
          : shortname;
        if (Femoji.sprites) {
          replaceWith
            = `<span class="emojione emojione-${
             size
             }-${
             category
             } _${
             fname
             }" ${
             title
             }>${
             alt
             }</span>`;
        } else {
          replaceWith
            = `<img class="emojione" alt="${
             alt
             }" ${
             title
             } src="${
             ePath
             }${fname
             }.png"/>`;
        }
        return replaceWith;
      }
    }); // if ascii smileys are turned on, then we'll replace them!
    if (Femoji.ascii) {
      var asciiRX = Femoji.riskyMatchAscii
        ? Femoji.regAsciiRisky
        : Femoji.regAscii;
      str = str.replace(asciiRX, function(entire, m1, m2, m3) {
        if (
          typeof m3 === 'undefined'
          || m3 === ''
          || !(Femoji.prototype.unescapeHTML(m3) in Femoji.asciiList)
        ) {
          // if the ascii doesnt exist just return the entire match
          return entire;
        }
        m3 = Femoji.prototype.unescapeHTML(m3);
        unicode = Femoji.asciiList[m3];
        shortname = mappedUnicode[unicode];
        category = unicode.includes('-1f3f')
          ? 'diversity'
          : Femoji.emojioneList[shortname].category;
        title = Femoji.imageTitleTag
          ? `title="${  Femoji.prototype.escapeHTML(m3)  }"`
          : '';
        size
          = Femoji.spriteSize == '32' || Femoji.spriteSize == '64'
            ? Femoji.spriteSize
            : '32'; // if the emoji path has been set, we'll use the provided path, otherwise we'll use the default path
        ePath
          = Femoji.defaultPathPNG !== Femoji.imagePathPNG
            ? Femoji.imagePathPNG
            : `${Femoji.defaultPathPNG + Femoji.emojiSize  }/`; // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
        alt = Femoji.unicodeAlt
          ? Femoji.prototype.convert(unicode.toUpperCase())
          : Femoji.prototype.escapeHTML(m3);
        if (Femoji.sprites) {
          replaceWith
            = `${m2
             }<span class="emojione emojione-${
             size
             }-${
             category
             } _${
             unicode
             }"  ${
             title
             }>${
             alt
             }</span>`;
        } else {
          replaceWith
            = `${m2
             }<img class="emojione" alt="${
             alt
             }" ${
             title
             } src="${
             ePath
             }${unicode
             }.png"/>`;
        }
        return replaceWith;
      });
    }
    return str;
  };
  Femoji.prototype.unicodeToImage = function(str) {
    var replaceWith = void 0,
      unicode = void 0,
      short = void 0,
      fname = void 0,
      alt = void 0,
      category = void 0,
      title = void 0,
      size = void 0,
      ePath = void 0;
    var mappedUnicode = Femoji.prototype.mapUnicodeToShort();
    var eList = Femoji.emojioneList;
    var bList = Femoji.blacklistChars.split(',');
    str = str.replace(Femoji.regUnicode, function(unicodeChar) {
      if (typeof unicodeChar === 'undefined' || unicodeChar === '') {
        return unicodeChar;
      } else if (
        unicodeChar in Femoji.jsEscapeMap
        && bList.indexOf(unicodeChar) === -1
      ) {
        fname = Femoji.jsEscapeMap[unicodeChar];
      } else if (
        Femoji.greedyMatch
        && unicodeChar in Femoji.jsEscapeMapGreedy
        && bList.indexOf(unicodeChar) === -1
      ) {
        fname = Femoji.jsEscapeMapGreedy[unicodeChar];
      } else {
        return unicodeChar;
      } // then map to shortname and locate the filename
      short = mappedUnicode[fname]; // then pull the unicode output from emojioneList
      fname = eList[short].uc_base;
      unicode = eList[short].uc_output;
      category = fname.includes('-1f3f') ? 'diversity' : eList[short].category;
      size
        = Femoji.spriteSize == '32' || Femoji.spriteSize == '64'
          ? Femoji.spriteSize
          : '32'; // if the emoji path has been set, we'll use the provided path, otherwise we'll use the default path
      ePath
        = Femoji.defaultPathPNG !== Femoji.imagePathPNG
          ? Femoji.imagePathPNG
          : `${Femoji.defaultPathPNG + Femoji.emojiSize  }/`; // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
      alt = Femoji.unicodeAlt
        ? Femoji.prototype.convert(unicode.toUpperCase())
        : short;
      title = Femoji.imageTitleTag ? `title="${  short  }"` : '';
      if (Femoji.sprites) {
        replaceWith
          = `<span class="emojione emojione-${
           size
           }-${
           category
           } _${
           fname
           }" ${
           title
           }>${
           alt
           }</span>`;
      } else {
        replaceWith
          = `<img class="emojione" alt="${
           alt
           }" ${
           title
           } src="${
           ePath
           }${fname
           }.png"/>`;
      }
      return replaceWith;
    }); // if ascii smileys are turned on, then we'll replace them!
    if (Femoji.ascii) {
      var asciiRX = Femoji.riskyMatchAscii
        ? Femoji.regAsciiRisky
        : Femoji.regAscii;
      str = str.replace(asciiRX, function(entire, m1, m2, m3) {
        if (
          typeof m3 === 'undefined'
          || m3 === ''
          || !(Femoji.prototype.unescapeHTML(m3) in Femoji.asciiList)
        ) {
          // if the ascii doesnt exist just return the entire match
          return entire;
        }
        m3 = Femoji.prototype.unescapeHTML(m3);
        unicode = Femoji.asciiList[m3];
        shortname = mappedUnicode[unicode];
        category = unicode.includes('-1f3f')
          ? 'diversity'
          : Femoji.emojioneList[shortname].category;
        title = Femoji.imageTitleTag
          ? `title="${  Femoji.prototype.escapeHTML(m3)  }"`
          : '';
        size
          = Femoji.spriteSize == '32' || Femoji.spriteSize == '64'
            ? Femoji.spriteSize
            : '32'; // if the emoji path has been set, we'll use the provided path, otherwise we'll use the default path
        ePath
          = Femoji.defaultPathPNG !== Femoji.imagePathPNG
            ? Femoji.imagePathPNG
            : `${Femoji.defaultPathPNG + Femoji.emojiSize  }/`; // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
        alt = Femoji.unicodeAlt
          ? Femoji.prototype.convert(unicode.toUpperCase())
          : Femoji.prototype.escapeHTML(m3);
        if (Femoji.sprites) {
          replaceWith
            = `${m2
             }<span class="emojione emojione-${
             size
             }-${
             category
             } _${
             unicode
             }"  ${
             title
             }>${
             alt
             }</span>`;
        } else {
          replaceWith
            = `${m2
             }<img class="emojione" alt="${
             alt
             }" ${
             title
             } src="${
             ePath
             }${unicode
             }.png"/>`;
        }
        return replaceWith;
      });
    }
    return str;
  }; // this is really just unicodeToShortname() but I opted for the shorthand name to match toImage()
  Femoji.prototype.toShort = function(str) {
    var find = Femoji.prototype.unicodeCharRegex();
    return Femoji.prototype.replaceAll(str, find);
  }; // for converting unicode code points and code pairs to their respective characters
  Femoji.prototype.convert = function(unicode) {
    if (unicode.indexOf('-') > -1) {
      var parts = [];
      var s = unicode.split('-');
      for (var _i = 0; _i < s.length; _i++) {
        var part = parseInt(s[_i], 16);
        if (part >= 0x10000 && part <= 0x10ffff) {
          var hi = Math.floor((part - 0x10000) / 0x400) + 0xd800;
          var lo = ((part - 0x10000) % 0x400) + 0xdc00;
          part = String.fromCharCode(hi) + String.fromCharCode(lo);
        } else {
          part = String.fromCharCode(part);
        }
        parts.push(part);
      }
      return parts.join('');
    } else {
      var s = parseInt(unicode, 16);
      if (s >= 0x10000 && s <= 0x10ffff) {
        var hi = Math.floor((s - 0x10000) / 0x400) + 0xd800;
        var lo = ((s - 0x10000) % 0x400) + 0xdc00;
        return String.fromCharCode(hi) + String.fromCharCode(lo);
      } else {
        return String.fromCharCode(s);
      }
    }
  };
  Femoji.prototype.escapeHTML = function(string) {
    var escaped = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return string.replace(/[&<>"']/g, function(match) {
      return escaped[match];
    });
  };
  Femoji.prototype.unescapeHTML = function(string) {
    var unescaped = {
      '&amp;': '&',
      '&#38;': '&',
      '&#x26;': '&',
      '&lt;': '<',
      '&#60;': '<',
      '&#x3C;': '<',
      '&gt;': '>',
      '&#62;': '>',
      '&#x3E;': '>',
      '&quot;': '"',
      '&#34;': '"',
      '&#x22;': '"',
      '&apos;': "'",
      '&#39;': "'",
      '&#x27;': "'"
    };
    return string.replace(
      /&(?:amp|#38|#x26|lt|#60|#x3C|gt|#62|#x3E|apos|#39|#x27|quot|#34|#x22);/gi,
      function(match) {
        return unescaped[match];
      }
    );
  };
  Femoji.prototype.shortnameConversionMap = function() {
    var map = [],
      emoji = void 0;
    for (emoji in Femoji.emojioneList) {
      if (!Femoji.emojioneList.hasOwnProperty(emoji) || emoji === '') {
        continue;
      }
      map[
        Femoji.prototype.convert(Femoji.emojioneList[emoji].uc_output)
      ] = emoji;
    }
    return map;
  };
  Femoji.prototype.unicodeCharRegex = function() {
    var map = [];
    for (emoji in Femoji.emojioneList) {
      if (!Femoji.emojioneList.hasOwnProperty(emoji) || emoji === '') {
        continue;
      }
      map.push(Femoji.prototype.convert(Femoji.emojioneList[emoji].uc_output));
    }
    return map.join('|');
  };
  Femoji.prototype.mapEmojioneList = function(addToMapStorage) {
    for (var _shortname in Femoji.emojioneList) {
      if (!Femoji.emojioneList.hasOwnProperty(_shortname)) {
        continue;
      }
      var unicode = Femoji.emojioneList[_shortname].uc_base;
      addToMapStorage(unicode, _shortname);
    }
  };
  Femoji.prototype.mapUnicodeToShort = function() {
    if (!Femoji.memMapShortToUnicode) {
      Femoji.memMapShortToUnicode = {};
      Femoji.prototype.mapEmojioneList(function(unicode, shortname) {
        Femoji.memMapShortToUnicode[unicode] = shortname;
      });
    }
    return Femoji.memMapShortToUnicode;
  };
  Femoji.prototype.memorizeReplacement = function() {
    if (
      !Femoji.unicodeReplacementRegEx
      || !Femoji.memMapShortToUnicodeCharacters
    ) {
      var unicodeList = [];
      Femoji.memMapShortToUnicodeCharacters = {};
      Femoji.prototype.mapEmojioneList(function(unicode, shortname) {
        var emojiCharacter = Femoji.prototype.convert(unicode);
        Femoji.memMapShortToUnicodeCharacters[emojiCharacter] = shortname;
        unicodeList.push(emojiCharacter);
      });
      Femoji.unicodeReplacementRegEx = unicodeList.join('|');
    }
  };
  Femoji.mapUnicodeCharactersToShort = function() {
    Femoji.prototype.memorizeReplacement();
    return Femoji.memMapShortToUnicodeCharacters;
  }; // reverse an object
  Femoji.prototype.objectFlip = function(obj) {
    var key = void 0,
      tmp_obj = {};
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        tmp_obj[obj[key]] = key;
      }
    }
    return tmp_obj;
  };
  Femoji.prototype.escapeRegExp = function(string) {
    return string.replace(/[-[\]{}()*+?.,;:&\\^$#\s]/g, '\\$&');
  };
  Femoji.prototype.replaceAll = function(string, find) {
    var escapedFind = Femoji.prototype.escapeRegExp(find); // sorted largest output to smallest output
    var search = new RegExp(
      `<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(${
        escapedFind
         })`,
      'gi'
    ); // callback prevents replacing anything inside of these common html tags as well as between an <object></object> tag
    var replace = function replace(entire, m1) {
      return typeof m1 === 'undefined' || m1 === ''
        ? entire
        : Femoji.prototype.shortnameConversionMap()[m1];
    };
    return string.replace(search, replace);
  }; // UI element part start here
  var paletteShown = false;
  var recentHits
    = typeof Storage !== 'undefined'
      ? localStorage.getItem('femojiRecentList')
        ? JSON.parse(localStorage.getItem('femojiRecentList'))
        : {}
      : {};
  var listenersAdded = false; // TODO: (kshitij) hard coded values -- make modifications to pass external nodes to the library
  var editor = '#collab-action-box #collab-send-box #collab-text-box';
  var paletteWrapperHTML = "<div class='collab-emoji-palette-wrapper' style=''></div>";
  Femoji.prototype.buttonClickHandler = function() {
    var self = this; // hideEmojiList();
    if (paletteShown) {
      hideEmojiPalette.call(self);
    } else {
      var el = document.querySelector(editor);
      renderPalette.call(self);
      setTimeout(function() {
        el.focus();
      });
      if (!listenersAdded) {
        activatePaletteListeners.call(Femoji);
      }
    }
  };
  keyUpHandlerForPalette = function keyUpHandlerForPalette() {
    var self = this;
    hideEmojiPalette.call(self);
  };
  renderPalette = function renderPalette() {
    var self = this;
    hideEmojiPalette.call(self);
    var el = document.querySelector(editor);
    if (el) {
      if (!Femoji.emojiPaletteWrapper) {
        var emojiPaletteWrapper = paletteWrapperHTML;
        insertAfterNode.call(self, emojiPaletteWrapper, el);
        emojiPaletteWrapper = el.nextSibling;
        emojiPaletteWrapper.setAttribute(
          'style',
          `${emojiPaletteWrapper.getAttribute('style') || ''  }display: none;`
        );
        var emojiPalette = document.createElement('div');
        emojiPalette.setAttribute('class', 'emoji-palette');
        emojiPaletteWrapper.appendChild(emojiPalette); // Note: uncomment code below to set emoji palette above text-box
        /*
            var bottom_margin = el.offsetHeight;
            emojiPaletteWrapper.setAttribute('style', (emojiPaletteWrapper.getAttribute('style') || '') + 'bottom:' + (bottom_margin + 3) + 'px;');
        */ emojiPaletteWrapper.setAttribute(
          'style',
          (emojiPaletteWrapper.getAttribute('style') || '').replace(
            /display: none;/gi,
            ''
          )
        );
        var categoriesHolder = document.createElement('div');
        categoriesHolder.setAttribute('class', 'categories-holder');
        emojiPalette.appendChild(categoriesHolder);
        var categoriesSelector = document.createElement('div');
        categoriesSelector.setAttribute('class', 'categories-selector');
        emojiPalette.appendChild(categoriesSelector);
        categoriesSelector.appendChild(
          generateCategorySpan.call(self, 'recent', true)
        );
        categoriesSelector.appendChild(generateCategorySpan.call(self, 'people'));
        categoriesSelector.appendChild(generateCategorySpan.call(self, 'nature'));
        categoriesSelector.appendChild(generateCategorySpan.call(self, 'food'));
        categoriesSelector.appendChild(generateCategorySpan.call(self, 'activity'));
        categoriesSelector.appendChild(generateCategorySpan.call(self, 'travel'));
        categoriesSelector.appendChild(generateCategorySpan.call(self, 'objects'));
        categoriesSelector.appendChild(generateCategorySpan.call(self, 'symbols'));
        categoriesSelector.appendChild(generateCategorySpan.call(self, 'flags'));
        categoriesHolder.appendChild(
          generateEmojiHolder.call(
            self,
            'recent',
            sortByHits.call(self, hashToArray.call(self, recentHits))
          )
        );
        categoriesHolder.appendChild(
          generateEmojiHolder.call(self, 'people', Femoji.peopleList)
        );
        categoriesHolder.appendChild(
          generateEmojiHolder.call(self, 'nature', Femoji.natureList)
        );
        categoriesHolder.appendChild(
          generateEmojiHolder.call(self, 'food', Femoji.foodList)
        );
        categoriesHolder.appendChild(
          generateEmojiHolder.call(self, 'activity', Femoji.activityList)
        );
        categoriesHolder.appendChild(
          generateEmojiHolder.call(self, 'travel', Femoji.travelList)
        );
        categoriesHolder.appendChild(
          generateEmojiHolder.call(self, 'objects', Femoji.objectsList)
        );
        categoriesHolder.appendChild(
          generateEmojiHolder.call(self, 'symbols', Femoji.symbolsList)
        );
        categoriesHolder.appendChild(
          generateEmojiHolder.call(self, 'flags', Femoji.flagsList)
        );
        categoriesHolder.addEventListener('scroll', function() {
          updateSelectedCategoryOnScroll.call(self);
        });
        Femoji.emojiPaletteWrapper = emojiPaletteWrapper;
      } else {
        el.parentNode.appendChild(Femoji.emojiPaletteWrapper);
      }
      paletteShown = true;
    }
  };
  sortByHits = function sortByHits(array) {
    var result = [];
    if (array.length) {
      array.sort(function(a, b) {
        return b.hits - a.hits;
      });
    }
    for (var _i2 = 0; _i2 < array.length; _i2++) {
      result.push(array[_i2].name);
    }
    return result;
  };
  hashToArray = function hashToArray(hash) {
    var result = [];
    for (var k in hash) {
      if (hash.hasOwnProperty(k)) {
        result.push({ name: k, hits: hash[k] });
      }
    }
    return result;
  };
  updateSelectedCategoryOnScroll = function updateSelectedCategoryOnScroll() {
    var self = this;
    var parentScrolled = document.querySelector('.categories-holder').scrollTop;
    var recentNodeOffset
      = document.querySelector('.emoji-category.recent').offsetTop - 40;
    var peopleNodeOffset
      = document.querySelector('.emoji-category.people').offsetTop - 40;
    var natureNodeOffset
      = document.querySelector('.emoji-category.nature').offsetTop - 40;
    var foodNodeOffset
      = document.querySelector('.emoji-category.food').offsetTop - 40;
    var activityNodeOffset
      = document.querySelector('.emoji-category.activity').offsetTop - 40;
    var travelNodeOffset
      = document.querySelector('.emoji-category.travel').offsetTop - 40;
    var objectsNodeOffset
      = document.querySelector('.emoji-category.objects').offsetTop - 40;
    var symbolsNodeOffset
      = document.querySelector('.emoji-category.symbols').offsetTop - 40;
    var flagsNodeOffset
      = document.querySelector('.emoji-category.flags').offsetTop - 40;
    if (
      parentScrolled >= recentNodeOffset
      && parentScrolled < peopleNodeOffset
    ) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.recent')
      );
    } else if (
      parentScrolled >= peopleNodeOffset
      && parentScrolled < natureNodeOffset
    ) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.people')
      );
    } else if (
      parentScrolled >= natureNodeOffset
      && parentScrolled < foodNodeOffset
    ) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.nature')
      );
    } else if (
      parentScrolled >= foodNodeOffset
      && parentScrolled < activityNodeOffset
    ) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.food')
      );
    } else if (
      parentScrolled >= activityNodeOffset
      && parentScrolled < travelNodeOffset
    ) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.activity')
      );
    } else if (
      parentScrolled >= travelNodeOffset
      && parentScrolled < objectsNodeOffset
    ) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.travel')
      );
    } else if (
      parentScrolled >= objectsNodeOffset
      && parentScrolled < symbolsNodeOffset
    ) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.objects')
      );
    } else if (
      parentScrolled >= symbolsNodeOffset
      && parentScrolled < flagsNodeOffset
    ) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.symbols')
      );
    } else if (parentScrolled >= flagsNodeOffset) {
      updateSelectedCategory.call(
        self,
        document.querySelector('.category-image-holder.flags')
      );
    }
  };
  updateSelectedCategory = function updateSelectedCategory(node) {
    var cur_selected = document.querySelector(
      '.category-image-holder.selected'
    );
    if (cur_selected) {
      cur_selected.classList.remove('selected');
      node.classList.add('selected');
    }
  };
  hideEmojiPalette = function hideEmojiPalette() {
    var emojiPaletteWrapper = document.getElementsByClassName(
      'collab-emoji-palette-wrapper'
    )[0];
    if (emojiPaletteWrapper) {
      emojiPaletteWrapper.parentNode.removeChild(emojiPaletteWrapper);
    }
    paletteShown = false;
  };
  activatePaletteListeners = function activatePaletteListeners() {
    var self = this;
    document.addEventListener('click', function(event) {
      hidePaletteOnClickOutside.call(self, event);
    });
    document
      .querySelector(editor)
      .addEventListener('keyup', keyUpHandlerForPalette);
    listenersAdded = true;
  };
  hidePaletteOnClickOutside = function hidePaletteOnClickOutside(event) {
    var self = this;
    var target = event.target;
    if (
      paletteShown
      && !(
        target.closest('.collab-emoji-button')
        || target.closest('.collab-emoji-palette-wrapper')
      )
    ) {
      hideEmojiPalette.call(self);
    }
  };
  generateCategorySpan = function generateCategorySpan(category, isSelected) {
    var self = this;
    var categoryIconHolder = document.createElement('span');
    categoryIconHolder.setAttribute(
      'class',
      `category-image-holder ${  category  }${isSelected ? ' selected' : ''}`
    );
    var categoryImage = document.createElement('span');
    categoryImage.setAttribute('class', `category-img ${  category}`);
    categoryImage.setAttribute(
      'style',
      `background-image: url(${
        self.setAssetURL(self.assetPaths.IMAGES[category])
         })`
    ); // categoryImage.setAttribute('src', "/collab-ui/assets/images/" + category + ".png");
    categoryIconHolder.appendChild(categoryImage);
    categoryIconHolder.addEventListener('click', function(event) {
      updateSelectedCategory.call(
        self,
        event.target.closest('.category-image-holder')
      );
      scrollToCategory.call(self, category);
    });
    return categoryIconHolder;
  };
  generateEmojiHolder = function generateEmojiHolder(category, emojiList) {
    var self = this;
    var emojiHolder = document.createElement('div');
    emojiHolder.setAttribute('class', `emoji-category ${  category}`);
    var emojiLabel = document.createElement('div');
    emojiLabel.setAttribute('class', 'category-label');
    var emojiText = document.createElement('span');
    emojiText.setAttribute('class', 'category-text collab-smooth-text');
    emojiText.appendChild(document.createTextNode(category.capitalize()));
    emojiLabel.appendChild(emojiText);
    emojiHolder.appendChild(emojiLabel);
    if (emojiList.length) {
      for (var _i3 = 0; _i3 < emojiList.length; _i3++) {
        var baseClass = Femoji.emojioneList[emojiList[_i3]]
          ? Femoji.emojioneList[emojiList[_i3]].uc_base
          : '';
        if (baseClass) {
          var iconCategory = Femoji.emojioneList[emojiList[_i3]].category;
          var emojiButton = document.createElement('span');
          emojiButton.setAttribute('class', 'emoji-button');
          var emojiIconHolder = document.createElement('span');
          emojiIconHolder.setAttribute('data-emoji-tag', emojiList[_i3]);
          emojiIconHolder.setAttribute(
            'class',
            `emojione-24-${
              iconCategory
               } `
              + `_${  baseClass  } emoji-icon zoom-1-1 pointer-cursor`
          );
          emojiIconHolder.setAttribute(
            'style',
            `background-image: url(${
              self.setAssetURL(self.assetPaths.SPRITES[iconCategory])
               })`
          );
          emojiIconHolder.addEventListener('click', function(event) {
            pushSelectedPaletteElement.call(self, event);
          });
          emojiButton.appendChild(emojiIconHolder);
          emojiHolder.appendChild(emojiButton);
        }
      }
    } else {
      var noEmojiLabel = document.createElement('div');
      noEmojiLabel.setAttribute('class', 'category-label no-emoji');
      var noEmojiText = document.createElement('span');
      noEmojiText.setAttribute('class', 'category-text collab-smooth-text');
      noEmojiText.appendChild(
        document.createTextNode('No items in this category yet.')
      );
      noEmojiLabel.appendChild(noEmojiText);
      emojiHolder.appendChild(noEmojiLabel);
    }
    return emojiHolder;
  };
  pushSelectedPaletteElement = function pushSelectedPaletteElement(event) {
    var self = this;
    var cur_selected = event.target.closest('.emoji-icon');
    var replacer = cur_selected.getAttribute('data-emoji-tag');
    if (replacer) {
      if (!recentHits.hasOwnProperty(replacer)) {
        if (Object.keys(recentHits).length === 21) {
          removeLeastHit.call(self);
          recentHits[replacer] = 1;
          if (typeof Storage !== 'undefined') {
            localStorage.setItem(
              'femojiRecentList',
              JSON.stringify(recentHits)
            );
          }
        } else {
          recentHits[replacer] = 1;
          if (typeof Storage !== 'undefined') {
            localStorage.setItem(
              'femojiRecentList',
              JSON.stringify(recentHits)
            );
          }
        }
      } else {
        recentHits[replacer]++;
        if (typeof Storage !== 'undefined') {
          localStorage.setItem('femojiRecentList', JSON.stringify(recentHits));
        }
      }
      var el = document.querySelector(editor);
      var caret_pos = getCaretPosition.call(self, el);
      var text_content = [
        el.value.slice(0, caret_pos),
        `${replacer  } `,
        el.value.slice(caret_pos)
      ].join('');
      el.value = text_content;
      el.dispatchEvent('change');
      hideEmojiPalette.call(self);
      setCaretPosition.call(self, el, caret_pos + replacer.length);
    }
    if (typeof self.onSelectCallback === 'function') {
      self.onSelectCallback(cur_selected);
    }
  };
  removeLeastHit = function removeLeastHit() {
    var self = this;
    var recentList = sortByHits.call(self, hashToArray.call(self, recentHits));
    delete recentHits[recentList[recentList.length - 1]];
  };
  getCaretPosition = function getCaretPosition(ctrl) {
    var CaretPos = 0; // IE Support
    if (document.selection) {
      ctrl.focus();
      var Sel = document.selection.createRange();
      Sel.moveStart('character', -ctrl.value.length);
      CaretPos = Sel.text.length;
    } // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
      CaretPos = ctrl.selectionStart;
    }
    return CaretPos;
  };
  setCaretPosition = function setCaretPosition(el, caretPos) {
    el.value = el.value; // ^ this is used to not only get "focus", but
    // to make sure we don't have it everything -selected-
    // (it causes an issue in chrome, and having it doesn't hurt any other browser)
    if (el !== null) {
      if (el.createTextRange) {
        var range = el.createTextRange();
        range.move('character', caretPos);
        range.select();
        return true;
      } else {
        // (el.selectionStart === 0 added for Firefox bug)
        if (el.selectionStart || el.selectionStart === 0) {
          if (document.activeElement !== el) {
            el.focus();
          }
          setTimeout(function() {
            el.setSelectionRange(caretPos, caretPos);
          }, 1);
          return true;
        } else {
          // fail city, usually won't happen
          if (document.activeElement !== el) {
            el.focus();
          }
          return false;
        }
      }
    }
  };
  scrollToCategory = function scrollToCategory(category) {
    var categoryClass = `.emoji-category.${  category}`;
    document.querySelector('.categories-holder').scrollTop
      = document.querySelector(categoryClass).offsetTop - 39;
  };
  insertAfterNode = function insertAfterNode(newNode, referenceNode) {
    if (typeof newNode === 'string') {
      referenceNode.insertAdjacentHTML('afterend', newNode);
    } else {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  }; // NOTE: uncomment code below to integrate dynamic emoji suggestions

  Femoji.defaultList = [':grinning:', ':grin:', ':joy:', ':smiley:', ':smile:', ':sweat_smile:', ':laughing:', ':slightly_smiling_face:', ':upside_down_face:', ':innocent:', ':wink:', ':blush:', ':yum:', ':relieved:', ':heart_eyes:', ':sunglasses:', ':smirk:', ':neutral_face:', ':expressionless:', ':unamused:', ':slightly_frowning_face:', ':face_with_rolling_eyes:', ':sweat:', ':pensive:', ':confused:', ':confounded:', ':kissing:', ':kissing_heart:', ':kissing_smiling_eyes:', ':kissing_closed_eyes:', ':stuck_out_tongue:', ':stuck_out_tongue_winking_eye:', ':stuck_out_tongue_closed_eyes:', ':disappointed:', ':worried:', ':angry:', ':rage:', ':smiling_imp:', ':cry:', ':persevere:', ':triumph:', ':disappointed_relieved:', ':frowning:', ':anguished:', ':fearful:', ':weary:', ':sleepy:', ':tired_face:', ':grimacing:', ':sob:', ':open_mouth:', ':hushed:', ':cold_sweat:', ':scream:', ':astonished:', ':flushed:', ':sleeping:', ':dizzy_face:', ':no_mouth:', ':mask:'];

  var pickerWrapperHTML = "<div class='collab-emoji-picker-wrapper' style='position: absolute; width: inherit; height: 32px; box-shadow: 0px 0px 0px 0 rgba(0, 0, 0, 0.2), 0px 0 3px 0 rgba(0, 0, 0, 0.25); background: white;'></div>";
  var button = '#collab-action-box #collab-send-box #collab-text-box';
  var emojiDelimiter = ':';
  var replaceeMeta = {};
  var minChar = 0;
  var appendSpace = true;
  var listShown = false;
  var LEFT_KEY = 37;
  var UP_KEY = 38;
  var RIGHT_KEY = 39;
  var DOWN_KEY = 40;
  var ENTER_KEY = 13;
  var SPACE_CODE = 32;
  var ENTER_CODE = 10;

  Femoji.prototype.unbindEmojiOne = function() {
    var el = document.querySelector(editor);
    if (el) {
      el.removeEventListener('keyup', keyUpHandler);
      el.removeEventListener('keydown', keyDownHandler);
    }
  };
  Femoji.prototype.bindEmojiOne = function() {
      // var self = this;
    var textEl = document.querySelector(editor);
      // var buttonEl = document.querySelector(button);
    if (textEl) {
      textEl.addEventListener('keydown', keyDownHandler);
      textEl.addEventListener('keyup', keyUpHandler);
    }
      // if (buttonEl) {
      //     buttonEl.addEventListener('click', buttonClickHandler);
      // }
  };

  keyDownHandler = function(event) {
    var selection_key_pressed = event.keyCode === LEFT_KEY
          || event.keyCode === UP_KEY
          || event.keyCode === RIGHT_KEY
          || event.keyCode === DOWN_KEY
          || (event.keyCode === ENTER_KEY && !event.shiftKey);
    if (!!listShown && selection_key_pressed) {
      selectOnAction(event);
    }
  };

  keyUpHandler = function(event) {
    var selection_key_pressed = event.keyCode === LEFT_KEY
          || event.keyCode === UP_KEY
          || event.keyCode === RIGHT_KEY
          || event.keyCode === DOWN_KEY
          || (event.keyCode === ENTER_KEY && !event.shiftKey);
    if (!listShown || !selection_key_pressed) {
      var replacee = getReplacee(event);
      if (replacee) {
        var recentList = hashToArray(recentHits);
        var filtered_list = replacee !== ':' ? filter(replacee) : (recentList.length ? sortByHits(recentList) : Femoji.defaultList);
        var already_typed = filtered_list.length === 1 && filtered_list[0] === replacee.trim().substring(1);
        if (filtered_list.length && !already_typed) {
          hideEmojiPalette();
          render(replacee !== ':' ? filtered_list.slice(0, 50) : filtered_list);
          listShown = true;
          activateListListeners.call(Femoji);
        } else {
          hideEmojiList();
          hideEmojiPalette();
        }
      } else {
        hideEmojiList();
        hideEmojiPalette();
      }
    }
  };

  filter = function(item) {
    return Object.keys(Femoji.shortEmojioneList).filter(
          function(k) {
            return k.indexOf(item) !== -1;
          }
      ).sort(function(a, b) {
        return a.indexOf(item) - b.indexOf(item);
      });
  };

  selectOnAction = function(event) {
    if (!event.shiftKey) {
      switch (event.keyCode) {
        case LEFT_KEY: {
          event.preventDefault();
          hoverPrevElem();
          break;
        }
        case UP_KEY: {
          event.preventDefault();
          hoverPrevElem();
          break;
        }
        case RIGHT_KEY: {
          event.preventDefault();
          hoverNextElem();
          break;
        }
        case DOWN_KEY: {
          event.preventDefault();
          hoverNextElem();
          break;
        }
        case ENTER_KEY: {
          event.preventDefault();
          pushSelectedElem();
          event.stopPropagation();
          break;
        }
      }
    }
  };

  getReplacee = function(event) {
    var valid_replacee;
    var replacee = '';
    var delimiter = emojiDelimiter;
    var input_elem = event.currentTarget;
    var caret_pos = getCaretPosition(input_elem);
    var text_content = input_elem.value;

    var char_next_to_caret = text_content.charCodeAt(caret_pos);
    var valid_following = isNaN(char_next_to_caret) || char_next_to_caret == SPACE_CODE || char_next_to_caret == ENTER_CODE;

    if (valid_following) {
      for (var i = caret_pos; i >= 0; i--) {
        if (text_content[i] == delimiter) {
          break;
        }
      }

      var before_line_starts = (i === -1);

      var char_before_delimiter = text_content.charCodeAt(i - 1);
      var valid_preceding = isNaN(char_before_delimiter) || char_before_delimiter == SPACE_CODE || char_before_delimiter == ENTER_CODE;

      replacee = text_content.substring(i, caret_pos);
      valid_replacee = !before_line_starts && valid_preceding;

      if (minChar) {
        valid_replacee = valid_replacee && (replacee.length > minChar);
      }

      replaceeMeta = {
        index: i,
        replacee,
        valid: valid_replacee,
        caretPos: caret_pos,
        noCharPostCursor: isNaN(char_next_to_caret)
      };
    } else {
      replaceeMeta = {};
    }

    return valid_replacee ? replacee : '';
  };

  render = function(list) {
    hideEmojiList();

    var el = document.querySelector(editor);
    var emojiPickerWrapper = pickerWrapperHTML;
    insertAfterNode(emojiPickerWrapper, el);

    emojiPickerWrapper = el.nextSibling;
    emojiPickerWrapper.setAttribute('style', `${emojiPickerWrapper.getAttribute('style') || ''  }display: none;`);

    var emojiPicker = document.createElement('div');
    emojiPicker.setAttribute('class', 'emoji-picker');
    emojiPicker.setAttribute('style', 'position: relative; display: block; height: 48px; background: white; border-radius: 2px; overflow-y: hidden; overflow-x: auto; white-space: nowrap; box-sizing: border-box; padding-bottom: 16px; background: #ffffff00;');

    for (var i = 0; i < list.length; i++) {
          // if (jQuery(emojiPicker).find('.emoji-place-holder').length === 13) {
          //     break;
          // }
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = Femoji.prototype.shortnameToImage(list[i]);
      if (tempDiv.firstChild instanceof Element) {
        var emojiHolder = document.createElement('span');
        var className = (!emojiPicker.querySelector('.emoji-place-holder')) ? 'emoji-place-holder selected zoom-1-1' : 'emoji-place-holder';
        emojiHolder.setAttribute('class', className);
        emojiHolder.setAttribute('data-emoji-tag', list[i]);
        emojiHolder.setAttribute('style', 'position: relative; display: inline-block; height: 100%; padding: 4px; z-index: 10; box-sizing: border-box;');
        var emojiIcon = tempDiv.firstChild;
        emojiIcon.setAttribute('style', 'width: 24px;');
        emojiHolder.appendChild(emojiIcon);
        emojiHolder.addEventListener('click', function(event) {
          pushSelectedElem();
        });
        emojiHolder.addEventListener('mouseenter', function(event) {
          hoverHoveredElem(event);
        });
        emojiPicker.appendChild(emojiHolder);
      } else {
        continue;
      }
    }
    emojiPickerWrapper.appendChild(emojiPicker);
    var bottom_margin = el.offsetHeight;
    emojiPickerWrapper.setAttribute('style', `${emojiPickerWrapper.getAttribute('style') || ''  }bottom:${  bottom_margin + 1  }px;`);
    emojiPickerWrapper.setAttribute('style', (emojiPickerWrapper.getAttribute('style') || '').replace(/display: none;/gi, ''));
  };

  pushSelectedElem = function() {
    if (replaceeMeta.replacee && replaceeMeta.valid) {
      var cur_selected = document.querySelector('.emoji-place-holder.selected');
      var replacer = cur_selected.getAttribute('data-emoji-tag');
      if (replacer) {
        if (!recentHits.hasOwnProperty(replacer)) {
          if (Object.keys(recentHits).length === 26) {
            removeLeastHit();
            recentHits[replacer] = 1;
          } else {
            recentHits[replacer] = 1;
          }
        } else {
          recentHits[replacer]++;
        }
        if (appendSpace && replaceeMeta.noCharPostCursor) {
          replacer =  `${replacer  } `;
        }
        var el = document.querySelector(editor);
        var text_content = el.value;
        text_before = text_content.substring(0, replaceeMeta.index);
        text_after = text_content.substring(replaceeMeta.caretPos);
        text_content = text_before + replacer + text_after;
        el.value = text_content;
        hideEmojiList();
        restoreCaretPos();
      }
      if (typeof self.onSelectCallback === 'function') {
        self.onSelectCallback(cur_selected);
      }
    }
  };

  hideEmojiList = function() {
    var emojiPickerWrapper = document.getElementsByClassName('collab-emoji-picker-wrapper')[0];
    if (emojiPickerWrapper) {
      emojiPickerWrapper.parentNode.removeChild(emojiPickerWrapper);
      listShown = false;
    }
  };

  restoreCaretPos = function() {
    var el = document.querySelector(editor);
    el.focus();
  };

  hoverHoveredElem = function(event) {
    var cur_selected = document.querySelector('.emoji-place-holder.selected');
    if (cur_selected) {
      cur_selected.classList.remove('selected');
      event.target.classList.add('selected');
      cur_selected.classList.remove('zoom-1-1');
      event.target.classList.add('zoom-1-1');
    }
  };

  hoverPrevElem = function() {
    var cur_selected = document.querySelector('.emoji-place-holder.selected');
    if (cur_selected && cur_selected.previousElementSibling) {
      cur_selected.classList.remove('selected');
      cur_selected.previousElementSibling.classList.add('selected');
      cur_selected.classList.remove('zoom-1-1');
      cur_selected.previousElementSibling.classList.add('zoom-1-1');
    }
  };

  hoverNextElem = function() {
    var cur_selected = document.querySelector('.emoji-place-holder.selected');
    if (cur_selected && cur_selected.nextElementSibling) {
      cur_selected.classList.remove('selected');
      cur_selected.nextElementSibling.classList.add('selected');
      cur_selected.classList.remove('zoom-1-1');
      cur_selected.nextElementSibling.classList.add('zoom-1-1');
    }
  };

  activateListListeners = function() {
    document.addEventListener('click', function() {
      hideListOnClickOutside();
    });
  };

  hideListOnClickOutside = function() {
    if (listShown) {
      hideEmojiList();
    }
  };

  return Femoji;
}); // if(typeof module === "object") module.exports = this.femoji;
