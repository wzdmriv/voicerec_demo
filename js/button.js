new Vue({
    el: '#app',
    data: {
        // ① 変数を宣言する部分
        status: 'init',     // 状況
        recorder: null,     // 音声にアクセスする "MediaRecorder" のインスタンス
        audioData: [],      // 入力された音声データ
        audioExtension: ''  // 音声ファイルの拡張子
    },
    methods: {
        startRecording() {
  
            this.status = 'recording';
            this.audioData = [];
            this.recorder.start();
            document.getElementById("rec_button").style.opacity = "0.8";
  
        },
        stopRecording() {
  
            this.recorder.stop();
            this.status = 'ready';
            document.getElementById("rec_button").style.opacity = "1";
  
        },
        getExtension(audioType) {
  
            let extension = 'wav';
            const matches = audioType.match(/audio\/([^;]+)/);
  
            if(matches) {
  
                extension = matches[1];
  
            }
  
            return '.'+ extension;
  
        }
    },
    mounted() {
  
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
  
                this.recorder = new MediaRecorder(stream);
                this.recorder.addEventListener('dataavailable', e => {
  
                    this.audioData.push(e.data);
                    this.audioExtension = this.getExtension(e.data.type);
  
                });
                this.recorder.addEventListener('stop', () => {
  
                    const audioBlob = new Blob(this.audioData);
                    var date = new Date();
                    var timestr = date.getFullYear()+"_"+(date.getMonth()+1)+"_"+date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds();
                    storageRef.child('audio/'+ timestr + this.audioExtension).put(audioBlob).then(function(snapshot) {
                        console.log('Uploaded a blob or file!');
                    });
                    const url = URL.createObjectURL(audioBlob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = timestr + this.audioExtension;
                    document.body.appendChild(a);
                    //a.click();
  
                });
                this.status = 'ready';
  
            });
  
    }
});