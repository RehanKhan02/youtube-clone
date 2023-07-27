import { Component } from '@angular/core';


class videosType {
  title!: string;
	thumbnail!: string;
  channel!: string;
	channelLogo!: string;
	isVerified!: boolean;
  
}

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.css']
})
export class VideoPreviewComponent {
  videos: videosType[] = [
    {
      title: 'Am I Going to Bigg Boss? | Dhruv Rathee',
      thumbnail: 'https://i.ytimg.com/vi/cCw8LjxDEVA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDcWHyl8E5lsHQNxtPKoqo35aGSfQ',
      channel: 'Dhruv Rathee',
      channelLogo: 'https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj',
      isVerified: true
    },
    {
      title: 'Taarak Mehta Ka Ooltah Chashmah - तारक मेहता - Throwback - Episode 284 - Full Episode',
      thumbnail: 'https://i.ytimg.com/vi/4gPKZuWAi7A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYOizJKnURTaN5v3VJHd2A8ogUoA',
      channel: 'Sony SAB',
      channelLogo: 'https://yt3.ggpht.com/WrjDeIWr2pmRdCKFuEDfvkovr0O_o7gyfT_J_AMJjFk5KR9HGQVirOP0DeimyAoBUHRfH79X=s68-c-k-c0x00ffffff-no-rj',
      isVerified: true
    },
    {
      title: 'Artificial Intelligence Ft. Divij Bajaj | Sandeep Maheshwari | OpenAI & ChatGPT | Hindi',
      thumbnail: 'https://i.ytimg.com/vi/7tlJRhEu8Bc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCH8pkACZkBlMGSZh-Yp0jnqOmcNg',
      channel: 'Sandeep Maheshwari',
      channelLogo: 'https://yt3.ggpht.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s68-c-k-c0x00ffffff-no-rj',
      isVerified: true
    },
    {
      title: 'Hyderabad\'s Falaknuma Palace | It Happens Only in India | National Geographic',
      thumbnail: 'https://i.ytimg.com/vi/ZcqijvqDQaY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhmq6XABK_gwo704Yr8H0tcpaGWw',
      channel: 'National Geographic India',
      channelLogo: 'https://yt3.ggpht.com/ytc/AOPolaRmIqpAVGouuvkcccEbz0g5K5iVu2cej8G_yXXvKQ=s68-c-k-c0x00ffffff-no-rj',
      isVerified: true
    },
    {
      title: 'Mumbai Airport | Evening Plane Spotting | 2023 | MEGA Compilation | 4K',
      thumbnail: 'https://i.ytimg.com/vi/buhe0s-TQMw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYZI_Hf4J1895dgVtQ_dSFW-iQjg',
      channel: 'Vaibhav Shah ',
      channelLogo: 'https://yt3.ggpht.com/ytc/AOPolaSzGXY4WAG2lnE4WpPI8dQsVUmGSpefgwYCSZz-GA=s68-c-k-c0x00ffffff-no-rj',
      isVerified: false
    },
    {
      title: 'Dude Perfect Goes to SPACE',
      thumbnail: 'https://i.ytimg.com/vi/YXXlSG-du7c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQp7hSGgO9kpWr27xs6yJwXHYSZw',
      channel: 'Dude Perfect',
      channelLogo: 'https://yt3.ggpht.com/ytc/AOPolaRrrxbMpvpmlPpJIVs2GMP2m7P-Bjuy3y771iWwtg=s68-c-k-c0x00ffffff-no-rj',
      isVerified: true
    }
  ]
}
