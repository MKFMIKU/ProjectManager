PROJECT_PATH="/home/wwwroot/Myindex"
PROHECT_ID="www"

echo "--Auto Deploy--"
cd $PROJECT_PATH
echo "pulling source code..."
pm2 stop $PROHECT_ID
git pull
git checkout master
pm2 restart $PROHECT_ID
echo "Finished."