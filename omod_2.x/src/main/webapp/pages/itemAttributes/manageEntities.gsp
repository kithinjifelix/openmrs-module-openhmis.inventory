<script type="text/javascript">

</script>

<div id="entities-body">
	<br/>

	<div id="manage-entities-header">
		<span class="h1-substitue-left" style="float:left;">
			${ui.message('openhmis.inventory.admin.item.attribute.types')}
		</span>
		<span style="float:right;">
			<a class="button confirm" ui-sref="new">
				<i class="icon-plus"></i>
				{{newEntityLabel}}
			</a>
		</span>
	</div>
	<br/><br/><br/>

	<div>
		<div id="entities">
			<table style="margin-bottom:5px;">
				<thead>
				<tr>
					<th>${ui.message('general.name')}</th>
					<th>${ui.message('general.description')}</th>
				</tr>
				</thead>
				<tbody>
				<tr class="clickable-tr" dir-paginate="entity in fetchedEntities | itemsPerPage: limit"
				    total-items="totalNumOfResults" current-page="currentPage" ui-sref="edit({uuid: entity.uuid})">
					<td ng-style="strikeThrough(entity.retired)">{{entity.name}}</td>
					<td ng-style="strikeThrough(entity.retired)">{{entity.description}}</td>
				</tr>
				</tbody>
			</table>

			<div ng-show="fetchedEntities.length == 0">
				<br/>
				${ui.message('openhmis.inventory.itemAttributeType.itemAttributeTypeNotFound')}
				<br/><br/>
				<span><input type="checkbox" ng-checked="includeRetired" ng-model="includeRetired"
				             ng-change="updateContent()"></span>
				<span>${ui.message('openhmis.commons.general.includeRetired')}</span>
			</div>
			${ui.includeFragment("openhmis.commons", "paginationFragment")}
		</div>
	</div>
</div>
